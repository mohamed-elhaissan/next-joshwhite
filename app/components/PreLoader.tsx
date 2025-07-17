"use client";
import { motion } from "framer-motion";

export default function PreLoader() {
 


  return (
    <motion.div
      initial={{
        y: "0",
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y : "-100%"
      }}
      transition={{
        duration : 1,
        ease : "easeInOut"
      }}
      className=" absolute left-0 top-0 bg-[var(--preLoaderBackground)] h-screen w-screen"
    >
      <div className="h-full w-full flex items-center justify-center flex-col">
        <h2 className="text-9xl   overflow-hidden font-black uppercase">
          {"Initializing".split("").map((item: string, index: number) => (
            <motion.span
              className="inline-block"
              initial={{
                y: "-100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0.05 * index,
              }}
              key={index}
            >
              {item}
            </motion.span>
          ))}
        </h2>
        <p className="text-2xl   overflow-hidden font-semibold uppercase">
          {"Loading...".split("").map((item: string, index: number) => (
            <motion.span
              className="inline-block"
              initial={{
                y: "100%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                type: "spring",
                ease: "easeInOut",
                delay: 0.05 * index,
              }}
              key={index}
            >
              {item}
            </motion.span>
          ))}
        </p>
      </div>
    </motion.div>
  );
}
