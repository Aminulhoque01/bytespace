"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const studentAvatars = [
  "/images/students/student1.png",
  "/images/students/student2.png",
  "/images/students/student3.png",
  "/images/students/student4.png",
  "/images/students/student5.png",
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#073FDC]">
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.14) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.14) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "63px 63px",
        }}
      />

      {/* =====================================================
          MAIN WRAPPER
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          min-h-screen
          w-full
          max-w-[900px]
          mb-30
        "
      >
        {/* ===================================================
            LOGO
        ==================================================== */}

        <Link
          href="/"
          aria-label="ByteSpace Home"
          className="
            absolute
            left-0
            top-[18px]
            z-50
            block
            h-[18px]
            w-[18px]
          "
        >
         <span
            className="relative block shrink-0"
            style={{
                width: "28px",
                height: "31px",
                marginRight: "9px",
            }}
            >
            {/* Main vertical green shape */}
            <span
                className="absolute bg-[#C8FF00]"
                style={{
                left: "0px",
                top: "0px",
                width: "14px",
                height: "31px",
                borderRadius: "0 0 9px 9px",
                }}
            />

            {/* Right rounded green shape */}
            <span
                className="absolute bg-[#C8FF00]"
                style={{
                left: "9px",
                top: "10px",
                width: "19px",
                height: "20px",
                borderRadius: "0 12px 12px 0",
                }}
            />

            {/* Blue cut-out */}
            <span
                className="absolute bg-[#073FDC]"
                style={{
                left: "9px",
                top: "14px",
                width: "9px",
                height: "11px",
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                }}
            />
            </span>
        </Link>

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
                      mt-[105px]
                      max-w-[370px]
                      lg: mt-[107px]
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
                      Sign up and come in
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
                      The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
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

     {/* =====================================================
            REGISTER FORM
        ====================================================== */}

        <section
        className="
            absolute
            right-0
            top-[200px]
            z-50
            w-[379px]
            h-[784px]
        "
        >
        <div
            className="
            box-border
            h-[480px]
            w-[304px]
            rounded-[12px]
            bg-white
            px-[33px]
            pt-[38px]
            shadow-[0_12px_35px_rgba(0,0,0,0.10)]
            "
        >
            {/* =================================================
                HEADER
            ================================================== */}

            <div>
            <p
                className="
                m-0
                text-[10px]
                font-normal
                leading-[13px]
                text-[#4774C8]
                "
            >
                Create an Account
            </p>

            <h2
                className="
                m-0
                mt-[7px]
                text-[25px]
                font-semibold
                leading-[1.08]
                tracking-[-0.8px]
                text-[#292929]
                "
            >
                Welcome to
                <br />
                ByteSpace
            </h2>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <form className="mt-[27px]">
            {/* =================================================
                FULL NAME
            ================================================== */}

            <div>
                <label
                htmlFor="fullName"
                className="
                    block
                    text-[14px]
                    font-medium
                    leading-[11px]
                    text-[#222]
                "
                >
                Full Name
                </label>

                <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Jamie Davis"
                className="
                    mt-[16px]
                    block
                    h-[35px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#E7E7E7]
                    bg-white
                    px-[12px]
                    text-[10px]
                    font-normal
                    leading-none
                    text-[#222]
                    outline-none
                    transition-all
                    duration-150
                    placeholder:text-[#A3A3A3]
                    focus:border-[#C8FF00]
                    focus:ring-2
                    focus:ring-[#C8FF00]/15
                "
                />
            </div>

            {/* =================================================
                EMAIL
            ================================================== */}

            <div className="mt-[14px]">
                <label
                htmlFor="email"
                className="
                    block
                    text-[14px]
                    font-medium
                    leading-[11px]
                    text-[#222]
                "
                >
                Email
                </label>

                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="designer@example.com"
                className="
                    mt-[16px]
                    block
                    h-[35px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#E7E7E7]
                    bg-white
                    px-[12px]
                    text-[10px]
                    font-normal
                    leading-none
                    text-[#222]
                    outline-none
                    transition-all
                    duration-150
                    placeholder:text-[#A3A3A3]
                    focus:border-[#C8FF00]
                    focus:ring-2
                    focus:ring-[#C8FF00]/15
                "
                />
            </div>

            {/* =================================================
                PASSWORD
            ================================================== */}

            <div className="mt-[14px]">
                <label
                htmlFor="password"
                className="
                    block
                    text-[14px]
                    font-medium
                    leading-[11px]
                    text-[#222]
                "
                >
                Password
                </label>

                {/* PASSWORD WRAPPER */}

                <div className="relative mt-[16px]">
                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="••••••••"
                    className="
                    block
                    h-[35px]
                    w-full
                    rounded-[6px]
                    border
                    border-[#E7E7E7]
                    bg-white
                    px-[12px]
                    pr-[38px]
                    text-[10px]
                    font-normal
                    leading-none
                    tracking-[1px]
                    text-[#222]
                    outline-none
                    transition-all
                    duration-150
                    placeholder:text-[#A3A3A3]
                    focus:border-[#C8FF00]
                    focus:ring-2
                    focus:ring-[#C8FF00]/15
                    "
                />

                {/* =================================================
                    SHOW / HIDE PASSWORD
                ================================================== */}

                <button
                    type="button"
                    aria-label={
                    showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    onClick={() =>
                    setShowPassword((prev) => !prev)
                    }
                    className="
                    absolute
                    right-[8px]
                    top-1/2
                    flex
                    h-[24px]
                    w-[24px]
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    text-[#999]
                    transition-all
                    duration-150
                    hover:bg-[#F5F5F5]
                    hover:text-[#333]
                    active:scale-95
                    "
                >
                    {showPassword ? (
                    <FiEyeOff
                        size={14}
                        strokeWidth={1.7}
                    />
                    ) : (
                    <FiEye
                        size={14}
                        strokeWidth={1.7}
                    />
                    )}
                </button>
                </div>
            </div>

            {/* =================================================
                CONTINUE BUTTON
            ================================================== */}

            <div className="mt-[15px] flex justify-end">
                <button
                type="submit"
                className="
                    flex
                    h-[49px]
                    min-w-[75px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C8FF00]
                    px-[15px]
                    text-[14px]
                    font-medium
                    leading-none
                    text-[#111]
                    transition-all
                    duration-150
                    hover:brightness-95
                    hover:shadow-[0_5px_15px_rgba(200,255,0,0.28)]
                    active:scale-[0.97]
                "
                >
                Continue
                </button>
            </div>
            </form>

            {/* =================================================
                LOGIN LINK
            ================================================== */}

            <div
            className="
                absolute
               
                left-0
                w-full
                text-center
            "
            >
            <p
                className="
                pt-5
                mr-20
                text-[14px]
                font-normal
                leading-[12px]
                text-[#999]
                "
            >
                Already have an account?{" "}
                <Link
                href="/sign-in"
                className="
                    font-medium
                    text-[#4774C8]
                    transition-colors
                    hover:text-[#073FDC]
                    hover:underline
                "
                >
                Login
                </Link>
            </p>
            </div>
        </div>
        </section>
      </div>
    </main>
  );
}