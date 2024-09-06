import { hostelTypes } from "@/lib/data";
import { useState } from "react";

export function MobileHostelTypeFilter() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const handleTypeToggle = (type: string) => {
    setSelectedTypes(
      (prev) =>
        prev.includes(type)
          ? prev.filter((t) => t !== type) // Remove type if already selected
          : [...prev, type] // Add type if not selected
    );
  };

  return (
    <div>
      <p className="text-charcoal/70 mb-1">Type of Hostel</p>
      <div>
        {hostelTypes.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-2 p-1 cursor-pointer hover-effects hover:bg-gray"
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeToggle(type)}
              className="accent-royal"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
