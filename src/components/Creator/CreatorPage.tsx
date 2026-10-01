"use client";

import CreatorCard from "./CreatorCard";
import {
  BarChart3,
  Funnel,
  Layers3,
  SlidersHorizontal,
} from "lucide-react";
import CreatorHero from "./CreatorHero";

/* =========================================================
   COURSE DATA
========================================================= */

const creatorCourses = [
  {
    id: 6,
    title: "From Idea to Startup Success",
    image: "/images/skill/skillImage6.png",
    category: "Creative Marketing",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student2.png",
      "/images/students/student3.png",
      "/images/students/student4.png",
    ],
  },

  
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/images/skill/skillImage1.png",
    category: "UI/UX Design",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student1.png",
      "/images/students/student2.png",
      "/images/students/student3.png",
      "/images/students/student4.png",
      "/images/students/student5.png",
    ],
  },

  {
    id: 2,
    title: "Build Digital Asset",
    image: "/images/skill/skillImage2.png",
    category: "Creative Marketing",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student2.png",
      "/images/students/student3.png",
      "/images/students/student4.png",
      "/images/students/student5.png",
      "/images/students/student6.png",
    ],
  },

  {
    id: 3,
    title: "the Power of Big Data",
    image: "/images/skill/skillImage3.png",
    category: "Marketing",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student3.png",
      "/images/students/student4.png",
      "/images/students/student5.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
    ],
  },

  {
    id: 4,
    title: "Balancing Productivity and Life",
    image: "/images/skill/skillImage4.png",
    category: "Social Media",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student4.png",
      "/images/students/student5.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student2.png",
    ],
  },

  {
    id: 5,
    title: "Mastering Money Management",
    image: "/images/skill/skillImage5.png",
    category: "Marketing",
    instructor: "pupespai studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: "17",
    duration: "2 hours 16 mins",
    comments: "59",
    students: "26+",
    avatars: [
      "/images/students/student5.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student2.png",
      "/images/students/student3.png",
    ],
  },

  

  
];

/* =========================================================
   FILTER BUTTON
========================================================= */

interface FilterButtonProps {
  icon: React.ReactNode;
  label: string;
}

function FilterButton({
  icon,
  label,
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className="
        flex
        h-[31px]
        shrink-0
        items-center
        gap-[6px]
        rounded-full
        border
        border-[#DEDEDE]
        bg-white
        px-[12px]
        text-[10px]
        font-normal
        leading-none
        text-[#222222]
        transition-colors
        duration-150
        hover:bg-[#F7F7F7]
      "
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}

/* =========================================================
   CREATOR PAGE
========================================================= */

export default function CreatorPage() {
  return (
    <main className="min-h-screen w-full bg-white">

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <CreatorHero/>


      <section className="w-full bg-white">

        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-[16px]
            pb-[70px]
            pt-[42px]
            sm:px-[20px]
            xl:px-0
          "
        >

          {/* =================================================
              FILTER / SORT BAR
          ================================================== */}

          <div
            className="
              mb-[56px]
              flex
              w-full
              items-center
              justify-between
            "
          >

            {/* =================================================
                LEFT FILTERS
            ================================================== */}

            <div
              className="
                flex
                items-center
                gap-[8px]
              "
            >

              <FilterButton
                label="Filter"
                icon={
                  <Funnel
                    size={11}
                    strokeWidth={1.8}
                  />
                }
              />

              <FilterButton
                label="Level"
                icon={
                  <BarChart3
                    size={11}
                    strokeWidth={1.8}
                  />
                }
              />

              <FilterButton
                label="Category"
                icon={
                  <Layers3
                    size={11}
                    strokeWidth={1.8}
                  />
                }
              />

            </div>

            {/* =================================================
                SORT BUTTON
            ================================================== */}

            <button
              type="button"
              className="
                flex
                h-[31px]
                shrink-0
                items-center
                gap-[6px]
                rounded-full
                border
                border-[#DEDEDE]
                bg-white
                px-[12px]
                text-[10px]
                font-normal
                leading-none
                text-[#222222]
                transition-colors
                duration-150
                hover:bg-[#F7F7F7]
              "
            >
              <SlidersHorizontal
                size={11}
                strokeWidth={1.8}
              />

              <span>Most relevant</span>
            </button>

          </div>

          {/* =================================================
              COURSE GRID
          ================================================== */}

          <div
            className="
              grid
              w-full
              grid-cols-1
              justify-items-center
              gap-x-[20px]
              gap-y-[40px]
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            {creatorCourses.map((course) => (
              <CreatorCard
                key={course.id}
                course={course}
              />
            ))}
          </div>

        </div>

      </section>

    </main>
  );
}