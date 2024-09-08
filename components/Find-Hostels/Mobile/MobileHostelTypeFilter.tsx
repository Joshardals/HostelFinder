import { hostelTypes } from "@/lib/data";
import { useFiltersStore } from "@/lib/store";

export function MobileHostelTypeFilter() {
  const { selectedTypes, setSelectedTypes } = useFiltersStore();
  const handleTypeToggle = (type: string) => {
    setSelectedTypes(
      (prev: any) =>
        prev.includes(type)
          ? prev.filter((t: any) => t !== type) // Remove type if already selected
          : [...prev, type] // Add type if not selected
    );
  };

  return (
    <div>
      <p className="mb-1">Type of Hostel</p>
      <div>
        {hostelTypes.map((type) => (
          <label
            key={type}
            className="flex items-center space-x-2 p-1 mb-1 cursor-pointer hover-effects hover:bg-gray"
          >
            <input
              type="checkbox"
              checked={selectedTypes!.includes(type)}
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
