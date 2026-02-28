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
    <section className="px-4 py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif-display text-3xl md:text-4xl text-center text-foreground mb-16"
      >
        Our Beautiful Moments
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-px bg-timeline-line -translate-x-1/2 hidden md:block" />
        <div className="absolute left-6 top-0 bottom-0 w-px bg-timeline-line md:hidden" />

        <div className="space-y-16 md:space-y-20">
          {memories.map((memory, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute left-6 top-4 w-3 h-3 rounded-full bg-timeline-dot -translate-x-1/2 md:hidden z-10" />
                <div className="absolute left-1/2 top-4 w-3 h-3 rounded-full bg-timeline-dot -translate-x-1/2 hidden md:block z-10" />

                <div className={`md:flex md:items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                    <div className="polaroid inline-block p-3 rounded-sm">
                      <img
                        src={memory.image}
                        alt="Our memory together"
                        className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-sm"
                      />
                    </div>
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
