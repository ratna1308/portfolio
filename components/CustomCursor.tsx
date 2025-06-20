// 'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { useRef } from 'react';

// gsap.registerPlugin(useGSAP);

// const CustomCursor = () => {
//     const svgRef = useRef<SVGSVGElement>(null);

//     useGSAP((context, contextSafe) => {
//         if (window.innerWidth < 768) return;

//         const handleMouseMove = contextSafe?.((e: MouseEvent) => {
//             if (!svgRef.current) return;

//             const { clientX, clientY } = e;

//             gsap.to(svgRef.current, {
//                 x: clientX,
//                 y: clientY,
//                 ease: 'power2.out',
//                 duration: 0.25,
//                 opacity: 1,
//             });
//         }) as any;

//         window.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//         };
//     });

//     return (
//         <svg
//             width="27"
//             height="30"
//             viewBox="0 0 27 30"
//             className="hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none" // -translate-x-1/2 -translate-y-1/2
//             fill="none"
//             id="cursor"
//             strokeWidth="2"
//             opacity="0"
//             xmlns="http://www.w3.org/2000/svg"
//             ref={svgRef}
//         >
//             <path
//                 d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
//                 className="fill-foreground stroke-background/50"
//             />
//         </svg>
//     );
// };

// export default CustomCursor;


////////////////////////////////////////////////////////////next////////////////////////////////////////////////////////////////////



// 'use client';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { useRef } from 'react';

// gsap.registerPlugin(useGSAP);

// const CustomCursor = () => {
//     const cursorRef = useRef<HTMLDivElement>(null);
//     const followerRef = useRef<HTMLDivElement>(null);

//     useGSAP((context, contextSafe) => {
//         if (window.innerWidth < 768) return;

//         const handleMouseMove = contextSafe?.((e: MouseEvent) => {
//             if (!cursorRef.current || !followerRef.current) return;

//             const { clientX, clientY } = e;

//             // Immediate cursor
//             gsap.to(cursorRef.current, {
//                 x: clientX,
//                 y: clientY,
//                 duration: 0,
//             });

//             // Delayed follower with magnetic effect
//             gsap.to(followerRef.current, {
//                 x: clientX,
//                 y: clientY,
//                 ease: 'power2.out',
//                 duration: 0.5,
//             });
//         }) as any;

//         // Hover effects
//         const handleHover = () => {
//             gsap.to(followerRef.current, {
//                 scale: 2,
//                 backgroundColor: '#6366f1',
//                 duration: 0.3,
//             });
//         };

//         const handleUnhover = () => {
//             gsap.to(followerRef.current, {
//                 scale: 1,
//                 backgroundColor: '#000000',
//                 duration: 0.3,
//             });
//         };

//         window.addEventListener('mousemove', handleMouseMove);
        
//         // Add hover effects to interactive elements
//         const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]');
//         interactiveElements.forEach(el => {
//             el.addEventListener('mouseenter', handleHover);
//             el.addEventListener('mouseleave', handleUnhover);
//         });

//         return () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             interactiveElements.forEach(el => {
//                 el.removeEventListener('mouseenter', handleHover);
//                 el.removeEventListener('mouseleave', handleUnhover);
//             });
//         };
//     });

//     return (
//         <>
//             {/* Main cursor dot */}
//             <div
//                 ref={cursorRef}
//                 className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
//             />
            
//             {/* Follower circle */}
//             <div
//                 ref={followerRef}
//                 className="hidden md:block fixed top-0 left-0 w-6 h-6 border-2 border-foreground rounded-full pointer-events-none z-[9998] mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
//             />
//         </>
//     );
// };

// export default CustomCursor;


////////////////////////////////////////////////////////////next////////////////////////////////////////////////////////////////////


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
                    ref={el => trailRefs.current[i] = el}
                    r={5 - i}
                    fill={`rgba(99, 102, 241, ${0.5 - (i * 0.1)})`}
                    className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2"
                />
            ))}
        </>
    );
};

export default CustomCursor;



