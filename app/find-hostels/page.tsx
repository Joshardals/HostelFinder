import { FilterBar } from "@/components/Find-Hostels/FilterBar";
import { Hostelcontainer } from "@/components/Find-Hostels/HostelContainer";
import { ToggleFilter } from "@/components/Find-Hostels/Mobile/ToggleFilter";

export default function HostelPage() {
  return (
    <main>
      <FilterBar />
      <ToggleFilter />
      <div className="grid grid-cols-3 items-center max-content">
        <div className=" col-span-2">
          <Hostelcontainer />
        </div>
        {/* <div className="bg-royal w-full">Map</div> */}
      </div>
    </main>
  );
}
