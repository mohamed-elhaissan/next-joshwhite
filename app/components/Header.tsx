
import Link from "next/link";
import TextAnimation from "./TextAnimation";
export default function Header() {
  return (
    <header className="flex font-semibold p-5  justify-between items-center ">
      <h1 className="text-xl">Theo Markin</h1>
      <div className="flex gap-4">
        <Link href={"work"} className="py-1 px-3 rounded-md bg-zinc-200">
          <TextAnimation title="work" semiTitle="work" />
        </Link>
        <Link href={"work"}>Info</Link>
        <Link href={"work"}>Let's Chat</Link>
      </div>
    </header>
  );
}
