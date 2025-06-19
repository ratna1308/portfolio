// components/IsometricGridBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function IsometricGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    const gridSize = 80;
    const cols = Math.ceil(width / gridSize) + 2;
    const rows = Math.ceil(height / gridSize) + 2;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];

    // Create isometric grid
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const tile = document.createElement('div');
        const x = (j - i) * gridSize * 0.866;
        const y = (j + i) * gridSize * 0.5;
        const color = colors[(i + j) % colors.length];
        
        tile.style.position = 'absolute';
        tile.style.width = `${gridSize}px`;
        tile.style.height = `${gridSize}px`;
        tile.style.background = color;
        tile.style.opacity = '0.1';
        tile.style.transform = 'rotateX(60deg) rotateZ(45deg)';
        tile.style.transformOrigin = 'center';
        tile.style.left = `${x + width/2 - gridSize}px`;
        tile.style.top = `${y - gridSize}px`;
        tile.style.transition = 'all 0.5s ease';
        
        container.appendChild(tile);

        // Hover effect
        tile.addEventListener('mouseenter', () => {
          gsap.to(tile, {
            opacity: 0.3,
            scale: 1.2,
            duration: 0.3
          });
        });

        tile.addEventListener('mouseleave', () => {
          gsap.to(tile, {
            opacity: 0.1,
            scale: 1,
            duration: 0.3
          });
        });
      }
    }

    // Create floating 3D cubes
    for (let i = 0; i < 8; i++) {
      const cube = document.createElement('div');
      const size = Math.random() * 40 + 20;
      const posX = Math.random() * width;
      const posY = Math.random() * height;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      cube.style.position = 'absolute';
      cube.style.width = `${size}px`;
      cube.style.height = `${size}px`;
      cube.style.left = `${posX}px`;
      cube.style.top = `${posY}px`;
      cube.style.transformStyle = 'preserve-3d';
      cube.style.transform = 'rotateX(60deg) rotateZ(45deg)';
      
      // Create cube faces
      for (let j = 0; j < 3; j++) {
        const face = document.createElement('div');
        face.style.position = 'absolute';
        face.style.width = '100%';
        face.style.height = '100%';
        face.style.background = color;
        face.style.opacity = '0.15';
        face.style.border = '1px solid rgba(255,255,255,0.1)';
        
        switch(j) {
          case 0: // Front
            face.style.transform = 'translateZ(20px)';
            break;
          case 1: // Right
            face.style.transform = 'rotateY(90deg) translateZ(20px)';
            break;
          case 2: // Top
            face.style.transform = 'rotateX(90deg) translateZ(20px)';
            break;
        }
        
        cube.appendChild(face);
      }
      
      container.appendChild(cube);

      // Floating animation
      gsap.to(cube, {
        y: `+=${(Math.random() - 0.5) * 100}`,
        x: `+=${(Math.random() - 0.5) * 100}`,
        rotationZ: '+=180',
        duration: Math.random() * 20 + 20,
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
      className="fixed inset-0 -z-10 bg-gray-900 overflow-hidden"
    />
  );
}