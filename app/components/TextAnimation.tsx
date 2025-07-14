"use client";

import { motion } from "framer-motion";

export default function TextAnimation({
  title,
  semiTitle,
}: {
  title: string;
  semiTitle: string;
}) {
  return (
    <motion.div
      initial="initial "
      whileHover="hovered"
      className="overflow-hidden relative"
    >
      <motion.div
        variants={{
          initial: {
            y: "0",
            opacity: 0,
          },
          hovered: {
            y: "-100%",
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
          delay: 0.025,
        }}
      >
        {title.split("").map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </motion.div>
    </motion.div>
  );
}
