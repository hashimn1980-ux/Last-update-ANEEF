import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-[#050505]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-90 mix-blend-screen"
        >
          <source src="https://res.cloudinary.com/dmdjgog00/video/upload/v1771208660/hero_section_video_tg2qik.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
      </div>

      {/* Top Bar Logo */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 flex justify-center md:justify-start">
        <img 
          src="https://res.cloudinary.com/dmdjgog00/image/upload/v1771208932/ANEEF_LOGO_-_no_background_qvk3jz.png" 
          alt="ANEEF Logo" 
          className="h-8 md:h-10 invert opacity-90 drop-shadow-[0_0_15px_rgba(212,175,110,0.4)]"
        />
      </div>

      <div className="z-10 px-8 md:px-16 lg:px-32 w-full max-w-7xl mx-auto flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-light text-white drop-shadow-2xl">
            Presence
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.9] font-light text-gold italic drop-shadow-[0_0_20px_rgba(212,175,110,0.2)]">
            Redefined
          </h1>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "60px" }}
          transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
          className="h-[1px] bg-[#D4AF6E] my-8 shadow-[0_0_10px_rgba(212,175,110,0.5)]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex flex-col items-start gap-6"
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-white/80 uppercase font-light drop-shadow-md">
            Absolute Discretion
          </p>
          
          <a 
            href="#contact" 
            className="hover-target mt-2 px-8 py-3 border border-[#D4AF6E]/50 text-white uppercase tracking-[0.15em] text-xs font-medium hover:bg-gold hover:text-black transition-all duration-500 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,110,0.1)] hover:shadow-[0_0_25px_rgba(212,175,110,0.4)]"
          >
            Request Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
