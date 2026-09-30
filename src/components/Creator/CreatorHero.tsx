"use client";

import Image from "next/image";
import Navbar from "../layout/Navbar";

interface CreatorHeroProps {
  creatorName?: string;
  role?: string;
  products?: number;
  followers?: number;
}

export default function CreatorHero({
  creatorName = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  products = 3,
  followers = 12,
}: CreatorHeroProps) {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#073FDC]
      "
    >
      {/* =====================================================
          GRID BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "66px 66px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <div className="relative z-20">
        <Navbar />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1160px]
          px-[16px]
          pb-[44px]
          pt-[29px]

          sm:px-[25px]
          sm:pb-[50px]

          lg:px-0
          lg:pt-[29px]
        "
      >
        {/* ===================================================
            CREATOR PROFILE
        ==================================================== */}

        <div
          className="
            flex
            items-center
            gap-[12px]

            sm:gap-[14px]
          "
        >
          {/* CREATOR IMAGE */}

          <div
            className="
              relative
              h-[54px]
              w-[54px]
              shrink-0
              overflow-hidden
              rounded-[13px]
              bg-[#EDEDED]

              sm:h-[80px]
              sm:w-[80px]
              sm:rounded-[14px]
            "
          >
            <Image
              src="/images/course/studioman.jpg"
              alt={creatorName}
              fill
              priority
              className="object-cover"
              sizes="
                (max-width: 639px) 54px,
                80px
              "
            />
          </div>

          {/* CREATOR INFO */}

          <div className="min-w-0">
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-[8px]
              "
            >
              {/* CREATOR NAME */}

              <h1
                className="
                  m-0
                  text-[23px]
                  font-semibold
                  leading-none
                  tracking-[-0.5px]
                  text-white

                  sm:text-[27px]

                  md:text-[29px]
                "
              >
                {creatorName}
              </h1>

              {/* CREATOR BADGE */}

              <span
                className="
                  flex
                  h-[22px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#C8FF00]
                  px-[11px]
                  text-[8px]
                  font-medium
                  text-[#222]

                  sm:h-[23px]
                  sm:px-[12px]
                  sm:text-[8px]
                "
              >
                Creator
              </span>
            </div>

            {/* ROLE */}

            <p
              className="
                m-0
                mt-[7px]
                text-[9px]
                font-medium
                leading-none
                text-white/90

                sm:text-[10px]
              "
            >
              {role}
            </p>
          </div>
        </div>

        {/* ===================================================
            CREATOR DESCRIPTION
        ==================================================== */}

        <div
          className="
            mt-[21px]
            max-w-[1110px]
          "
        >
          <p
            className="
              m-0
              text-[9px]
              font-normal
              leading-[1.65]
              text-white/90

              sm:text-[10px]
              sm:leading-[1.6]

              md:text-[11px]
            "
          >
            Welcome to the creative world of {creatorName}. Here,
            you'll discover the passion, expertise, and inspiration
            that drive my creative journey. Let's explore and learn
            together!
          </p>

          <p
            className="
              m-0
              mt-[2px]
              text-[9px]
              font-normal
              leading-[1.65]
              text-white/90

              sm:text-[10px]
              sm:leading-[1.6]

              md:text-[11px]
            "
          >
            I dive into my creative portfolio, showcasing a glimpse
            of my artistic endeavors. From digital designs to
            multimedia projects, each piece tells a unique story.
          </p>

          <p
            className="
              m-0
              text-[9px]
              font-normal
              leading-[1.65]
              text-white/90

              sm:text-[10px]
              sm:leading-[1.6]

              md:text-[11px]
            "
          >
            Explore the world of creativity with me.
          </p>
        </div>

        {/* ===================================================
            BOTTOM ACTIONS
        ==================================================== */}

        <div
          className="
            mt-[20px]
            flex
            flex-col
            gap-[14px]

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* STATS */}

          <div
            className="
              flex
              items-center
              gap-[9px]
            "
          >
            {/* PRODUCTS */}

            <div
              className="
                flex
                h-[27px]
                items-center
                rounded-full
                bg-white
                px-[13px]
                text-[8px]
                font-medium
                text-[#333]
              "
            >
              <span className="text-[#073FDC]">
                {products}
              </span>

              <span className="ml-[4px]">
                Products
              </span>
            </div>

            {/* FOLLOWERS */}

            <div
              className="
                flex
                h-[27px]
                items-center
                rounded-full
                bg-white
                px-[13px]
                text-[8px]
                font-medium
                text-[#333]
              "
            >
              <span className="text-[#073FDC]">
                {followers}
              </span>

              <span className="ml-[4px]">
                Followers
              </span>
            </div>
          </div>

          {/* FOLLOW BUTTON */}

          <button
            type="button"
            className="
              flex
              h-[29px]
              w-[61px]
              items-center
              justify-center
              rounded-full
              border-0
              bg-[#C8FF00]
              text-[8px]
              font-medium
              text-[#222]
              transition-all
              duration-150
              hover:brightness-95
              active:scale-[0.96]

              sm:w-[57px]
            "
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}