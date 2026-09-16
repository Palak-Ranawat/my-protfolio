
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function OverlayMenu({ isOpen, onClose }) {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 1024;

  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{
            clipPath: `circle(0% at ${origin})`,
          }}
          animate={{
            clipPath: `circle(150% at ${origin})`,
          }}
          exit={{
            clipPath: `circle(0% at ${origin})`,
          }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0.2, 1, 1],
          }}
          style={{
            background: "rgba(0,0,0,0.95)",
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white text-3xl"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center">
            {[
              "Home",
              "About",
              "Skills",
              "Project",
              "Experience",
              "Certificates",
              "Contact",
            ].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * index }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-4xl text-white font-semibold hover:text-[#1cd8d2] transition-colors duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

