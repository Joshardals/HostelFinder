"use client";
import { IoSearch, IoLocationSharp } from "react-icons/io5";
import { useFiltersStore } from "@/lib/store";

export function Searchbar() {
  const { searchQuery, setSearchQuery } = useFiltersStore();
  return (
    <div className="group">
      <form className="relative w-full lg:w-[22rem] ">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Campus, Neighborhood, City, Address"
          className="outline-none border-none ring-1 ring-charcoal/20 w-full p-2 rounded-md hover:ring-1 hover:ring-royal focus:ring-2 focus:ring-blue "
        />

        <span
          className="absolute top-0 right-0 h-full flex items-center cursor-pointer
          rounded-tr-md rounded-br-md px-2 bg-white hover-effects pointer-events-none opacity-100 group-focus-within:opacity-0"
        >
          <IoSearch className="size-5 text-charcoal/40" />
        </span>
      </form>

      <button
        type="button"
        className=" z-10 pointer-events-none  hover-effects opacity-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto bg-white shadow-md shadow-charcoal/20 absolute px-4 py-3  md:w-[22rem] rounded-md flex items-center space-x-2 mt-2"
      >
        <IoLocationSharp className=" size-5" />
        <p>Current Location</p>
      </button>
    </div>
  );
}
