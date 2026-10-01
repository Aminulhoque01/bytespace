"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Google } from "lucide-react";

/* =========================================================
   LOGIN PAGE
========================================================= */

export default function LoginPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#073FDC]
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.14]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.7) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1159px]
          flex-col
          px-[24px]
          py-[28px]
          lg:grid
          lg:grid-cols-[1fr_460px]
          lg:gap-[70px]
          lg:px-0
          lg:py-[48px]
        "
      >

        {/* ===================================================
            LEFT SIDE
        ==================================================== */}

        <section
          className="
            relative
            flex
            min-h-[520px]
            flex-col
            lg:min-h-0
          "
        >

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="
              flex
              w-fit
              items-center
              gap-[5px]
              text-white
            "
          >
            <span
              className="
                relative
                block
                h-[18px]
                w-[16px]
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[3px]
                  h-[12px]
                  w-[8px]
                  rounded-r-[2px]
                  bg-[#D4FB20]
                "
              />

              <span
                className="
                  absolute
                  left-[5px]
                  top-[5px]
                  h-[9px]
                  w-[9px]
                  rotate-45
                  rounded-[1px]
                  bg-[#D4FB20]
                "
              />
            </span>

            <span
              className="
                text-[13px]
                font-semibold
                leading-none
                tracking-[-0.3px]
              "
            >
              ByteSpace
            </span>
          </Link>

          {/* =================================================
              LEFT INTRO
          ================================================== */}

          <div
            className="
              mt-[55px]
              max-w-[370px]
              lg:mt-[57px]
            "
          >
            <h1
              className="
                text-[24px]
                font-semibold
                leading-[1.1]
                tracking-[-0.7px]
                text-white
                sm:text-[27px]
              "
            >
              Sign in with ease
            </h1>

            <p
              className="
                mt-[11px]
                max-w-[370px]
                text-[9px]
                font-normal
                leading-[15px]
                text-white/65
                sm:text-[10px]
              "
            >
              Experience a seamless and efficient sign-in process
              that grants you instant access to a world of knowledge.
            </p>
          </div>

          {/* =================================================
              DECORATIVE COURSE AREA
          ================================================== */}

          <div
            className="
              absolute
              left-[0px]
              top-[250px]
              h-[410px]
              w-[430px]
              sm:left-[20px]
              lg:left-0
              lg:top-[225px]
            "
          >

            {/* ===============================================
                BACK COURSE CARD
            ================================================ */}

            <div
              className="
                absolute
                left-[0px]
                top-[68px]
                h-[305px]
                w-[175px]
                overflow-hidden
                rounded-[12px]
                border
                border-[#DEDEDE]
                bg-white
                p-[8px]
                shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                sm:h-[320px]
                sm:w-[190px]
              "
            >
              <div
                className="
                  relative
                  h-[110px]
                  w-full
                  overflow-hidden
                  rounded-[8px]
                  bg-[#F1F1F1]
                "
              >
                <Image
                  src="/images/skill/skillImage2.png"
                  alt="Build Digital Asset"
                  fill
                  sizes="190px"
                  className="object-cover"
                />
              </div>

              <div className="pt-[8px]">
                <h3
                  className="
                    truncate
                    text-[11px]
                    font-semibold
                    text-[#151515]
                  "
                >
                  Build Digital Asset
                </h3>

                <p
                  className="
                    mt-[2px]
                    text-[7px]
                    text-[#4774C8]
                  "
                >
                  by pupespai studio
                </p>

                <div className="mt-[9px] flex items-center gap-[5px]">
                  <span
                    className="
                      rounded-full
                      bg-[#F3F3F3]
                      px-[7px]
                      py-[4px]
                      text-[7px]
                      text-[#555]
                    "
                  >
                    Beginner
                  </span>
                </div>

                <div className="mt-[10px]">
                  <span
                    className="
                      text-[12px]
                      font-bold
                      text-[#0055D9]
                    "
                  >
                    $25
                  </span>
                  <span className="text-[6px] text-[#777]">
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                MAIN COURSE CARD
            ================================================ */}

            <div
              className="
                absolute
                left-[52px]
                top-[0px]
                z-20
                h-[375px]
                w-[285px]
                rounded-[14px]
                border
                border-[#E0E0E0]
                bg-white
                p-[10px]
                shadow-[0_14px_35px_rgba(0,0,0,0.10)]
                sm:left-[92px]
                sm:h-[385px]
                sm:w-[305px]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[155px]
                  w-full
                  overflow-hidden
                  rounded-[9px]
                  bg-[#F3F3F3]
                  sm:h-[165px]
                "
              >
                <Image
                  src="/images/skill/skillImage3.png"
                  alt="The Power of Big Data"
                  fill
                  priority
                  sizes="305px"
                  className="object-cover"
                />

                {/* IMAGE INFO */}

                <div
                  className="
                    absolute
                    bottom-[7px]
                    left-[7px]
                    right-[7px]
                    flex
                    items-center
                    justify-between
                    gap-[4px]
                  "
                >
                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-[7px]
                      py-[4px]
                      text-[7px]
                      text-[#555]
                      backdrop-blur-[2px]
                    "
                  >
                    17 Lessons
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-[7px]
                      py-[4px]
                      text-[7px]
                      text-[#555]
                      backdrop-blur-[2px]
                    "
                  >
                    2 hours 16 mins
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-white/80
                      px-[7px]
                      py-[4px]
                      text-[7px]
                      text-[#555]
                      backdrop-blur-[2px]
                    "
                  >
                    59 Comments
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="pt-[8px]">

                <div className="flex items-center justify-between">
                  <h3
                    className="
                      truncate
                      text-[14px]
                      font-semibold
                      text-[#151515]
                    "
                  >
                    the Power of Big Data
                  </h3>

                  <div className="flex items-center gap-[3px]">
                    <span
                      className="
                        text-[10px]
                        text-[#666]
                      "
                    >
                      4.5
                    </span>

                    <span className="text-[13px] text-[#D4FB20]">
                      ★
                    </span>
                  </div>
                </div>

                <p
                  className="
                    mt-[2px]
                    text-[7px]
                    text-[#4774C8]
                  "
                >
                  by pupespai studio
                </p>

                {/* LEVEL + AVATARS */}

                <div className="mt-[8px] flex items-center">

                  <div
                    className="
                      flex
                      h-[25px]
                      items-center
                      gap-[4px]
                      rounded-full
                      bg-[#F3F3F3]
                      px-[8px]
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        text-[#555]
                      "
                    >
                      ▥
                    </span>

                    <span
                      className="
                        text-[8px]
                        text-[#555]
                      "
                    >
                      Beginner
                    </span>
                  </div>

                  <div className="ml-auto flex items-center">
                    {[
                      "/images/students/student1.png",
                      "/images/students/student2.png",
                      "/images/students/student3.png",
                      "/images/students/student4.png",
                      "/images/students/student5.png",
                    ].map((avatar, index) => (
                      <div
                        key={avatar}
                        className={`
                          relative
                          h-[24px]
                          w-[24px]
                          overflow-hidden
                          rounded-full
                          border-[2px]
                          border-white
                          ${
                            index > 0
                              ? "-ml-[7px]"
                              : ""
                          }
                        `}
                      >
                        <Image
                          src={avatar}
                          alt=""
                          fill
                          sizes="24px"
                          className="object-cover"
                        />
                      </div>
                    ))}

                    <span
                      className="
                        relative
                        z-10
                        -ml-[7px]
                        flex
                        h-[24px]
                        min-w-[24px]
                        items-center
                        justify-center
                        rounded-full
                        border-[2px]
                        border-white
                        bg-[#111]
                        px-[4px]
                        text-[7px]
                        font-semibold
                        text-white
                      "
                    >
                      26+
                    </span>
                  </div>
                </div>

                {/* PRICE */}

                <div className="mt-[9px]">
                  <span
                    className="
                      text-[14px]
                      font-bold
                      text-[#0055D9]
                    "
                  >
                    $25
                  </span>

                  <span
                    className="
                      text-[7px]
                      text-[#777]
                    "
                  >
                    /lifetime
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                LIME RING
            ================================================ */}

            <div
              className="
                absolute
                left-[30px]
                top-[30px]
                z-30
                h-[60px]
                w-[60px]
                rotate-[-8deg]
                rounded-full
                border-[13px]
                border-[#D4FB20]
                bg-transparent
              "
            />

            {/* ===============================================
                TRIANGLE
            ================================================ */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[8px]
                left-[12px]
                z-30
                h-0
                w-0
                rotate-[-8deg]
                border-l-[35px]
                border-r-[35px]
                border-b-[105px]
                border-l-transparent
                border-r-transparent
                border-b-[#D4FB20]
                sm:left-[24px]
              "
            />

            {/* ===============================================
                WHITE SQUIGGLE
            ================================================ */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[77px]
                right-[0px]
                z-40
                flex
                rotate-[-12deg]
                flex-col
                gap-[3px]
              "
            >
              <span className="h-[13px] w-[57px] rounded-full bg-white" />
              <span className="ml-[8px] h-[13px] w-[57px] rounded-full bg-white" />
              <span className="ml-[3px] h-[13px] w-[57px] rounded-full bg-white" />
            </div>

            {/* ===============================================
                HAPPY STUDENTS
            ================================================ */}

            <div
              className="
                absolute
                bottom-[0px]
                right-[0px]
                z-50
                h-[72px]
                w-[205px]
                rounded-[10px]
                bg-[#D4FB20]
                px-[11px]
                py-[8px]
                shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              "
            >
              <p
                className="
                  text-[9px]
                  font-semibold
                  leading-none
                  text-[#111]
                "
              >
                Happy Students
              </p>

              <p
                className="
                  mt-[3px]
                  text-[7px]
                  leading-none
                  text-[#333]
                "
              >
                4.8 ★
              </p>

              <div className="mt-[6px] flex items-center">
                {[
                  "/images/students/student1.png",
                  "/images/students/student2.png",
                  "/images/students/student3.png",
                  "/images/students/student4.png",
                  "/images/students/student5.png",
                ].map((avatar, index) => (
                  <div
                    key={`happy-${avatar}`}
                    className={`
                      relative
                      h-[25px]
                      w-[25px]
                      overflow-hidden
                      rounded-full
                      border-[2px]
                      border-[#D4FB20]
                      ${
                        index > 0
                          ? "-ml-[5px]"
                          : ""
                      }
                    `}
                  >
                    <Image
                      src={avatar}
                      alt=""
                      fill
                      sizes="25px"
                      className="object-cover"
                    />
                  </div>
                ))}

                <span
                  className="
                    ml-[3px]
                    rounded-full
                    bg-[#111]
                    px-[6px]
                    py-[5px]
                    text-[6px]
                    font-semibold
                    text-white
                  "
                >
                  26+
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            LOGIN CARD
        ==================================================== */}

        <section
          className="
            relative
            z-30
            flex
            items-center
            justify-center
            lg:justify-end
          "
        >
          <div
            className="
              w-full
              max-w-[460px]
              rounded-[14px]
              bg-white
              px-[32px]
              py-[36px]
              shadow-[0_10px_35px_rgba(0,0,0,0.08)]
              sm:px-[48px]
              sm:py-[43px]
              lg:min-h-[625px]
            "
          >

            {/* =================================================
                SMALL TITLE
            ================================================== */}

            <p
              className="
                text-[10px]
                font-normal
                leading-none
                text-[#4774C8]
                sm:text-[11px]
              "
            >
              Sign In
            </p>

            {/* =================================================
                MAIN TITLE
            ================================================== */}

            <h2
              className="
                mt-[5px]
                text-[30px]
                font-semibold
                leading-[1.08]
                tracking-[-1px]
                text-[#171717]
                sm:text-[32px]
              "
            >
              Welcome Back
            </h2>

            {/* =================================================
                FORM
            ================================================== */}

            <form className="mt-[34px]">

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    block
                    text-[8px]
                    font-medium
                    leading-none
                    text-[#222]
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="designer@example.com"
                  className="
                    mt-[8px]
                    h-[39px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#E7E7E7]
                    bg-white
                    px-[12px]
                    text-[9px]
                    text-[#222]
                    outline-none
                    placeholder:text-[#B7B7B7]
                    focus:border-[#C8FF00]
                    focus:ring-2
                    focus:ring-[#D4FB20]/20
                  "
                />
              </div>

              {/* PASSWORD */}

              <div className="mt-[20px]">
                <label
                  htmlFor="password"
                  className="
                    block
                    text-[8px]
                    font-medium
                    leading-none
                    text-[#222]
                  "
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="
                    mt-[8px]
                    h-[39px]
                    w-full
                    rounded-[7px]
                    border
                    border-[#E7E7E7]
                    bg-white
                    px-[12px]
                    text-[10px]
                    text-[#222]
                    outline-none
                    placeholder:text-[#B7B7B7]
                    focus:border-[#C8FF00]
                    focus:ring-2
                    focus:ring-[#D4FB20]/20
                  "
                />
              </div>

              {/* SIGN IN BUTTON */}

              <div className="mt-[20px] flex justify-end">
                <button
                  type="submit"
                  className="
                    flex
                    h-[32px]
                    min-w-[78px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4FB20]
                    px-[15px]
                    text-[9px]
                    font-medium
                    leading-none
                    text-[#111]
                    transition-all
                    duration-150
                    hover:brightness-95
                    hover:shadow-[0_5px_15px_rgba(212,251,32,0.25)]
                    active:scale-[0.97]
                  "
                >
                  Sign In
                </button>
              </div>
            </form>

            {/* =================================================
                DIVIDER
            ================================================== */}

            <div
              className="
                mt-[40px]
                flex
                items-center
                gap-[10px]
              "
            >
              <span className="h-px flex-1 bg-[#E7E7E7]" />

              <span
                className="
                  text-[9px]
                  font-normal
                  text-[#999]
                "
              >
                or
              </span>

              <span className="h-px flex-1 bg-[#E7E7E7]" />
            </div>

            {/* =================================================
                SOCIAL BUTTONS
            ================================================== */}

            <div
              className="
                mt-[27px]
                flex
                items-center
                justify-center
                gap-[12px]
              "
            >
              <button
                type="button"
                aria-label="Continue with Facebook"
                className="
                  flex
                  h-[46px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-[13px]
                  border
                  border-[#E5E5E5]
                  bg-white
                  text-[#111]
                  transition-colors
                  hover:bg-[#F8F8F8]
                "
              >
                <Facebook
                  size={19}
                  strokeWidth={2.2}
                  fill="currentColor"
                />
              </button>

              <button
                type="button"
                aria-label="Continue with Google"
                className="
                  flex
                  h-[46px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-[13px]
                  border
                  border-[#E5E5E5]
                  bg-white
                  text-[19px]
                  font-semibold
                  text-[#111]
                  transition-colors
                  hover:bg-[#F8F8F8]
                "
              >
                G
              </button>
            </div>

            {/* =================================================
                REGISTER
            ================================================== */}

            <p
              className="
                mt-[57px]
                text-center
                text-[8px]
                font-normal
                leading-none
                text-[#999]
              "
            >
              New user?{" "}
              <Link
                href="/register"
                className="
                  font-medium
                  text-[#4774C8]
                  hover:underline
                "
              >
                Create an account
              </Link>
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}