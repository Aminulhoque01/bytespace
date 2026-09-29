 
"use client";

import { motion } from "framer-motion";

export default function CreatorCTASection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0B40DB]

        h-[560px]
        sm:h-[530px]
        md:h-[510px]
        lg:h-[489px]
      "
      style={{
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      {/* =========================================================
          BACKGROUND GRID
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* =========================================================
          TOP LEFT — 3 LIME STROKES
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="
          pointer-events-none
          absolute
          left-[-70px]
          top-[-25px]
          z-[5]
          scale-[0.72]
          origin-top-left
          sm:left-[-60px]
          sm:top-[-25px]
          sm:scale-[0.82]
          md:left-[-52px]
          md:top-[-27px]
          md:scale-[0.9]
          lg:left-[-48px]
          lg:top-[-29px]
          lg:scale-100
        "
        style={{
          width: "220px",
          height: "205px",
        }}
      >
        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            left: "-18px",
            top: "-8px",
            width: "184px",
            height: "48px",
            transform: "rotate(15deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            left: "-27px",
            top: "51px",
            width: "180px",
            height: "48px",
            transform: "rotate(22deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            left: "-31px",
            top: "108px",
            width: "148px",
            height: "46px",
            transform: "rotate(28deg)",
          }}
        />
      </motion.div>

      {/* =========================================================
          TOP LEFT / CENTER — WHITE SQUIGGLE
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          pointer-events-none
          absolute
          left-[145px]
          top-[28px]
          z-[5]
          scale-[0.7]
          origin-top-left
          sm:left-[165px]
          sm:top-[30px]
          sm:scale-[0.8]
          md:left-[190px]
          md:top-[32px]
          md:scale-[0.9]
          lg:left-[210px]
          lg:top-[34px]
          lg:scale-100
        "
        style={{
          width: "120px",
          height: "125px",
        }}
      >
        <span
          className="absolute rounded-full bg-white"
          style={{
            left: "0px",
            top: "0px",
            width: "87px",
            height: "24px",
            transform: "rotate(18deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-white"
          style={{
            left: "9px",
            top: "29px",
            width: "88px",
            height: "24px",
            transform: "rotate(-10deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-white"
          style={{
            left: "17px",
            top: "58px",
            width: "88px",
            height: "24px",
            transform: "rotate(-18deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-white"
          style={{
            left: "27px",
            top: "87px",
            width: "78px",
            height: "23px",
            transform: "rotate(-30deg)",
          }}
        />
      </motion.div>

      {/* =========================================================
          TOP RIGHT — LIME TRIANGLE
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="
          pointer-events-none
          absolute
          right-[25px]
          top-[20px]
          z-[6]
          scale-[0.55]
          origin-top-right
          sm:right-[55px]
          sm:top-[20px]
          sm:scale-[0.7]
          md:right-[90px]
          md:top-[21px]
          md:scale-[0.85]
          lg:right-[124px]
          lg:top-[21px]
          lg:scale-100
        "
        style={{
          width: "126px",
          height: "137px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "7px",
            top: "2px",
            width: 0,
            height: 0,
            borderLeft: "61px solid transparent",
            borderRight: "61px solid transparent",
            borderBottom: "132px solid #C8FF00",
            transform: "rotate(25deg)",
          }}
        />
      </motion.div>

      {/* =========================================================
          RIGHT — LARGE WHITE CURVED SHAPE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          z-[4]
          bg-white
          right-[-125px]
          top-[10px]
          scale-[0.72]
          origin-top-right
          sm:right-[-110px]
          sm:top-[15px]
          sm:scale-[0.82]
          md:right-[-100px]
          md:top-[18px]
          md:scale-[0.9]
          lg:right-[-91px]
          lg:top-[20px]
          lg:scale-100
        "
        style={{
          width: "164px",
          height: "246px",
          transform: "rotate(35deg)",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          borderRadius: "25px",
        }}
      />

      {/* =========================================================
          LEFT — WHITE TRIANGLE
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          z-[6]
          bg-white
          left-[-60px]
          top-[270px]
          scale-[0.72]
          origin-top-left
          sm:left-[-52px]
          sm:top-[255px]
          sm:scale-[0.82]
          md:left-[-45px]
          md:top-[248px]
          md:scale-[0.9]
          lg:left-[-38px]
          lg:top-[241px]
          lg:scale-100
        "
        style={{
          width: "145px",
          height: "155px",
          transform: "rotate(-20deg)",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          borderRadius: "25px",
        }}
      />

      {/* =========================================================
          BOTTOM LEFT — LIME RING
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          z-[6]
          rounded-full
          border-[#C8FF00]
          left-[20px]
          bottom-[-120px]
          scale-[0.72]
          origin-bottom-left
          sm:left-[35px]
          sm:bottom-[-120px]
          sm:scale-[0.82]
          md:left-[52px]
          md:bottom-[-119px]
          md:scale-[0.9]
          lg:left-[69px]
          lg:bottom-[-118px]
          lg:scale-100
        "
        style={{
          width: "248px",
          height: "248px",
          borderWidth: "63px",
        }}
      />

      {/* =========================================================
          BOTTOM RIGHT — 4 LIME STROKES
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          pointer-events-none
          absolute
          bottom-[-13px]
          right-[-35px]
          z-[7]
          scale-[0.68]
          origin-bottom-right
          sm:right-[-20px]
          sm:scale-[0.78]
          md:right-[-10px]
          md:scale-[0.9]
          lg:right-0
          lg:scale-100
        "
        style={{
          width: "198px",
          height: "181px",
        }}
      >
        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            right: "52px",
            top: "0px",
            width: "104px",
            height: "42px",
            transform: "rotate(-7deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            right: "22px",
            top: "42px",
            width: "136px",
            height: "43px",
            transform: "rotate(-8deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            right: "-2px",
            top: "85px",
            width: "165px",
            height: "44px",
            transform: "rotate(-16deg)",
          }}
        />

        <span
          className="absolute rounded-full bg-[#C8FF00]"
          style={{
            right: "-25px",
            top: "128px",
            width: "166px",
            height: "43px",
            transform: "rotate(-7deg)",
          }}
        />
      </motion.div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="absolute inset-0 z-[20] flex flex-col items-center">
        {/* HEADING */}

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="
            absolute
            m-0
            w-[calc(100%-40px)]
            max-w-[650px]
            text-center
            font-semibold
            text-white
            top-[65px]
            text-[32px]
            leading-[1.15]
            tracking-[-1.2px]

            sm:top-[72px]
            sm:w-[600px]
            sm:text-[38px]

            md:top-[80px]
            md:w-[630px]
            md:text-[42px]

            lg:top-[87px]
            lg:w-[650px]
            lg:max-w-none
            lg:text-[46px]
            lg:leading-[1.12]
            lg:tracking-[-1.8px]
          "
        >
          Unlock Your Potential as a
          <br className="hidden sm:block" />
          <span className="sm:inline"> Creator with ByteSpace</span>
          <span className="sm:hidden"> Creator with ByteSpace</span>
        </motion.h2>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.08,
          }}
          className="
            absolute
            m-0
            w-[calc(100%-40px)]
            max-w-[950px]
            text-center
            font-normal
            text-white

            top-[195px]
            text-[14px]
            leading-[1.7]
            tracking-[-0.05px]

            sm:top-[210px]
            sm:w-[calc(100%-70px)]
            sm:text-[14px]

            md:top-[220px]
            md:w-[760px]
            md:text-[15px]

            lg:top-[235px]
            lg:w-[950px]
            lg:max-w-none
            lg:text-[16px]
            lg:leading-[1.8]
            lg:tracking-[-0.15px]
          "
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a
          <br className="hidden md:block" />
          part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your
          <br className="hidden md:block" />
          expertise by publishing your finest course on the ByteSpace Course
          Library.
        </motion.p>

        {/* BUTTON */}

        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.16,
          }}
          className="
            absolute
            rounded-full
            border-0
            bg-[#C8FF00]
            text-[#171717]
            cursor-pointer

            top-[395px]
            h-[46px]
            min-w-[160px]
            px-[22px]
            text-[15px]
            leading-[46px]

            sm:top-[378px]
            sm:min-w-[165px]

            md:top-[368px]
            md:min-w-[170px]
            md:text-[16px]

            lg:top-[358px]
            lg:h-[46px]
            lg:min-w-[172px]
            lg:px-[24px]
            lg:text-[16px]
            lg:leading-[46px]
          "
        >
          Join as Creator
        </motion.button>
      </div>
    </section>
  );
}
 
 