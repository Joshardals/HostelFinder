"use client";
import { HiMiniXMark } from "react-icons/hi2";
import Link from "next/link";
import { Logo } from "./Logo";
import { navlinks } from "@/lib/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarToggle } from "@/lib/store";
import { useEffect } from "react";

export function Header() {
  const { open, setOpen } = SidebarToggle();
  return (
    <header className="max-lg:p-4 lg:py-2 bg-white fixed right-0 left-0 w-full z-20">
      <div className="max-content grid grid-cols-2 sm:grid-cols-3 sm:gap-4 items-center">
        <Logo />
        <div className="justify-self-center flex items-center space-x-8 max-md:hidden">
          <NavLinks label="Find Hostels" href="/find-hostels" />
          <NavLinks label="About Us" href="#" />
        </div>
        <div className="justify-self-end flex items-center space-x-8 max-md:hidden">
          <NavLinks label="Help" href="#" />
          <NavLinks label="Contact Us" href="#" />
        </div>

        {/* Hamburger Menu */}
        <div className="justify-self-end sm:hidden">
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className={`sm:hidden fixed right-0 top-0 bg-black/50 text-gray w-full h-screen flex justify-end hover-effects ${
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
