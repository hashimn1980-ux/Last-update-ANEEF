import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Comparison from './components/Comparison';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!introDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [introDone]);

  return (
    <>
      <CustomCursor />
      <div className="film-grain"></div>
      <div className="scratch" style={{ left: '20%', animationDelay: '0s' }}></div>
      <div className="scratch" style={{ left: '70%', animationDelay: '0.05s', width: '2px' }}></div>
      <div className="scratch" style={{ left: '40%', animationDelay: '0.1s', width: '3px' }}></div>
      <div className="vignette"></div>
      
      <AnimatePresence>
        {!introDone && <Intro onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <motion.main
          initial={{ opacity: 0, filter: 'contrast(200%) brightness(0.5)' }}
          animate={{ opacity: 1, filter: 'contrast(120%) brightness(1)' }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="relative bg-black text-white"
        >
          <Hero />
          <Philosophy />
          <Services />
          <Gallery />
          <Process />
          <Comparison />
          <Footer />
        </motion.main>
      )}
    </>
  );
}
