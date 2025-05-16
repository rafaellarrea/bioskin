import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Después',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const mouseX = e.clientX - containerRect.left;
      
      // Calculate position as percentage
      let newPosition = (mouseX / containerWidth) * 100;
      
      // Constrain between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition));
      
      setSliderPosition(newPosition);
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const touchX = e.touches[0].clientX - containerRect.left;
      
      // Calculate position as percentage
      let newPosition = (touchX / containerWidth) * 100;
      
      // Constrain between 0 and 100
      newPosition = Math.max(0, Math.min(100, newPosition));
      
      setSliderPosition(newPosition);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
  <div 
    ref={containerRef}
    className="overflow-hidden rounded-lg shadow-md cursor-move"
    onMouseDown={handleMouseDown}
    onTouchStart={handleMouseDown}
    onTouchMove={(e) => e.preventDefault()}
  >
    {/* After image (base layer) */}
    <div style={{ position: 'relative' }}>
      <img 
        src={afterImage} 
        alt="Después del tratamiento" 
        className="w-full object-contain"
      />

      {/* Before image (slider layer) */}
      <div 
        className="absolute top-0 left-0 overflow-hidden"
        style={{
          width: `${sliderPosition}%`,
          height: '100%',
        }}
      >
        <img 
          src={beforeImage} 
          alt="Antes del tratamiento" 
          className="w-full object-contain"
        />
      </div>

      {/* Slider control */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-[#deb887]">
          <div className="w-4 h-4 bg-[#deb887] rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 text-sm rounded-full">
        {beforeLabel}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 text-sm rounded-full">
        {afterLabel}
      </div>
    </div>
  </div>
);
};

export default BeforeAfterSlider;