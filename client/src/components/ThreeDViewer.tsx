import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeDViewerProps {
  autoRotate?: boolean;
  onAutoRotateChange?: (enabled: boolean) => void;
}

interface Hotspot {
  id: number;
  position: THREE.Vector3;
  title: string;
  details: string;
  mesh?: THREE.Mesh;
}

export default function ThreeDViewer({ autoRotate = false, onAutoRotateChange }: ThreeDViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshRef = useRef<THREE.Group | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const hotspotsRef = useRef<Hotspot[]>([]);
  
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const isAutoRotatingRef = useRef(autoRotate);
  const [webGLError, setWebGLError] = useState(false);
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
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
    camera.position.set(3, 2, 4);
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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight1.position.set(5, 8, 5);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x06b6d4, 0.6);
    directionalLight2.position.set(-5, 3, -5);
    scene.add(directionalLight2);

    const rimLight = new THREE.DirectionalLight(0x88ccff, 0.4);
    rimLight.position.set(0, -5, -3);
    scene.add(rimLight);

    const group = new THREE.Group();
    meshRef.current = group;

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0xb8b8b8,
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 1.0,
    });

    const latticeGroup = new THREE.Group();

    const latticeHeight = 2.5;
    const latticeRadius = 1.2;
    const strutThickness = 0.04;
    const layers = 6;
    const ringsPerLayer = 12;

    for (let layer = 0; layer < layers; layer++) {
      const y = (layer / (layers - 1)) * latticeHeight - latticeHeight / 2;
      const currentRadius = latticeRadius * (1 - Math.abs(layer - layers / 2) * 0.1);

      for (let ring = 0; ring < ringsPerLayer; ring++) {
        const angle = (ring / ringsPerLayer) * Math.PI * 2;
        const x = Math.cos(angle) * currentRadius;
        const z = Math.sin(angle) * currentRadius;

        if (layer < layers - 1) {
          const nextY = ((layer + 1) / (layers - 1)) * latticeHeight - latticeHeight / 2;
          const nextRadius = latticeRadius * (1 - Math.abs((layer + 1) - layers / 2) * 0.1);
          const nextAngle = ((ring + 0.5) / ringsPerLayer) * Math.PI * 2;
          const nextX = Math.cos(nextAngle) * nextRadius;
          const nextZ = Math.sin(nextAngle) * nextRadius;

          const dx = nextX - x;
          const dy = nextY - y;
          const dz = nextZ - z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          const strutGeometry = new THREE.CylinderGeometry(strutThickness, strutThickness, distance, 8);
          const strut = new THREE.Mesh(strutGeometry, titaniumMaterial);

          strut.position.set((x + nextX) / 2, (y + nextY) / 2, (z + nextZ) / 2);

          const axis = new THREE.Vector3(0, 1, 0);
          const direction = new THREE.Vector3(dx, dy, dz).normalize();
          const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
          strut.setRotationFromQuaternion(quaternion);

          latticeGroup.add(strut);
        }

        if (layer === 0 || layer === layers - 1) {
          const nodeGeometry = new THREE.SphereGeometry(strutThickness * 1.8, 16, 16);
          const node = new THREE.Mesh(nodeGeometry, titaniumMaterial);
          node.position.set(x, y, z);
          latticeGroup.add(node);
        }
      }
    }

    const topCapGeometry = new THREE.CylinderGeometry(latticeRadius * 0.3, latticeRadius * 0.5, 0.15, 32);
    const topCap = new THREE.Mesh(topCapGeometry, new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.98,
      roughness: 0.1,
    }));
    topCap.position.y = latticeHeight / 2 + 0.08;
    latticeGroup.add(topCap);

    const bottomCap = new THREE.Mesh(topCapGeometry, new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.98,
      roughness: 0.1,
    }));
    bottomCap.position.y = -latticeHeight / 2 - 0.08;
    latticeGroup.add(bottomCap);

    const hotspotMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.5,
    });

    const hotspotGeometry = new THREE.SphereGeometry(0.08, 16, 16);

    const hotspotData: Hotspot[] = [
      {
        id: 1,
        position: new THREE.Vector3(0.8, 0.8, 0.6),
        title: 'Material',
        details: 'Ti-6Al-4V (Grade 5) Titanium\nAerospace Grade Alloy',
      },
      {
        id: 2,
        position: new THREE.Vector3(-0.9, 0, 0.5),
        title: 'Weight Reduction',
        details: 'Lattice Structure\n67% Weight Reduction vs Solid',
      },
      {
        id: 3,
        position: new THREE.Vector3(0.6, -0.9, -0.4),
        title: 'Surface Finish',
        details: 'Post-Machined Surface\nRa <1.2 μm',
      },
    ];

    hotspotData.forEach((hotspot) => {
      const hotspotMesh = new THREE.Mesh(hotspotGeometry, hotspotMaterial);
      hotspotMesh.position.copy(hotspot.position);
      hotspotMesh.userData = { hotspotId: hotspot.id };
      latticeGroup.add(hotspotMesh);
      hotspot.mesh = hotspotMesh;
    });

    hotspotsRef.current = hotspotData;

    group.add(latticeGroup);
    scene.add(group);

    group.rotation.x = 0.3;
    group.rotation.y = 0.5;

    const handleMouseDown = (event: MouseEvent) => {
      mouseDownRef.current = true;
      previousMousePositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      setTooltipPosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });

      if (mouseDownRef.current && meshRef.current) {
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
      }

      if (!mouseDownRef.current && cameraRef.current) {
        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        const hotspotMeshes = hotspotsRef.current.map(h => h.mesh).filter(Boolean) as THREE.Mesh[];
        const intersects = raycasterRef.current.intersectObjects(hotspotMeshes);

        if (intersects.length > 0) {
          const hotspotId = intersects[0].object.userData.hotspotId;
          const hotspot = hotspotsRef.current.find(h => h.id === hotspotId);
          if (hotspot) {
            setHoveredHotspot(hotspot);
            renderer.domElement.style.cursor = 'pointer';
          }
        } else {
          setHoveredHotspot(null);
          renderer.domElement.style.cursor = mouseDownRef.current ? 'grabbing' : 'grab';
        }
      }
    };

    const handleMouseUp = () => {
      mouseDownRef.current = false;
      if (rendererRef.current) {
        rendererRef.current.domElement.style.cursor = 'grab';
      }
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

      hotspotsRef.current.forEach(hotspot => {
        if (hotspot.mesh) {
          const scale = hoveredHotspot?.id === hotspot.id ? 1.3 : 1.0;
          hotspot.mesh.scale.setScalar(scale);
          
          if (hoveredHotspot?.id === hotspot.id) {
            hotspot.mesh.material.emissiveIntensity = 0.8;
          } else {
            (hotspot.mesh.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
          }
        }
      });

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
      className="w-full h-full rounded-xl overflow-hidden bg-space-900 border border-gray-700/30 relative"
      data-testid="3d-viewer"
      style={{ minHeight: '400px' }}
    >
      {hoveredHotspot && (
        <div
          className="absolute z-10 pointer-events-none"
          style={{
            left: tooltipPosition.x + 15,
            top: tooltipPosition.y - 10,
          }}
          data-testid={`hotspot-tooltip-${hoveredHotspot.id}`}
        >
          <div className="bg-space-800/95 border border-cyber-400/50 rounded-lg p-3 backdrop-blur-sm shadow-xl">
            <div className="text-cyber-400 text-xs font-mono font-bold mb-1 uppercase tracking-wider">
              {hoveredHotspot.title}
            </div>
            <div className="text-white text-sm font-mono whitespace-pre-line">
              {hoveredHotspot.details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
