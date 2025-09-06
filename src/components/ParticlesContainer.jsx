import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles-bg"
      style={{ pointerEvents: 'none' }}
      options={{
        fullscreen: { enable: true, zIndex: -10 }, 
        background: {
          color: {
            value: '', 
          },
        },
        fpsLimit: 60, 
        interactivity: {
          events: {
            onClick: { enable: false },
            onHover: { enable: false },
            resize: true,
          },
          modes: {
            push: {
              quantity: 30, 
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#e68e2e', 
          },
          links: {
            color: '#f5d393',
            distance: 150,
            enable: true,
            opacity: 0.35,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce', 
            },
            random: false,
            speed: 0.6, 
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, 
            },
            value: 45, 
          },
          opacity: {
            value: 0.35, 
          },
          shape: {
            type: 'circle', 
          },
          size: {
            value: { min: 1, max: 4 }, 
          },
        },
        detectRetina: true, 
      }}
    />
  );
};

export default ParticlesContainer;
