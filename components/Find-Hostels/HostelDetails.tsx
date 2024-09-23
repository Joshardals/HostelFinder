// "use client";
// import { useLockBodyScroll } from "@/lib/hooks";
// import { HostelDetailsToggle } from "@/lib/store";
// import { HostelInfo } from "./HostelInfo";
// import { HostelDetailsHeader } from "./HostelDetailsHeader";

// export function HostelDetails() {
//   const { open, setOpen, selectedHostel } = HostelDetailsToggle();
//   useLockBodyScroll(open); // An hook to lock the body scroll whenever open is true

//   if (!selectedHostel) return null;

//   return (
//     <div
//       className={`fixed top-0 left-0 bg-black/50 h-full w-full z-[60] hover-effects ${
//         open
//           ? "opacity-100 pointer-events-auto"
//           : "opacity-0 pointer-events-none"
//       }`}
//       onClick={() => setOpen(!open)}
//     >
//       <div
//         className=" w-full lg:max-w-[65rem] bg-white mx-auto h-full overflow-auto relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <HostelDetailsHeader />

//         {/* <div className=" -mt-16"> */}
//         <div>
//           {/* <HostelGallery hostelImages={selectedHostel.image_urls} /> */}

//           <HostelInfo selectedHostel={selectedHostel} />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useLockBodyScroll } from "@/lib/hooks";
import { HostelDetailsToggle } from "@/lib/store";
import { HostelInfo } from "./HostelInfo";
import { HostelDetailsHeader } from "./HostelDetailsHeader";

export function HostelDetails() {
  const { open, setOpen, selectedHostel } = HostelDetailsToggle();
  const [loading, setLoading] = useState(true); // New loading state
  useLockBodyScroll(open); // Hook to lock body scroll

  useEffect(() => {
    if (open) {
      setLoading(true); // Start loading when modal is opened
      const timeout = setTimeout(() => {
        setLoading(false); // Finish loading after 2 seconds
      }, 2000);

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [open]);

  if (!selectedHostel) return null; // Show nothing if no hostel is selected

  return (
    <div
      className={`fixed top-0 left-0 bg-black/50 h-full w-full z-[60] hover-effects ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div
        className="w-full lg:max-w-[65rem] bg-white mx-auto h-full overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {loading ? (
          // Display loading spinner or message while waiting
          <div className="flex justify-center items-center h-full">
            <p className="text-lg font-medium">Loading...</p>
            {/* You can replace this with a spinner component */}
          </div>
        ) : (
          <>
            <HostelDetailsHeader />
            <HostelInfo selectedHostel={selectedHostel} />
          </>
        )}
      </div>
    </div>
  );
}
