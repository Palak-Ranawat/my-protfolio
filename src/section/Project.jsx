import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: "01",
    name: "Currency Converter",
    description:
      "A responsive currency converter application that fetches real-time exchange rates via an API to calculate accurate currency conversions.",
    technologies: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Palak-Ranawat/Currency-Converter",
    live: "https://currency-converter442.netlify.app/",
  },
  {
    id: "02",
    name: "Password Generator",
    description:
      "An interactive password generator that creates secure, customized passwords based on selectable options and character preferences.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Palak-Ranawat/password-generator",
    live: "https://password-genrator142a5.netlify.app/",
  },
];

export default function Project() {
  return (
    <section
      id="project"
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
            Featured Work
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Recent
            <span className="block bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.05] transition-colors duration-300"
            >
              <div>
                {/* CARD HEADER */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-sm font-semibold ${
                      index % 2 === 0 ? "text-[#1cd8d2]" : "text-[#00bf8f]"
                    }`}
                  >
                    {item.id}
                  </span>
                </div>

                {/* PROJECT TITLE */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {item.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* TECHNOLOGIES BADGES */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit live demo for ${item.name}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-200"
                >
                  <FiExternalLink className="text-base" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${item.name} on GitHub`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-200"
                >
                  <FiGithub className="text-base" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.article>
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
