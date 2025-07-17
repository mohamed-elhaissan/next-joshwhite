"use client";

import Image from "next/image";
import TextAnimation from "./TextAnimation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-[100vh]  bg-[var(--background)] p-10 sm:p-20 flex flex-col items-start gap-20 justify-end rounded-2xl">
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          duration: 2,
          bounce: 0,
        }}
      >
        <Image
          src={
            "https://framerusercontent.com/images/0yOcRB6WzTI3QPLHaLLEeX8Hp6Q.svg"
          }
          width={100}
          height={100}
          alt="Logo"
        />
        <motion.h2 className="w-full  text-xl md:text-4xl mt-10 2xl:w-1/2">
          <motion.span
            initial={{
              y: -10,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0,
            }}
            className="inline-block"
          >
            Bristol based digital designer crafting engaging, human-focused
            digital experiences for a range of forward-thinking brands.
          </motion.span>
        </motion.h2>
      </motion.div>
      <div className="flex items-center justify-between  w-full ">
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60"
        >
          <h3>Freelance</h3>
          <p>Digital Designer</p>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60"
        >
          <h3>Based in</h3>
          <p>Bristol</p>
        </motion.div>
        <motion.div
          initial={{
            scale: 0.5,
            y: 50,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
          }}
          className="opacity-60 hover:opacity-100"
        >
          <h3>Get in touch</h3>
          <span className="cursor-pointer hover:opacity-100">
            <TextAnimation
              title="hello@joshwhite.design"
              semiTitle="hello@joshwhite.design"
            />
          </span>
        </motion.div>
      </div>
    </div>
  );
}
