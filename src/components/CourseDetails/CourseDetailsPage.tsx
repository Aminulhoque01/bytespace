"use client";


import CourseDetailsContent from "./CourseDetailsContent";
import CourseEnrollCard from "./CourseEnrollCard";
import Navbar from "../layout/Navbar";
import CourseDetailsHero from "./CourseDetailsHero";

export default function CourseDetailsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO WRAPPER
      ====================================================== */}

      <div className="relative">
        {/* HERO */}

        <CourseDetailsHero />

       
        <div
          className="
            mx-auto
            w-full
            max-w-[1159px]
            px-[16px]

            sm:px-[25px]

            lg:px-0
          "
        >
          <CourseEnrollCard />
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <CourseDetailsContent />
    </main>
  );
}