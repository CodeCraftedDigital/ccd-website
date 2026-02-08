"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className='absolute inset-0'>
      <motion.div style={{ y }} className='absolute inset-0 z-0'>
        {/* Pure gradient background - no image for max performance */}
        <div className='absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80' />
      </motion.div>
    </div>
  );
}
