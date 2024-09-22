// "use client";
// import {
//   fetchAllHostels,
//   fetchHostelsByLocation,
//   fetchHostelsByPriceRange,
// } from "@/lib/database/database.action";
// import { HostelCard } from "../shared/HostelCard";
// import { HostelCardSkeleton } from "../ui/HostelCardSkeleton";
// import { HostelDetails } from "./HostelDetails";
// import { Sorting } from "./Sorting";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useFiltersStore } from "@/lib/store";

// export function Hostelcontainer() {
//   const [hostels, setHostels] = useState<any[]>([]); // Ensure hostels is an array
//   const [totalHostels, setTotalHostels] = useState<number>(0);
//   const [loading, setLoading] = useState(false);
//   const params = useSearchParams();

//   // Extract the location query parameter
//   const location = params.get("location");

//   // Filtering By Price Range.
//   const { maxSelected, setMaxSelected } = useFiltersStore();
//   const { minSelected, setMinSelected } = useFiltersStore();

//   useEffect(() => {
//     const fetchHostels = async () => {
//       setLoading(true);
//       try {
//         let response;
//         let hostelsData = [];

//         // Check if both minSelected and maxSelected exist to filter by price range
//         if (minSelected || maxSelected) {
//           // Use 0 as default for minSelected and maxSelected if they are not selected
//           const minPrice = minSelected ? minSelected.value : 0;
//           const maxPrice = maxSelected ? maxSelected.value : 0;

//           // Call your backend function to fetch hostels by price range
//           response = await fetchHostelsByPriceRange(minPrice, maxPrice);
//           hostelsData = response.data || [];
//         } else if (location) {
//           // Fetch hostels based on location if no price range is selected
//           response = await fetchHostelsByLocation(location);
//           setMinSelected(null);
//           hostelsData = response.data || [];
//         } else {
//           // Fetch all hostels if no price range or location is selected
//           response = await fetchAllHostels();
//           hostelsData = response.data || [];
//         }

//         const { total } = response;
//         setHostels(Array.isArray(hostelsData) ? hostelsData : []); // Ensure hostelsData is an array
//         setTotalHostels(total || 0);
//       } catch (error) {
//         console.error(`Error fetching hostels: ${error}`);
//         setHostels([]); // Fallback to an empty array on error
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHostels();
//   }, [location, maxSelected, minSelected]);

//   // Display a skeleton loader while data is being fetched
//   if (loading) return <HostelCardSkeleton />;

//   return (
//     <section className="relative">
//       <div className="space-y-4">
//         <div className="flex items-center justify-between">
//           <Sorting />
//           <p>
//             {totalHostels} rental{totalHostels > 1 ? "s" : ""}
//           </p>
//         </div>

//         {Array.isArray(hostels) && hostels.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {hostels.map((hostel, index) => (
//               <HostelCard key={index} hostel={hostel} />
//             ))}
//           </div>
//         ) : (
//           <div>
//             <h4 className="font-medium">
//               No hostels found in "{location}" at the moment.
//             </h4>
//             <p>
//               Check back soon, as new listings may become available in the
//               future!
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Hostel Details PopUp */}
//       <HostelDetails />
//     </section>
//   );
// }

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
  const [totalHostels, setTotalHostels] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const params = useSearchParams();
  const router = useRouter();

  // Extract location parameter
  const location = params.get("location") || "";

  // Filtering By Price Range.
  const {
    maxSelected,
    minSelected,
    setMinSelected,
    setMaxSelected,
    setSearchQuery,
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
    setLoading(true); // Set loading to true when filters are applied

    // Simulate a small delay (1 second) for loading effect
    const filterTimeout = setTimeout(() => {
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

      // Update filtered hostels and total count
      setHostels(filteredHostels);
      setTotalHostels(filteredHostels.length);
      setLoading(false); // Set loading to false after filtering is done
    }, 1000); // Simulate a 1-second delay for user experience

    return () => clearTimeout(filterTimeout); // Clean up the timeout on unmount
  }, [location, minSelected, maxSelected, allHostels]);

  // Reset all filters
  const resetFilters = () => {
    setMinSelected(null);
    setMaxSelected(null);

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
