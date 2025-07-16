"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import TextAnimation from "./TextAnimation";
import { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex h-[10vh] min-h-[60px] max-h-[80px]  fixed z-40 w-full top-0 left-0 font-semibold p-5 bg-whit/40  backdrop-blur-2xl  justify-between items-center ">
      <h1 className="text-xl">Theo Markin</h1>

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="hover:bg-[#e3f794] relative z-50 bg-[var(--background)] px-4 py-1 rounded-md cursor-pointer"
      >
        <TextAnimation title="Menu" semiTitle={openMenu ? "close" : "Open"} />
      </button>
      <AnimatePresence>
        {openMenu && (
          <motion.div
            key={"navContainer"}
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: "-100%",
              opacity: 0,
            }}
            className="absolute left-0 top-0 w-full h-screen"
          >
            <nav className="bg-[#e3f794]    w-full h-screen rounded-2xl z-20  text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl">
              <div className="h-full flex flex-col text-6xl items-center justify-center">
                <Link
                  onClick={() => setOpenMenu(false)}
                  href={"work"}
                  className="py-1 px-3  rounded-md hover:bg-[#e3f794]"
                >
                  <TextAnimation title="work" semiTitle="work" />
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  href={"work"}
                  className="px-3 rounded-md hover:bg-[#e3f794]"
                >
                  <TextAnimation title="Info" semiTitle="Info" />
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  href={"work"}
                  className="px-3 rounded-md hover:bg-[#e3f794] "
                >
                  <TextAnimation title="Let's Talk" semiTitle="Let's Talk" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
