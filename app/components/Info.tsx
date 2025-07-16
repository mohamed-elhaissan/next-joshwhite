import Link from "next/link";

export default function Info() {
  return (
    <div className="bg-[var(--background)] flex flex-col justify-evenly  p-10 rounded-xl h-screen text-black">
      <h2 className="text-7xl ">Info</h2>
      <div>
        <div
          className=" flex justify-between items-center p-10"
          style={{
            borderTop: "1px solid black",
          }}
        >
          <p className="opacity-70">↳ Overview</p>
          <div className="w-1/2 flex flex-col gap-2">
            <span>
              Hi I’m Josh, an experienced Digital Designer crafting beautiful
              interactive experiences. My 10 year career has seen me work for a
              variety of London-based agencies who specialise in digital
              marketing, advertising and ecommerce, which has given me a
              holistic knowledge of what brands need to succeed in the digital
              world.
            </span>
            <Link className="font-semibold" href={"."}>
              Read More
            </Link>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid black",
            borderBottom: "1px solid black",
          }}
          className=" flex justify-between items-center p-10"
        >
          <p className="opacity-70">↳ Services</p>
          <div className="flex gap-10  w-1/2">
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
        </div>
      </div>
    </div>
  );
}
