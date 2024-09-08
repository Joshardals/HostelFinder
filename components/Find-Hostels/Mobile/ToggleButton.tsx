import { useFiltersStore } from "@/lib/store";

export function ToggleButton({ label, icon }: { label: string; icon: any }) {
  const { maxSelected, minSelected, selectedRating, selectedTypes } =
    useFiltersStore();

  const getSelectedFiltersCount = () => {
    let count = 0;
    if (maxSelected !== null && maxSelected.value !== 0) count++;
    if (minSelected !== null && minSelected.value !== 0) count++;
    if (selectedRating !== null) count++;
    if (selectedTypes && selectedTypes.length > 0) {
      count += selectedTypes.length;
    }
    return count;
  };

  const filterCount = getSelectedFiltersCount();
  return (
    <button
      type="submit"
      className={`px-8 py-2 ring-1 ring-charcoal/20 rounded-md flex items-center space-x-2 font-medium`}
    >
      <span>{label === "Filters" && filterCount > 0 ? null : icon}</span>
      {label === "Filters" && filterCount > 0 && (
        <span className="bg-royal text-white px-2 rounded-md">
          {filterCount}
        </span>
      )}
      <span>{label}</span>
    </button>
  );
}
