import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="pt-16 pb-8 px-4 text-center"
    >
      <h1 className="text-5xl md:text-7xl font-serif-display font-medium italic tracking-wide text-foreground glow-text">
        For Roshni
      </h1>
      <div className="mt-4 mx-auto w-24 h-0.5 bg-primary/40 rounded-full" />
    </motion.header>
  );
};

export default Header;
