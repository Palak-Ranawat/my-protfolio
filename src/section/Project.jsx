import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowDown } from "react-icons/fi";

import imgCurrency from "../assets/Screenshot 2026-06-24 180818.png";
import imgPassword from "../assets/Screenshot 2026-06-24 174639.png";

/* ─── project data ────────────────────────────────────────────────────────── */
const projects = [
  {
    id: "01",
    name: "Currency Converter",
    description:
      "A responsive currency converter that fetches real-time exchange rates via an open API, delivering accurate, instant conversions across 160+ currencies.",
    technologies: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Palak-Ranawat/Currency-Converter",
    live: "https://currency-converter442.netlify.app/",
    accent: "#1cd8d2",
    type: "currency",
  },
  {
    id: "02",
    name: "Password Generator",
    description:
      "An interactive password generator that builds cryptographically-strong passwords based on user-defined length, symbols, numbers, and case preferences.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Palak-Ranawat/password-generator",
    live: "https://password-genrator142a5.netlify.app/",
    accent: "#00bf8f",
    type: "password",
  },
];


function CurrencyVisual() {
  return (
    <div
      className="relative w-full"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#1cd8d2]/20 via-[#00bf8f]/10 to-[#302363]/20 blur-3xl pointer-events-none" />

      
      <motion.div
        whileHover={{ rotateX: 4, rotateY: -6, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080d10] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/[0.04] border border-white/5 flex items-center px-2.5 gap-2">
            <div className="w-3 h-3 rounded-full border border-white/20" />
            <div className="h-2 w-28 rounded bg-white/10" />
          </div>
        </div>

        {/* App screenshot */}
        <div className="w-full aspect-video bg-black/50 overflow-hidden relative">
          <img src={imgCurrency} alt="Currency Converter" className="w-full h-full object-cover" />
        </div>

       
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </div>
  );
}


function PasswordVisual() {
  return (
    <div
      className="relative w-full"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
     
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#302363]/30 via-[#00bf8f]/10 to-[#1cd8d2]/20 blur-3xl pointer-events-none" />

      
      <motion.div
        whileHover={{ rotateX: 4, rotateY: 6, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#080d10] shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)]"
        style={{ transformStyle: "preserve-3d" }}
      >
       
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8 bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="ml-3 flex-1 h-5 rounded-md bg-white/[0.04] border border-white/5 flex items-center px-2.5 gap-2">
            <div className="w-3 h-3 rounded-full border border-white/20" />
            <div className="h-2 w-28 rounded bg-white/10" />
          </div>
        </div>

        {/* App screenshot */}
        <div className="w-full aspect-video bg-black/50 overflow-hidden relative">
          <img src={imgPassword} alt="Password Generator" className="w-full h-full object-cover" />
        </div>

        
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
          }}
        />
      </motion.div>
    </div>
  );
}

/* ─── Main section ────────────────────────────────────────────────────────── */
export default function Project() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });


  const p1Opacity = useTransform(smooth, [0, 0.05, 0.38, 0.52], [0, 1, 1, 0]);
  const p1Y      = useTransform(smooth, [0, 0.05, 0.52], [40, 0, -50]);
  const p1Scale  = useTransform(smooth, [0.38, 0.52], [1, 0.93]);

 
  const p2Opacity = useTransform(smooth, [0.48, 0.62, 0.95, 1], [0, 1, 1, 0]);
  const p2Y       = useTransform(smooth, [0.48, 0.62], [50, 0]);
  const p2Scale   = useTransform(smooth, [0.48, 0.62], [0.93, 1]);

 
  const dot1 = useTransform(smooth, [0, 0.45], [1, 0.3]);
  const dot2 = useTransform(smooth, [0.45, 0.65], [0.3, 1]);


  const countOpacity1 = useTransform(smooth, [0, 0.04, 0.44, 0.52], [0, 1, 1, 0]);
  const countOpacity2 = useTransform(smooth, [0.48, 0.56], [0, 1]);

 
  const progressWidth = useMotionTemplate`${useTransform(smooth, [0, 1], [0, 100])}%`;

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative bg-black text-white"
    >
     
      <div className="sticky top-0 h-screen overflow-hidden">

        
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1cd8d2] opacity-[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#302363] opacity-[0.06] blur-[100px] pointer-events-none" />

        <div className="relative h-full flex flex-col px-6 md:px-12 lg:px-20 py-12 sm:py-16 max-w-7xl mx-auto">

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="shrink-0 mb-8 sm:mb-10"
          >
            <p className="text-[#1cd8d2] text-xs sm:text-sm uppercase tracking-[0.3em] mb-2 sm:mb-3">
              Featured Work
            </p>

            <div className="flex items-end justify-between gap-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Recent{" "}
                <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>

              
              <div className="hidden sm:block relative w-24 text-right shrink-0">
                <motion.span
                  style={{ opacity: countOpacity1 }}
                  className="absolute right-0 text-3xl font-semibold text-white/40"
                >
                  01
                  <span className="text-white/15"> / 02</span>
                </motion.span>
                <motion.span
                  style={{ opacity: countOpacity2 }}
                  className="absolute right-0 text-3xl font-semibold text-white/40"
                >
                  02
                  <span className="text-white/15"> / 02</span>
                </motion.span>
              </div>
            </div>

            {/* Thin animated progress bar */}
            <div className="mt-4 h-[2px] rounded-full bg-white/[0.06] overflow-hidden max-w-xs">
              <motion.div
                style={{ width: progressWidth }}
                className="h-full rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]"
              />
            </div>
          </motion.div>

          
          <div className="relative flex-1 min-h-0">

            {/* PROJECT 1 */}
  <motion.div
  style={{ opacity: p1Opacity, y: p1Y, scale: p1Scale }}
  className="absolute inset-0 flex items-center will-change-transform"
>
             <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* Text — left on desktop */}
                <div className="order-2 lg:order-1 flex flex-col justify-center">
                  <span className="text-[#1cd8d2] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                    Project 01
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Currency <br className="hidden lg:block" />Converter
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {projects[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs border border-[#1cd8d2]/20 bg-[#1cd8d2]/5 text-[#1cd8d2]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={projects[0].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black text-sm font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#1cd8d2]/20"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                    <a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm hover:bg-white/8 hover:border-white/25 transition-all"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Visual — right on desktop */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="w-full max-w-[480px]">
                    <CurrencyVisual />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div
              style={{ opacity: p2Opacity, y: p2Y, scale: p2Scale }}
              className="absolute inset-0 flex items-center will-change-transform"
            >
              <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* Visual — left on desktop for project 2 */}
                <div className="order-1 flex justify-center lg:justify-start">
                  <div className="w-full max-w-[480px]">
                    <PasswordVisual />
                  </div>
                </div>

                {/* Text — right on desktop */}
                <div className="order-2 flex flex-col justify-center">
                  <span className="text-[#00bf8f] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                    Project 02
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Password <br className="hidden lg:block" />Generator
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mb-6">
                    {projects[1].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-7">
                    {projects[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs border border-[#00bf8f]/20 bg-[#00bf8f]/5 text-[#00bf8f]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={projects[1].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black text-sm font-semibold hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-[#00bf8f]/20"
                    >
                      <FiExternalLink />
                      Live Demo
                    </a>
                    <a
                      href={projects[1].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-sm hover:bg-white/8 hover:border-white/25 transition-all"
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          
          <div className="shrink-0 mt-6 sm:mt-8 flex items-center justify-between">
          
            <div className="flex items-center gap-3">
              <motion.div
                style={{ opacity: dot1 }}
                className="w-6 h-1.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]"
              />
              <motion.div
                style={{ opacity: dot2 }}
                className="w-6 h-1.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f]"
              />
            </div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex items-center gap-2 text-white/25 text-xs"
            >
              <span className="hidden sm:inline">Scroll to explore</span>
              <FiArrowDown className="animate-bounce" />
            </motion.div>
          </div>
        </div>

        {/* Bottom separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] origin-left"
        />
      </div>
    </section>
  );
}