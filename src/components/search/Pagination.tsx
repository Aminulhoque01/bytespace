"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="mt-[28px] flex items-center justify-center gap-[5px]">
      {/* PREVIOUS */}

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="
          flex
          h-[24px]
          w-[24px]
          items-center
          justify-center
          rounded-full
          border
          border-[#E1E1E1]
          bg-white
          text-[#555]
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <ChevronLeft size={10} />
      </button>

      {/* PAGES */}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const active = page === currentPage;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              flex
              h-[24px]
              w-[24px]
              items-center
              justify-center
              rounded-full
              text-[7px]
              transition
              ${
                active
                  ? "bg-[#C8FF00] text-[#111]"
                  : "border border-[#E1E1E1] bg-white text-[#555] hover:bg-[#F5F5F5]"
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* NEXT */}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="
          flex
          h-[24px]
          w-[24px]
          items-center
          justify-center
          rounded-full
          border
          border-[#E1E1E1]
          bg-white
          text-[#555]
          disabled:cursor-not-allowed
          disabled:opacity-30
        "
      >
        <ChevronRight size={10} />
      </button>
    </div>
  );
}