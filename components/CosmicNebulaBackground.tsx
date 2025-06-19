// components/CosmicNebulaBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CosmicNebulaBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const starCount = 150;
    const nebulaCount = 3;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const duration = Math.random() * 5 + 2;
      
      star.style.position = 'absolute';
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.background = 'white';
      star.style.borderRadius = '50%';
      star.style.left = `${posX}%`;
      star.style.top = `${posY}%`;
      star.style.opacity = '0';
      star.style.boxShadow = '0 0 5px 1px rgba(255,255,255,0.5)';
      
      container.appendChild(star);

      // Twinkling animation
      gsap.to(star, {
        opacity: Math.random() * 0.7 + 0.3,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 5
      });
    }

    // Create nebula clouds
    for (let i = 0; i < nebulaCount; i++) {
      const nebula = document.createElement('div');
      const size = Math.random() * 400 + 200;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      nebula.style.position = 'absolute';
      nebula.style.width = `${size}px`;
      nebula.style.height = `${size}px`;
      nebula.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
      nebula.style.borderRadius = '50%';
      nebula.style.left = `${posX}%`;
      nebula.style.top = `${posY}%`;
      nebula.style.opacity = '0.15';
      nebula.style.filter = 'blur(40px)';
      
      container.appendChild(nebula);

      // Slow drifting animation
      gsap.to(nebula, {
        x: `${(Math.random() - 0.5) * 100}px`,
        y: `${(Math.random() - 0.5) * 100}px`,
        duration: Math.random() * 50 + 50,
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
      className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"
    />
  );
}