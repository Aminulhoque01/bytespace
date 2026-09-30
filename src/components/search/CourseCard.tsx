"use client";

import Image from "next/image";
import { BarChart3, Star } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  image: string;
  category: string;
  duration: string;
  lessons: string;
  students: string;
  instructor: string;
  rating: number;
  price: number;
  level: string;
  avatars: string[];
  comments?: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article
      className="
        group
        box-border
        h-[384px]
        w-full
        overflow-hidden
        rounded-[14px]
        border
        border-[#DEDEDE]
        bg-white
        p-[16px]
        transition-all
        duration-200
        hover:-translate-y-[2px]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
      "
    >
      {/* =====================================================
          COURSE IMAGE
      ====================================================== */}

      <div
        className="
          relative
          h-[195.1445px]
          w-full
          overflow-hidden
          rounded-[10px]
          bg-[#F3F3F3]
        "
      >
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={course.id <= 3}
          sizes="373px"
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-[1.025]
          "
        />

        
      </div>

      {/* =====================================================
          COURSE CONTENT
      ====================================================== */}

      <div className="pt-[13px]">
        {/* TITLE + RATING */}

        <div className="flex items-center justify-between gap-[10px]">
          <h3
            title={course.title}
            className="
              min-w-0
              flex-1
              truncate
              text-[16px]
              font-semibold
              leading-[20px]
              tracking-[-0.2px]
              text-[#151515]
            "
          >
            {course.title}
          </h3>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-[4px]
            "
          >
            <span
              className="
                text-[12px]
                font-normal
                leading-none
                text-[#666]
              "
            >
              {course.rating.toFixed(1)}
            </span>

            <Star
              size={13}
              strokeWidth={1.5}
              className="
                fill-[#D0D0D0]
                text-[#D0D0D0]
              "
            />
          </div>
        </div>

        {/* INSTRUCTOR */}

        <p
          className="
            mt-[4px]
            truncate
            text-[10px]
            font-normal
            leading-[14px]
            text-[#4774C8]
          "
        >
          by {course.instructor}
        </p>

        {/* =================================================
            LEVEL + STUDENTS
        ================================================== */}

        <div
          className="
            mt-[12px]
            flex
            items-center
             
          "
        >
          {/* Level */}

          <div
            className="
              flex
              h-[27px]
              items-center
              gap-[5px]
              rounded-full
              bg-[#F3F3F3]
              px-[10px]
            "
          >
            <BarChart3
              size={11}
              strokeWidth={1.8}
              className="text-[#666]"
            />

            <span
              className="
                text-[10px]
                font-normal
                leading-none
                text-[#555]
              "
            >
              {course.level}
            </span>
          </div>

          {/* Student avatars */}

          <div className="flex items-center px-5">
            {course.avatars
              .slice(0, 5)
              .map((avatar, index) => (
                <div
                  key={`${avatar}-${index}`}
                  className={`
                    relative
                    h-[29px]
                    w-[29px]
                    overflow-hidden
                    rounded-full
                    border-[2px]
                    border-white
                    ${
                      index > 0
                        ? "-ml-[8px]"
                        : ""
                    }
                  `}
                >
                  <Image
                    src={avatar}
                    alt=""
                    fill
                    sizes="29px"
                    className="object-cover"
                  />
                </div>
              ))}

            {/* Extra students */}

            <span
              className="
                relative
                z-10
                -ml-[8px]
                flex
                h-[29px]
                min-w-[29px]
                items-center
                justify-center
                rounded-full
                border-[2px]
                border-white
                bg-[#D4FB20]
                px-[5px]
                text-[9px]
                font-semibold
                leading-none
                text-[#111]
              "
            >
              {course.students}
            </span>
          </div>
        </div>

        {/* =================================================
            PRICE
        ================================================== */}

        <div
          className="
            mt-[13px]
            flex
            items-end
            gap-[3px]
          "
        >
          <span
            className="
              text-[16px]
              font-bold
              leading-none
              text-[#0055D9]
            "
          >
            ${course.price}
          </span>

          <span
            className="
              pb-[1px]
              text-[9px]
              leading-none
              text-[#777]
            "
          >
            /lifetime
          </span>
        </div>
      </div>
    </article>
  );
}