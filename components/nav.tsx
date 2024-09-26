"use client";

import Link from "next/link";
// import { useContext } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "@/constants";
// import { CursorContext } from "@/components/cursor-context";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="container mx-auto flex items-center gap-8">
        {navLinks.map(({ name, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className={cn(
                "uppercase",
                pathname === href && "border-b-2 border-accent"
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
