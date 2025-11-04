import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDViewerProps {
  autoRotate?: boolean;
  onAutoRotateChange?: (enabled: boolean) => void;
}

export default function ThreeDViewer({ autoRotate = false, onAutoRotateChange }: ThreeDViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const isAutoRotatingRef = useRef(autoRotate);
  const [webGLError, setWebGLError] = useState(false);
  const mouseDownRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, containerWidth / containerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(containerWidth, containerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (error) {
      console.warn('WebGL not supported, showing fallback', error);
      setWebGLError(true);
      return;
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0x06b6d4, 1);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0x06b6d4, 0.5);
    pointLight.position.set(0, 0, 3);
    scene.add(pointLight);

    const group = new THREE.Group();
    meshRef.current = group;

    const outerRadius = 1;
    const innerRadius = 0.7;
    const componentHeight = 1.5;
    const segments = 8;

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.9,
      roughness: 0.3,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.1,
    });

    const outerCylinderGeometry = new THREE.CylinderGeometry(outerRadius, outerRadius, componentHeight, 32);
    const innerCylinderGeometry = new THREE.CylinderGeometry(innerRadius, innerRadius, componentHeight, 32);

    const outerCSG = new THREE.Mesh(outerCylinderGeometry, metalMaterial);
    const innerCSG = new THREE.Mesh(innerCylinderGeometry, metalMaterial);

    const latticeGroup = new THREE.Group();

    const torusGeometry1 = new THREE.TorusGeometry(outerRadius - 0.05, 0.05, 16, 32);
    const torus1 = new THREE.Mesh(torusGeometry1, metalMaterial);
    torus1.rotation.x = Math.PI / 2;
    torus1.position.y = componentHeight / 3;
    latticeGroup.add(torus1);

    const torus2 = new THREE.Mesh(torusGeometry1, metalMaterial);
    torus2.rotation.x = Math.PI / 2;
    torus2.position.y = -componentHeight / 3;
    latticeGroup.add(torus2);

    const torusGeometry2 = new THREE.TorusGeometry(innerRadius + 0.05, 0.05, 16, 32);
    const torus3 = new THREE.Mesh(torusGeometry2, metalMaterial);
    torus3.rotation.x = Math.PI / 2;
    torus3.position.y = 0;
    latticeGroup.add(torus3);

    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * ((outerRadius + innerRadius) / 2);
      const z = Math.sin(angle) * ((outerRadius + innerRadius) / 2);
      
      const verticalBar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, componentHeight, 8),
        metalMaterial
      );
      verticalBar.position.set(x, 0, z);
      latticeGroup.add(verticalBar);

      const diagonalBar1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, componentHeight * 0.7, 8),
        metalMaterial
      );
      diagonalBar1.position.set(x * 0.85, componentHeight / 6, z * 0.85);
      diagonalBar1.rotation.z = Math.PI / 6;
      latticeGroup.add(diagonalBar1);

      const diagonalBar2 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, componentHeight * 0.7, 8),
        metalMaterial
      );
      diagonalBar2.position.set(x * 0.85, -componentHeight / 6, z * 0.85);
      diagonalBar2.rotation.z = -Math.PI / 6;
      latticeGroup.add(diagonalBar2);
    }

    const endCapMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      metalness: 0.95,
      roughness: 0.2,
    });

    const endCapGeometry1 = new THREE.CylinderGeometry(outerRadius, outerRadius, 0.1, 32);
    const endCap1 = new THREE.Mesh(endCapGeometry1, endCapMaterial);
    endCap1.position.y = componentHeight / 2 + 0.05;
    latticeGroup.add(endCap1);

    const endCap2 = new THREE.Mesh(endCapGeometry1, endCapMaterial);
    endCap2.position.y = -componentHeight / 2 - 0.05;
    latticeGroup.add(endCap2);

    const innerCapGeometry = new THREE.CylinderGeometry(innerRadius, innerRadius, 0.08, 32);
    const innerCap1 = new THREE.Mesh(innerCapGeometry, endCapMaterial);
    innerCap1.position.y = componentHeight / 2 + 0.04;
    latticeGroup.add(innerCap1);

    const innerCap2 = new THREE.Mesh(innerCapGeometry, endCapMaterial);
    innerCap2.position.y = -componentHeight / 2 - 0.04;
    latticeGroup.add(innerCap2);

    group.add(latticeGroup);
    scene.add(group);

    group.rotation.x = 0.2;
    group.rotation.y = 0.5;

    const handleMouseDown = (event: MouseEvent) => {
      mouseDownRef.current = true;
      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!mouseDownRef.current || !meshRef.current) return;

      const deltaX = event.clientX - previousMousePositionRef.current.x;
      const deltaY = event.clientY - previousMousePositionRef.current.y;

      meshRef.current.rotation.y += deltaX * 0.01;
      meshRef.current.rotation.x += deltaY * 0.01;

      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (isAutoRotatingRef.current) {
        setIsAutoRotating(false);
        isAutoRotatingRef.current = false;
        onAutoRotateChange?.(false);
      }
    };

    const handleMouseUp = () => {
      mouseDownRef.current = false;
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);

    renderer.domElement.style.cursor = 'grab';

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (isAutoRotatingRef.current && meshRef.current) {
        meshRef.current.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      rendererRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    setIsAutoRotating(autoRotate);
    isAutoRotatingRef.current = autoRotate;
  }, [autoRotate]);

  if (webGLError) {
    return (
      <div 
        className="w-full h-full rounded-xl overflow-hidden bg-space-900 border border-gray-700/30 flex items-center justify-center"
        data-testid="3d-viewer-fallback"
        style={{ minHeight: '400px' }}
      >
        <div className="text-center p-8">
          <div className="w-24 h-24 bg-cyber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-cyber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">3D Viewer</h3>
          <p className="text-gray-400 text-sm">
            Interactive 3D component visualization
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Aerospace-grade lattice structure component
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full rounded-xl overflow-hidden bg-space-900 border border-gray-700/30"
      data-testid="3d-viewer"
      style={{ minHeight: '400px' }}
    />
  );
}
