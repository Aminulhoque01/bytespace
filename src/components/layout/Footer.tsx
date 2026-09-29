"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const footerColumns = [
  {
    title: "Courses",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a Creator", href: "/creator" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Newsletter email:", email);

    setEmail("");
  };

  return (
    <footer
      className="w-full bg-white text-[#292929]"
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <div
        className="
          mx-auto
          w-full
          px-[46px]
          pt-[69px]
          pb-[55px]

          max-[1100px]:px-[32px]
          max-[1100px]:pt-[60px]

          max-[768px]:px-[24px]
          max-[768px]:pt-[50px]
          max-[768px]:pb-[40px]

          max-[480px]:px-[20px]
          max-[480px]:pt-[42px]
        "
        style={{
          maxWidth: "1365px",
          boxSizing: "border-box",
        }}
      >
        {/* =======================================================
            MAIN GRID
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-[minmax(0,1fr)_580px]
            gap-[70px]

            max-[1100px]:grid-cols-[minmax(0,1fr)_500px]
            max-[1100px]:gap-[45px]

            max-[900px]:grid-cols-1
            max-[900px]:gap-[55px]
          "
        >
          {/* =====================================================
              LEFT — NEWSLETTER
          ====================================================== */}

          <div className="min-w-0">
            {/* LOGO */}

            <Link
              href="/"
              className="inline-flex items-center no-underline"
              style={{
                height: "32px",
              }}
            >
              {/* ByteSpace icon */}

              <span
                className="relative block shrink-0"
                style={{
                  width: "28px",
                  height: "31px",
                  marginRight: "9px",
                }}
              >
                <span
                  className="absolute bg-[#C8FF00]"
                  style={{
                    left: "0",
                    top: "0",
                    width: "14px",
                    height: "31px",
                    borderRadius: "0 0 10px 10px",
                  }}
                />

                <span
                  className="absolute bg-[#C8FF00]"
                  style={{
                    left: "9px",
                    top: "10px",
                    width: "19px",
                    height: "19px",
                    borderRadius: "50%",
                  }}
                />

                <span
                  className="absolute bg-white"
                  style={{
                    left: "9px",
                    top: "14px",
                    width: "9px",
                    height: "10px",
                    borderRadius: "50%",
                  }}
                />
              </span>

              <span
                className="font-bold text-[#292929]"
                style={{
                  fontSize: "24px",
                  lineHeight: "1",
                  letterSpacing: "-1.2px",
                }}
              >
                ByteSpace
              </span>
            </Link>

            {/* NEWSLETTER DESCRIPTION */}

            <p
              className="
                m-0
                mt-[25px]
                text-[14px]
                leading-[1.5]
                text-[#363636]

                max-[480px]:mt-[20px]
                max-[480px]:text-[13px]
              "
            >
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* EMAIL FORM */}

            <form
              onSubmit={handleSubmit}
              className="
                mt-[46px]
                flex
                items-center
                gap-[23px]

                max-[600px]:mt-[32px]
                max-[600px]:w-full
                max-[480px]:flex-col
                max-[480px]:items-stretch
                max-[480px]:gap-[12px]
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                required
                className="
                  h-[53px]
                  w-[376px]
                  rounded-full
                  border
                  border-[#D1D1D1]
                  bg-white
                  px-[23px]
                  text-[14px]
                  text-[#292929]
                  outline-none
                  transition-all
                  placeholder:text-[#6B6B6B]
                  focus:border-[#A9D900]
                  focus:ring-2
                  focus:ring-[#C8FF00]/20

                  max-[1100px]:w-[340px]
                  max-[600px]:w-full
                  max-[480px]:h-[50px]
                "
              />

              <button
                type="submit"
                className="
                  h-[48px]
                  w-[104px]
                  shrink-0
                  rounded-full
                  border-0
                  bg-[#C8FF00]
                  px-0
                  text-[16px]
                  font-normal
                  text-[#151515]
                  transition-all
                  duration-200
                  hover:bg-[#B8EF00]
                  hover:shadow-[0_5px_18px_rgba(200,255,0,0.25)]
                  active:scale-[0.97]

                  max-[480px]:h-[50px]
                  max-[480px]:w-full
                "
              >
                Search
              </button>
            </form>

            {/* PRIVACY TEXT */}

            <p
              className="
                m-0
                mt-[25px]
                w-[480px]
                text-[11px]
                leading-[1.75]
                text-[#414141]

                max-[600px]:w-full
                max-[480px]:mt-[18px]
                max-[480px]:text-[10px]
              "
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* =====================================================
              RIGHT — NAVIGATION
          ====================================================== */}

          <div
            className="
              grid
              grid-cols-3
              gap-x-[47px]
              pt-[50px]

              max-[1100px]:gap-x-[30px]

              max-[900px]:pt-0

              max-[600px]:grid-cols-2
              max-[600px]:gap-x-[35px]
              max-[600px]:gap-y-[40px]

              max-[420px]:grid-cols-1
              max-[420px]:gap-y-[32px]
            "
          >
            {footerColumns.map((column, columnIndex) => (
              <nav key={columnIndex}>
                {/* Mobile-only column title */}

                <h3
                  className="
                    mb-[18px]
                    hidden
                    text-[14px]
                    font-semibold
                    text-[#171717]

                    max-[420px]:block
                  "
                >
                  {column.title}
                </h3>

                <ul
                  className="
                    m-0
                    flex
                    list-none
                    flex-col
                    gap-[18px]
                    p-0
                  "
                >
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="
                          no-underline
                          text-[14px]
                          font-normal
                          leading-[1.3]
                          text-[#383838]
                          transition-colors
                          duration-200
                          hover:text-[#8DB500]

                          max-[480px]:text-[13px]
                        "
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          DIVIDER
      ========================================================== */}

      <div
        className="
          mx-[46px]
          h-px
          bg-[#D4D4D4]

          max-[1100px]:mx-[32px]
          max-[768px]:mx-[24px]
          max-[480px]:mx-[20px]
        "
      />

      {/* =========================================================
          BOTTOM FOOTER
      ========================================================== */}

      <div
        className="
          mx-[46px]
          flex
          h-[88px]
          items-center
          justify-between

          max-[1100px]:mx-[32px]

          max-[768px]:mx-[24px]
          max-[768px]:h-auto
          max-[768px]:flex-col
          max-[768px]:items-start
          max-[768px]:gap-[20px]
          max-[768px]:py-[25px]

          max-[480px]:mx-[20px]
          max-[480px]:gap-[16px]
        "
      >
        {/* COPYRIGHT */}

        <p
          className="
            m-0
            text-[11px]
            leading-none
            text-[#383838]

            max-[480px]:text-[10px]
          "
        >
          @ 2023 ByteSpace. All rights reserved.
        </p>

        {/* LEGAL LINKS */}

        <div
          className="
            flex
            items-center
            gap-[27px]

            max-[600px]:flex-wrap
            max-[600px]:gap-x-[22px]
            max-[600px]:gap-y-[10px]

            max-[480px]:gap-x-[18px]
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-[11px]
              text-[#383838]
              no-underline
              transition-colors
              hover:text-black

              max-[480px]:text-[10px]
            "
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="
              text-[11px]
              text-[#383838]
              no-underline
              transition-colors
              hover:text-black

              max-[480px]:text-[10px]
            "
          >
            Terms of Service
          </Link>

          <Link
            href="/cookies"
            className="
              text-[11px]
              text-[#383838]
              no-underline
              transition-colors
              hover:text-black

              max-[480px]:text-[10px]
            "
          >
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}