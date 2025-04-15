"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyles =
    "text-sm sm:text-lg relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#7f8ced] after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out transition-all duration-300";

  const links = [
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/", label: "about" },
  ];

  return (
    <div className="absolute top-20 sm:absolute sm:top-30 flex justify-center gap-4 mb-10 md:justify-start">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${linkStyles} ${
            href === pathname
              ? "!text-[var(--link-color)] hover:text-[var(--link-hover-color)] -translate-y-0.5 after:scale-x-100"
              : "!text-white hover:text-[var(--link-color)] hover:after:scale-x-100 hover:after:origin-bottom-left"
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
