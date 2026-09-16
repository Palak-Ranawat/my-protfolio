
import React from "react";
import { motion } from "framer-motion";
import resume from "../assets/palak resume.pdf";
export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 3.8
            }}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 4
            }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
          >
            Palak
          </motion.h1>

          {/* Profession */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 4.2
            }}
            className="mt-4 text-2xl md:text-4xl font-semibold"
          >
            <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Frontend Developer
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 4.4
            }}
            className="max-w-xl mt-6 text-gray-400 text-base md:text-lg leading-relaxed"
          >
           Frontend Developer focused on building responsive and user-friendly web applications with React and JavaScript.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 4.6
            }}
            className="flex justify-center md:justify-start gap-4 mt-8"
          >
            <a
              href="#project"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-semibold hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>

           <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-full border border-white/30 font-semibold hover:bg-white hover:text-black transition-all duration-300"
>
  View Resume
</a>
          </motion.div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 3.6
          }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1cd8d2] to-[#302363] rounded-full blur-3xl opacity-30" />

            {/* Image */}
            <img
              src="public\profile.jpg"
              alt="Palak"
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
