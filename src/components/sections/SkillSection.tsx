"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Star } from "lucide-react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const courses = [
  {
    image: "/images/skill/skillImage6.png",
    title: "Learn Product Photography",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
  {
    image: "/images/skill/skillImage1.png",
    title: "Learn Figma from Basic",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
  {
    image: "/images/skill/skillImage2.png",
    title: "Build Digital Asset",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
  {
    image: "/images/skill/skillImage3.png",
    title: "the Power of Big Data",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
  {
    image: "/images/skill/skillImage4.png",
    title: "Master Modern Design",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
  {
    image: "/images/skill/skillImage5.png",
    title: "Creative Digital Marketing",
    creator: "purpual studio",
    rating: "4.5",
    
    level: "Beginner",
    price: "$25",
  },
];

const people = [
  "/images/skillPepole/skillpepole1.png",
  "/images/skillPepole/skillpepole2.png",
  "/images/skillPepole/skillpepole3.png",
  "/images/skillPepole/skillpepole4.png",
];

export default function SkillsSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-0">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[1050px] text-center"
        >
          <h2 className="text-[44px] font-bold leading-[120%] tracking-[-1.2px] text-[#101426] sm:text-[38px] lg:text-[42px]">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="mx-auto mt-3  text-[18px] leading-[160%] text-[#82868E] sm:text-[11px] lg:text-[18px]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different <br /> fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </motion.div>

        {/* ================= CATEGORY FILTER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-6 flex max-w-[950px] flex-wrap justify-center gap-[8px]"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`
                rounded-full
                px-[12px]
                py-[6px]
                text-[9px]
                font-normal
                transition-all
                duration-200
                ${
                  index === 0
                    ? "bg-[#CBFC01] text-[#111111]"
                    : "bg-[#F4F4F5] text-[#55585F] hover:bg-[#CBFC01] hover:text-[#111111]"
                }
              `}
            >
              {category}
            </button>
          ))}

          <button
            type="button"
            className="rounded-full px-[12px] py-[6px] text-[9px] text-[#0046E5] transition hover:bg-[#F4F4F5]"
          >
            + More
          </button>
        </motion.div>

        {/* ================= COURSE GRID ================= */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            justify-items-center
            gap-y-6
            sm:grid-cols-2
            sm:gap-x-5
            lg:grid-cols-[repeat(3,373px)]
            lg:gap-x-[40px]
            lg:gap-y-[40px]
          "
        >
          {courses.map((course, index) => (
            <CourseCard
              key={course.image}
              course={course}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COURSE CARD
========================================================= */

type Course = (typeof courses)[number];

function CourseCard({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      whileHover={{ y: -4 }}
      className="
        group
        relative
        h-[384px]
        w-full
        max-w-[373px]
        overflow-hidden
        rounded-[22px]
        border
        border-[#CED0D3]
        bg-white
        p-[15px]
        shadow-[0_2px_8px_rgba(0,0,0,0.02)]
        transition-shadow
        duration-300
        hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
      "
    >
      {/* ================= IMAGE ================= */}
      <div
        className="
          relative
          h-[195px]
          w-full
          overflow-hidden
          rounded-[15px]
          bg-[#F1F1F1]
        "
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={index < 3}
          sizes="(max-width: 640px) 100vw, 373px"
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.035]
          "
        />

         
      </div>

      {/* ================= CARD BODY ================= */}
      <div className="px-[0px] pt-[20px]">

        {/* ================= TITLE + RATING ================= */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3
              className="
                truncate
                text-[20px]
                font-semibold
                leading-[24px]
                tracking-[-0.4px]
                text-[#17181D]
              "
            >
              {course.title}
            </h3>

            <p
              className="
                mt-[2px]
                text-[12px]
                font-normal
                leading-[18px]
                text-[#4F4F4F]
              "
            >
              by{" "}
              <span className="text-[#003BE2]">
                {course.creator}
              </span>
            </p>
          </div>

          {/* ================= RATING ================= */}
          <div className="flex shrink-0 items-center gap-[4px] pt-[1px]">
            <span className="text-[15px] font-normal leading-none text-[#666970]">
              {course.rating}
            </span>

            <Star
              size={15}
              strokeWidth={1.5}
              className="fill-[#D6D8DC] text-[#D6D8DC]"
            />
          </div>
        </div>

        {/* ================= LEVEL + PEOPLE ================= */}
        <div className="mt-[11px] flex items-center">

          {/* LEVEL */}
          <div
            className="
              flex
              h-[32px]
              items-center
              gap-[6px]
              rounded-full
              bg-[#F4F4F5]
              px-[10px]
            "
          >
            <BarChart3
              size={15}
              strokeWidth={2}
              className="text-[#4B4C53]"
            />

            <span className="text-[10px] font-normal text-[#5F6268]">
              {course.level}
            </span>
          </div>

          {/* PEOPLE */}
          <div className="flex h-[32px] items-center px-5">

            {people.map((person, personIndex) => (
              <div
                key={person}
                className={`
                  relative
                  h-[32px]
                  w-[32px]
                  overflow-hidden
                  rounded-full
                  border-[1.5px]
                  border-white
                  bg-[#E5E5E5]
                  ${personIndex !== 0 ? "-ml-[7px]" : ""}
                `}
              >
                <Image
                  src={person}
                  alt=""
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
            ))}

            {/* 26+ */}
            <div
              className="
                -ml-[7px]
                flex
                h-[32px]
                w-[32px]
                items-center
                justify-center
                rounded-full
                border-[1.5px]
                border-white
                bg-[#CBFC01]
                text-[10px]
                font-semibold
                text-[#111111]
              "
            >
              26+
            </div>
          </div>
        </div>

        {/* ================= PRICE ================= */}
        <div className="mt-[12px] flex items-end gap-[2px]">
          <span
            className="
              text-[20px]
              font-bold
              leading-[24px]
              tracking-[-0.3px]
              text-[#003BE2]
            "
          >
            {course.price}
          </span>

          <span
            className="
              pb-[1px]
              text-[10px]
              font-normal
              leading-[16px]
              text-[#999CA2]
            "
          >
            /Lifetime
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   IMAGE META BADGE
========================================================= */

function MetaBadge({ text }: { text: string }) {
  return (
    <div
      className="
        flex
        h-[27px]
        items-center
        whitespace-nowrap
        rounded-full
        bg-white/80
        px-[11px]
        text-[10px]
        font-normal
        leading-none
        text-[#55585E]
        backdrop-blur-[5px]
      "
    >
      {text}
    </div>
  );
}