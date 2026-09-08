
import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  // Home section observer
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);

        if (timerId.current) {
          clearTimeout(timerId.current);
        }

        timerId.current = setTimeout(() => {
          setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Palak logo"
            className="w-9 h-8"
          />

          <div className="text-2xl font-bold text-white hidden sm:block">
            Palak
          </div>
        </div>

        {/* Menu Button */}
        <div className="block lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* Reach Out */}
        <div>
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] text-black px-5 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      {/* Overlay Menu */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
