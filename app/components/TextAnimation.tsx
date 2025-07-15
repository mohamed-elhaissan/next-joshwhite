"use client";

import { motion } from "framer-motion";

export default function TextAnimation({
  title,
  semiTitle,
}: {
  title: string;
  semiTitle: string;
}) {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="overflow-hidden relative"
    >
      {" "}
      <motion.div>
        {title.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {semiTitle.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
