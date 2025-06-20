// components/FloatingShapesBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FloatingShapesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFBE0B'];
    const shapes = ['circle', 'square', 'triangle', 'blob'];

    // Create 20-30 floating shapes
    for (let i = 0; i < 25; i++) {
      const shape = document.createElement('div');
      const size = Math.random() * 100 + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      
      shape.style.position = 'absolute';
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.background = color;
      shape.style.borderRadius = shapeType === 'circle' ? '50%' : '0';
      shape.style.opacity = '0.2';
      shape.style.filter = 'blur(1px)';
      shape.style.left = `${Math.random() * 100}%`;
      shape.style.top = `${Math.random() * 100}%`;
      
      if (shapeType === 'triangle') {
        shape.style.background = 'transparent';
        shape.style.borderLeft = `${size/2}px solid transparent`;
        shape.style.borderRight = `${size/2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${color}`;
        shape.style.width = '0';
        shape.style.height = '0';
      }

      container.appendChild(shape);

      // Animate each shape
      gsap.to(shape, {
        x: `${(Math.random() - 0.5) * 200}px`,
        y: `${(Math.random() - 0.5) * 200}px`,
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
    />
  );
}