import Image from "next/image";
import TextAnimation from "./TextAnimation";

export default function Hero() {
  return (
    <div className="h-[90vh] p-20 flex flex-col items-start gap-20 justify-end">
      <div>
        <Image
          src={
            "https://framerusercontent.com/images/0yOcRB6WzTI3QPLHaLLEeX8Hp6Q.svg"
          }
          width={100}
          height={100}
          alt="Logo"
        />
        <h2 className="text-4xl mt-10 w-1/2">
          Bristol based digital designer crafting engaging, human-focused
          digital experiences for a range of forward-thinking brands.
        </h2>
      </div>
      <div className="flex items-center justify-between  w-full opacity-60">
        <div>
          <h3>Freelance</h3>
          <p>Digital Designer</p>
        </div>
        <div>
          <h3>Based in</h3>
          <p>Bristol</p>
        </div>
        <div>
          <h3>Get in touch</h3>
          <span>
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
