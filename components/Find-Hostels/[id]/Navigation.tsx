import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";

export default function Navigation() {
  return (
    <Link
      href="/find-hostels"
      className="hover-effects decoration-royal text-royal font-medium hover:underline flex items-center space-x-2"
    >
      <FaArrowLeftLong className="" />
      <span className="text-sm">Back to Hostels</span>
    </Link>
  );
}
