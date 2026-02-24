import { motion } from 'motion/react';

const images = [
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1771208669/the_godfather_2_o8lhpn.png", text: "AUTHORITY", tall: true },
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1768450506/TheSingularity-10_fxarbo.jpg", text: "PRESENCE", tall: false },
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1768450502/TheSingularity-8_y3ksrh.jpg", text: "LEADERSHIP", tall: false },
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1768264806/voyage_15.jpg_ru0mn7.jpg", text: "VISION", tall: false },
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1771896920/The_Fintess_Latino_Lady_9_w2ntjj.jpg", text: "REACH", tall: true },
  { src: "https://res.cloudinary.com/dmdjgog00/image/upload/v1768450506/TheSingularity-10_fxarbo.jpg", text: "AUTHENTICITY", tall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-24 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest">The Evidence</h2>
          <div className="w-16 h-[1px] bg-[#D4AF6E] mx-auto mt-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className={`group relative overflow-hidden bg-[#0a0a0a] hover-target ${img.tall ? 'md:row-span-2' : ''}`}
            >
              <img 
                src={img.src} 
                alt="Gallery" 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-display text-xl md:text-2xl uppercase tracking-widest text-white text-center drop-shadow-lg font-light">
                  {img.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
