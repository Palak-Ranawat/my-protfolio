import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiTarget, FiArrowRight } from "react-icons/fi";

const experienceItems = [
  {
    step: "01",
    title: "Project-Driven Learning",
    icon: <FiCode className="text-xl text-[#1cd8d2]" />,
    description:
      "Actively building responsive, interactive web applications from scratch to master real-world frontend development and problem solving.",
    tags: ["React", "JavaScript", "API Integration", "State Management"],
  },
  {
    step: "02",
    title: "Modern Development Standards",
    icon: <FiLayers className="text-xl text-[#00bf8f]" />,
    description:
      "Deepening practical knowledge in clean code practices, modern CSS with Tailwind, component-based architectures, and fluid animations.",
    tags: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Git"],
  },
  {
    step: "03",
    title: "Open to New Opportunities",
    icon: <FiTarget className="text-xl text-[#1cd8d2]" />,
    description:
      "Prepared and eager to contribute to collaborative engineering teams through an internship or entry-level frontend developer role.",
    tags: ["Internship Ready", "Fast Learner", "Team Collaboration"],
    isOpportunity: true,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
            Journey & Focus
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Hands-on
            <span className="block bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="max-w-2xl mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            I am currently focusing on building hands-on expertise through personal projects, practical coding challenges, and continuous self-directed learning.
          </p>
        </motion.div>

        {/* EXPERIENCE / FOCUS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div>
                {/* TOP ROW */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500">
                    {item.step}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                {/* TAGS */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                
                {item.isOpportunity && (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1cd8d2] hover:text-[#00bf8f] transition-colors duration-200"
                  >
                    <span>Get in touch</span>
                    <FiArrowRight className="text-base" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
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
