"use client";

import { motion } from "framer-motion";
import TextAnimation from "./TextAnimation";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.div
    initial={{
      y: "-100%",
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      type: "spring",
      ease: "easeInOut",
    }}
    className=" flex flex-col gap-10 text-[#befc65] pt-40 md:px-20 px-5 tracking-tight">
      <span className="md:text-4xl text-2xl text-[#888888]">
        Have a project in mind?
      </span>
      <div>
        <h2 className="md:text-9xl text-7xl">✺ Let's Chat</h2>
      </div>
      <Link href={"."} className="md:text-4xl text-xl">
        hello@joshwhite.design
      </Link>
      <div className="flex justify-between items-center flex-col md:flex-row w-full p-5 border-t border-zinc-400 ">
        <span className="flex gap-5 items-center">
          <Link
            target="_blank"
            href={"https://www.instagram.com/mohamed_elhaissan/"}
            className="hover:text-[#befc65]"
          >
            <TextAnimation title="Instagram" semiTitle="Instagram" />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/mohamedelh46941"}
            className="hover:text-[#befc65]"
          >
            <TextAnimation title="Twitter" semiTitle="Twitter" />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/mohamed-elhaissan/"}
            className="hover:text-[#befc65]"
          >
            <TextAnimation title="Github" semiTitle="Github" />
          </Link>
        </span>
        <span>&copy; elhaissanDev</span>
      </div>
    </motion.div>
  );
}
