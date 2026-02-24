import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] text-white overflow-hidden flex items-center min-h-screen">
      {/* Founder Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://res.cloudinary.com/dmdjgog00/video/upload/v1771726388/Video_Project_46_xlrigx.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.9] font-light mb-8">
              No <br/>
              <span className="text-gold italic">Portfolios.</span><br/>
              Only <br/>
              Partnerships.
            </h2>
            
            <div className="w-16 h-[1px] bg-[#D4AF6E]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
