import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { priceRange } from "@/lib/data";
import { toNaira } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useFiltersStore } from "@/lib/store";

interface SelectProps {
  type: "min" | "max";
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setOtherOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected?: {
    label: string;
    value: number;
  };
  setSelected: (value: { label: string; value: number } | null) => void;
  otherSelected?: {
    label: string;
    value: number;
  };
}

export function Select({
  type,
  open,
  setOpen,
  setOtherOpen,
  selected,
  setSelected,
  otherSelected,
}: SelectProps) {
  const router = useRouter();
  const { setSearchQuery } = useFiltersStore();
  const handleSelection = (item: { label: string; value: number }) => {
    // Handle the "No Min" and "No Max" case by resetting the state to null
    if (item.value === 0) {
      setSelected(null); // Reset to null for no filtering on this side
      if (setOpen) {
        setOpen(false); // Close dropdown after selection
      }
      return;
    }
    // If No Max is selected, consider it a valid range
    if (
      type === "min" &&
      otherSelected &&
      otherSelected.value !== 0 &&
      item.value >= otherSelected.value
    ) {
      alert(
        "The minimum price cannot be greater than or equal to the maximum price. Please select a valid range."
      );
      return;
    }

    // If No Min is selected, consider it a valid range
    if (
      type === "max" &&
      otherSelected &&
      item.value !== 0 &&
      item.value <= otherSelected.value
    ) {
      alert(
        "The maximum price cannot be less than or equal to the minimum price. Please select a valid range."
      );
      return;
    }

    // // Set the selected item and close the dropdown
    // router.push("/find-hostels");
    // setSearchQuery(""); // Made the search query empty when filtering by price.
    setSelected(item);
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <div className="relative">
      <div
        className={`p-2 ring-1 ring-charcoal/20 w-full md:w-[8rem] hover-effects flex items-center justify-between space-x-1 rounded-md cursor-pointer ${
          open ? "ring-2 ring-royal" : ""
        }`}
        onClick={() => {
          if (setOpen) {
            setOpen(!open);
          }
          setOtherOpen(false);
        }}
      >
        <span className="font-medium">
          {selected
            ? selected.value === 0
              ? type === "min"
                ? "No Min"
                : "No Max"
              : `${toNaira(selected.value)}`
            : type === "min"
            ? "No Min"
            : "No Max"}
        </span>
        {open ? (
          <IoIosArrowUp className="size-5" />
        ) : (
          <IoIosArrowDown className="size-5" />
        )}
      </div>

      <ul
        className={`absolute left-0 h-[11rem] lg:h-[20rem] w-full px-2 rounded-md mt-4 ring-1 ring-charcoal/20 overflow-auto hover-effects transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-white`}
      >
        {priceRange.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover-effects hover:bg-gray"
            onClick={() => handleSelection(item)}
          >
            {index === 0
              ? type === "min"
                ? "No Min"
                : "No Max"
              : toNaira(item.value)}
          </li>
        ))}
      </ul>
    </div>
  );
}
