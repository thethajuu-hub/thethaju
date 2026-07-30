"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const tagMap = {
  div: motion.div,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

export default function RevealText({
  children,
  as = "div",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: keyof typeof tagMap;
  delay?: number;
  className?: string;
}) {
  const MotionTag = tagMap[as];

  return (
    <div className="overflow-hidden">
      <MotionTag
        initial={{ clipPath: "inset(0 0 100% 0)", y: 30 }}
        whileInView={{ clipPath: "inset(0 0 0% 0)", y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </MotionTag>
    </div>
  );
}
