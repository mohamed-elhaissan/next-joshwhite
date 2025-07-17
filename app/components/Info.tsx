"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import LinkSvg from "../../public/LinkSvg.svg";
import Image from "next/image";
export default function Info() {
  return (
    <div
      id="info"
      className="bg-[var(--background)] flex flex-col justify-evenly  p-10 rounded-xl h-screen text-black"
    > 
      <h2 className="text-9xl p-20 font-black  overflow-hidden  uppercase">
        {"Info".split("").map((item: string, index: number) => (
          <motion.span
            className="inline-block"
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
              delay: 0.05 * index,
            }}
            key={index}
          >
            {item}
          </motion.span>
        ))}
      </h2>
      <div>
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
            ease: "easeInOut",
          }}
          className=" flex  justify-start md:justify-between md:items-center  flex-col md:flex-row    py-10 items-start md:p-10"
          style={{
            borderTop: "1px solid black",
          }}
        >
          <p className="opacity-70 mb-5">↳ Overview</p>
          <div className="md:w-1/2 flex flex-col gap-2">
            <span>
              Hi I’m Josh, an experienced Digital Designer crafting beautiful
              interactive experiences. My 10 year career has seen me work for a
              variety of London-based agencies who specialise in digital
              marketing, advertising and ecommerce, which has given me a
              holistic knowledge of what brands need to succeed in the digital
              world.
            </span>
            <Link className="font-semibold" href={"."}>
              Read More{" "}
              <span>
                <Image src={LinkSvg} width={15} alt="Link svg" />
              </span>
            </Link>
          </div>
        </motion.div>
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
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
          className=" flex justify-start md:justify-between md:items-center py-10  flex-col md:flex-row items-start md:p-10"
        >
          <p className="opacity-70 mb-5">↳ Services</p>
          <div className="flex gap-10 flex-col md:flex-row  w-1/2">
            <div className="flex flex-col gap-2">
              <span>UX/UI Design</span>
              <span>Product Design</span>
              <span>Graphic Design</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>E-Commerce Web Design</span>
              <span>Art Direction</span>
              <span>Brand Identity</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
