// components/WaveGradientBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function WaveGradientBackground() {
  const wavesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wavesRef.current) return;

    const waves = wavesRef.current;
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e'];
    
    // Create 3-4 wave layers
    for (let i = 0; i < 4; i++) {
      const wave = document.createElement('div');
      const color = colors[i % colors.length];
      const duration = 20 + Math.random() * 10;
      
      wave.style.position = 'absolute';
      wave.style.bottom = '0';
      wave.style.left = '0';
      wave.style.width = '100%';
      wave.style.height = `${100 + i * 50}px`;
      wave.style.background = color;
      wave.style.opacity = '0.15';
      wave.style.borderRadius = '100% 100% 0 0';
      wave.style.transformOrigin = 'bottom center';
      
      waves.appendChild(wave);

      // Animate each wave
      gsap.to(wave, {
        scaleX: 1.5,
        scaleY: 1.2,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Animate gradient
    const gradient = document.createElement('div');
    gradient.style.position = 'absolute';
    gradient.style.inset = '0';
    gradient.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    gradient.style.opacity = '1';
    waves.appendChild(gradient);

    gsap.to(gradient, {
      backgroundPosition: '100% 100%',
      duration: 30,
      repeat: -1,
      yoyo: true,
      ease: 'none'
    });

    return () => {
      while (waves.firstChild) {
        waves.removeChild(waves.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={wavesRef}
      className="fixed inset-0 -z-10 overflow-hidden"
    />
  );
}