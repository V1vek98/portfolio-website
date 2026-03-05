import React from 'react';
import { motion } from 'framer-motion';

const shapes = [
  { type: 'circle', size: 12, x: '8%', y: '15%', color: 'rgba(66,133,244,0.08)', duration: 18 },
  { type: 'ring', size: 28, x: '85%', y: '25%', color: 'rgba(234,67,53,0.06)', duration: 22 },
  { type: 'dot', size: 8, x: '75%', y: '75%', color: 'rgba(52,168,83,0.08)', duration: 16 },
  { type: 'plus', size: 16, x: '15%', y: '70%', color: 'rgba(251,188,5,0.07)', duration: 20 },
  { type: 'circle', size: 20, x: '50%', y: '10%', color: 'rgba(52,168,83,0.06)', duration: 24 },
  { type: 'ring', size: 40, x: '92%', y: '60%', color: 'rgba(66,133,244,0.05)', duration: 19 },
];

const ShapeElement = ({ type, size, color }) => {
  if (type === 'ring') {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `2px solid ${color}`,
        }}
      />
    );
  }

  if (type === 'plus') {
    return (
      <div style={{ width: size, height: size, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: 2,
            background: color,
            transform: 'translateY(-50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: color,
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    );
  }

  // circle or dot
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
      }}
    />
  );
};

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {shapes.map((shape, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: shape.x, top: shape.y }}
        animate={{
          y: [0, -15, 5, -10, 0],
          x: [0, 8, -5, 10, 0],
          rotate: [0, 10, -5, 8, 0],
        }}
        transition={{
          duration: shape.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ShapeElement type={shape.type} size={shape.size} color={shape.color} />
      </motion.div>
    ))}
  </div>
);

export default FloatingShapes;
