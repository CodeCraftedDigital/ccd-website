"use client";

import { motion } from "framer-motion";
import {
  siReact,
  siNextdotjs,
  siOpenjdk,
  siPython,
  siWordpress,
  siZoho,
} from "simple-icons";

const techStack = [
  { name: "React", icon: siReact, color: "#61DAFB" },
  { name: "Next.js", icon: siNextdotjs, color: "#000000" },
  { name: "Java", icon: siOpenjdk, color: "#007396" },
  { name: "Python", icon: siPython, color: "#3776AB" },
  { name: "WordPress", icon: siWordpress, color: "#21759B" },
  { name: "Zoho", icon: siZoho, color: "#C8202E" },
];

export function TechStackMarquee() {
  return (
    <section className='py-12 bg-card/50 border-y border-white/5 overflow-hidden'>
      <div className='relative flex'>
        {/* Animated logos */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          className='flex gap-8 items-center shrink-0'
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              whileHover={{ scale: 1.1, y: -4 }}
              className='flex items-center gap-3 px-6 cursor-pointer group'
            >
              <div className='relative'>
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8 transition-all duration-300'
                  fill='currentColor'
                  style={{ color: "#64748b" }}
                >
                  <path d={tech.icon.path} />
                </svg>
                <div
                  className='absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity'
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <span className='font-medium text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap'>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Duplicate for seamless loop */}
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          }}
          className='flex gap-8 items-center shrink-0'
        >
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <motion.div
              key={`${tech.name}-dup-${index}`}
              whileHover={{ scale: 1.1, y: -4 }}
              className='flex items-center gap-3 px-6 cursor-pointer group'
            >
              <div className='relative'>
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8 transition-all duration-300'
                  fill='currentColor'
                  style={{ color: "#64748b" }}
                >
                  <path d={tech.icon.path} />
                </svg>
                <div
                  className='absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity'
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <span className='font-medium text-sm text-gray-400 group-hover:text-white transition-colors whitespace-nowrap'>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
