
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // Clean up any existing particles
    const existingParticles = container.querySelectorAll('.particle');
    existingParticles.forEach(particle => particle.remove());
    
    // Create new particles
    const particleCount = Math.min(50, Math.floor(containerWidth * containerHeight / 15000));
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 10;
      
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      const particles = container.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden" ref={containerRef}></div>
  );
};

export default ParticleBackground;
