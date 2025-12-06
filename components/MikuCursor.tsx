import React, { useEffect, useRef, useState } from 'react';

const MikuCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = -100; // Start off-screen
    let mouseY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (cursorRef.current) {
        // Direct DOM manipulation for high-performance zero-lag tracking
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    
    // Detect hover over interactive elements to change cursor state
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setHovered(!!isInteractive);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // Start loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
      style={{ 
        marginLeft: -24, // Offset to center (half of width)
        marginTop: -24   // Offset to center (half of height)
      }}
    >
      {/* Wrapper for Scale Animation */}
      <div className={`relative w-12 h-12 flex items-center justify-center transition-transform duration-150 ${clicked ? 'scale-75' : 'scale-100'}`}>
        
        {/* BACKLIGHT / GLOW AURA */}
        <div 
          className={`absolute rounded-full blur-md transition-all duration-300 ${
            hovered 
              ? 'bg-miku-pink/80 w-16 h-16 animate-pulse-fast' 
              : 'bg-miku-teal/60 w-10 h-10'
          }`} 
        />

        {/* ANIME SILHOUETTE SVG */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          className={`relative w-full h-full drop-shadow-lg transition-colors duration-300 ${
            hovered ? 'text-white' : 'text-white'
          }`}
        >
          {/* Twin Tails (Left & Right) */}
          <path 
            d="M30 40 C 10 35, 10 80, 20 90" 
            stroke={hovered ? "#E95295" : "#39C5BB"} 
            strokeWidth="4" 
            strokeLinecap="round" 
            className="transition-colors duration-300"
          />
          <path 
            d="M70 40 C 90 35, 90 80, 80 90" 
            stroke={hovered ? "#E95295" : "#39C5BB"} 
            strokeWidth="4" 
            strokeLinecap="round" 
            className="transition-colors duration-300"
          />
          
          {/* Head */}
          <circle 
            cx="50" cy="45" r="12" 
            stroke={hovered ? "#E95295" : "#39C5BB"} 
            strokeWidth="3" 
            fill={hovered ? "#E95295" : "#39C5BB"}
            fillOpacity="0.2"
            className="transition-all duration-300"
          />

          {/* Hair Ties / Accessories */}
          <rect x="25" y="35" width="8" height="8" rx="2" fill="currentColor" className="opacity-90"/>
          <rect x="67" y="35" width="8" height="8" rx="2" fill="currentColor" className="opacity-90"/>
        </svg>

        {/* ROTATING TECH RING */}
        <div 
          className={`absolute border border-dashed rounded-full opacity-60 animate-spin-slow transition-all duration-300 ${
            hovered ? 'border-miku-pink w-14 h-14' : 'border-miku-teal w-12 h-12'
          }`} 
        />

      </div>
    </div>
  );
};

export default MikuCursor;