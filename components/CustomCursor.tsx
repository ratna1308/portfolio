'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
    const mainCursorRef = useRef<SVGSVGElement>(null);
    const trailRefs = useRef<(SVGCircleElement | null)[]>([]);

    useGSAP((context, contextSafe) => {
        if (window.innerWidth < 768) return;

        // Initialize trail positions
        const positions = Array(5).fill({ x: 0, y: 0 });
        
        const handleMouseMove = contextSafe?.((e: MouseEvent) => {
            if (!mainCursorRef.current) return;

            const { clientX, clientY } = e;
            
            // Update positions array
            positions.pop();
            positions.unshift({ x: clientX, y: clientY });

            // Animate main cursor
            gsap.to(mainCursorRef.current, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: 'power2.out'
            });

            // Animate trail circles with staggered delay
            trailRefs.current.forEach((circle, i) => {
                if (!circle) return;
                
                const pos = positions[Math.min(i, positions.length - 1)];
                gsap.to(circle, {
                    x: pos.x,
                    y: pos.y,
                    duration: 0.3,
                    delay: i * 0.05,
                    ease: 'power2.out'
                });
            });

        }) as any;

        // Click animation
        const handleMouseDown = contextSafe?.(() => {
            gsap.to(mainCursorRef.current, {
                scale: 0.8,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(mainCursorRef.current, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'elastic.out(1, 0.5)'
                    });
                }
            });
        }) as any;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
        };
    });

    return (
        <>
            {/* Main cursor */}
            <svg
                ref={mainCursorRef}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="12" r="6" fill="#6366f1" />
                <circle cx="12" cy="12" r="11" stroke="#6366f1" strokeWidth="1" />
            </svg>

            {/* Trail circles */}
            {[...Array(5)].map((_, i) => (
                <circle
                    key={i}
                    ref={(el) => {
                        trailRefs.current[i] = el;
                    }}
                    r={5 - i}
                    fill={`rgba(99, 102, 241, ${0.5 - (i * 0.1)})`}
                    className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2"
                />
            ))}
        </>
    );
};

export default CustomCursor;



