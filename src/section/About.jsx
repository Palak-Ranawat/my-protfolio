import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#1cd8d2] text-sm md:text-base uppercase tracking-[0.3em] mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Palak
            <span className="block bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Ranawat
            </span>
          </h2>
        </motion.div>


        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I'm Palak, a Computer Science Engineering student and
              frontend developer who loves creating modern and interactive
              web experiences.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6">
              I enjoy turning ideas into clean, responsive and visually
              engaging websites using React, JavaScript, Tailwind CSS and
              Framer Motion.
            </p>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-6">
              I'm continuously learning new technologies and improving my
              skills by building real-world projects.
            </p>
          </motion.div>


          {/* RIGHT - WHAT I DO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="space-y-6"
          >

            {/* CARD 1 */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/20 pt-5"
            >
              <div className="flex items-start gap-5">
                <span className="text-[#1cd8d2] text-sm">
                  01
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    Frontend Development
                  </h3>

                  <p className="text-gray-400 mt-2 leading-relaxed">
                    Building responsive and interactive interfaces with
                    React, JavaScript and Tailwind CSS.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* CARD 2 */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/20 pt-5"
            >
              <div className="flex items-start gap-5">
                <span className="text-[#00bf8f] text-sm">
                  02
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    Creative UI
                  </h3>

                  <p className="text-gray-400 mt-2 leading-relaxed">
                    Creating clean layouts, smooth animations and
                    memorable user experiences.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* CARD 3 */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/20 pt-5"
            >
              <div className="flex items-start gap-5">
                <span className="text-[#1cd8d2] text-sm">
                  03
                </span>

                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    Continuous Learning
                  </h3>

                  <p className="text-gray-400 mt-2 leading-relaxed">
                    Exploring new technologies and building projects to
                    become a better developer every day.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>


        {/* BOTTOM LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="origin-left mt-24 h-px bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363]"
        />

      </div>
    </section>
  );
}