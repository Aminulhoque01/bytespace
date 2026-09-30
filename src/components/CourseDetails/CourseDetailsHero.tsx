"use client";

import Image from "next/image";
import {
  BarChart3,
  Play,
  Share2,
  Star,
  Users,
} from "lucide-react";
import Navbar from "../layout/Navbar";

interface CourseDetailsHeroProps {
  title?: string;
  subtitle?: string;
  instructor?: string;
  level?: string;
  rating?: number;
  reviewCount?: number;
  students?: number;
}

export default function CourseDetailsHero({
  title = "Build Digital Asset: A Comprehensive Guide",
  subtitle = "Unlock the Power of Digital Creation with Expert Guidance",
  instructor = "purepearl studio",
  level = "Intermediate",
  rating = 4.8,
  reviewCount = 172,
  students = 199,
}: CourseDetailsHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#073FDC]">
      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.115) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.115) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-30">
        <Navbar/>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1159px]
          px-[16px]
          pb-[55px]
          pt-[120px]

          sm:px-[25px]

          lg:px-0
            
        "
      >
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="relative">
          <div
            className="
              flex
              flex-col
              gap-[13px]

              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div className="min-w-0">
              <h1
                className="
                  m-0
                  max-w-[700px]
                  text-[36px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.5px]
                  text-white

                  sm:text-[29px]

                  lg:text-[32px]
                "
              >
                {title}
              </h1>

              <p
                className="
                  m-0
                  mt-[7px]
                  text-[20px]
                  font-medium
                  text-white

                  sm:text-[20px]
                "
              >
                {subtitle}
              </p>
            </div>

            {/* SHARE */}

            <button
              type="button"
              className="
                flex
                h-[31px]
                w-[86px]
                shrink-0
                items-center
                justify-center
                gap-[6px]
                rounded-full
                border-0
                bg-[#C8FF00]
                text-[8px]
                font-medium
                text-[#111]
                transition-all
                hover:brightness-95
                active:scale-[0.97]
              "
            >
              <Share2 size={11} />

              Share
            </button>
          </div>

          {/* INSTRUCTOR */}

          <p
            className="
              m-0
              mt-[13px]
              text-[16px]
              font-medium
              text-white
            "
          >
            by{" "}
            <span className="font-semibold text-amber-200">
              {instructor}
            </span>
          </p>

          {/* META */}

          <div
            className="
              mt-[12px]
              flex
              flex-wrap
              gap-[7px]
            "
          >
            <MetaItem
              icon={<BarChart3 size={15} />}
              text={level}
            />

            <MetaItem
              icon={
                <Star
                  size={15}
                  fill="currentColor"
                />
              }
              text={`${rating.toFixed(1)} (${reviewCount} reviews)`}
            />

            <MetaItem
              icon={<Users size={15} />}
              text={`${students} Students`}
            />
          </div>
        </div>

        {/* ===================================================
            VIDEO
        ==================================================== */}

        <div
          className="
            relative
            mt-[28px]
            w-full
            max-w-[700px]
            overflow-hidden
            rounded-[13px]
            bg-[#EEEEEE]

            sm:h-[320px]

            lg:w-[720px]
            lg:h-[400px]
          "
        >
          <div className="relative h-[430px] w-full sm:h-full">
            <Image
              src="/images/course/courseVideo.jpg"
              alt="Course video"
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 768px) 100vw,
                720px
              "
            />

            {/* PLAY */}

            <button
              type="button"
              aria-label="Play course video"
              className="
                absolute
                left-1/2
                top-1/2
                flex
                h-[53px]
                w-[53px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-[12px]
                border-0
                bg-[#8D7D75]/95
                text-white
                shadow-lg
                transition
                hover:scale-105
                active:scale-95
              "
            >
              <Play
                size={21}
                fill="white"
                strokeWidth={0}
                className="ml-[2px]"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   META ITEM
========================================================= */

function MetaItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div
      className="
        flex
        h-[24px]
        items-center
        gap-[6px]
        rounded-full
        bg-white
        px-[11px]
        text-[8px]
        font-medium
        text-[#222]
      "
    >
      <span className="text-[#073FDC]">
        {icon}
      </span>

      {text}
    </div>
  );
}