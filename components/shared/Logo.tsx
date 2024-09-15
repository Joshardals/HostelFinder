import Link from "next/link";

export function Logo({ isHostels }: { isHostels: boolean }) {
  return (
    <Link href="/" className="w-[fit-content]">
      <h3
        className={`mb-0 font-bold font-lora tracking-wider  ${
          isHostels
            ? "max-sm:before:content-['hf'] sm:before:content-['hostelfindr']"
            : "before:content-['hostelfindr']"
        }`}
      ></h3>
    </Link>
  );
}
