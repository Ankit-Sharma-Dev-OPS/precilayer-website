import { useState, useRef, useEffect, useCallback } from 'react';

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeSubtext?: string;
  afterSubtext?: string;
}

export default function ComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  beforeSubtext,
  afterSubtext,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  }, [handleMove]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);

      return () => {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging, handlePointerMove, handlePointerUp]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerDown = (e: PointerEvent) => {
      e.preventDefault();
      handleMove(e.clientX);
      setIsDragging(true);
    };

    container.addEventListener('pointerdown', handlePointerDown);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-xl overflow-hidden select-none cursor-col-resize touch-none"
      data-testid="comparison-slider"
    >
      {/* After Image (Precilayer - Right side) */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div className="absolute bottom-6 right-6 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <div className="font-bold text-white text-sm">{afterLabel}</div>
          {afterSubtext && (
            <div className="text-xs text-gray-300">{afterSubtext}</div>
          )}
        </div>
      </div>

      {/* Before Image (Traditional - Left side) with clip */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div className="absolute bottom-6 left-6 bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg">
          <div className="font-bold text-white text-sm">{beforeLabel}</div>
          {beforeSubtext && (
            <div className="text-xs text-gray-300">{beforeSubtext}</div>
          )}
        </div>
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-400 rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-white">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19l7-7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
