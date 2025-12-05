import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Twitter, Github, Linkedin } from 'lucide-react';


const DEFAULT_PARTICLE_COUNT = 15;
const DEFAULT_GLOW_COLOR = '132, 0, 255';
const MOBILE_BREAKPOINT = 768;


const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};


const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 150,
          y: (Math.random() - 0.5) * 150,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 80);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = e => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.02;
        const magnetY = (y - centerY) * 0.02;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = e => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      }}
    >
      {children}
    </div>
  );
};

const SingleSocialCard = ({
  icon: Icon,
  handle,
  platform,
  glowColor = DEFAULT_GLOW_COLOR,
  url,
}) => {
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = isMobile;
  const lineRef = useRef(null);

  const iconCircleStyle = {
    borderColor: '#2a2a2a',
    '--hover-color-light': `rgba(${glowColor}, 0.5)`,
    '--hover-shadow': `0 0 40px rgba(${glowColor}, 0.2)`,
  };

  const lineStyle = {
    background: `linear-gradient(to bottom, rgba(${glowColor}, 0.5) 0%, #1a1a1a 50%, transparent 100%)`,
  };

  useEffect(() => {
    if (!lineRef.current) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: 'top center' },
      {
        scaleY: 1,
        duration: 1.5,
        ease: 'power2.out',
        delay: 0.5
      }
    );
  }, []);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="w-full max-w-[370px]">
      <ParticleCard
        className="social-card-item"
        disableAnimations={shouldDisableAnimations}
        particleCount={DEFAULT_PARTICLE_COUNT}
        glowColor={glowColor}
        enableTilt={true}
        clickEffect={true}
        enableMagnetism={true}
      >
        <style>
          {`
                .social-card-item:hover .icon-circle {
                  border-color: var(--hover-color-light);
                  box-shadow: var(--hover-shadow);
                  transform: scale(1.08);
                }
              `}
        </style>
        <div className="flex flex-col items-center w-full relative z-10">
          <div className="icon-circle" style={iconCircleStyle}>
            <Icon size={28} className="text-white" strokeWidth={1.5} />
          </div>

          <div ref={lineRef} className="connecting-line" style={lineStyle} />

          <h2 className="handle-text text-white mt-0 mb-2 text-center">
            @{handle}
          </h2>

          <p className="platform-text text-gray-500">
            {platform}
          </p>
        </div>
      </ParticleCard>
    </a>
  );
};


const SocialCardList = () => {
  const profiles = [
    {
      id: 1,
      icon: Twitter,
      handle: 'A.sa._.d',
      platform: 'Twitter',
      glowColor: '132, 0, 255',

      url: 'https://twitter.com/A.sa._.d'
    },
    {
      id: 2,
      icon: Github,
      handle: 'Asadullah-shz',
      platform: 'GitHub',
      glowColor: '0, 255, 132',

      url: 'https://github.com/Asadullah-shz'
    },
    {
      id: 3,
      icon: Linkedin,
      handle: 'asadullah-Shz1',
      platform: 'LinkedIn',
      glowColor: '0, 132, 255',

      url: 'https://linkedin.com/in/asadullah-Shz1'
    },
  ];

  const mainContainerRef = useRef(null);

  const handleContainerMouseMove = (e) => {
    if (!mainContainerRef.current) return;
    const x = e.clientX;
    const y = e.clientY;
    mainContainerRef.current.style.setProperty('--spotlight-x', `${x}px`);
    mainContainerRef.current.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <div
      ref={mainContainerRef}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      onMouseMove={handleContainerMouseMove}
    >
      <div className="background-spotlight" />

      <style>
        {`
                    .background-spotlight {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        background: radial-gradient(
                            circle 500px at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
                            rgba(81, 79, 83, 0.27) 0%, 
                            rgba(72, 71, 72, 0.11) 50%, 
                            transparent 100%
                        );
                        z-index: 0; 
                        mix-blend-mode: screen; 
                    }
                    
                    .social-card-item {
                        background: #0000005e;
                        border: 1px solid #5d5b5bff;
                        border-radius: 1.5rem;
                        padding: 3rem 2rem; 
                        width: 100%;
                        min-height: 330px; 
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        transition: all 0.3s ease;
                        margin: 1rem;
                        flex-shrink: 0; 
                        min-width: 360px; 
                        max-width: 370px; 
                        box-shadow: 1px 1px 2px 2px rgba(12, 136, 237, 0.16);
                        max-height: 570px;
                    }

                    .social-card-item::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        padding: 1px;
                        background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                            rgba(var(--glow-color, 132, 0, 255), 0.4) 0%,
                            rgba(var(--glow-color, 132, 0, 255), 0.2) 30%,
                            transparent 60%);
                        border-radius: inherit;
                        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        mask-composite: subtract;
                        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                        -webkit-mask-composite: xor;
                        pointer-events: none;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                        z-index: 1;
                        
                    }

                    .social-card-item:hover::after {
                        opacity: 1;
                        
                    }

                    .icon-circle {
                        width: 72px;
                        height: 72px;
                        border: 1px solid #2a2a2a;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #0000004a;
                        transition: all 0.4s ease;
                        position: relative;
                        z-index: 2;
                    }
                    
                    .connecting-line {
                        width: 1px;
                        height: 220px; 
                        margin: 0;
                        position: relative;
                        transform-origin: top center; 
                    }

                    .particle::before {
                        content: '';
                        position: absolute;
                        top: -2px;
                        left: -2px;
                        right: -2px;
                        bottom: -2px;
                        background: rgba(132, 0, 255, 0.2);
                        border-radius: 50%;
                        z-index: -1;
                    }

                    .handle-text {
                        font-size: 2.5rem;
                        font-weight: 500;
                        letter-spacing: -0.02em;
                    }

                    .platform-text {
                        font-size: 1.125rem;
                        font-weight: 400;
                        letter-spacing: 0.01em;
                    }

                    @media (max-width: 640px) {
                        .social-card-item {
                            padding: 3rem 2rem;
                            min-height: 350px;
                            max-width: 90%; 
                        }
                        
                        .handle-text {
                            font-size: 2rem;
                        }
                        
                        .connecting-line {
                            height: 180px;
                        }
                    }
                `}
      </style>


      <div className="flex flex-wrap items-stretch justify-center gap-3 max-w-7xl w-full z-10">
        {profiles.map((profile) => (
          <SingleSocialCard
            key={profile.id}
            icon={profile.icon}
            handle={profile.handle}
            platform={profile.platform}
            glowColor={profile.glowColor}
            url={profile.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialCardList;