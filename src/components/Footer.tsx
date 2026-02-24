import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-40 px-6 md:px-12 lg:px-24 bg-[#050505] text-white overflow-hidden">
      {/* Massive Background Text - Slow Motion */}
      <motion.div 
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden"
      >
        <span className="font-display text-[40vw] leading-none whitespace-nowrap text-stroke">ANEEF</span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] uppercase tracking-widest font-light mb-8 drop-shadow-2xl">
            Let's Begin
          </h2>
          <p className="font-sans text-sm md:text-base font-light tracking-[0.3em] uppercase mb-16 text-gold drop-shadow-[0_0_10px_rgba(212,175,110,0.3)]">
            No pressure. No commitment.
          </p>
          
          <motion.a 
            href="mailto:contact@aneef.studio" 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hover-target inline-block px-12 py-6 border border-[#D4AF6E]/50 bg-transparent text-white font-display text-2xl md:text-3xl uppercase tracking-widest hover:bg-gold hover:text-black transition-colors duration-700 shadow-[0_0_20px_rgba(212,175,110,0.1)] hover:shadow-[0_0_40px_rgba(212,175,110,0.3)]"
          >
            Start Consultation
          </motion.a>
        </motion.div>

        <div className="w-full h-[1px] bg-white/10 my-32"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 font-sans text-xs uppercase font-light tracking-widest text-white/60">
          <div>ANEEF &copy; 2026</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-gold transition-colors duration-500">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors duration-500">LinkedIn</a>
            <a href="mailto:contact@aneef.studio" className="hover:text-gold transition-colors duration-500">Email</a>
          </div>
          <div>Dubai, UAE</div>
        </div>
      </div>
    </footer>
  );
}
