// components/HolographicGridBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HolographicGridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    // Create grid lines
    const gridSize = 60;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    
    // Horizontal lines
    for (let i = 0; i < rows; i++) {
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.width = '100%';
      line.style.height = '1px';
      line.style.background = 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.3), transparent)';
      line.style.top = `${i * gridSize}px`;
      line.style.left = '0';
      line.style.opacity = '0.5';
      
      container.appendChild(line);
      
      // Animation
      gsap.to(line, {
        backgroundPosition: '100% 0',
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: 'none'
      });
    }
    
    // Vertical lines
    for (let i = 0; i < cols; i++) {
      const line = document.createElement('div');
      line.style.position = 'absolute';
      line.style.width = '1px';
      line.style.height = '100%';
      line.style.background = 'linear-gradient(0deg, transparent, rgba(0, 255, 255, 0.3), transparent)';
      line.style.left = `${i * gridSize}px`;
      line.style.top = '0';
      line.style.opacity = '0.5';
      
      container.appendChild(line);
      
      // Animation
      gsap.to(line, {
        backgroundPosition: '0 100%',
        duration: 10 + Math.random() * 10,
        repeat: -1,
        ease: 'none'
      });
    }
    
    // Create floating data nodes
    const nodeCount = 15;
    const colors = ['#00FFFF', '#FF00FF', '#FFFF00'];
    
    for (let i = 0; i < nodeCount; i++) {
      const node = document.createElement('div');
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      node.style.position = 'absolute';
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      node.style.background = color;
      node.style.borderRadius = '50%';
      node.style.boxShadow = `0 0 10px 2px ${color}`;
      node.style.left = `${Math.random() * 100}%`;
      node.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(node);
      
      // Animation
      gsap.to(node, {
        x: `${(Math.random() - 0.5) * 200}px`,
        y: `${(Math.random() - 0.5) * 200}px`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      
      // Pulsing effect
      gsap.to(node, {
        scale: 1.5,
        duration: 2 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
    
    // Create connection lines
    const animateConnections = () => {
      const nodes = container.querySelectorAll('div[style*="box-shadow"]');
      
      // Clear old connections
      const oldConnections = container.querySelectorAll('.connection-line');
      oldConnections.forEach(el => el.remove());
      
      // Create new connections
      nodes.forEach((node1, i) => {
        nodes.forEach((node2, j) => {
          if (i >= j) return;
          
          const rect1 = node1.getBoundingClientRect();
          const rect2 = node2.getBoundingClientRect();
          const distance = Math.sqrt(
            Math.pow(rect1.left - rect2.left, 2) + 
            Math.pow(rect1.top - rect2.top, 2)
          );
          
          if (distance < 200) {
            const line = document.createElement('div');
            line.className = 'connection-line';
            line.style.position = 'absolute';
            line.style.height = '1px';
            line.style.background = `linear-gradient(90deg, ${getComputedStyle(node1).backgroundColor}, ${getComputedStyle(node2).backgroundColor})`;
            line.style.opacity = '0.3';
            line.style.transformOrigin = '0 0';
            
            const angle = Math.atan2(
              rect2.top - rect1.top,
              rect2.left - rect1.left
            ) * 180 / Math.PI;
            
            line.style.width = `${distance}px`;
            line.style.left = `${rect1.left + rect1.width/2}px`;
            line.style.top = `${rect1.top + rect1.height/2}px`;
            line.style.transform = `rotate(${angle}deg)`;
            
            container.appendChild(line);
          }
        });
      });
      
      requestAnimationFrame(animateConnections);
    };
    
    animateConnections();

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 bg-black overflow-hidden"
    />
  );
}