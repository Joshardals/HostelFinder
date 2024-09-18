import { FilterBar } from "@/components/Find-Hostels/FilterBar";
import { Hostelcontainer } from "@/components/Find-Hostels/HostelContainer";
import HostelInfoMap from "@/components/Find-Hostels/HostelInfoMap";
import { HostelMap } from "@/components/Find-Hostels/HostelMap";
import { ToggleFilter } from "@/components/Find-Hostels/Mobile/ToggleFilter";

export default function HostelPage() {
  return (
    <main>
      <FilterBar />
      <ToggleFilter />

      {/* <div className="lg:grid lg:grid-cols-3 lg:gap-4 max-content max-[1200px]:px-4">
        <div className=" col-span-2 py-[4.5rem] lg:mt-4">
          <Hostelcontainer />
        </div>
        <div className="w-full py-[4.5rem] mt-4 max-lg:hidden">
          <HostelMap />
        </div>
      </div> */}

      <div className="max-content max-[1200px]:px-4">
        <div className="py-[4.5rem] ">
          <Hostelcontainer />
        </div>
      </div>
    </main>
  );
}
