"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

function ByteSpaceLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/Header_Logo.png"
        alt="ByteSpace logo"
        width={150}
        height={80}
        priority
        className="block h-auto w-[135px] object-contain"
      />
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white  ">
      {/* Subtle grid - NO background */}
       

      {/* Main Navbar */}
      <nav
        className="
          relative
          mx-auto
          flex
          h-[100px]
          max-w-[1200px]
          items-center
          justify-between
          px-6
          lg:px-0
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="group relative z-10 flex shrink-0 items-center"
        >
          <ByteSpaceLogo />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-8
            md:flex
          "
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/course">Courses</NavLink>
          <NavLink href="/creators">Creators</NavLink>
        </div>

        {/* Right Side */}
        <div className="relative z-10 hidden items-center gap-7 md:flex">
          <NavLink href="/sign-in">Sign In</NavLink>
          <NavLink href="/join">Join Us</NavLink>

          <Link
            href="/cart"
            aria-label="Shopping bag"
            className="
              ml-1
              flex
              h-10
              w-10
              items-center
              justify-end
              text-white
              transition-all
              duration-300
              hover:opacity-60
            "
          >
            <ShoppingBag
              size={22}
              strokeWidth={1.6}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="
            relative
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            text-white
            transition-opacity
            hover:opacity-70
            md:hidden
          "
        >
          {mobileOpen ? (
            <X size={25} strokeWidth={1.6} />
          ) : (
            <Menu size={25} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-black/10
          backdrop-blur-md
          transition-all
          duration-300
          md:hidden
          ${
            mobileOpen
              ? "max-h-[430px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col px-6 pb-6 pt-3">
          <MobileLink
            href="/"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </MobileLink>

          <MobileLink
            href="/courses"
            onClick={() => setMobileOpen(false)}
          >
            Courses
          </MobileLink>

          <MobileLink
            href="/creators"
            onClick={() => setMobileOpen(false)}
          >
            Creators
          </MobileLink>

          <div className="my-2 h-px bg-white/10" />

          <MobileLink
            href="/signin"
            onClick={() => setMobileOpen(false)}
          >
            Sign In
          </MobileLink>

          <MobileLink
            href="/join"
            onClick={() => setMobileOpen(false)}
          >
            Join Us
          </MobileLink>

          <MobileLink
            href="/cart"
            onClick={() => setMobileOpen(false)}
          >
            Shopping Bag
          </MobileLink>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        text-[16px]
        font-normal
        tracking-[-0.2px]
        text-white/95
        transition-all
        duration-200
        hover:text-white/60
      "
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="
        border-b
        border-white/10
        py-4
        text-[16px]
        font-normal
        text-white/95
        transition-opacity
        hover:opacity-60
      "
    >
      {children}
    </Link>
  );
}