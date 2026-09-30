"use client";

import {
  BarChart3,
  ChevronDown,
  Shapes,
  SlidersHorizontal,
} from "lucide-react";

interface SearchFiltersProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function SearchFilters({
  activeCategory,
  setActiveCategory,
}: SearchFiltersProps) {
  return (
    <div className="w-full">
      {/* =====================================================
          TOP FILTER BUTTONS
      ====================================================== */}

      <div
        className="
          flex
          w-full
          items-center
          justify-between
          gap-[12px]
        "
      >
        {/* LEFT */}

        <div className="flex items-center gap-[9px]">
          {/* Filter */}

          <button
            type="button"
            className="
              flex
              h-[34px]
              items-center
              gap-[6px]
              rounded-full
              border
              border-[#DCDCDC]
              bg-white
              px-[13px]
              text-[10px]
              font-medium
              leading-none
              text-[#333]
              transition-all
              hover:border-[#D4FB20]
              hover:bg-[#FAFAFA]
            "
          >
            <SlidersHorizontal
              size={12}
              strokeWidth={1.8}
            />

            <span>Filter</span>
          </button>

          {/* Level */}

          <button
            type="button"
            className="
              flex
              h-[34px]
              items-center
              gap-[6px]
              rounded-full
              border
              border-[#DCDCDC]
              bg-white
              px-[13px]
              text-[10px]
              font-medium
              leading-none
              text-[#333]
              transition-all
              hover:border-[#D4FB20]
              hover:bg-[#FAFAFA]
            "
          >
            <BarChart3
              size={12}
              strokeWidth={1.8}
            />

            <span>Level</span>

            <ChevronDown
              size={10}
              strokeWidth={1.8}
            />
          </button>

          {/* Category */}

          <button
            type="button"
            className="
              flex
              h-[34px]
              items-center
              gap-[6px]
              rounded-full
              border
              border-[#DCDCDC]
              bg-white
              px-[13px]
              text-[10px]
              font-medium
              leading-none
              text-[#333]
              transition-all
              hover:border-[#D4FB20]
              hover:bg-[#FAFAFA]
            "
          >
            <Shapes
              size={12}
              strokeWidth={1.8}
            />

            <span>Category</span>

            <ChevronDown
              size={10}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* MOST RELEVANT */}

        <button
          type="button"
          className="
            flex
            h-[34px]
            shrink-0
            items-center
            gap-[6px]
            rounded-full
            border
            border-[#DCDCDC]
            bg-white
            px-[13px]
            text-[10px]
            font-medium
            leading-none
            text-[#333]
            transition-all
            hover:bg-[#FAFAFA]
          "
        >
          <span className="text-[13px] leading-none">
            ≡
          </span>

          <span>Most relevant</span>
        </button>
      </div>

      {/* =====================================================
          CATEGORY CHIPS
      ====================================================== */}

      <div
        className="
          mt-[17px]
          flex
          w-full
          items-center
          gap-[10px]
           
          pb-[4px]
          scrollbar-none
        "
      >
        {categories.map((category) => {
          const isActive =
            activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() =>
                setActiveCategory(category)
              }
              className={`
                shrink-0
                rounded-full
                px-[14px]
                py-[8px]
                text-[10px]
                font-medium
                leading-none
                transition-all
                duration-150
                ${
                  isActive
                    ? "bg-[#D4FB20] text-[#111111]"
                    : "bg-[#F3F3F3] text-[#666666] hover:bg-[#EAEAEA]"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}