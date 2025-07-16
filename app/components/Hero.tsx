import Image from "next/image";
import TextAnimation from "./TextAnimation";

export default function Hero() {
  return (
    <div className="h-[100vh]  bg-[var(--background)] p-10 sm:p-20 flex flex-col items-start gap-20 justify-end rounded-2xl">
      <div>
        <Image
          src={
            "https://framerusercontent.com/images/0yOcRB6WzTI3QPLHaLLEeX8Hp6Q.svg"
          }
          width={100}
          height={100}
          alt="Logo"
        />
        <h2 className="w-full text-xl md:text-4xl mt-10 2xl:w-1/2">
          Bristol based digital designer crafting engaging, human-focused
          digital experiences for a range of forward-thinking brands.
        </h2>
      </div>
      <div className="flex items-center justify-between  w-full ">
        <div className="opacity-60">
          <h3>Freelance</h3>
          <p>Digital Designer</p>
        </div>
        <div className="opacity-60">
          <h3>Based in</h3>
          <p>Bristol</p>
        </div>
        <div className="opacity-60 hover:opacity-100">
          <h3>Get in touch</h3>
          <span className="cursor-pointer hover:opacity-100">
            <TextAnimation
              title="hello@joshwhite.design"
              semiTitle="hello@joshwhite.design"
            />
          </span>
        </div>
      </div>
    </div>
  );
}
