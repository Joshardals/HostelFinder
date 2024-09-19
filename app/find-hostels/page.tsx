import { fetchAllHostels } from "@/lib/database/database.action";
import { FilterBar } from "@/components/Find-Hostels/FilterBar";
import { HostelCardSkeleton } from "@/components/ui/HostelCardSkeleton";
import { Hostelcontainer } from "@/components/Find-Hostels/HostelContainer";
import HostelInfoMap from "@/components/Find-Hostels/HostelInfoMap";
import { HostelMap } from "@/components/Find-Hostels/HostelMap";
import { Suspense } from "react";
import { ToggleFilter } from "@/components/Find-Hostels/Mobile/ToggleFilter";

export default async function HostelPage() {
  return (
    <main>
      <FilterBar />
      <ToggleFilter />

      <div className="max-content max-[1200px]:px-4">
        <div className="py-[4.5rem] ">
          <Hostelcontainer />
        </div>
      </div>
    </main>
  );
}
