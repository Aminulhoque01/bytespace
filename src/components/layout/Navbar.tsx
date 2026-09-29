"use client";

import { Menu, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

function ByteSpaceLogo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Logo mark */}
      <Image
        src="/images/Header_Logo.png"
        alt="ByteSpace logo"
        width={150}
        height={80}
        priority
        className="
            block
            h-auto
            w-full
            object-contain
        
        "
        />

      
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10">
      <div className="mx-auto flex h-[118px] max-w-[1125px] items-center justify-between px-5 lg:px-0">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <ByteSpaceLogo />
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-[16px] font-normal text-white transition-opacity hover:opacity-70"
          >
            Home
          </a>

          <a
            href="#courses"
            className="text-[16px] font-normal text-white transition-opacity hover:opacity-70"
          >
            Courses
          </a>

          <a
            href="#creators"
            className="text-[16px] font-normal text-white transition-opacity hover:opacity-70"
          >
            Creators
          </a>
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="/login"
            className="text-[16px] text-white transition-opacity hover:opacity-70"
          >
            Sign In
          </a>

          <a
            href="/signup"
            className="text-[16px] text-white transition-opacity hover:opacity-70"
          >
            Join Us
          </a>

          <button
            type="button"
            aria-label="Shopping bag"
            className="text-white transition-transform hover:scale-105"
          >
            <ShoppingBag size={22} strokeWidth={1.8} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex text-white md:hidden"
        >
          {mobileOpen ? (
            <X size={27} strokeWidth={1.7} />
          ) : (
            <Menu size={27} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#003BE2] transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[350px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="border-b border-white/10 py-4 text-[16px]"
          >
            Home
          </a>

          <a
            href="#courses"
            onClick={() => setMobileOpen(false)}
            className="border-b border-white/10 py-4 text-[16px]"
          >
            Courses
          </a>

          <a
            href="#creators"
            onClick={() => setMobileOpen(false)}
            className="border-b border-white/10 py-4 text-[16px]"
          >
            Creators
          </a>

          <div className="flex gap-6 py-5">
            <a href="/login">Sign In</a>
            <a href="/signup">Join Us</a>

            <ShoppingBag
              size={21}
              strokeWidth={1.8}
              className="ml-auto"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}