"use client";

import Image from "next/image";
import {
  Check,
  Clock3,
  FileText,
  LockKeyhole,
  UserRound,
  Video,
} from "lucide-react";
import Link from "next/link";

interface CourseEnrollCardProps {
  lessons?: number;
  hours?: number;
  price?: number;
  instructorName?: string;
  instructorRole?: string;
}

const includedItems = [
  {
    icon: FileText,
    text: "Learning Resources",
  },
  {
    icon: Video,
    text: "Quality Lesson Videos",
  },
  {
    icon: LockKeyhole,
    text: "Certificate of Completion",
  },
  {
    icon: UserRound,
    text: "Private Consultation",
  },
];

export default function CourseEnrollCard({
  lessons = 112,
  hours = 24,
  price = 25,
  instructorName = "PurePearl Studio",
  instructorRole = "Professional Creator",
}: CourseEnrollCardProps) {
  return (
    <aside
      className="
        relative
        z-40
        w-full
        max-w-[400px]
        h-[759px]
        overflow-hidden
        rounded-[24px]
        border
        border-[#DDDDDD]
        bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]

        lg:absolute
        lg:right-20
        lg:top-[300px]
      "
    >
      {/* =====================================================
          LESSON HEADER
      ====================================================== */}

      <div className="px-[20px] pt-[19px]">
        <h2
          className="
            m-0
            text-[20px]
            font-semibold
            leading-none
            text-[#222]
          "
        >
          {lessons} Lessons ({hours} hours)
        </h2>
      </div>

      {/* =====================================================
          LESSON LIST
      ====================================================== */}

      <div className="px-[20px] pt-[17px] text-[16px]">
        <LessonRow
          number="01"
          title="Introduction to Digital  Asset"
          duration="12 mins"
        />

        <LessonRow
          number="02"
          title="Design Principles for Impacts"
          duration="21 mins"
        />

        <LessonRow
          number="03"
          title="Advanced Techniques in Digital Creation"
          duration="16 mins"
        />

        <p
          className="
            m-0
            mt-[9px]
            text-[16px]
            text-[#4F4F4F]
          "
        >
          99 more videos
        </p>
      </div>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <div className="px-[20px] pt-[16px]">
        <p
          className="
            m-0
             
            text-[16px]
            leading-[160%]
            text-[#4F4F4F]
          "
        >
          Ready to Dive In? Enroll Now and Start <br />
          Building Your Digital Future!
        </p>
      </div>

      {/* =====================================================
          PRICE
      ====================================================== */}

      <div className="px-[20px] pt-[12px]">
        <div className="flex items-end">
          <span
            className="
              text-[36px]
              font-semibold
              leading-none
              text-[#003BE2]
            "
          >
            ${price}
          </span>

          <span
            className="
              mb-[1px]
              ml-[2px]
              text-[16px]
              text-[#4F4F4F]
            "
          >
            /lifetime
          </span>
        </div>
      </div>

      {/* =====================================================
          ENROLL BUTTON
      ====================================================== */}

      <div className="px-[20px] pt-[13px]">
        <button
          type="button"
          className="
            flex
            h-[46px]
            w-full
            items-center
            justify-center
            rounded-full
            border-0
            bg-[#D4FB20]
            text-[8px]
            font-medium
            text-[#222]
            transition-all
            duration-150
            hover:brightness-95 cursor-pointer
            active:scale-[0.98]
          "
        >
          Enroll Now
        </button>
      </div>

      {/* =====================================================
          COURSE INCLUDE
      ====================================================== */}

      <div className="px-[20px] pb-[17px] pt-[14px]">
        <h3
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#222]
          "
        >
          This course include
        </h3>

        <div className="mt-[9px] space-y-[8px]">
          {includedItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="
                  flex
                  items-center
                  gap-[7px]
                  text-[16px]
                  text-[#555]
                "
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  className="text-[#073FDC]"
                />

                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ====================================================== */}

      <div className="mx-[20px] h-px bg-[#E7E7E7]" />

      {/* =====================================================
          CREATOR
      ====================================================== */}

      <div className="px-[20px] pb-[18px] pt-[14px]">
        <div className="flex items-center gap-[9px]">
          {/* STUDIO MAN IMAGE */}

          <div
            className="
              relative
              h-[35px]
              w-[35px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#EEEEEE]
            "
          >
            <Image
              src="/images/course/studioman.jpg"
              alt={instructorName}
              fill
              className="object-cover "
              sizes="50px"
            />
          </div>

          {/* CREATOR INFO */}

          <div>
            <h4
              className="
                m-0
                text-[18px]
                font-semibold
                leading-[120%]
                text-[#222]
              "
            >
              {instructorName}
            </h4>

            <p
              className="
                m-0
                mt-[4px]
                text-[16px]
                leading-none
                text-[#4F4F4F]
              "
            >
              {instructorRole}
            </p>
          </div>
        </div>

        {/* CREATOR TEXT */}

        <p
          className="
            pt-5
            mt-[12px]
            
            text-[16px]
            leading-[160%]
            text-[#4F4F4F]
          "
        >
          Ready to Dive In? Enroll Now and Start
          Building Your Digital Future!
        </p>

        {/* PROFILE */}

     <Link href="/creators">
          <button
          type="button"
          className="
            mt-[9px]
            flex
            h-[35px]
            items-center
            justify-center
            rounded-full
            border
            border-[#D9D9D9]
            bg-white
            px-[10px]
            text-[16px]
            font-medium
            text-[#555]
            transition-all
            hover:border-[#073FDC]
            hover:text-[#073FDC]
          "
        >
          See Full Profile
        </button>
     </Link>
      </div>
    </aside>
  );
}

/* =========================================================
   LESSON ROW
========================================================= */

function LessonRow({
  number,
  title,
  duration,
}: {
  number: string;
  title: string;
  duration: string;
}) {
  return (
    <div
      className="
        grid
        grid-cols-[20px_minmax(0,1fr)_43px]
        items-start
        gap-[5px]
        py-[3px]
      "
    >
      <span
        className="
          text-[12px]
          font-medium
          text-[#333]
        "
      >
        {number}
      </span>

      <span
        className="
          text-[16px]
          leading-[120%]
          text-[#242528]
        "
      >
        {title}
      </span>

      <span
        className="
          text-right
          text-[11px]
          font-medium
          text-[#003BE2]
        "
      >
        {duration}
      </span>
    </div>
  );
}