"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { MainNavigation } from "./MainNavigation";

const mobileLinks = [
  { title: "Home", href: "/" },
  { title: "Explore", href: "/explore" },
  { title: "Artworks", href: "/artworks" },
  { title: "Bookmarks", href: "/bookmarks" },
  { title: "Settings", href: "/settings" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Left: Hamburger (mobile only) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              {mobileLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        {/* Center: Desktop nav (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <MainNavigation />
        </div>
        {/* Right: Avatar, theme toggle, etc */}
      </div>
    </header>
  );
}
