import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-white flex flex-col gap-10 pt-40 px-20 tracking-tight">
      <span
        className="text-4xl text-[#888888]"
      >
        Have a project in mind?
      </span>
      <div>
        <h2 className="text-9xl">✺ Let's Chat</h2>
      </div>
      <Link href={"."} className="text-4xl" >hello@joshwhite.design</Link>
      <div className="flex justify-between w-full p-5 border-t border-zinc-400 ">
        <span className="flex gap-5 items-center">
          <Link href={""}>Instagram</Link>
          <Link href={""}>Twitter</Link>
          <Link href={""}>Dribble</Link>
        </span>
        <span>&copy; JoshWhite Design</span>
      </div>
    </div>
  );
}
