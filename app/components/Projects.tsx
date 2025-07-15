"use client";

import Image from "next/image";
import card1 from "../../public/projects/6OfimSlv2w6ubUCScLNZWPRXO00.webp";
import card2 from "../../public/projects/RkysJWaic7xA9AK6my9sutmf8.avif";
import card3 from "../../public/projects/TsuQim3Z3RDteivU9MTOARfQvME.avif";
import card4 from "../../public/projects/card-01.avif";
import card5 from "../../public/projects/s6jQbCVk3i01aWALA8FM4Ax70fA.webp";
import card6 from "../../public/projects/xcn8qNpAaTFuCmLRCApLCh0zc.webp";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";

export default function Projects() {
  const targetContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetContainer,
  });
  const x: any = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const images: StaticImageData[] = [card4, card6, card5, card3, card1, card2];
  const titles: string[] = [
    "Lyle & Scott",
    "B!POD",
    "Db Journey",
    "EyeWear by David",
    "Meermin",
    "Dockers",
  ];
  return (
    <div
      ref={targetContainer}
      className=" text-white  h-[300vh] bg-[var(--backgroundBlack)]"
    >
      <div className="sticky top-0 p-10 left-0 w-full flex   overflow-hidden h-screen  justify-start flex-col items-start">
        <h1 className="text-7xl py-20">Projects</h1>
        <motion.div style={{ x }} className="flex  w-full  gap-10">
          {images.map((item: StaticImageData, index: number) => (
            <Card title={titles[index]} imageData={item} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const Card = ({
  imageData,
  title,
}: {
  imageData: StaticImageData;
  title: string;
}) => {
  const [itemHovered, setItemHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => {
        setItemHovered(true);
      }}
      onMouseLeave={() => setItemHovered(false)}
      className="min-w-[500px] cursor-pointer"
    >
      <Image
        src={imageData}
        alt={`${title}`}
        width={550}
        height={400}
        className="rounded-lg    object-cover "
      />

      <motion.span
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: itemHovered ? 0 : -10,
          opacity: itemHovered ? 1 : 0,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="inline-block mt-3 text-[#e3f794]"
      >
        {title}
      </motion.span>
    </div>
  );
};
