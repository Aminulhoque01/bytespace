


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
} from "lucide-react";
import {
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
          max-w-[959px]
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
                text-[20px]
                font-semibold
                leading-[120%]
                tracking-[-0.7px]
                text-[#F5F5F6]
                sm:text-[27px]
              "
            >
              Sign in with ease
            </h1>

            <p
              className="
                mt-[11px]
                max-w-[370px]
                text-[18px]
                font-normal
                leading-[15px]
                text-[#F5F5F6]
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
                sm: h-[320px]
                sm: w-[190px]
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
                    text-[20px]
                    font-semibold
                    text-[#000000]
                  "
                >
                  Build Digital Asset
                </h3>

                <p
                  className="
                    mt-[2px]
                    text-[12px]
                    text-[#CED0D3]
                  "
                >
                  by <span className="text-[#003BE2]">pupespai studio</span>
                </p>

                <div className="mt-[9px] flex items-center gap-[5px]">
                  <span
                    className="
                      rounded-full
                      bg-[#F3F3F3]
                      px-[7px]
                      py-[4px]
                      text-[12px]
                      text-[#555]
                    "
                  >
                    Beginner
                  </span>
                </div>

                <div className="mt-[10px]">
                  <span
                    className="
                      text-[25px]
                      font-bold
                      text-[#0055D9]
                    "
                  >
                    $25
                  </span>
                  <span className="text-[16px] text-[#777]">
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
                sm: h-[385px]
                sm: w-[305px]
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

                 
              </div>

              {/* CONTENT */}

              <div className="pt-[8px]">

                <div className="flex items-center justify-between">
                  <h3
                    className="
                      truncate
                      text-[20px]
                      font-semibold
                      text-[#000000]
                    "
                  >
                    the Power of Big Data
                  </h3>

                  <div className="flex items-center gap-[3px]">
                    <span
                      className="
                        text-[18px]
                        text-[#4F4F4F]
                      "
                    >
                      4.5
                    </span>

                    <span className="text-[18px] text-[#D4FB20]">
                      ★
                    </span>
                  </div>
                </div>

                <p
                  className="
                    mt-[2px]
                    text-[12px]
                    text-[#4F4F4F]
                  "
                >
                  by <span className="text-[#003BE2]">pupespai studio</span>
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
                        text-[16px]
                        text-[#555]
                      "
                    >
                      ▥
                    </span>

                    <span
                      className="
                        text-[12px]
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
                      text-[20px]
                      font-bold
                      text-[#0055D9]
                    "
                  >
                    $25
                  </span>

                  <span
                    className="
                      text-[16px]
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
              max-w-[430px]
              rounded-[18px]
              border
              border-white/70
              bg-white
              px-[28px]
              py-[30px]
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              sm:px-[38px]
              sm:py-[36px]
              lg:min-h-[610px]
            "
          >
            {/* =================================================
                HEADER
            ================================================== */}

            <div>
              <p
                className="
                  text-[18px]
                  font-medium
                  uppercase
                  tracking-[0.3px]
                  text-[#003BE2]
                "
              >
                Sign In
              </p>

              <h2
                className="
                  mt-[5px]
                  text-[44px]
                  font-semibold
                  leading-[1.1]
                  tracking-[-1px]
                  text-[#242528]
                  sm: text-[30px]
                "
              >
                Welcome Back
              </h2>

              
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form className="mt-[30px]">
              {/* =================================================
                  EMAIL
              ================================================== */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-[7px]
                    block
                    text-[14px]
                    font-medium
                    text-[#242528]
                  "
                >
                  Email 
                </label>

                <div className="relative">
                  <Mail
                    size={14}
                    strokeWidth={1.7}
                    className="
                      pointer-events-none
                      absolute
                      left-[13px]
                      top-1/2
                      -translate-y-1/2
                      text-[#A5A5A5]
                    "
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="designer@example.com"
                    className="
                      h-[42px]
                      w-full
                      rounded-[8px]
                      border
                      border-[#E5E5E5]
                      bg-[#FCFCFC]
                      pl-[38px]
                      pr-[12px]
                      text-[10px]
                      text-[#222]
                      outline-none
                      transition-all
                      duration-150
                      placeholder:text-[#B8B8B8]
                      focus:border-[#B9E900]
                      focus:bg-white
                      focus:ring-[3px]
                      focus:ring-[#D4FB20]/20
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  PASSWORD
              ================================================== */}

              <div className="mt-[18px]">
                <div className="mb-[7px] flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="
                      text-[14px]
                      font-medium
                      text-[#242528]
                    "
                  >
                    Password
                  </label>

                   
                </div>

                <div className="relative">
                  <LockKeyhole
                    size={14}
                    strokeWidth={1.7}
                    className="
                      pointer-events-none
                      absolute
                      left-[13px]
                      top-1/2
                      -translate-y-1/2
                      text-[#A5A5A5]
                    "
                  />

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="
                      h-[42px]
                      w-full
                      rounded-[8px]
                      border
                      border-[#E5E5E5]
                      bg-[#FCFCFC]
                      pl-[38px]
                      pr-[42px]
                      text-[10px]
                      text-[#222]
                      outline-none
                      transition-all
                      duration-150
                      placeholder:text-[#B8B8B8]
                      focus:border-[#B9E900]
                      focus:bg-white
                      focus:ring-[3px]
                      focus:ring-[#D4FB20]/20
                    "
                  />

                  {/* =========================================
                      SHOW / HIDE PASSWORD
                  ========================================== */}

                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    onClick={() =>
                      setShowPassword(
                        (prev) => !prev
                      )
                    }
                    className="
                      absolute
                      right-[9px]
                      top-1/2
                      flex
                      h-[26px]
                      w-[26px]
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      text-[#999]
                      transition-all
                      duration-150
                      hover:bg-[#F1F1F1]
                      hover:text-[#333]
                      active:scale-95
                    "
                  >
                    {showPassword ? (
                      <EyeOff
                        size={14}
                        strokeWidth={1.7}
                      />
                    ) : (
                      <Eye
                        size={14}
                        strokeWidth={1.7}
                      />
                    )}
                  </button>
                </div>
              </div>

             

              {/* =================================================
                  SIGN IN BUTTON
              ================================================== */}

              <button
                type="submit"
                className="
                  mt-[21px]
                  flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#D4FB20]
                  text-[10px]
                  font-semibold
                  text-[#111]
                  shadow-[0_5px_15px_rgba(212,251,32,0.15)]
                  transition-all
                  duration-150
                  hover:brightness-[0.97]
                  hover:shadow-[0_7px_20px_rgba(212,251,32,0.25)]
                  active:scale-[0.99]
                "
              >
                Sign In
              </button>
            </form>

            {/* =================================================
                DIVIDER
            ================================================== */}

            <div
              className="
                mt-[29px]
                flex
                items-center
                gap-[10px]
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  bg-[#E9E9E9]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[8px]
                  font-normal
                  text-[#A0A0A0]
                "
              >
                OR CONTINUE WITH
              </span>

              <span
                className="
                  h-px
                  flex-1
                  bg-[#E9E9E9]
                "
              />
            </div>

            {/* =================================================
                SOCIAL LOGIN
            ================================================== */}

            <div
              className="
                mt-[20px]
                flex
                items-center
                justify-center
                gap-[10px]
              "
            >
              {/* FACEBOOK */}

              <button
                type="button"
                aria-label="Continue with Facebook"
                className="
                  flex
                  h-[42px]
                  flex-1
                  items-center
                  justify-center
                  gap-[8px]
                  rounded-[9px]
                  border
                  border-[#E5E5E5]
                  bg-white
                  text-[#222]
                  transition-all
                  duration-150
                  hover:border-[#D5D5D5]
                  hover:bg-[#FAFAFA]
                  active:scale-[0.98]
                "
              >
                <FaFacebookF size={14} />

                <span
                  className="
                    text-[9px]
                    font-medium
                  "
                >
                  Facebook
                </span>
              </button>

              {/* GOOGLE */}

              <button
                type="button"
                aria-label="Continue with Google"
                className="
                  flex
                  h-[42px]
                  flex-1
                  items-center
                  justify-center
                  gap-[8px]
                  rounded-[9px]
                  border
                  border-[#E5E5E5]
                  bg-white
                  text-[#222]
                  transition-all
                  duration-150
                  hover:border-[#D5D5D5]
                  hover:bg-[#FAFAFA]
                  active:scale-[0.98]
                "
              >
                <FaGoogle size={14} />

                <span
                  className="
                    text-[9px]
                    font-medium
                  "
                >
                  Google
                </span>
              </button>
            </div>

            {/* =================================================
                CREATE ACCOUNT
            ================================================== */}

            <p
              className="
                mt-[37px]
                text-center
                text-[11px]
                leading-[14px]
                text-[#999]
              "
            >
              New to ByteSpace?{" "}
              <Link
                href="/register"
                className="
                  font-medium
                  text-[#4774C8]
                  transition-colors
                  hover:text-[#003BE2]
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