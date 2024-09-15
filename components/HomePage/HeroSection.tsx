import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { HeroSearchBar } from "./HeroSearchBar";

export function HeroSection() {
  return (
    <section className="bg-[url('/images/homepage/hero/hero-image.jpg')] w-full h-[30rem] px-5 bg-cover max-md:bg-center md:bg-left-top relative">
      <div className="absolute bg-charcoal inset-0 opacity-60" />
      <div className="relative max-content max-lg:p-5 h-full flex flex-col justify-center max-sm:items-center">
        <h1 className="text-white max-md:text-center">
          Find a home near <br /> campus.
        </h1>

        <HeroSearchBar />
      </div>
    </section>
  );
}
