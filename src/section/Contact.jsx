import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiSend, FiCheckCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Sending email...");
    console.log("Service ID:", SERVICE_ID);
    console.log("Template ID:", TEMPLATE_ID);
    console.log("Public ID:", PUBLIC_ID);

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      PUBLIC_ID
    );

    console.log("EmailJS response:", response);

    setSubmitted(true);
  } catch (error) {
    console.error("EMAILJS ERROR:", error);
    console.error("Error text:", error?.text);
    console.error("Error status:", error?.status);

    alert(
      `Failed to send message.\n\n${error?.text || "Check the browser console."}`
    );
  }
};

  return (
    <section
      id="contact"
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
            Get in Touch
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            Let's
            <span className="block bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302363] bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN - INFO & PROFILES */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Have an opportunity or project in mind?
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I'm actively looking for frontend developer internships and entry-level opportunities. Whether you want to discuss potential roles or review my code, I'd love to hear from you.
              </p>
            </div>

            {/* GITHUB LINK CARD */}
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">
                Source Code & Activity
              </p>
              <a
                href="https://github.com/Palak-Ranawat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full text-white hover:text-[#1cd8d2] transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#1cd8d2]/40 transition-colors">
                    <FiGithub className="text-xl" />
                  </div>
                  <div>
                    <span className="font-semibold block">GitHub</span>
                    <span className="text-xs text-gray-400">@Palak-Ranawat</span>
                  </div>
                </div>
                <FiExternalLink className="text-gray-400 group-hover:text-[#1cd8d2] transition-colors text-lg" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-6 sm:p-10 backdrop-blur-xs">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#1cd8d2]/10 border border-[#1cd8d2]/20 flex items-center justify-center mb-4">
                    <FiCheckCircle className="text-2xl text-[#1cd8d2]" />
                  </div>
             <h4 className="text-2xl font-bold text-white mb-2">
  Message Sent Successfully!
</h4>

<p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto mb-4">
  Thank you,{" "}
  <span className="font-semibold text-white">
    {formData.name}
  </span>
  ! Your message has been sent successfully.
</p>

<p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto mb-8">
  I'll get back to you as soon as possible.
</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/70 focus:ring-1 focus:ring-[#1cd8d2]/40 transition-all duration-200 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/70 focus:ring-1 focus:ring-[#1cd8d2]/40 transition-all duration-200 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#1cd8d2]/70 focus:ring-1 focus:ring-[#1cd8d2]/40 transition-all duration-200 resize-none text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black font-semibold text-sm sm:text-base hover:opacity-90 active:scale-95 transition-all duration-200 cursor-pointer"
                  >
                    <FiSend className="text-base" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
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
