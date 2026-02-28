import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="pt-20 pb-12 md:pt-28 md:pb-16 px-4 text-center relative"
    >
      {/* Decorative floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0.3, 0], y: [-20, -80] }}
          transition={{ duration: 4, delay: 1.5 + i * 0.8, repeat: Infinity, repeatDelay: 3 + i }}
          className="absolute pointer-events-none"
          style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 15}%` }}
        >
          <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary/30 fill-primary/20" />
        </motion.div>
      ))}

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-handwritten text-lg md:text-xl text-muted-foreground mb-4 tracking-wide"
      >
        a letter written from the heart
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="text-5xl md:text-8xl font-serif-display font-medium italic tracking-wide text-foreground glow-text"
      >
        For Roshni
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="mt-6 mx-auto w-32 md:w-40 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="mt-6 font-handwritten text-xl md:text-2xl text-foreground/60"
      >
        ✦
      </motion.p>
    </motion.header>
  );
};

export default Header;
