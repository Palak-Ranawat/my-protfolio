
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
];

export default function IntroAnimation() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Change greeting
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 500);

    // Finish intro
    const timeout = setTimeout(() => {
      setFinished(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {!finished && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{
            duration: 1,
            delay: 3,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetings[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white"
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

