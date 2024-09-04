import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="w-[fit-content]">
      <h3 className="mb-0 font-bold font-lora tracking-wider">hostelfindr</h3>
    </Link>
  );
}
