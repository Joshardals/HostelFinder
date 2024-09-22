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
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
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
        setLoading(false);
      }
    };

    fetchHostels();
  }, []);

  // Apply filters on the frontend
  useEffect(() => {
    let filteredHostels = allHostels;

    // Apply location filter
    if (location) {
      filteredHostels = filteredHostels.filter((hostel) =>
        hostel.address.toLowerCase().includes(location.toLowerCase())
      );
    }

    // Apply price range filter
    if (minSelected || maxSelected) {
      const minPrice = minSelected ? minSelected.value : 0;
      const maxPrice = maxSelected ? maxSelected.value : Infinity;

      filteredHostels = filteredHostels.filter(
        (hostel) => hostel.price >= minPrice && hostel.price <= maxPrice
      );
    }

    // Apply rating filter
    if (selectedRating) {
      filteredHostels = filteredHostels.filter(
        (hostel) => hostel.ratings > selectedRating
      );
    }

    // Apply HostelType Filter
    if (selectedTypes && selectedTypes.length > 0) {
      filteredHostels = filteredHostels.filter(
        (hostel) => selectedTypes.includes(hostel.type) // Ensure hostel.type matches any selected type
      );
    }

    // Update filtered hostels and total count
    setHostels(filteredHostels);
    setTotalHostels(filteredHostels.length);
  }, [
    location,
    minSelected,
    maxSelected,
    selectedRating,
    selectedTypes,
    allHostels,
  ]);

  // Reset all filters
  const resetFilters = () => {
    setMinSelected(null);
    setMaxSelected(null);
    setSelectedRating(null);
    setSelectedTypes(() => []); // Pass a function that returns an empty array

    router.push("/find-hostels");
    setSearchQuery(""); // Made the search query empty when filtering by price.
    setHostels(allHostels); // Reset to show all hostels
  };

  // Display a skeleton loader while data is being fetched
  if (loading) return <HostelCardSkeleton />;

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
              Oops! Looks like there aren't any hostels matching your search.
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

      {/* Hostel Details PopUp */}
      <HostelDetails />
    </section>
  );
}
