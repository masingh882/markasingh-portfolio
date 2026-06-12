"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Evidence", href: "/evidence" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-[#020617]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm font-medium text-slate-300">
        <Link href="/" className="text-base font-semibold tracking-tight text-white">
          Mark <span className="text-cyan-300">A.</span> Singh
        </Link>

        <div className="flex gap-5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-cyan-300 ${
                  isActive ? "text-cyan-300" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}