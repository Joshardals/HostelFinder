import { footerLinks } from "@/lib/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal max-lg:p-4 lg:py-4 text-gray">
      <div className="max-content">
        <ul className="flex space-x-4">
          {footerLinks.map((link, index) => (
            <li key={index} className="capitalize">
              <Link href={link.href} className="hover:underline hover-effects">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
