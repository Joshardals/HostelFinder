import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";

export function HeroSection() {
  return (
    <section className="bg-[url('/images/homepage/hero/hero-image.jpg')] w-full h-[30rem] px-5 bg-cover max-md:bg-center md:bg-left-top relative">
      <div className="absolute bg-charcoal inset-0 opacity-60" />
      <div className="relative max-content max-lg:p-5 h-full flex flex-col justify-center max-sm:items-center">
        <h1 className="text-white max-md:text-center">
          Find a home near <br /> campus.
        </h1>

        <div className="group w-full">
          <form className="relative md:w-[26rem] max-sm:w-full mb-2">
            <input
              type="text"
              placeholder="Enter a campus, neighborhood, or city..."
              className="outline-none border-none w-full p-4 rounded-xl hover:ring-1 hover:ring-royal focus:ring-2 focus:ring-blue "
            />

            <span
              className="absolute top-0 right-0 h-full flex items-center px-6 cursor-pointer
          rounded-tr-xl rounded-br-xl bg-white hover:bg-[#EDF2FD] hover-effects"
            >
              <IoSearch className="size-5 text-royal" />
            </span>
          </form>

          <button
            type="button"
            className="transition-all duration-300 opacity-0 group-focus-within:opacity-100 bg-white px-4 py-3 md:w-[26rem] w-full rounded-xl flex items-center space-x-2"
          >
            <IoLocationSharp className=" size-5" />
            <p>Current Location</p>
          </button>
        </div>
      </div>
    </section>
  );
}
