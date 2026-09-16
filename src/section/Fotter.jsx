import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

export default function Fotter() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative bg-black text-white px-6 md:px-12 lg:px-20 py-12 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            Palak{" "}
            <span className="bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] bg-clip-text text-transparent">
              Ranawat
            </span>
          </a>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Frontend Developer
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Palak-Ranawat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#1cd8d2]/50 hover:bg-white/10 transition-all duration-200"
          >
            <FiGithub className="text-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/palak-ranawat-83420b359?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#1cd8d2]/50 hover:bg-white/10 transition-all duration-200"
          >
            <FiLinkedin className="text-lg" />
          </a>
        </div>

        {/* COPYRIGHT & BACK TO TOP */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-right">
          <p>© {currentYear} Palak Ranawat. All rights reserved.</p>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            <FiArrowUp className="text-sm" />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
