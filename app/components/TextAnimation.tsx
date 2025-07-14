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
      <div>
        {title.split("").map((l, i) => (
          <motion.span
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
              delay: i * 0.025,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className=" absolute inset-0">
        {title.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
                opacity: 0,
              },
              hovered: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: i * 0.025,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
