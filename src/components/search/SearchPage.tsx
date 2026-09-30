"use client";

import { useMemo, useState } from "react";

import CourseCard, { Course } from "./CourseCard";
import SearchHero from "./SearchHero";
import SearchFilters from "./SearchFilters";
import Pagination from "./Pagination";

/* =========================================================
   COURSE DATA
   TOTAL = 12 COURSES
========================================================= */

const courses: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/images/skill/skillImage1.png",
    category: "UI/UX Design",
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "59",
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
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "59",
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
    title: "The Power of Big Data",
    image: "/images/skill/skillImage3.png",
    category: "Marketing",
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "59",
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
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "59",
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
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "69",
    avatars: [
      "/images/students/student5.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student2.png",
      "/images/students/student3.png",
    ],
  },

  {
    id: 6,
    title: "From Idea to Startup Success",
    image: "/images/skill/skillImage6.png",
    category: "Creative Marketing",
    duration: "2 hours 16 mins",
    lessons: "17",
    students: "26+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "59",
    avatars: [
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student2.png",
      "/images/students/student3.png",
      "/images/students/student4.png",
    ],
  },

  {
    id: 7,
    title: "Advanced Figma UI Design",
    image: "/images/skill/skillImage1.png",
    category: "UI/UX Design",
    duration: "3 hours 20 mins",
    lessons: "21",
    students: "32+",
    instructor: "pupespasi studio",
    rating: 4.6,
    price: 30,
    level: "Intermediate",
    comments: "72",
    avatars: [
      "/images/students/student2.png",
      "/images/students/student4.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
      "/images/students/student3.png",
    ],
  },

  {
    id: 8,
    title: "Creative Digital Branding",
    image: "/images/skill/skillImage2.png",
    category: "Creative Marketing",
    duration: "2 hours 45 mins",
    lessons: "19",
    students: "41+",
    instructor: "pupespasi studio",
    rating: 4.7,
    price: 28,
    level: "Intermediate",
    comments: "64",
    avatars: [
      "/images/students/student3.png",
      "/images/students/student5.png",
      "/images/students/student1.png",
      "/images/students/student4.png",
      "/images/students/student6.png",
    ],
  },

  {
    id: 9,
    title: "Data Analytics Masterclass",
    image: "/images/skill/skillImage3.png",
    category: "Marketing",
    duration: "3 hours 10 mins",
    lessons: "24",
    students: "38+",
    instructor: "pupespasi studio",
    rating: 4.8,
    price: 35,
    level: "Advanced",
    comments: "81",
    avatars: [
      "/images/students/student4.png",
      "/images/students/student6.png",
      "/images/students/student2.png",
      "/images/students/student5.png",
      "/images/students/student1.png",
    ],
  },

  {
    id: 10,
    title: "Build Better Social Media",
    image: "/images/skill/skillImage4.png",
    category: "Social Media",
    duration: "2 hours 30 mins",
    lessons: "18",
    students: "34+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "57",
    avatars: [
      "/images/students/student1.png",
      "/images/students/student3.png",
      "/images/students/student5.png",
      "/images/students/student2.png",
      "/images/students/student6.png",
    ],
  },

  {
    id: 11,
    title: "Money Management Essentials",
    image: "/images/skill/skillImage5.png",
    category: "Marketing",
    duration: "2 hours 55 mins",
    lessons: "20",
    students: "29+",
    instructor: "pupespasi studio",
    rating: 4.6,
    price: 27,
    level: "Beginner",
    comments: "63",
    avatars: [
      "/images/students/student5.png",
      "/images/students/student2.png",
      "/images/students/student4.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
    ],
  },

  {
    id: 12,
    title: "Startup Growth Strategy",
    image: "/images/skill/skillImage6.png",
    category: "Creative Marketing",
    duration: "3 hours 05 mins",
    lessons: "22",
    students: "45+",
    instructor: "pupespasi studio",
    rating: 4.7,
    price: 32,
    level: "Advanced",
    comments: "76",
    avatars: [
      "/images/students/student6.png",
      "/images/students/student3.png",
      "/images/students/student1.png",
      "/images/students/student5.png",
      "/images/students/student2.png",
    ],
  },
  {
    id: 13,
    title: "Startup Growth Strategy",
    image: "/images/skill/skillImage6.png",
    category: "Creative Marketing",
    duration: "3 hours 05 mins",
    lessons: "22",
    students: "45+",
    instructor: "pupespasi studio",
    rating: 4.7,
    price: 32,
    level: "Advanced",
    comments: "76",
    avatars: [
      "/images/students/student6.png",
      "/images/students/student3.png",
      "/images/students/student1.png",
      "/images/students/student5.png",
      "/images/students/student2.png",
    ],
  },
  {
    id: 14,
    title: "Data Analytics Masterclass",
    image: "/images/skill/skillImage3.png",
    category: "Marketing",
    duration: "3 hours 10 mins",
    lessons: "24",
    students: "38+",
    instructor: "pupespasi studio",
    rating: 4.8,
    price: 35,
    level: "Advanced",
    comments: "81",
    avatars: [
      "/images/students/student4.png",
      "/images/students/student6.png",
      "/images/students/student2.png",
      "/images/students/student5.png",
      "/images/students/student1.png",
    ],
  },

  {
    id: 15,
    title: "Build Better Social Media",
    image: "/images/skill/skillImage4.png",
    category: "Social Media",
    duration: "2 hours 30 mins",
    lessons: "18",
    students: "34+",
    instructor: "pupespasi studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    comments: "57",
    avatars: [
      "/images/students/student1.png",
      "/images/students/student3.png",
      "/images/students/student5.png",
      "/images/students/student2.png",
      "/images/students/student6.png",
    ],
  },

  {
    id: 16,
    title: "Money Management Essentials",
    image: "/images/skill/skillImage5.png",
    category: "Marketing",
    duration: "2 hours 55 mins",
    lessons: "20",
    students: "29+",
    instructor: "pupespasi studio",
    rating: 4.6,
    price: 27,
    level: "Beginner",
    comments: "63",
    avatars: [
      "/images/students/student5.png",
      "/images/students/student2.png",
      "/images/students/student4.png",
      "/images/students/student6.png",
      "/images/students/student1.png",
    ],
  },
];

