// components/GridDotsBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GridDotsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    const dotSize = 4;
    const gap = 40;
    const cols = Math.ceil(width / gap);
    const rows = Math.ceil(height / gap);

    // Create grid of dots
    for (let i = 0; i < cols * rows; i++) {
      const dot = document.createElement('div');
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      dot.style.position = 'absolute';
      dot.style.width = `${dotSize}px`;
      dot.style.height = `${dotSize}px`;
      dot.style.background = '#ffffff';
      dot.style.borderRadius = '50%';
      dot.style.opacity = '0.1';
      dot.style.left = `${col * gap}px`;
      dot.style.top = `${row * gap}px`;
      dot.style.transform = 'scale(1)';
      dot.setAttribute('data-distance', '0');
      
      container.appendChild(dot);
    }

    // Mouse move interaction
    const handleMouseMove = (e: MouseEvent) => {
      const dots = container.querySelectorAll('div');
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      dots.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        const distance = Math.sqrt(Math.pow(mouseX - dotX, 2) + Math.pow(mouseY - dotY, 2));
        const scale = Math.max(1, 3 - distance / 100);
        
        gsap.to(dot, {
          scale: scale,
          opacity: Math.max(0.1, 0.5 - distance / 500),
          duration: 0.5
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-background-dark"
    />
  );
}