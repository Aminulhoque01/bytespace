

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  Star,
  Check,
  Users,
  BookOpen,
  Settings2,
} from "lucide-react";

export default function LearningGrowthSection() {
   

  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* =========================================================
          GLOBAL BACKGROUND
          Both learner1 + learner2 stay inside this same background
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* top-left lime glow */}
        <div
          className="
            absolute
            -left-[220px]
            -top-[180px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#D8FF32]/25
            blur-[150px]
          "
        />

        {/* top-right blue glow */}
        <div
          className="
            absolute
            right-[-220px]
            top-[50px]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#E0E7FF]/70
            blur-[150px]
          "
        />

        {/* bottom-left lime glow */}
        <div
          className="
            absolute
            -bottom-[100px]
            -left-[200px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#D8FF32]/25
            blur-[140px]
          "
        />

        {/* bottom-right blue glow */}
        <div
          className="
            absolute
            -bottom-[220px]
            right-[-180px]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#DDE5FF]/80
            blur-[150px]
          "
        />

        {/* center white soft area */}
        <div
          className="
            absolute
            left-1/2
            top-[30%]
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-white/90
            blur-[130px]
          "
        />
      </div>

      {/* =========================================================
          MAIN WRAPPER
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          sm:px-7
          lg:px-0
        "
      >

        {/* =======================================================
            ===================== PART ONE ========================
        ======================================================== */}

        <div
          className="
            relative
            min-h-[610px]
            w-full
            lg:h-[610px]
          "
        >

          {/* =====================================================
              LEFT TEXT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              relative
              z-20
              pt-[60px]
              lg:absolute
              lg:left-0
              lg:top-[115px]
              lg:w-[570px]
              lg:pt-0
            "
          >
            {/* heading */}

            <h2
              className="
                max-w-[570px]
                text-[39px]
                font-bold
                leading-[1.13]
                tracking-[-1.7px]
                text-[#202126]
                sm:text-[44px]
                lg:text-[44px]
              "
            >
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            {/* paragraph */}

            <p
              className="
                mt-[38px]
                max-w-[505px]
                text-[16px]
                font-normal
                leading-[1.72]
                tracking-[-0.1px]
                text-[#565961]
                sm:text-[17px]
              "
            >
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey.
              <br />
              Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely,
              we have the resources you need.
            </p>

            {/* =================================================
                STATS
            ================================================== */}

            <div
              className="
                mt-[42px]
                flex
                items-start
                gap-[62px]
              "
            >
              <div>
                <div
                  className="
                    text-[35px]
                    font-medium
                    leading-none
                    tracking-[-1.5px]
                    text-[#004BE8]
                  "
                >
                  12K
                </div>

                <div
                  className="
                    mt-[8px]
                    text-[15px]
                    leading-none
                    text-[#555860]
                  "
                >
                  Students
                </div>
              </div>

              <div>
                <div
                  className="
                    text-[35px]
                    font-medium
                    leading-none
                    tracking-[-1.5px]
                    text-[#004BE8]
                  "
                >
                  70+
                </div>

                <div
                  className="
                    mt-[8px]
                    text-[15px]
                    leading-none
                    text-[#555860]
                  "
                >
                  Courses
                </div>
              </div>

              <div>
                <div
                  className="
                    text-[35px]
                    font-medium
                    leading-none
                    tracking-[-1.5px]
                    text-[#004BE8]
                  "
                >
                  16
                </div>

                <div
                  className="
                    mt-[8px]
                    text-[15px]
                    leading-none
                    text-[#555860]
                  "
                >
                  Creators
                </div>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL AREA
          ====================================================== */}

          <div
            className="
              relative
              mx-auto
              mt-[45px]
              h-[520px]
              w-full
              max-w-[600px]
              lg:absolute
              lg:right-[-5px]
              lg:top-0
              lg:mt-0
              lg:h-[610px]
              lg:max-w-none
              lg:w-[610px]
            "
          >

            

           

            {/* =================================================
                LEARNER 1
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="
                absolute
                bottom-[0px]
                right-[0px]
                z-20
                h-[577px]
                w-[540px]
                lg:right-[5px]
                lg:h-[577px]
                lg:w-[540px]
              "
            >
              <Image
                src="/images/learner/learner1.png"
                alt="Professional learner"
                fill
                priority
                sizes="630px"
                className="object-contain object-bottom"
              />
            </motion.div>

            
            
          </div>
        </div>

        {/* =======================================================
            ===================== PART TWO ========================
        ======================================================== */}

        <div
          className="
            relative
            min-h-[560px]
            w-full
            lg:h-[560px]
          "
        >

          {/* =====================================================
              LEFT VISUAL
          ====================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[470px]
              w-full
              max-w-[560px]
              lg:absolute
              lg:left-0
              lg:top-0
              lg:h-[560px]
              lg:max-w-none
              lg:w-[580px]
            "
          >

           

           

            {/* =================================================
                LEARNER 2
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="
                absolute
                bottom-0
                left-[65px]
                z-20
                h-[577px]
                w-[540px]
                lg:left-[25px]
                lg:h-[577px]
                lg:w-[540px]
              "
            >
              <Image
                src="/images/learner/learner2.png"
                alt="Course creator"
                fill
                sizes="360px"
                className="object-contain object-bottom"
              />
            </motion.div>

            

           
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              relative
              z-20
              mx-auto
              max-w-[500px]
              pb-[70px]
              lg:absolute
              lg:right-[20px]
              lg:top-[130px]
              lg:mx-0
              lg:pb-0
            "
          >

            <h2
              className="
                text-[38px]
                font-bold
                leading-[1.13]
                tracking-[-1.5px]
                text-[#202126]
                sm:text-[43px]
              "
            >
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p
              className="
                mt-[25px]
                max-w-[470px]
                text-[13px]
                leading-[1.65]
                text-[#555860]
                sm:text-[14px]
              "
            >
              Bytespace supports individuals or entities in the creation,
              publication, administration and educational courses.
            </p>

            {/* =================================================
                FEATURES
            ================================================== */}

            <div className="mt-[26px] space-y-[11px]">

              <div className="flex items-center gap-[8px]">
                <span
                  className="
                    flex
                    h-[15px]
                    w-[15px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#004BE8]
                    text-white
                  "
                >
                  <Check size={9} strokeWidth={3} />
                </span>

                <span className="text-[11px] text-[#303136]">
                  Share Your Expertise
                </span>
              </div>

              <div className="flex items-center gap-[8px]">
                <span
                  className="
                    flex
                    h-[15px]
                    w-[15px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#004BE8]
                    text-white
                  "
                >
                  <Check size={9} strokeWidth={3} />
                </span>

                <span className="text-[11px] text-[#303136]">
                  Monetize Your Passion
                </span>
              </div>

              <div className="flex items-center gap-[8px]">
                <span
                  className="
                    flex
                    h-[15px]
                    w-[15px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#004BE8]
                    text-white
                  "
                >
                  <Check size={9} strokeWidth={3} />
                </span>

                <span className="text-[11px] text-[#303136]">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-[8px]">
                <span
                  className="
                    flex
                    h-[15px]
                    w-[15px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#004BE8]
                    text-white
                  "
                >
                  <Check size={9} strokeWidth={3} />
                </span>

                <span className="text-[11px] text-[#303136]">
                  Build a Community
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}