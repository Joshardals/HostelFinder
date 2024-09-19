"use client";
import { IoSearch } from "react-icons/io5";
import { useFiltersStore } from "@/lib/store";
import { useLocationSearch } from "@/lib/hooks";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function HeroSearchBar() {
  const { searchQuery, setSearchQuery } = useFiltersStore();
  const {
    filteredLocations,
    setFilteredLocations,
    handleChange,
    handleSuggestionClick,
    divRef,
  } = useLocationSearch(searchQuery, setSearchQuery);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery) {
      router.push(`/find-hostels`);
    } else {
      // If there's a search query, apply the location filter
      router.push(`/find-hostels?location=${encodeURIComponent(searchQuery)}`);
    }
    setFilteredLocations([]);
  };

  return (
    <div ref={divRef} className="w-full">
      <form
        className="relative md:w-[26rem] max-md:w-full mb-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Enter a campus, neighborhood, or city..."
          className="outline-none border-none w-full p-4 rounded-xl hover:ring-1 hover:ring-royal focus:ring-2 focus:ring-blue "
        />

        <span
          className="absolute top-0 right-0 h-full flex items-center px-6 cursor-pointer
  rounded-tr-xl rounded-br-xl bg-white hover:bg-[#EDF2FD] hover-effects"
        >
          <IoSearch className="size-5 text-royal" />
        </span>

        {filteredLocations.length > 0 && (
          <ul className="absolute bg-white z-10 max-h-60 overflow-auto max-sm:w-full w-[26rem] p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 ">
            {filteredLocations.map((location, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(location)}
                className="px-2 lg:px-4 py-2 hover-effects rounded-md cursor-pointer hover:bg-gray"
              >
                {location}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}
