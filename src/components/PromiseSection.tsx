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
  const [response, setResponse] = useState<"yes" | null>(null);
  const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleYes = useCallback(() => {
    setResponse("yes");
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 90 + 5,
    }));
    setHearts(newHearts);
  }, []);

  const dodgeNo = useCallback(() => {
    const x = (Math.random() - 0.5) * 250;
    const y = (Math.random() - 0.5) * 150;
    setNoPosition({ x, y });
  }, []);

  return (
    <section className="px-4 py-20 md:py-32 text-center relative">
      {hearts.map((h) => (
        <FloatingHeart key={h.id} id={h.id} x={h.x} />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <p className="font-handwritten text-lg text-muted-foreground mb-3">one last thing...</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif-display text-3xl md:text-5xl text-foreground mb-4 italic"
      >
        Will you let me make this right?
      </motion.h2>

      <div className="flex items-center justify-center gap-3 mb-12">
        <div className="w-12 h-px bg-primary/25" />
        <span className="text-primary/40 text-xs">♡</span>
        <div className="w-12 h-px bg-primary/25" />
      </div>

      <AnimatePresence mode="wait">
        {response === null ? (
          <motion.div
            key="buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-[140px]"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleYes}
              className="btn-yes px-10 py-4 rounded-full font-sans font-medium text-lg shadow-lg transition-colors duration-300"
            >
              Yes ♡
            </motion.button>
            <motion.button
              animate={{ x: noPosition.x, y: noPosition.y }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onMouseEnter={dodgeNo}
              onTouchStart={dodgeNo}
              className="btn-wait px-10 py-4 rounded-full font-sans font-medium text-lg transition-colors duration-300"
            >
              No
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="yes-response"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="font-handwritten text-3xl md:text-4xl text-foreground max-w-md mx-auto leading-relaxed">
              Thank you. I promise to be better.
            </p>
            <p className="font-handwritten text-2xl md:text-3xl text-foreground/70">
              I love you. 💛
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PromiseSection;
