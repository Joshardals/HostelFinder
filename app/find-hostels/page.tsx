import { FilterBar } from "@/components/Find-Hostels/FilterBar";
import { MobileFilterBar } from "@/components/Find-Hostels/Mobile/MobileFilterBar";

export default function HostelPage() {
  return (
    <main>
      <FilterBar />
      <MobileFilterBar />
    </main>
  );
}
