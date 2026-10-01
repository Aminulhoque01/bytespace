
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
          max-w-[1200px]

          px-5
          pb-10
          pt-[135px]

          sm:px-6
          sm:pb-12
          sm:pt-[145px]

          md:px-8
          md:pb-14
          md:pt-[155px]

          lg:px-0
          lg:pb-[44px]
          lg:pt-[155px]
        "
      >
        {/* ===================================================
            CREATOR PROFILE
        ==================================================== */}

        <div
          className="
            flex
            w-full
            items-center
            gap-3

            sm:gap-4
          "
        >
          {/* CREATOR IMAGE */}

          <div
            className="
              relative
              h-[72px]
              w-[72px]
              shrink-0
              overflow-hidden
              rounded-[18px]
              bg-[#EDEDED]

              sm:h-[80px]
              sm:w-[80px]
              sm:rounded-[16px]

              md:h-[88px]
              md:w-[88px]
              md:rounded-[19px]

              lg:h-[96px]
              lg:w-[96px]
              lg:rounded-[24px]
            "
          >
            <Image
              src="/images/course/studioman.jpg"
              alt={creatorName}
              fill
              priority
              sizes="
                (max-width: 639px) 72px,
                (max-width: 767px) 80px,
                (max-width: 1023px) 88px,
                96px
              "
              className="object-cover"
            />
          </div>

          {/* CREATOR INFO */}

          <div className="min-w-0 flex-1">
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              {/* CREATOR NAME */}

              <h1
                className="
                  m-0
                  max-w-full
                  truncate
                  text-[24px]
                  font-semibold
                  leading-[1.2]
                  text-[#F5F5F6]

                  sm:text-[28px]

                  md:text-[32px]

                  lg:text-[36px]
                "
              >
                {creatorName}
              </h1>

              {/* CREATOR BADGE */}

              <span
                className="
                  flex
                  h-[28px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4FB20]
                  px-3
                  text-[9px]
                  font-medium
                  text-[#242528]

                  sm:h-[30px]
                  sm:px-3.5
                  sm:text-[10px]

                  md:h-[32px]
                  md:px-4
                  md:text-[11px]

                  lg:h-[35px]
                  lg:w-[103px]
                  lg:px-[11px]
                  lg:text-[12px]
                "
              >
                Creator
              </span>
            </div>

            {/* ROLE */}

            <p
              className="
                m-0
                mt-1.5
                truncate
                text-[12px]
                font-medium
                leading-[1.3]
                text-[#F5F5F6]

                sm:mt-2
                sm:text-[14px]

                md:text-[16px]

                lg:text-[18px]
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
            mt-5
            max-w-[1110px]

            sm:mt-6

            md:mt-7
          "
        >
          <p
            className="
              m-0
              text-[14px]
              font-normal
              leading-[1.65]
              text-white/90

              sm:text-[15px]

              md:text-[17px]

              lg:text-[18px]
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
              mt-1
              text-[14px]
              font-normal
              leading-[1.65]
              text-white/90

              sm:text-[15px]

              md:text-[17px]

              lg:text-[18px]
            "
          >
            I dive into my creative portfolio, showcasing a glimpse
            of my artistic endeavors. From digital designs to
            multimedia projects, each piece tells a unique story.
          </p>
        </div>

        {/* ===================================================
            BOTTOM ACTIONS
        ==================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-4

            sm:mt-7
            sm:flex-row
            sm:items-center
            sm:justify-between

            md:mt-8
          "
        >
          {/* STATS */}

          <div
            className="
              flex
              w-full
              items-center
              gap-2

              sm:w-auto
              sm:gap-2.5
            "
          >
            {/* PRODUCTS */}

            <div
              className="
                flex
                h-[42px]
                min-w-0
                flex-1
                items-center
                justify-center
                rounded-full
                bg-[#FFFFFF]
                px-3
                text-[14px]
                font-medium
                text-[#242528]

                sm:h-[44px]
                sm:w-[140px]
                sm:flex-none
                sm:justify-start
                sm:text-[16px]

                md:h-[46px]
                md:text-[18px]
              "
            >
              <span
                className="
                  shrink-0
                  text-[15px]
                  text-[#242528]

                  sm:text-[16px]

                  md:text-[18px]
                "
              >
                {products}
              </span>

              <span
                className="
                  ml-1
                  whitespace-nowrap
                "
              >
                Products
              </span>
            </div>

            {/* FOLLOWERS */}

            <div
              className="
                flex
                h-[42px]
                min-w-0
                flex-1
                items-center
                justify-center
                rounded-full
                bg-[#FFFFFF]
                px-3
                text-[14px]
                font-medium
                text-[#242528]

                sm:h-[44px]
                sm:w-[140px]
                sm:flex-none
                sm:justify-start
                sm:text-[16px]

                md:h-[46px]
                md:text-[18px]
              "
            >
              <span
                className="
                  shrink-0
                  text-[15px]
                  text-[#242528]

                  sm:text-[16px]

                  md:text-[18px]
                "
              >
                {followers}
              </span>

              <span
                className="
                  ml-1
                  whitespace-nowrap
                  text-[#242528]
                "
              >
                Followers
              </span>
            </div>
          </div>

          {/* FOLLOW BUTTON */}

          <button
            type="button"
            className="
              flex
              h-[44px]
              w-full
              items-center
              justify-center
              rounded-full
              border-0
              bg-[#D4FB20]
              text-[15px]
              font-medium
              text-[#040819]
              transition-all
              duration-150
              hover:brightness-95
              active:scale-[0.96]

              sm:h-[44px]
              sm:w-[101px]

              md:h-[46px]
              md:text-[16px]

              lg:text-[18px]
            "
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}