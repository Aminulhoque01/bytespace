"use client";

import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "../layout/Navbar";

interface SearchHeroProps {
  value?: string;
  onSearch?: (value: string) => void;
}

const categories = ["Courses", "Creators", "Categories"];

export default function SearchHero({
  value = "",
  onSearch,
}: SearchHeroProps) {
  const [search, setSearch] = useState(value);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Courses");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch?.(search);
  };

  return (
    <section className="relative h-[360px] w-full overflow-hidden bg-[#073FDC]">
      {/* =====================================================
          GRID BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255, 255, 255, 0.11) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.11) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "55px 54px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div
        className="
          absolute
          inset-x-0
          top-[54px]
          bottom-0
          z-10
          flex
          items-center
          justify-center
          px-5
          sm:px-6
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[760px]
            -translate-y-[5px]
            flex-col
            items-center
          "
        >
          {/* =================================================
              TITLE
          ================================================== */}
          <h1
            className="
              m-0
              text-center
              text-[30px]
              font-semibold
              leading-[1.2]
              tracking-[-0.7px]
              text-white
              sm:text-[34px]
              md:text-[38px]
            "
          >
            Find Your Next Course
          </h1>

        

          {/* =================================================
              SEARCH AREA
          ================================================== */}
          <form
            onSubmit={handleSubmit}
            className="
              relative
              mt-[28px]
              flex
              h-[52px]
              w-full
              max-w-[540px]
              items-center
              gap-[10px]
              sm:h-[56px]
              sm:max-w-[580px]
              sm:gap-[12px]
            "
          >
            {/* =================================================
                SEARCH INPUT
            ================================================== */}
            <div className="relative min-w-0 flex-1">
              <Search
                aria-hidden="true"
                size={18}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute
                  left-[18px]
                  top-1/2
                  z-10
                  -translate-y-1/2
                  text-[#8D8D8D]
                  sm:left-[20px]
                  sm:h-[19px]
                  sm:w-[19px]
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search courses..."
                aria-label="Search courses"
                className="
                  h-[52px]
                  w-full
                  rounded-full
                  border-0
                  bg-white
                  pl-[48px]
                  pr-[18px]
                  text-[13px]
                  font-normal
                  text-[#222222]
                  shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                  outline-none
                  placeholder:text-[#999999]
                  focus:outline-none
                  sm:h-[56px]
                  sm:pl-[52px]
                  sm:text-[14px]
                "
              />
            </div>

            {/* =================================================
                CATEGORY DROPDOWN
            ================================================== */}
            <div className="relative shrink-0">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
                className="
                  flex
                  h-[52px]
                  min-w-[105px]
                  items-center
                  justify-center
                  gap-[7px]
                  rounded-full
                  border-0
                  bg-[#C8FF00]
                  px-[16px]
                  text-[12px]
                  font-semibold
                  leading-none
                  text-[#111111]
                  shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                  outline-none
                  transition-all
                  duration-150
                  hover:brightness-95
                  active:scale-[0.98]
                  focus:outline-none
                  sm:h-[56px]
                  sm:min-w-[115px]
                  sm:px-[18px]
                  sm:text-[13px]
                "
              >
                <span>{category}</span>

                <ChevronDown
                  aria-hidden="true"
                  size={14}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-200
                    ${open ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* =================================================
                  DROPDOWN
              ================================================== */}
              {open && (
                <>
                  {/* Outside click layer */}
                  <button
                    type="button"
                    aria-label="Close category menu"
                    onClick={() => setOpen(false)}
                    className="
                      fixed
                      inset-0
                      z-40
                      h-screen
                      w-screen
                      cursor-default
                    "
                  />

                  {/* Dropdown */}
                  <div
                    role="listbox"
                    className="
                      absolute
                      right-0
                      top-[65px]
                      z-50
                      w-[145px]
                      overflow-hidden
                      rounded-[12px]
                      border
                      border-[#E8E8E8]
                      bg-white
                      p-[6px]
                      shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                    "
                  >
                    {categories.map((item) => (
                      <button
                        key={item}
                        type="button"
                        role="option"
                        aria-selected={category === item}
                        onClick={() => {
                          setCategory(item);
                          setOpen(false);
                        }}
                        className="
                          flex
                          w-full
                          items-center
                          rounded-[8px]
                          px-[12px]
                          py-[10px]
                          text-left
                          text-[11px]
                          font-medium
                          text-[#222222]
                          transition-colors
                          hover:bg-[#F3F3F3]
                        "
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}