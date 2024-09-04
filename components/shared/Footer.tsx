import { footerLinks, footerSocialIcons } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-gray py-10">
      <div className="max-content space-y-6 max-lg:p-4 lg:py-4 flex flex-col items-center justify-center">
        {/* <ul className="flex space-x-4">
          {footerLinks.map((link, index) => (
            <li key={index} className="capitalize">
              <Link href={link.href} className="hover:underline hover-effects">
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}

        <ul className="flex space-x-4">
          {footerSocialIcons.map((link, index) => (
            <li key={index} className="capitalize">
              <Link href={link.href}>
                <Image
                  src={link.src}
                  width={100}
                  height={50}
                  alt={link.label}
                  className="size-8"
                />
              </Link>
            </li>
          ))}
        </ul>

        <p>Connecting you to the best Hostels</p>
      </div>
    </footer>
  );
}
