"use client";
import { IoSearch } from "react-icons/io5";
import { useFiltersStore } from "@/lib/store";
import { useLocationSearch } from "@/lib/hooks";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export function Searchbar() {
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
    <div ref={divRef}>
      <form
        className="relative max-md:w-full md:w-[22rem]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Campus, Neighborhood, City, Address"
          className="outline-none border-none ring-1 ring-charcoal/20 w-full p-2 rounded-md hover:ring-1 hover:ring-royal focus:ring-2 focus:ring-blue "
        />

        <span
          className="absolute top-0 right-0 h-full flex items-center cursor-pointer
          rounded-tr-md rounded-br-md px-2 bg-white hover-effects pointer-events-none opacity-100 group-focus-within:opacity-0"
        >
          <IoSearch className="size-5 text-charcoal/40" />
        </span>

        {filteredLocations.length > 0 && (
          <ul className="absolute bg-white z-10 max-h-60 overflow-auto max-md:w-full w-[22rem] p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 ">
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
