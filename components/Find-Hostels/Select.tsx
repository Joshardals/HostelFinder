import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { priceRange } from "@/lib/data";
import { toNaira } from "@/lib/utils";

interface SelectProps {
  type: "min" | "max";
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setOtherOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected?: {
    label: string;
    value: number;
  };
  setSelected: (value: { label: string; value: number }) => void;
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
  const handleSelection = (item: { label: string; value: number }) => {
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

    // Set the selected item and close the dropdown
    setSelected(item);
    if (setOpen) {
      setOpen(false);
    }
  };
  return (
    <div className="relative">
      <div
        className={`px-2 py-2 ring-1 ring-charcoal/20 w-full md:w-[8rem] hover-effects flex items-center justify-between space-x-1 rounded-md cursor-pointer ${
          open ? "ring-2 ring-blue" : ""
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
        }`}
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
