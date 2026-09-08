
import { FaJava, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiAngular,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

import {
  motion,
  useMotionValue,
  animate,
} from "framer-motion";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  // --------------------------------
  // Skills
  // --------------------------------

  const skills = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiPython />, name: "Python" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiAngular />, name: "Angular" },
  ];

  // Duplicate skills for infinite slider
  const repeated = [...skills, ...skills];

  // --------------------------------
  // States
  // --------------------------------

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);

  // --------------------------------
  // Refs
  // --------------------------------

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchStart = useRef(null);

  // --------------------------------
  // Motion value
  // --------------------------------

  const x = useMotionValue(0);

  // --------------------------------
  // Auto Slider
  // --------------------------------

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animation;

    const startAnimation = () => {
      const width = track.scrollWidth / 2;

      animation = animate(
        x,
        dir === -1 ? -width : 0,
        {
          duration: 18,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      );
    };

    if (!active) {
      startAnimation();
    }

    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [dir, active, x]);

  // --------------------------------
  // Mouse / Touch Controls
  // --------------------------------

  const handlePointerDown = (e) => {
    setActive(true);

    touchStart.current = e.clientX;

    x.stop();
  };

  const handlePointerMove = (e) => {
    if (!active || touchStart.current === null) return;

    const currentX = e.clientX;
    const difference = currentX - touchStart.current;

    x.set(x.get() + difference);

    touchStart.current = currentX;
  };

  const handlePointerUp = () => {
    setActive(false);
    touchStart.current = null;
  };

  // --------------------------------
  // Direction Change
  // --------------------------------

  const changeDirection = () => {
    setDir((prev) => prev * -1);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="
        relative
        min-h-[60vh]
        w-full
        overflow-hidden
        bg-black
        px-4
        py-16
        flex
        flex-col
        items-center
        justify-center
      "
    >
      {/* -------------------------------- */}
      {/* Background Glow */}
      {/* -------------------------------- */}

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-1/4
            left-[-100px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#1cd8d2]
            opacity-10
            blur-[90px]
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            right-[-100px]
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#302363]
            opacity-10
            blur-[90px]
          "
        />

      </div>

      {/* -------------------------------- */}
      {/* Heading */}
      {/* -------------------------------- */}

      <motion.h2
        className="
          relative
          z-10
          text-4xl
          sm:text-5xl
          font-bold
          bg-gradient-to-r
          from-[#1cd8d2]
          via-[#00bf8f]
          to-[#302363]
          bg-clip-text
          text-transparent
        "
        initial={{
          opacity: 0,
          y: -30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        My Skills
      </motion.h2>

      {/* -------------------------------- */}
      {/* Subtitle */}
      {/* -------------------------------- */}

      <motion.p
        className="
          relative
          z-10
          mt-2
          mb-8
          text-center
          text-base
          sm:text-lg
          text-white/80
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        viewport={{
          once: true,
        }}
      >
        Modern Applications | Modern Technologies
      </motion.p>

      {/* -------------------------------- */}
      {/* Skills Slider */}
      {/* -------------------------------- */}

      <div
        className="
          relative
          z-10
          w-full
          overflow-hidden
          cursor-grab
          active:cursor-grabbing
          select-none
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="
            flex
            w-max
            gap-10
            sm:gap-14
          "
        >
          {repeated.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="
                flex
                min-w-[120px]
                sm:min-w-[140px]
                flex-col
                items-center
                justify-center
                gap-3
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-20
                  w-20
                  sm:h-24
                  sm:w-24
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  text-5xl
                  sm:text-6xl
                  text-[#1cd8d2]
                  transition-transform
                  duration-300
                  hover:scale-110
                "
              >
                {skill.icon}
              </div>

              {/* Name */}

              <span
                className="
                  text-sm
                  sm:text-base
                  font-medium
                  text-white/90
                  whitespace-nowrap
                "
              >
                {skill.name}
              </span>

            </div>
          ))}
        </motion.div>
      </div>

      {/* -------------------------------- */}
      {/* Direction Button */}
      {/* -------------------------------- */}

      <button
        onClick={changeDirection}
        className="
          relative
          z-20
          mt-8
          rounded-full
          border
          border-white/10
          bg-white/5
          px-5
          py-2
          text-sm
          text-white
          backdrop-blur-sm
          transition
          duration-300
          hover:bg-white/10
          hover:scale-105
        "
      >
        {dir === -1 ? "← Reverse" : "→ Reverse"}
      </button>

    </section>
  );
}

