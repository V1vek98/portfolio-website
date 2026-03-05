import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const ParticleField = ({ count = 50 }) => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Events } = Matter;

    const width = canvas.parentElement.offsetWidth;
    const height = canvas.parentElement.offsetHeight;

    const engine = Engine.create({ gravity: { x: 0, y: 0 } });
    engineRef.current = engine;

    const render = Render.create({
      canvas,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      },
    });

    // Create particles
    const particles = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 3 + 1;
      const particle = Bodies.circle(
        Math.random() * width,
        Math.random() * height,
        radius,
        {
          render: {
            fillStyle: `rgba(66, 133, 244, ${Math.random() * 0.3 + 0.1})`,
          },
          frictionAir: 0.02,
          restitution: 0.8,
        }
      );
      // Give initial velocity
      Matter.Body.setVelocity(particle, {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
      });
      particles.push(particle);
    }

    // Add walls (invisible, keep particles in bounds)
    const walls = [
      Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } }),
    ];

    World.add(engine.world, [...particles, ...walls]);

    // Mouse interaction
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.001,
        render: { visible: false },
      },
    });

    // Remove scroll capture from mouse
    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    World.add(engine.world, mouseConstraint);

    // Draw connections between nearby particles
    Events.on(render, 'afterRender', () => {
      const ctx = render.context;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].position.x - particles[j].position.x;
          const dy = particles[i].position.y - particles[j].position.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(66, 133, 244, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].position.x, particles[j].position.y);
            ctx.lineTo(particles[j].position.x, particles[j].position.y);
            ctx.stroke();
          }
        }
      }
    });

    // Keep particles moving gently
    Events.on(engine, 'beforeUpdate', () => {
      particles.forEach((p) => {
        const speed = Math.sqrt(p.velocity.x ** 2 + p.velocity.y ** 2);
        if (speed < 0.2) {
          Matter.Body.setVelocity(p, {
            x: p.velocity.x + (Math.random() - 0.5) * 0.1,
            y: p.velocity.y + (Math.random() - 0.5) * 0.1,
          });
        }
      });
    });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      const w = canvas.parentElement.offsetWidth;
      const h = canvas.parentElement.offsetHeight;
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Matter.Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default React.memo(ParticleField);
