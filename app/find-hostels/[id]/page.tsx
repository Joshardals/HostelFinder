import { HostelGallery } from "@/components/Find-Hostels/[id]/HostelGallery";
import Navigation from "@/components/Find-Hostels/[id]/Navigation";

export default function HostelDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <div className="max-content bg-red-500 max-sm:w-full w-[50rem] mx-auto max-sm:px-4 py-4 sm:space-y-4">
        <div className="max-sm:hidden">
          <Navigation />
        </div>

        <div className="">
          <HostelGallery />
        </div>
      </div>
    </main>
  );
}
