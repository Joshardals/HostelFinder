"use client";
import { predefinedLocation } from "./data";
import { useEffect, RefObject, ChangeEvent, useState, useRef } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]); // Dependency array includes ref and callback
}

export function useLockBodyScroll(...openStates: (boolean | null)[]): void {
  useEffect(() => {
    const shouldLockScroll = openStates.some((state) => state); // If any state is true

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openStates]);
}

export function useLocationSearch(
  searchQuery: string,
  setSearchQuery: (query: string) => void
) {
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);

  // Custom hook to handle click outside
  useClickOutside(divRef, () => setFilteredLocations([]));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filtered = predefinedLocation.filter((location) =>
        location.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations([]);
    }
  };

  const handleSuggestionClick = (location: string) => {
    setSearchQuery(location);
    setFilteredLocations([]);
  };

  return {
    searchQuery,
    filteredLocations,
    handleChange,
    handleSuggestionClick,
    divRef,
  };
}
