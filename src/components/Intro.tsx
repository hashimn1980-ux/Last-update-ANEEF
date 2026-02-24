import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Intro({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src="https://res.cloudinary.com/dmdjgog00/image/upload/v1771208932/ANEEF_LOGO_-_no_background_qvk3jz.png" 
          alt="ANEEF Logo" 
          className="h-16 md:h-24 invert opacity-90 drop-shadow-[0_0_20px_rgba(212,175,110,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
}
