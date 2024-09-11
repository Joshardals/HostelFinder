import { useLockBodyScroll } from "@/lib/hooks";
import { HostelDetailsToggle } from "@/lib/store";
import { HostelGallery } from "./HostelGallery";
import { HostelInfo } from "./HostelInfo";

export function HostelDetails() {
  const { open, setOpen } = HostelDetailsToggle();
  useLockBodyScroll(open); // An hook to lock the body scroll

  return (
    <div className="fixed top-0 left-0 bg-black/50 h-full w-full z-[60]">
      <div className="bg-white sm:w-[65rem] max-content h-full overflow-auto">
        <HostelGallery />

        <HostelInfo />
      </div>
    </div>
  );
}
