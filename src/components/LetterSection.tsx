import { motion } from "framer-motion";

const LetterSection = () => {
  return (
    <section className="px-4 py-8 md:py-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-2xl w-full"
      >
        {/* Decorative corner flourishes */}
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-sm" />
        <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-sm" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-sm" />
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-sm" />

        <div
          className="letter-card rounded-sm p-8 md:p-14 relative overflow-hidden"
          style={{ transform: "rotate(-0.3deg)" }}
        >
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M5 0h1L0 5V4zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E\")" }}
          />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif-display text-2xl md:text-3xl text-foreground mb-2 text-center italic"
          >
            My Apology
          </motion.h2>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary/25" />
            <span className="text-primary/40 text-sm">♡</span>
            <div className="w-12 h-px bg-primary/25" />
          </div>

          <div className="font-handwritten text-xl md:text-2xl leading-relaxed space-y-5 text-left relative" style={{ color: "hsl(var(--letter-text))" }}>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Dear Roshni,
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              I've been sitting with my thoughts, turning them over and over, trying to find
              the right words. But the truth is, there are no perfect words for how sorry I am.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              I hurt you, and that's something I carry with me every single day. You deserved
              better — better words, better actions, a better version of me. And I failed you
              in a moment when you needed me most.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 }}>
              You are the most beautiful thing that has ever happened to my life. Your laugh,
              your kindness, the way you see the world — it all makes me want to be someone
              worthy of standing beside you.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
              I'm not asking you to forget. I'm asking for a chance to show you, day by day,
              that I can be the person you believed I was. The person I want to be — for you,
              for us.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.9 }}>
              I love you more than I know how to say. And I'm so, so sorry.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="mt-10 text-right"
            >
              Forever yours,<br />
              <span className="text-2xl md:text-3xl">Akash</span> 💛
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LetterSection;
