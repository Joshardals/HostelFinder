import { useLockBodyScroll } from "@/lib/hooks";
import { HostelDetailsToggle } from "@/lib/store";
import { HostelGallery } from "./HostelGallery";
import { HostelInfo } from "./HostelInfo";
import { HostelDetailsHeader } from "./HostelDetailsHeader";

export function HostelDetails() {
  const { open, setOpen } = HostelDetailsToggle();
  useLockBodyScroll(open); // An hook to lock the body scroll whenever open is true

  return (
    <div
      className={`fixed top-0 left-0 bg-black/50 h-full w-full z-[60] hover-effects ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div
        className=" w-full lg:max-w-[65rem] bg-white mx-auto h-full overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <HostelDetailsHeader />

        <div className=" -mt-16">
          <HostelGallery />

          <HostelInfo />
        </div>
      </div>
    </div>
  );
}
