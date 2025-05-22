"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const pathname = usePathname();

  const linkStyles =
    "text-sm sm:text-lg font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#7f8ced] after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out transition-all duration-300";

  const links = [
    { href: "/", label: "home" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/articles", label: "articles" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--background-rgb)] border-b border-gray-800/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center py-4">
          <div className="flex gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${linkStyles} ${
                  href === pathname
                    ? "!text-[var(--link-color)] hover:text-[var(--link-hover-color)] -translate-y-0.5 after:scale-x-100"
                    : "!text-gray-300 hover:text-[var(--link-color)] hover:after:scale-x-100 hover:after:origin-bottom-left"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
