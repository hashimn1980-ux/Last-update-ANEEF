import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    { num: "I", title: "Consult", desc: "Private discussion." },
    { num: "II", title: "Create", desc: "Digital profile built." },
    { num: "III", title: "Deliver", desc: "High-res. Full rights." }
  ];

  return (
    <section id="process" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest">The Method</h2>
          <div className="w-16 h-[1px] bg-[#D4AF6E] mx-auto mt-8"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex-1 flex flex-col items-center text-center p-12 border border-white/5 bg-[#050505] hover:border-[#D4AF6E]/50 transition-colors duration-500"
            >
              <div className="font-display text-3xl md:text-4xl mb-8 text-gold font-light">
                {step.num}
              </div>
              <h3 className="font-display text-xl md:text-2xl uppercase mb-4 font-light tracking-widest">{step.title}</h3>
              <p className="font-sans text-xs font-light uppercase tracking-widest text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
