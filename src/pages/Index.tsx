import Header from "@/components/Header";
import LetterSection from "@/components/LetterSection";
import MemoryTimeline from "@/components/MemoryTimeline";
import PromiseSection from "@/components/PromiseSection";
import AudioToggle from "@/components/AudioToggle";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-x-hidden">
      <div className="relative z-10">
        <Header />

        {/* Decorative section divider */}
        <div className="flex items-center justify-center gap-2 py-4">
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          <div className="w-1 h-1 rounded-full bg-primary/20" />
        </div>

        <LetterSection />

        <div className="flex items-center justify-center gap-2 py-8">
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          <div className="w-1 h-1 rounded-full bg-primary/20" />
        </div>

        <MemoryTimeline />

        <div className="flex items-center justify-center gap-2 py-8">
          <div className="w-1 h-1 rounded-full bg-primary/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          <div className="w-1 h-1 rounded-full bg-primary/20" />
        </div>

        <PromiseSection />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pb-24 pt-8"
        >
          <p className="font-handwritten text-lg text-muted-foreground/50">
            made with all my love ♡
          </p>
        </motion.footer>
      </div>
      <AudioToggle />
    </div>
  );
};

export default Index;
