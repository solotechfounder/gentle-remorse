import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
    // Audio functionality placeholder - user can add their own audio source
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 audio-btn w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {playing ? (
        <Pause className="w-5 h-5 text-foreground" />
      ) : (
        <Play className="w-5 h-5 text-foreground ml-0.5" />
      )}
    </motion.button>
  );
};

export default AudioToggle;
