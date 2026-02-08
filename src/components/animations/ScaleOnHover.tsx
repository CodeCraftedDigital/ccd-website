"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScaleOnHoverProps {
  children: ReactNode;
  className?: string;
}

export function ScaleOnHover({ children, className = "" }: ScaleOnHoverProps) {
  return (
    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={className}>
      {children}
    </motion.div>
  );
}
