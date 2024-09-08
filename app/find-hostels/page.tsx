import { FilterBar } from "@/components/Find-Hostels/FilterBar";
import { Hostelcontainer } from "@/components/Find-Hostels/HostelContainer";
import { ToggleFilter } from "@/components/Find-Hostels/Mobile/ToggleFilter";

export default function HostelPage() {
  return (
    <main className="">
      <FilterBar />
      <ToggleFilter />
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 max-content max-sm:px-4">
        <div className=" col-span-2 py-[4.5rem]">
          <Hostelcontainer />
        </div>
        <div className="w-full max-sm:hidden">Map</div>
      </div>
    </main>
  );
}