/* =========================================================
   SEARCH PAGE
========================================================= */

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  /*
   * IMPORTANT:
   * One page = 12 courses
   */
  const coursesPerPage = 12;

  /* =======================================================
     FILTER COURSES
  ======================================================== */

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    /* SEARCH */

    if (search.trim()) {
      const query = search.trim().toLowerCase();

      result = result.filter((course) => {
        const title = course.title.toLowerCase();
        const instructor =
          course.instructor.toLowerCase();
        const category =
          course.category.toLowerCase();

        return (
          title.includes(query) ||
          instructor.includes(query) ||
          category.includes(query)
        );
      });
    }

    /* CATEGORY */

    if (activeCategory !== "Featured") {
      result = result.filter(
        (course) =>
          course.category.toLowerCase() ===
          activeCategory.toLowerCase()
      );
    }

    return result;
  }, [search, activeCategory]);

  /* =======================================================
     PAGINATION
  ======================================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredCourses.length /
        coursesPerPage
    )
  );

  /*
   * Prevent invalid page after filtering
   */
  const safeCurrentPage = Math.min(
    currentPage,
    totalPages
  );

  const startIndex =
    (safeCurrentPage - 1) *
    coursesPerPage;

  /*
   * IMPORTANT:
   * Maximum 12 cards per page
   */
  const visibleCourses =
    filteredCourses.slice(
      startIndex,
      startIndex + coursesPerPage
    );

  /* =======================================================
     SEARCH HANDLER
  ======================================================== */

  const handleSearch = (
    value: string
  ) => {
    setSearch(value);
    setCurrentPage(1);
  };

  /* =======================================================
     CATEGORY HANDLER
  ======================================================== */

  const handleCategory = (
    category: string
  ) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  /* =======================================================
     PAGINATION HANDLER
  ======================================================== */

  const handlePageChange = (
    page: number
  ) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
     RENDER
  ======================================================== */

  return (
    <main className="min-h-screen bg-white">

      {/* =================================================
          HERO
      ================================================== */}

      <SearchHero
        value={search}
        onSearch={handleSearch}
      />

      {/* =================================================
          COURSES SECTION
      ================================================== */}

      <section
        className="
          mx-auto
          w-full
          max-w-[1159px]
          px-[16px]
          pb-[70px]
          pt-[35px]

          sm:px-[20px]

          xl:px-0
        "
      >

        {/* =================================================
            FILTERS
        ================================================== */}

        <SearchFilters
          activeCategory={activeCategory}
          setActiveCategory={handleCategory}
        />

        {/* =================================================
            COURSE GRID
        ================================================== */}

        {visibleCourses.length > 0 ? (
          <div
            className="
              mt-[35px]

              grid
              grid-cols-1

              gap-[20px]

              sm:grid-cols-2

              xl:grid-cols-3
            "
          >
            {visibleCourses.map(
              (course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                />
              )
            )}
          </div>
        ) : (

          /* =================================================
             EMPTY STATE
          ================================================== */

          <div
            className="
              flex
              min-h-[300px]
              items-center
              justify-center
              text-center
            "
          >
            <div>

              <p
                className="
                  m-0
                  text-[18px]
                  font-semibold
                  text-[#222]
                "
              >
                No courses found
              </p>

              <p
                className="
                  mt-[7px]
                  text-[12px]
                  text-[#888]
                "
              >
                Try another search or category.
              </p>

            </div>
          </div>
        )}

        {/* =================================================
            PAGINATION
            Always stays BELOW THE COURSE GRID
        ================================================== */}

        {totalPages > 1 && (
          <div
            className="
              mt-[50px]
              flex
              w-full
              justify-center
            "
          >
            <Pagination
              currentPage={safeCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}

      </section>
    </main>
  );
}