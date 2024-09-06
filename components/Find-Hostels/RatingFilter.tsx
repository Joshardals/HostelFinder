"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function RatingFilter() {
  const [open, setOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false); // Set the state to false when clicking outside
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    setOpen(false); // Close the dropdown after selection
  };

  const ratings = [1, 2, 3, 4, 5]; // Possible ratings

  return (
    <div className="relative select-none" ref={divRef}>
      <div
        className={`ring-1 w-[fit-content] ring-charcoal/20 px-2 lg:px-4 py-2 rounded-md cursor-pointer hover-effects ${
          open ? "bg-charcoal/20 hover:bg-charcoal/20" : "hover:bg-charcoal/10"
        }`}
        onClick={handleClick}
      >
        <div className="flex items-center space-x-1 font-medium">
          <span
            className={`size-3 rounded-full  ${
              selectedRating !== null ? "bg-royal block" : "hidden"
            }`}
          />
          <span>
            {selectedRating !== null
              ? `${selectedRating} ${
                  selectedRating === 1 ? "Star" : "Stars"
                } and above`
              : "Any Rating"}
          </span>
          {open ? (
            <IoIosArrowUp className="size-5" />
          ) : (
            <IoIosArrowDown className="size-5" />
          )}
        </div>
      </div>

      <div
        className={`absolute bg-white p-2 rounded-md mt-2 hover-effects shadow-md shadow-charcoal/20 w-[13rem] ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <p className="text-charcoal/70 mb-2">Star Rating</p>
        <ul className="space-y-1">
          {ratings.map((rating) => (
            <li
              key={rating}
              className="px-2 lg:px-4 py-2 hover-effects hover:bg-gray cursor-pointer"
              onClick={() => handleRatingSelect(rating)}
            >
              {rating} {rating === 1 ? "Star" : "Stars"}
              {rating === 5 ? "" : " and above"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
