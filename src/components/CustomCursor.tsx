import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot hidden lg:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />
      <motion.div
        className="cursor-outline hidden lg:block"
        animate={{ x: mousePosition.x, y: mousePosition.y }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
      />
    </>
  );
}
