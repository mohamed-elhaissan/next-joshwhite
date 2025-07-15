import Link from "next/link";
import TextAnimation from "./TextAnimation";
export default function Header() {
  return (
    <header className="flex sticky top-0 left-0 font-semibold p-5  justify-between items-center ">
      <h1 className="text-xl">Theo Markin</h1>
      <div className="flex gap-4 items-center">
        <Link href={"work"} className="py-1 px-3 rounded-md hover:bg-[#e3f794]">
          <TextAnimation title="work" semiTitle="work" />
        </Link>
        <Link href={"work"} className="px-3 rounded-md hover:bg-[#e3f794]">
          <TextAnimation title="Info" semiTitle="Info" />
        </Link>
        <Link href={"work"} className="px-3 rounded-md hover:bg-[#e3f794] ">
          <TextAnimation title="Let's Talk" semiTitle="Let's Talk" />
        </Link>
      </div>
    </header>
  );
}
