"use client";

import { fetchAllHostels } from "@/lib/database/database.action";
import { HostelCard } from "../shared/HostelCard";
import { HostelCardSkeleton } from "../ui/HostelCardSkeleton";
import { HostelDetails } from "./HostelDetails";
import { Sorting } from "./Sorting";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFiltersStore } from "@/lib/store";

export function Hostelcontainer() {
  const [hostels, setHostels] = useState<any[]>([]); // For displaying filtered hostels
  const [allHostels, setAllHostels] = useState<any[]>([]); // Store all hostels initially
  const [loading, setLoading] = useState(true); // Start with loading true
  const [filtering, setFiltering] = useState(false); // New state for filtering
  const params = useSearchParams();
  const router = useRouter();

  // Extract location parameter
  const location = params.get("location") || "";

  // Filtering By Price Range.
  const {
    maxSelected,
    minSelected,
    selectedRating,
    selectedTypes,
    selectedSort,
    totalHostels,
    setMinSelected,
    setMaxSelected,
    setSelectedRating,
    setSelectedTypes,
    setSearchQuery,
    setTotalHostels,
  } = useFiltersStore();

  // Fetch all hostels initially
  useEffect(() => {
    const fetchHostels = async () => {
      try {
        const response = await fetchAllHostels();
        const hostelsData = response.data || [];

        setAllHostels(hostelsData); // Store all hostels for filtering
        setHostels(hostelsData); // Initially set hostels to all fetched hostels
        setTotalHostels(response.total || 0);
      } catch (error) {
        console.error(`Error fetching hostels: ${error}`);
        setHostels([]); // Fallback to an empty array on error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchHostels();
  }, []);

  // Apply filters on the frontend
  useEffect(() => {
    if (loading) return; // Do not apply filters while loading

    setFiltering(true); // Show filtering state

    const timeoutId = setTimeout(() => {
      let filteredHostels = allHostels;

      // Apply filters...
      if (location) {
        filteredHostels = filteredHostels.filter((hostel) =>
          hostel.address.toLowerCase().includes(location.toLowerCase())  
        );
      }

      if (minSelected || maxSelected) {
        const minPrice = minSelected ? minSelected.value : 0;
        const maxPrice = maxSelected ? maxSelected.value : Infinity;

        filteredHostels = filteredHostels.filter(
          (hostel) => hostel.price >= minPrice && hostel.price <= maxPrice
        );
      }

      if (selectedRating) {
        filteredHostels = filteredHostels.filter(
          (hostel) => hostel.ratings > selectedRating
        );
      }

      if (selectedTypes && selectedTypes.length > 0) {
        filteredHostels = filteredHostels.filter((hostel) =>
          selectedTypes.includes(hostel.type)
        );
      }

      // Apply sorting
      if (selectedSort) {
        filteredHostels = filteredHostels.sort((a, b) => {
          switch (selectedSort) {
            case "Price (Lo-Hi)":
              return a.price - b.price;
            case "Price (Hi-Lo)":
              return b.price - a.price;
            case "Rating (Highest)":
              return b.ratings - a.ratings;
            case "Rating (Lowest)":
              return a.ratings - b.ratings;
            case "Date (Newest)":
              return (
                new Date(b.$createdAt).getTime() -
                new Date(a.$createdAt).getTime()
              );
            case "Date (Oldest)":
              return (
                new Date(a.$createdAt).getTime() -
                new Date(b.$createdAt).getTime()
              );
            default:
              return 0;
          }
        });
      }

      // Update filtered hostels and total count
      setHostels(filteredHostels);
      setTotalHostels(filteredHostels.length);
      setFiltering(false); // Hide filtering state
    }, 1000); // 1 second timeout

    return () => {
      clearTimeout(timeoutId); // Cleanup the timeout on unmount
      setFiltering(false); // Ensure filtering is reset on unmount
    };  
  }, [
    location,
    minSelected,
    maxSelected,
    selectedRating,
    selectedTypes,
    selectedSort,
    allHostels,
    loading,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setMinSelected(null);
    setMaxSelected(null);
    setSelectedRating(null);
    setSelectedTypes(() => []);  
    router.push("/find-hostels");
    setSearchQuery(""); // Reset the search query
    setHostels(allHostels); // Reset to show all hostels
  };

  // Display a skeleton loader while data is being fetched or filtered
  if (loading || filtering) return <HostelCardSkeleton />;

  return (
    <section className="relative">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Sorting />
          <p>
            {totalHostels} rental{totalHostels > 1 ? "s" : ""}
          </p>
        </div>

        {Array.isArray(hostels) && hostels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hostels.map((hostel, index) => (
              <HostelCard key={index} hostel={hostel} />
            ))}
          </div>
        ) : (
          <div>
            <h4 className="font-medium">
              Oops! Looks like there aren&apos;t any hostels matching your
              search.
            </h4>
            <p>Remove filters to find more hostels:</p>
            {location && <p>Location: {location}</p>}
            {minSelected && <p>Min Price: {minSelected.label}</p>}
            {maxSelected && <p>Max Price: {maxSelected.label}</p>}
            {selectedRating && (
              <p>
                Rating: {selectedRating}
                {selectedRating !== 5 && "+"}
              </p>
            )}
            {selectedTypes && selectedTypes.length > 0 && (
              <p>Hostel Type: {selectedTypes.join(", ")} </p>
            )}
            <button
              className="mt-4 px-4 py-2 text-gray rounded-md bg-royal"
              onClick={resetFilters}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
      {/* Hostel Details PopUp
      <HostelDetails /> */}
    </section>
  );
}
