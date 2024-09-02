"use client";
import { HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";
import { Logo } from "./Logo";
import { navlinks } from "@/lib/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarToggle } from "@/lib/store";

export function Header() {
  const { open, setOpen } = SidebarToggle();
  return (
    <header className="max-content max-lg:p-4 lg:py-4 grid grid-cols-2 sm:grid-cols-3 sm:gap-4 items-center z-10">
      <Logo />
      <div className="justify-self-center flex items-center space-x-8 max-md:hidden">
        <NavLinks label="Find Hostels" href="#" />
        <NavLinks label="About Us" href="#" />
      </div>
      <div className="justify-self-end flex items-center space-x-8 max-md:hidden">
        <NavLinks label="Help" href="#" />
        <NavLinks label="Contact Us" href="#" />
      </div>

      {/* Hamburger Menu */}
      <div className="justify-self-end sm:hidden">
        <RxHamburgerMenu
          className="size-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      <Sidebar />
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
  return (
    <div className=" sm:hidden fixed right-0 top-0 bg-charcoal text-gray w-[20rem] h-full z-10 p-4">
      <div className="flex justify-end">
        <HiMiniXMark
          className="size-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      <ul className="space-y-4">
        {navlinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="hover:text-royal hover-effects capitalize"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
