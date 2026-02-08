"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
}

export function StaggerChildren({
  children,
  className = "",
}: StaggerChildrenProps) {
  return (
    <motion.ul
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.li>
  );
}
