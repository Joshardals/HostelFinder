import { HostelDetailsToggle } from "@/lib/store";

export function HostelDetails() {
  const { open, setOpen } = HostelDetailsToggle();
  return <div className="fixed top-0 left-0  bg-black/50">HostelDetails</div>;
}
