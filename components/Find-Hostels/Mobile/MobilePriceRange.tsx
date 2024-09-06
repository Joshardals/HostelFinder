import { useEffect, useRef, useState } from "react";
import { Select } from "../Select";
import { GoDash } from "react-icons/go";

export function MobilePriceRange() {
  const [open, setOpen] = useState(false);
  const [minOpen, setMinOpen] = useState(false);
  const [maxOpen, setMaxOpen] = useState(false);
  const [maxSelected, setMaxSelected] = useState<{
    label: string;
    value: number;
  }>();
  const [minSelected, setMinSelected] = useState<{
    label: string;
    value: number;
  }>();

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false);
        setMinOpen(false);
        setMaxOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [divRef]);

  return (
    <div ref={divRef}>
      <p className="text-charcoal/70 mb-1">Price</p>
      <div className="flex justify-between items-center space-x-4">
        <div className="flex-1">
          <Select
            type="min"
            open={minOpen}
            setOpen={setMinOpen}
            setOtherOpen={setMaxOpen}
            selected={minSelected}
            setSelected={setMinSelected}
            otherSelected={maxSelected}
          />
        </div>
        <GoDash />
        <div className="flex-1">
          <Select
            type="max"
            open={maxOpen}
            setOpen={setMaxOpen}
            setOtherOpen={setMinOpen}
            selected={maxSelected}
            setSelected={setMaxSelected}
            otherSelected={minSelected}
          />
        </div>
      </div>
    </div>
  );
}
