"use client";

import Image from "next/image";
import card1 from "../../public/projects/6OfimSlv2w6ubUCScLNZWPRXO00.webp";
import card2 from "../../public/projects/RkysJWaic7xA9AK6my9sutmf8.avif";
import card3 from "../../public/projects/TsuQim3Z3RDteivU9MTOARfQvME.avif";
import card4 from "../../public/projects/card-01.avif";
import card5 from "../../public/projects/s6jQbCVk3i01aWALA8FM4Ax70fA.webp";
import card6 from "../../public/projects/xcn8qNpAaTFuCmLRCApLCh0zc.webp";
import img1 from "../../public/hovered/PRGl7sJhCiZ6Z6bv6CvmaHtilk.jpg";
import img2 from "../../public/hovered/e5WKOA9fwSGgRHIgeOzsWJ9MuIA.avif";
import img3 from "../../public/hovered/GUSYCDAJsvRHeNllaGOdiKk9IeQ.avif";
import img4 from "../../public/hovered/qHtad1IB4xtYgCXEkTOr8BFuLk.webp";
import img5 from "../../public/hovered/HJUfMOlFgyvqjauzByPGWTh32mU.avif";
import img6 from "../../public/hovered/Ux7TdVnEXLGLP63XFAyGRyrLFfk.jpg";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  const hoveredImages: StaticImageData[] = [img1, img2, img3, img4, img5, img6];
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
        <motion.div style={{ x }} className="flex  w-full flex-wrap md:flex-nowrap gap-10">
          {images.map((item: StaticImageData, index: number) => (
            <Card
              title={titles[index]}
              imageData1={item}
              imageData2={hoveredImages[index]}
              key={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

const Card = ({
  imageData1,
  imageData2,
  title,
}: {
  imageData1: StaticImageData;
  imageData2: StaticImageData;
  title: string;
}) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  const [itemHovered, setItemHovered] = useState<boolean>(false);
  return(
    <div
      onMouseEnter={() => {
        setItemHovered(true);
      }}
      onMouseLeave={() => setItemHovered(false)}
      className="min-w-[500px] rounded-lg h-[330px]  overflow-hidden cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {!itemHovered ? (
          <motion.div
            key={"image1"}
            initial={{
              opacity: 0.6,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0.9,
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
          >
            <Image
              src={imageData1}
              alt={`${title}`}
              width={550}
              height={400}
              className="    object-cover "
            />
          </motion.div>
        ) : (
          <motion.div
            key={"image2"}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0.9,
              scale: 0.9,
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
          >
            <Image
              src={imageData2}
              alt={`${title}`}
              width={550}
              height={400}
              className="   object-cover "
            />
          </motion.div>
        )}
      </AnimatePresence>

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
