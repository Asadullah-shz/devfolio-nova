import { useEffect, useRef, useState, useCallback, memo } from 'react';
import { gsap } from 'gsap';

const DEFAULT_PARTICLE_COUNT = 40;
const DEFAULT_GLOW_COLOR = '200, 200, 200';
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (x, y, color) => {
    const el = document.createElement('div');
    el.className = 'bg-particle';
    el.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: rgba(${color}, 1);
        box-shadow: 0 0 8px rgba(${color}, 0.8);
        pointer-events: none;
        z-index: 0;
        left: ${x}px;
        top: ${y}px;
        will-change: transform, opacity;
    `;
    return el;
};

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT
    );

    useEffect(() => {
        let timeoutId;
        const checkMobile = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
            }, 150);
        };

        window.addEventListener('resize', checkMobile);
        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timeoutId);
        };
    }, []);

    return isMobile;
};

const MovingParticleBackground = memo(({
    particleCount = DEFAULT_PARTICLE_COUNT,
    glowColor = DEFAULT_GLOW_COLOR,
}) => {
    const containerRef = useRef(null);
    const particlesRef = useRef([]);
    const timeoutsRef = useRef([]);
    const animationsRef = useRef([]);
    const isMobile = useMobileDetection();

    const disableAnimations = isMobile;



    const cleanupParticles = useCallback(() => {
        animationsRef.current.forEach(anim => {
            if (anim && anim.kill) anim.kill();
        });
        animationsRef.current = [];

        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];

        particlesRef.current.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
        particlesRef.current = [];
    }, []);

    const initializeAndAnimateParticles = useCallback(() => {
        if (disableAnimations || !containerRef.current) return;

        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();

        if (width === 0 || height === 0) return;

        const effectiveCount = width < 768 ? Math.floor(particleCount * 0.5) : particleCount;

        const spawnAndAnimateParticle = (index) => {
            const startX = Math.random() * width;
            const startY = Math.random() * height;

            const particle = createParticleElement(startX, startY, glowColor);
            container.appendChild(particle);
            particlesRef.current.push(particle);

            const scaleAnim = gsap.fromTo(particle,
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(1.7)'
                }
            );
            animationsRef.current.push(scaleAnim);

            const moveAnim = gsap.to(particle, {
                x: (Math.random() - 0.5) * width * 0.3,
                y: (Math.random() - 0.5) * height * 0.3,
                duration: 8 + Math.random() * 4,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true
            });
            animationsRef.current.push(moveAnim);

            const opacityAnim = gsap.to(particle, {
                opacity: 0.3 + Math.random() * 0.5,
                duration: 4 + Math.random() * 2,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });
            animationsRef.current.push(opacityAnim);
        };

        for (let i = 0; i < effectiveCount; i++) {
            const timeoutId = setTimeout(() => {
                spawnAndAnimateParticle(i);
            }, i * (1000 / effectiveCount));
            timeoutsRef.current.push(timeoutId);
        }
    }, [disableAnimations, particleCount, glowColor]);

    useEffect(() => {
        if (disableAnimations) {
            cleanupParticles();
            return;
        }

        const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
        const handle = idleCallback(() => {
            initializeAndAnimateParticles();
        });

        return () => {
            if (window.cancelIdleCallback) {
                window.cancelIdleCallback(handle);
            } else {
                clearTimeout(handle);
            }
            cleanupParticles();
        };

        return () => {
            if (window.cancelIdleCallback) {
                window.cancelIdleCallback(handle);
            } else {
                clearTimeout(handle);
            }
            cleanupParticles();
        };
    }, [initializeAndAnimateParticles, cleanupParticles, disableAnimations]);



    return (
        <>
            <div
                ref={containerRef}
                className="MovingParticleBackground"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: '#0f0f10ff',
                    pointerEvents: 'none',
                    zIndex: -10,
                    overflow: 'hidden',
                }}
            >
              
                {disableAnimations && (
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '12px'
                    }}>
                        {("")}
                    </p>
                )}
            </div>
        </>
    );
});

MovingParticleBackground.displayName = 'MovingParticleBackground';

export default MovingParticleBackground;