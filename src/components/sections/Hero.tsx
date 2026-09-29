

import Image from "next/image";
import { Search, Star } from "lucide-react";

const students = [
  "/images/students/student1.png",
  "/images/students/student2.png",
  "/images/students/student3.png",
  "/images/students/student4.png",
  "/images/students/student5.png",
  "/images/students/student6.png",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-118px)]
        overflow-hidden
        bg-[#063FE3]
      "
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
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
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================================================
          TOP LEFT LIME DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
            pointer-events-none
            absolute
            -left-[115px]
            -top-[20px]
            z-[1]
            h-[220px]
            w-[220px]
            rotate-[27deg]
            rounded-[42%]
            bg-[#CBFC01]
            ...
        "
        />

      {/* =========================================================
          TOP RIGHT LIME DECORATION
      ========================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[105px]
          -top-[20px]
          z-[1]
          h-[60px]
          w-[80px]
          rotate-[-47deg]
          rounded-[2%]
          bg-[#CBFC01]

          sm:-right-[90px]
          sm:h-[290px]
          sm:w-[200px]

          lg:-right-[195px]
          lg:h-[330px]
          lg:w-[225px]
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1365px]
          px-5
          sm:px-7
          lg:px-10
          xl:px-[70px]
        "
      >
        {/* =======================================================
            HERO TITLE
        ======================================================= */}

        <h1
          className="
            relative
            z-20
            mx-auto
            max-w-[900px]
            pt-[30px]
            text-center
            text-[42px]
            font-bold
            leading-[0.98]
            tracking-[-2.5px]
            text-white

            sm:pt-[35px]
            sm:text-[52px]

            md:text-[62px]

            lg:text-[70px]

            xl:text-[74px]
          "
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        {/* =======================================================
            DESCRIPTION
        ======================================================= */}

        <p
          className="
            relative
            z-20
            mx-auto
            mt-[24px]
            max-w-[780px]
            text-center
            text-[12px]
            leading-[1.5]
            text-white

            sm:text-[14px]
            md:text-[15px]
            lg:text-[16px]
          "
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* =======================================================
            SEARCH BAR
        ======================================================= */}

        <div
          className="
            relative
            z-[60]
            mx-auto
            mt-[34px]
            flex
            w-full
            max-w-[580px]
            items-center
            gap-[14px]

            sm:max-w-[630px]
          "
        >
          {/* Search Input */}

          <div
            className="
              flex
              h-[52px]
              min-w-0
              flex-1
              items-center
              gap-[11px]
              rounded-full
              bg-white
              px-[22px]
              shadow-[0_8px_30px_rgba(0,0,0,0.10)]
            "
          >
            <Search
              size={20}
              strokeWidth={2}
              className="shrink-0 text-[#737983]"
            />

            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[15px]
                text-[#222]
                outline-none
                placeholder:text-[#858A95]

                sm:text-[16px]
              "
            />
          </div>

          {/* Search Button */}

          <button
            type="button"
            className="
              h-[52px]
              shrink-0
              rounded-full
              bg-[#CBFC01]
              px-[27px]
              text-[15px]
              font-medium
              text-[#111]
              transition-all
              duration-200
              hover:scale-[1.03]
              hover:shadow-[0_8px_25px_rgba(203,252,1,0.25)]
              active:scale-[0.98]

              sm:px-[28px]
              sm:text-[16px]
              hover:cursor-pointer
            "
          >
            Search
          </button>
        </div>

        {/* =======================================================
            HERO VISUAL AREA
        ======================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-[4px]
            h-[510px]
            w-full
            max-w-[1125px]
            overflow-visible

            sm:h-[530px]

            md:h-[550px]

            lg:h-[570px]

            xl:h-[590px]
          "
        >
          {/* =====================================================
              WIDE LIME HALF CIRCLE
              
              IMPORTANT:
              This is NOT a full circle.
              Only the top half is visible.
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
             top-[120px]
              z-[2]
              h-[650px]
              w-[800px]
              -translate-x-1/2
              rounded-t-[550px]
              rounded-b-none
              bg-[#CBFC01]

               
              sm:h-[700px]
              sm:w-[800px]

               
              md:h-[760px]
              md:w-[950px]

              
              lg:h-[820px]
              lg:w-[110px]

              xl:h-[850px]
              xl:w-[1100px]
            "
          />

          {/* =====================================================
              LEFT WHITE SQUIGGLE
          ===================================================== */}

          <svg
            aria-hidden="true"
            viewBox="0 0 130 160"
            className="
              pointer-events-none
              absolute
              left-[7%]
              top-[5px]
              z-[25]
              hidden
              h-[125px]
              w-[105px]

              md:block
              lg:left-[8%]
            "
          >
            <path
              d="
                M18 20
                C48 7 83 13 67 34
                C53 52 26 48 35 67
                C44 85 79 69 83 89
                C87 107 54 111 59 130
                C63 145 87 142 108 126
              "
              fill="none"
              stroke="white"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </svg>

          {/* =====================================================
              RIGHT WHITE TRIANGLE
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              right-[7%]
              top-[0px]
              z-[25]
              hidden
              rotate-[18deg]

              md:block
              lg:right-[8%]
            "
          >
            <div
              className="
                h-0
                w-0
                border-l-[40px]
                border-r-[40px]
                border-b-[72px]
                border-l-transparent
                border-r-transparent
                border-b-white
              "
            />
          </div>

          {/* =====================================================
              MAIN PERSON IMAGE
          ===================================================== */}

          <div
            className="
              absolute
             
              left-1/2
              z-[10]
              w-[560px]
              -translate-x-1/2

              sm:w-[620px]

              md:w-[700px]

              lg:w-[700px]

              xl:w-[700px]
            "
          >
            <Image
              src="/images/heroImage.png"
              alt="ByteSpace learner"
              width={785}
              height={486}
              priority
              className="
                block
                h-auto
                w-full
                object-contain
              "
            />
          </div>

          {/* =====================================================
              UI / UX DESIGN CARD
          ===================================================== */}

          <div
            className="
              absolute
              left-[8%]
              top-[92px]
              z-[40]
              hidden
              w-[210px]
              rounded-[17px]
              bg-white
              px-[16px]
              py-[16px]
              text-[#171717]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]

              md:block

              lg:left-[15%]
              lg:top-[200px]
            "
          >
            <p
              className="
                text-[14px]
                font-medium
                leading-none

                sm:text-[15px]
              "
            >
              UI/UX Design
            </p>

            <div
              className="
                mt-[7px]
                flex
                items-center
                gap-[8px]
                whitespace-nowrap
                text-[11px]
                text-[#858992]

                sm:text-[12px]
              "
            >
              <span>200 Courses</span>

              <span>•</span>

              <span>1000+ Students</span>
            </div>
          </div>

          {/* =====================================================
              LEARNING PROGRESS CARD
          ===================================================== */}

          <div
            className="
              absolute
              right-[8%]
              top-[105px]
              z-[40]
              hidden
              w-[232px]
              rounded-[17px]
              bg-white
              px-[17px]
              py-[17px]
              text-[#171717]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]

              md:block

              lg:right-[18%]
              lg:top-[162px]
            "
          >
            <p
              className="
                text-[13px]
                font-medium

                sm:text-[14px]
              "
            >
              Learning Progress
            </p>

            <p
              className="
                mt-[6px]
                text-[46px]
                font-bold
                leading-none
                tracking-[-2px]

                sm:text-[48px]
              "
            >
              55%
            </p>

            <div
              className="
                mt-[14px]
                h-[8px]
                w-full
                overflow-hidden
                rounded-full
                bg-[#F0F0F0]
              "
            >
              <div
                className="
                  h-full
                  w-[55%]
                  rounded-full
                  bg-[#CBFC01]
                "
              />
            </div>
          </div>

          {/* =====================================================
              HAPPY STUDENTS CARD
          ===================================================== */}

          <div
            className="
              absolute
              bottom-[65px]
              left-[5%]
              z-[50]
              hidden
              w-[258px]
              rounded-[17px]
              bg-white
              px-[16px]
              py-[16px]
              text-[#171717]
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]

              md:block

              lg:left-[5%]
              lg:bottom-[70px]
            "
          >
            {/* Title */}

            <p
              className="
                text-[14px]
                font-medium
                leading-none

                sm:text-[15px]
              "
            >
              Happy Students
            </p>

            {/* Rating */}

            <div className="mt-[5px] flex items-center gap-[3px]">
              <span className="text-[11px] text-[#70747D]">
                4.5 (240)
              </span>

              <Star
                size={13}
                fill="#CBFC01"
                strokeWidth={0}
                className="text-[#CBFC01]"
              />
            </div>

            {/* =================================================
                STUDENT AVATARS
            ================================================= */}

            <div className="mt-[9px] flex items-center">
              {students.map((student, index) => (
                <div
                  key={student}
                  className="
                    relative
                    -ml-[6px]
                    h-[37px]
                    w-[37px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border-[2px]
                    border-white
                    bg-[#ddd]

                    first:ml-0
                  "
                  style={{
                    zIndex: students.length - index,
                  }}
                >
                  <Image
                    src={student}
                    alt={`Student ${index + 1}`}
                    fill
                    sizes="37px"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* 2K+ */}

              <div
                className="
                  ml-[2px]
                  flex
                  h-[42px]
                  w-[42px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#CBFC01]
                  text-[11px]
                  font-medium
                  text-[#111]
                "
              >
                2K+
              </div>
            </div>
          </div>

          {/* =====================================================
              BIG LEFT WHITE OVAL
          ===================================================== */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-[65px]
              bottom-[40px]
              z-[30]
              hidden
              h-[180px]
              w-[180px]
              rotate-[18deg]
              rounded-full
              border-[38px]
              border-white

              md:block

              lg:-left-[55px]
            "
          />

          {/* =====================================================
              RIGHT WHITE SQUIGGLE
          ===================================================== */}

          <svg
            aria-hidden="true"
            viewBox="0 0 180 170"
            className="
              pointer-events-none
              absolute
              -right-[25px]
              bottom-[55px]
              z-[30]
              hidden
              h-[175px]
              w-[165px]

              md:block

              lg:-right-[15px]
            "
          >
            <path
              d="
                M142 20
                C105 8 72 16 88 35
                C101 51 136 43 130 62
                C124 82 78 67 73 87
                C68 107 106 108 108 126
                C110 143 84 150 51 134
              "
              fill="none"
              stroke="white"
              strokeWidth="19"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}