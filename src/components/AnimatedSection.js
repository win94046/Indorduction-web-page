import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  id, 
  className = '', 
  delay = 0,
  animation = 'fadeInUp' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    switch (animation) {
      case 'fadeInUp':
        return `${baseClass} ${
          isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`;
      case 'fadeInLeft':
        return `${baseClass} ${
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform -translate-x-8'
        }`;
      case 'fadeInRight':
        return `${baseClass} ${
          isVisible 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-8'
        }`;
      case 'scaleIn':
        return `${baseClass} ${
          isVisible 
            ? 'opacity-100 transform scale-100' 
            : 'opacity-0 transform scale-95'
        }`;
      default:
        return `${baseClass} ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`;
    }
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;