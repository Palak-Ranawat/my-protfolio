import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiArrowRight } from "react-icons/fi";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-20 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#1cd8d2] text-sm md:text-base uppercase tracking-[0.3em] mb-3">
            Endorsements & Feedback
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Client & Team
            <span className="block bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
        </motion.div>

        {/* MAIN SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto rounded-3xl bg-white/[0.03] border border-white/10 p-8 sm:p-12 md:p-16 text-center hover:border-white/20 transition-all duration-300"
        >
          {/* ICON BADGE */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
            <FiMessageSquare className="text-2xl text-[#1cd8d2]" />
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Testimonials Coming Soon
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            As an aspiring frontend developer at the start of my professional career, I am actively seeking my first industry role. Feedback and recommendations from future teammates, mentors, and clients will be proudly highlighted here.
          </p>

          <div className="inline-block p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 max-w-xl mx-auto mb-10 text-left sm:text-center">
            <p className="text-gray-300 text-sm sm:text-base italic">
              "Dedicated to writing clean code, learning rapidly, and collaborating closely with engineering teams to build impactful digital products."
            </p>
          </div>

          {/* CTA BUTTON */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-semibold text-sm sm:text-base hover:opacity-90 active:scale-95 transition-all duration-200"
            >
              <span>Let's Work Together</span>
              <FiArrowRight className="text-lg" />
            </a>
          </div>
        </motion.div>

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
