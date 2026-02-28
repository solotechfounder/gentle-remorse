import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 audio-btn w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-primary/10"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <Pause className="w-5 h-5 text-foreground/70" />
      ) : (
        <Play className="w-5 h-5 text-foreground/70 ml-0.5" />
      )}
      {playing && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default AudioToggle;
