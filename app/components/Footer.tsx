import TextAnimation from "./TextAnimation";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white flex flex-col gap-10 pt-40 px-20 tracking-tight">
      <span className="text-4xl text-[#888888]">Have a project in mind?</span>
      <div>
        <h2 className="text-9xl">✺ Let's Chat</h2>
      </div>
      <Link href={"."} className="text-4xl">
        hello@joshwhite.design
      </Link>
      <div className="flex justify-between w-full p-5 border-t border-zinc-400 ">
        <span className="flex gap-5 items-center">
          <Link
            target="_blank"
            href={"https://www.instagram.com/mohamed_elhaissan/"}
            className="hover:text-[#e3f794]"
          >
            <TextAnimation title="Instagram" semiTitle="Instagram" />
          </Link>
          <Link
            target="_blank"
            href={"https://x.com/mohamedelh46941"}
            className="hover:text-[#e3f794]"
          >
            <TextAnimation title="Twitter" semiTitle="Twitter" />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/mohamed-elhaissan/"}
            className="hover:text-[#e3f794]"
          >
            <TextAnimation title="Github" semiTitle="Github" />
          </Link>
        </span>
        <span>&copy; JoshWhite Design</span>
      </div>
    </div>
  );
}
