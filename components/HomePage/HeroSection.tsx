import { FaSearch } from "react-icons/fa";

export function HeroSection() {
  return (
    <section className="bg-[url('/images/hero/seminar2.jpg')] w-full h-[25rem] px-5 bg-cover bg-left-top relative">
      <div className="absolute bg-charcoal inset-0 opacity-60" />
      <div className="relative max-content max-md:p-5 h-full flex flex-col justify-center max-sm:items-center">
        <h1 className="text-white max-sm:text-center">
          Find a home near <br /> campus.
        </h1>

        <form className="relative md:w-[26rem] max-sm:w-full">
          <input
            type="text"
            placeholder="Enter a campus, neighborhood, or city..."
            className="outline-none border-none w-full p-4 rounded-xl focus:border-[3px] focus:ring-2 focus:ring-blue "
          />

          <span
            className="absolute top-0 right-0 h-full flex items-center px-6 cursor-pointer
          rounded-tr-xl rounded-br-xl bg-white text-[rgb(0,86,160)] z-10"
          >
            <FaSearch className="size-5 text-navy" />
          </span>
        </form>
      </div>
    </section>
  );
}
