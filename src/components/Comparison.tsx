import { motion } from 'motion/react';

export default function Comparison() {
  return (
    <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest">The Contrast</h2>
          <div className="w-16 h-[1px] bg-[#D4AF6E] mx-auto mt-8"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-gold bg-[#0a0a0a] overflow-hidden relative shadow-[0_0_30px_rgba(212,175,110,0.1)]"
        >
          <div className="aspect-video w-full relative">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80"
            >
              <source src="https://res.cloudinary.com/dmdjgog00/video/upload/v1771902410/Scene_a_powerful_1080p_202602240546_dekrw2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
