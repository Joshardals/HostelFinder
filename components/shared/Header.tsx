"use client";
import { HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";
import { Logo } from "./Logo";
import { navlinks } from "@/lib/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarToggle } from "@/lib/store";
import { usePathname } from "next/navigation";
import { useLockBodyScroll } from "@/lib/hooks";
import { Searchbar } from "../Find-Hostels/Searchbar";

export function Header() {
  const { open, setOpen } = SidebarToggle();
  const pathname = usePathname();
  const isHostels = pathname.startsWith("/find-hostels");

  return (
    <header
      className={`max-[1200px]:p-4 lg:py-2 fixed bg-white ${
        !isHostels && "border-b border-b-charcoal/20"
      } top-0 right-0 left-0 w-full z-30`}
    >
      <div
        className={`max-content flex gap-2 md:grid md:grid-cols-3 md:gap-4 items-center`}
      >
        <div className={`${isHostels && "max-sm:justify-self-center"}`}>
          <Logo isHostels={isHostels} />
        </div>

        <div className="flex-1 md:hidden">{isHostels && <Searchbar />}</div>

        {/* NavLinks only appear on screen size starting from md */}
        <div className="justify-self-center flex items-center space-x-8 max-md:hidden">
          <NavLinks label="Find Hostels" href="/find-hostels" />
          <NavLinks label="About Us" href="#" />
        </div>
        <div className="justify-self-end flex items-center space-x-8 max-md:hidden">
          <NavLinks label="Help" href="#" />
          <NavLinks label="Contact Us" href="#" />
        </div>

        {/* Hamburger Menu */}
        <div className="justify-self-end md:hidden">
          <RxHamburgerMenu
            className="size-7 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <Sidebar />
      </div>
    </header>
  );
}

export function NavLinks({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="hover:text-royal hover-effects">
      {label}
    </Link>
  );
}

export function Sidebar() {
  const { open, setOpen } = SidebarToggle();

  useLockBodyScroll(open); // An hook to lock the body scroll

  return (
    <div
      className={`md:hidden fixed right-0 top-0 bg-black/50 text-gray w-full h-screen flex justify-end hover-effects ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div
        className="p-4 bg-charcoal h-full w-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <HiMiniXMark
            className="size-7 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <ul className="space-y-4">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className=" hover:underline hover-effects capitalize"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
