// src/ParticlesComponent.js
import React, { useEffect } from 'react';

const ParticlesComponent = () => {
  useEffect(() => {
    // Carregue o script particles.js
    const script = document.createElement('script');
    script.src = '/particles.js';
    script.async = true;
    script.onload = () => {
      window.particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 130,
            "density": {
              "enable": true,
              "value_area": 1000
            }
          },
          "color": {
            "value": "#2369d9"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#2369d9",
            },
            "polygon": {
              "nb_sides": 5
            },
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesComponent;