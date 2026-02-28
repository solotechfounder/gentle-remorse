import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const FloatingHeart = ({ id, x }: { id: number; x: number }) => (
  <motion.div
    key={id}
    initial={{ opacity: 1, y: 0, x, scale: 0.5 }}
    animate={{ opacity: 0, y: -600, scale: 1.2, rotate: Math.random() * 60 - 30 }}
    transition={{ duration: 3 + Math.random() * 2, ease: "easeOut" }}
    className="fixed bottom-0 pointer-events-none z-50"
    style={{ left: `${x}%` }}
  >
    <Heart className="w-6 h-6 md:w-8 md:h-8 fill-primary text-primary" />
  </motion.div>
);

const PromiseSection = () => {
  const [response, setResponse] = useState<"yes" | "wait" | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

  const handleYes = useCallback(() => {
    setResponse("yes");
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 90 + 5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <section className="px-4 py-16 md:py-24 text-center relative">
      {hearts.map((h) => (
        <FloatingHeart key={h.id} id={h.id} x={h.x} />
      ))}

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif-display text-2xl md:text-4xl text-foreground mb-10"
      >
        Will you let me make this right?
      </motion.h2>

      <AnimatePresence mode="wait">
        {response === null ? (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleYes}
              className="btn-yes px-8 py-3 rounded-full font-sans font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Yes
            </button>
            <button
              onClick={() => setResponse("wait")}
              className="btn-wait px-8 py-3 rounded-full font-sans font-medium text-lg transition-all duration-300 hover:scale-105"
            >
              I need some time
            </button>
          </motion.div>
        ) : response === "yes" ? (
          <motion.p
            key="yes-response"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-handwritten text-2xl md:text-3xl text-foreground max-w-md mx-auto leading-relaxed"
          >
            Thank you. I promise to be better. I love you. 💛
          </motion.p>
        ) : (
          <motion.p
            key="wait-response"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="font-handwritten text-2xl md:text-3xl text-muted-foreground max-w-md mx-auto leading-relaxed"
          >
            I completely understand. Take all the time you need. I'll be right here when you're ready. 🤍
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PromiseSection;
