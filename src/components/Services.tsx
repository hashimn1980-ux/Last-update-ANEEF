import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="services" className="py-40 px-6 md:px-12 lg:px-24 bg-[#050505] text-white relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest">Investment</h2>
          <div className="w-16 h-[1px] bg-[#D4AF6E] mx-auto mt-8 shadow-[0_0_10px_rgba(212,175,110,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flip-card h-[400px] w-full cursor-pointer"
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front border-gold bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(212,175,110,0.05)]">
                <h4 className="font-display text-2xl md:text-3xl font-light uppercase tracking-widest mb-6 text-gold drop-shadow-[0_0_10px_rgba(212,175,110,0.3)]">The Session</h4>
                <h3 className="font-display text-3xl md:text-4xl font-light text-white">1,200USD</h3>
                <p className="absolute bottom-10 text-[10px] tracking-[0.2em] text-gold uppercase opacity-70">Hover to reveal</p>
              </div>
              {/* Back */}
              <div className="flip-card-back border-gold bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(212,175,110,0.15)]">
                <ul className="space-y-3 font-sans text-xs md:text-sm font-light tracking-wider text-gold mb-8 drop-shadow-[0_0_5px_rgba(212,175,110,0.2)]">
                  <li>Private consultation</li>
                  <li>Digital profile creation</li>
                  <li>10 custom images</li>
                  <li>48-hour delivery</li>
                  <li className="font-medium mt-2">Complete confidentiality</li>
                </ul>
                <a href="#contact" className="inline-block px-6 py-3 border-gold text-gold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-black transition-all duration-300">
                  Initiate
                </a>
              </div>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flip-card h-[400px] w-full cursor-pointer"
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front border-gold bg-[#0a0a0a] p-10 md:p-14 flex flex-col justify-center items-center text-center shadow-[0_0_15px_rgba(212,175,110,0.05)]">
                <h4 className="font-display text-2xl md:text-3xl font-light uppercase tracking-widest mb-6 text-gold drop-shadow-[0_0_10px_rgba(212,175,110,0.3)]">The Retainer</h4>
                <h3 className="font-display text-3xl md:text-4xl font-light text-white">2,200USD<span className="text-lg text-white/50 block mt-2">Per Month</span></h3>
                <p className="absolute bottom-10 text-[10px] tracking-[0.2em] text-gold uppercase opacity-70">Hover to reveal</p>
              </div>
              {/* Back */}
              <div className="flip-card-back border-gold bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(212,175,110,0.15)]">
                <ul className="space-y-3 font-sans text-xs md:text-sm font-light tracking-wider text-gold mb-8 drop-shadow-[0_0_5px_rgba(212,175,110,0.2)]">
                  <li>25 images monthly</li>
                  <li>Quarterly profile refresh</li>
                  <li>Priority delivery</li>
                  <li>Dedicated direction</li>
                  <li className="font-medium mt-2">Full discretion guaranteed</li>
                </ul>
                <a href="#contact" className="inline-block px-6 py-3 border-gold text-gold uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-black transition-all duration-300">
                  Secure
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
