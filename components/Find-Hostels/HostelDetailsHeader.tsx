import { HostelDetailsToggle } from "@/lib/store";
import { HiMiniXMark } from "react-icons/hi2";

export function HostelDetailsHeader() {
  const { open, setOpen } = HostelDetailsToggle();
  return (
    // Todo: Change the Background to black/50
    <header className="bg-charcoal/50 w-full sticky top-0 mx-auto p-4">
      <div className="flex items-center justify-end">
        <HiMiniXMark
          className="text-white size-7 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
    </header>
  );
}
