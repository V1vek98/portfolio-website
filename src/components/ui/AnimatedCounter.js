import React from 'react';
import useAnimatedCounter from '../../hooks/useAnimatedCounter';

const AnimatedCounter = ({ value, suffix = '', prefix = '', className = '', duration = 2000 }) => {
  const { count, ref } = useAnimatedCounter(value, duration);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
