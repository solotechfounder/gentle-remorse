import { motion } from "framer-motion";

const LetterSection = () => {
  return (
    <section className="px-4 py-12 md:py-20 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="letter-card rounded-sm p-8 md:p-12 max-w-2xl w-full relative"
        style={{ transform: "rotate(-0.5deg)" }}
      >
        <h2 className="font-serif-display text-2xl md:text-3xl text-foreground mb-6 text-center">
          My Apology
        </h2>
        <div className="w-12 h-px bg-primary/30 mx-auto mb-8" />
        <div className="font-handwritten text-xl md:text-2xl leading-relaxed space-y-4 text-left" style={{ color: "hsl(var(--letter-text))" }}>
          <p>Dear Roshni,</p>
          <p>
            I've been sitting with my thoughts, turning them over and over, trying to find
            the right words. But the truth is, there are no perfect words for how sorry I am.
          </p>
          <p>
            I hurt you, and that's something I carry with me every single day. You deserved
            better — better words, better actions, a better version of me. And I failed you
            in a moment when you needed me most.
          </p>
          <p>
            You are the most beautiful thing that has ever happened to my life. Your laugh,
            your kindness, the way you see the world — it all makes me want to be someone
            worthy of standing beside you.
          </p>
          <p>
            I'm not asking you to forget. I'm asking for a chance to show you, day by day,
            that I can be the person you believed I was. The person I want to be — for you,
            for us.
          </p>
          <p>
            I love you more than I know how to say. And I'm so, so sorry.
          </p>
          <p className="mt-8 text-right">
            Forever yours,<br />
            Akash 💛
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LetterSection;
