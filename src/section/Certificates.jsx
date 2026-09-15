import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiX } from "react-icons/fi";

import certIoT from "../assets/IoT_certificate_Palak.png";
import certSaylor from "../assets/IMG_20260915_165811.jpg";
import certHackathon from "../assets/IMG_20260609_083252.jpg";

/* ─── Certificate data ───────────────────────────────────────────────────── */
const certificates = [
  {
    id: "01",
    title: "Introduction to IoT and Digital Transformation",
    organization: "Cisco Networking Academy",
    highlight: "Networking & IoT",
    description:
      "Covers foundational concepts of the Internet of Things (IoT), digital transformation strategies, and how connected devices are reshaping industries.",
    accent: "#1cd8d2",
    image: certIoT,
  },
  {
    id: "02",
    title: "Group Communication",
    organization: "Saylor Academy",
    highlight: "Communication",
    description:
      "Explores principles of effective group dynamics, collaborative communication strategies, and professional team interaction skills.",
    accent: "#00bf8f",
    image: certSaylor,
  },
  {
    id: "03",
    title: "Vision 2047 — Viksit Bharat Hackathon",
    organization: "BGI Hackathon",
    highlight: "Volunteering & Hackathon",
    description:
      "Active volunteer and participant in the Vision 2047 — Viksit Bharat Hackathon, contributing to innovation-driven initiatives aligned with national development goals.",
    accent: "#302363",
    image: certHackathon,
  },
];

/* ─── Container animation ────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── Single certificate card ────────────────────────────────────────────── */
function CertCard({ cert, onClick }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.025] backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/15"
    >
      {/* Gradient top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl z-10"
        style={{
          background: `linear-gradient(90deg, ${cert.accent}99, transparent)`,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{
          background: `radial-gradient(400px circle at 50% 0%, ${cert.accent}12, transparent 70%)`,
        }}
      />

      {/* Image Section */}
      <div 
        className="relative h-48 sm:h-56 overflow-hidden cursor-pointer bg-black/40"
        onClick={() => onClick(cert)}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain p-4"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
          <span className="px-4 py-2 bg-black/70 rounded-full text-xs font-semibold backdrop-blur-md shadow-lg border border-white/10 text-white">
            Click to expand
          </span>
        </div>
      </div>

      <div className="relative p-6 flex flex-col flex-1 border-t border-white/5">
        {/* Top row: icon + id */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
            style={{
              background: `${cert.accent}15`,
              borderColor: `${cert.accent}35`,
            }}
          >
            <FiAward style={{ color: cert.accent }} className="text-lg" />
          </div>

          <span className="text-white/20 font-bold text-xs tracking-widest shrink-0 ml-4 mt-1">
            {cert.id}
          </span>
        </div>

        {/* Highlight pill */}
        <span
          className="inline-block self-start text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full mb-3 border"
          style={{
            color: cert.accent,
            background: `${cert.accent}10`,
            borderColor: `${cert.accent}30`,
          }}
        >
          {cert.highlight}
        </span>

        {/* Title */}
        <h3 className="text-white font-bold text-lg leading-snug mb-1">
          {cert.title}
        </h3>

        {/* Issuing org */}
        <p
          className="text-sm font-semibold mb-3"
          style={{ color: cert.accent }}
        >
          {cert.organization}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {cert.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────────────── */
export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className="relative bg-black text-white py-24 sm:py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Background ambient glows */}
        <div className="absolute top-1/4 -left-20 w-[360px] h-[360px] rounded-full bg-[#1cd8d2] opacity-[0.05] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] rounded-full bg-[#302363] opacity-[0.07] blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-18"
          >
            <p className="text-[#1cd8d2] text-xs sm:text-sm uppercase tracking-[0.3em] mb-3">
              Certifications &amp; Achievements
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Certi
              <span className="bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
                ficates
              </span>
            </h2>
          </motion.div>

          {/* ── Cards grid ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {certificates.map((cert) => (
              <CertCard key={cert.id} cert={cert} onClick={setSelectedCert} />
            ))}
          </motion.div>
        </div>

        {/* Bottom separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="origin-left mt-24 h-px bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363]"
        />
      </section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-[110]"
            >
              <FiX className="text-2xl" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
