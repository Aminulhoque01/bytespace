"use client";

import Image from "next/image";
import Link from "next/link";
import { BarChart3, Star } from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

export interface CreatorCourse {
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

interface CreatorCardProps {
  course: CreatorCourse;
}

/* =========================================================
   CREATOR CARD
========================================================= */

export default function CreatorCard({
  course,
}: CreatorCardProps) {
  return (
    <Link
      href="/course-details"
      className="
        block
        w-full
        max-w-[373px]
      "
    >
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
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.07)]
        "
      >
        {/* =====================================================
            COURSE IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[195px]
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
            sizes="341px"
            className="
              object-cover
              transition-transform
              duration-300
              ease-out
              group-hover:scale-[1.02]
            "
          />

           
        </div>

        {/* =====================================================
            COURSE CONTENT
        ====================================================== */}

        <div className="pt-[11px]">

          {/* ===================================================
              TITLE + RATING
          ==================================================== */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-[10px]
            "
          >
            <h3
              title={course.title}
              className="
                min-w-0
                flex-1
                truncate
                text-[20px]
                font-semibold
                leading-[20px]
                tracking-[-0.2px]
                text-[#000000]
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
                  text-[16px]
                  font-normal
                  leading-none
                  text-[#CED0D3]
                "
              >
                {course.rating.toFixed(1)}
              </span>

              <Star
                size={13}
                strokeWidth={1.5}
                className="
                  fill-[#D0D0D0]
                  text-[#CED0D3]
                "
              />
            </div>
          </div>

          {/* ===================================================
              INSTRUCTOR
          ==================================================== */}

          <p
            className="
              mt-[2px]
              truncate
              text-[12px]
              font-normal
              leading-[160%]
              text-[#CED0D3]
            "
          >
            by <span className="text-[#003BE2]">{course.instructor}</span>
          </p>

          {/* ===================================================
              LEVEL + AVATARS
          ==================================================== */}

          <div
            className="
              mt-[10px]
              flex
              w-full
              items-center
              
            "
          >
            {/* LEVEL */}

            <div
              className="
                flex
                h-[32px]
                shrink-0
                items-center
                gap-[5px]
                rounded-[24px]
                bg-[#F5F5F6]
                px-[10px]
              "
            >
              <BarChart3
                size={15}
                strokeWidth={1.8}
                className="text-[#666666]"
              />

              <span
                className="
                  text-[12px]
                  font-normal
                  leading-none
                  text-[#555555]
                "
              >
                {course.level}
              </span>
            </div>

            {/* STUDENT AVATARS */}

            <div
              className="
                px-5
                flex
                items-center
              "
            >
              {course.avatars
                .slice(0, 5)
                .map((avatar, index) => (
                  <div
                    key={`${course.id}-${avatar}-${index}`}
                    className={`
                      relative
                      h-[29px]
                      w-[29px]
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border-[2px]
                      border-white
                      bg-[#EEEEEE]
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

              {/* EXTRA STUDENTS */}

              <span
                className="
                  relative
                  z-10
                  -ml-[8px]
                  flex
                  h-[29px]
                  min-w-[29px]
                  shrink-0
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
                  text-[#111111]
                "
              >
                {course.students}
              </span>
            </div>
          </div>

          {/* ===================================================
              PRICE
          ==================================================== */}

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
                text-[25px]
                font-bold
                leading-none
                text-[#003BE2]
              "
            >
              ${course.price}
            </span>

            <span
              className="
                pb-[1px]
                text-[12px]
                font-normal
                leading-none
                text-[#4F4F4F]
              "
            >
              /lifetime
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}