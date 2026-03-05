import React from 'react';
import { motion } from 'framer-motion';

const blobConfigs = {
  'blue-green': [
    { color: 'rgba(66,133,244,0.07)', size: 500, x: '-5%', y: '10%', dx: 40, dy: 30, duration: 22 },
    { color: 'rgba(52,168,83,0.06)', size: 450, x: '70%', y: '60%', dx: -35, dy: -25, duration: 26 },
    { color: 'rgba(66,133,244,0.05)', size: 350, x: '50%', y: '-10%', dx: 25, dy: 35, duration: 20 },
  ],
  'red-yellow': [
    { color: 'rgba(234,67,53,0.06)', size: 500, x: '80%', y: '15%', dx: -30, dy: 35, duration: 24 },
    { color: 'rgba(251,188,5,0.07)', size: 450, x: '-10%', y: '50%', dx: 40, dy: -20, duration: 28 },
    { color: 'rgba(234,67,53,0.05)', size: 400, x: '40%', y: '80%', dx: -25, dy: -30, duration: 21 },
  ],
  'green-accent': [
    { color: 'rgba(52,168,83,0.07)', size: 550, x: '10%', y: '20%', dx: 35, dy: 25, duration: 25 },
    { color: 'rgba(66,133,244,0.06)', size: 400, x: '75%', y: '70%', dx: -30, dy: -35, duration: 23 },
    { color: 'rgba(52,168,83,0.05)', size: 350, x: '60%', y: '-5%', dx: -20, dy: 30, duration: 27 },
  ],
};

const BackgroundDecoration = ({ variant = 'blue-green' }) => {
  const blobs = blobConfigs[variant] || blobConfigs['blue-green'];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, blob.dx, -blob.dx * 0.5, 0],
            y: [0, blob.dy, -blob.dy * 0.5, 0],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDecoration;
