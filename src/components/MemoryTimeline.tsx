import { motion } from "framer-motion";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const memories = [
  { image: memory1 },
  { image: memory2 },
  { image: memory3 },
  { image: memory4 },
];

const MemoryTimeline = () => {
  return (
    <section className="px-4 py-16 md:py-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-20"
      >
        <p className="font-handwritten text-lg md:text-xl text-muted-foreground mb-3">scroll through</p>
        <h2 className="font-serif-display text-3xl md:text-5xl text-foreground italic">
          Our Beautiful Moments
        </h2>
        <div className="flex items-center justify-center gap-3 mt-5">
          <div className="w-16 h-px bg-primary/25" />
          <span className="text-primary/40 text-xs">✦</span>
          <div className="w-16 h-px bg-primary/25" />
        </div>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line - desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-timeline-line to-transparent -translate-x-1/2 hidden md:block" />
        {/* Timeline line - mobile */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-timeline-line to-transparent md:hidden" />

        <div className="space-y-20 md:space-y-28">
          {memories.map((memory, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="relative"
              >
                {/* Dot - mobile */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute left-6 top-8 w-3 h-3 rounded-full bg-timeline-dot -translate-x-1/2 md:hidden z-10 ring-4 ring-background"
                />
                {/* Dot - desktop */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-timeline-dot -translate-x-1/2 hidden md:block z-10 ring-4 ring-background"
                />

                <div className={`md:flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:text-left"}`}>
                    <motion.div
                      whileHover={{ rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="polaroid inline-block p-3 pb-4 rounded-sm"
                      style={{ transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)` }}
                    >
                      <img
                        src={memory.image}
                        alt="Our memory together"
                        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-sm"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryTimeline;
