import Navigation from "@/components/Find-Hostels/[id]/Navigation";

export default function HostelDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <div className="max-content max-sm:px-4 py-4">
        <div className="max-sm:hidden">
          <Navigation />
        </div>

        <div></div>
      </div>
    </main>
  );
}
