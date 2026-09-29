"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const categories = [
  {
    title: "Design",
    icon: PenTool,
  },
  {
    title: "Development",
    icon: Code2,
  },
  {
    title: "IT & Software",
    icon: Laptop,
  },
  {
    title: "Business",
    icon: Building2,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Photography",
    icon: Camera,
  },
];

export default function LearningPathsSection() {
  return (
    <section className="w-full bg-white py-[32px] sm:py-[40px] lg:py-[32px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-7 lg:px-0">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mx-auto w-full max-w-[1200px] text-center"
        >
          <h2
            className="
              text-[28px]
              font-bold
              leading-[1.15]
              tracking-[-0.7px]
              text-[#101426]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[36px]
            "
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="
              mx-auto
              mt-[10px]
              max-w-[917px]
              text-[14px]
              font-normal
              leading-[160%]
              text-[#989BA3]
              sm:text-[15px]
            "
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various
            <br className="hidden sm:block" />
            fields, ensuring there's something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </motion.div>

        {/* =====================================================
            CATEGORY CARDS
        ====================================================== */}

        <div
          className="
            mt-[32px]
            grid
            w-full
            grid-cols-2
            justify-items-center
            gap-[16px]
            sm:mt-[38px]
            sm:grid-cols-3
            sm:gap-[20px]
            md:mt-[42px]
            md:grid-cols-3
            md:gap-[28px]
            lg:mt-[46px]
            lg:flex
            lg:items-center
            lg:justify-center
            lg:gap-[40px]
          "
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.button
                key={category.title}
                type="button"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  flex
                  h-[145px]
                  w-full
                  max-w-[167px]
                  flex-col
                  items-center
                  rounded-[20px]
                  border
                  border-[#D2D5D9]
                  bg-white
                  pt-[27px]
                  transition-all
                  duration-300
                  hover:border-[#C8FF00]
                  hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]

                  sm:h-[155px]
                  sm:max-w-[167px]
                  sm:rounded-[21px]
                  sm:pt-[30px]

                  md:h-[167px]
                  md:w-[167px]
                  md:pt-[36px]
                  md:rounded-[23px]

                  lg:h-[167px]
                  lg:w-[167px]
                  lg:min-w-[167px]
                  lg:shrink-0
                "
              >
                {/* =================================================
                    ICON CIRCLE
                ================================================== */}

                <span
                  className="
                    flex
                    h-[52px]
                    w-[52px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D4FB20]
                    transition-transform
                    duration-300
                    group-hover:scale-[1.04]

                    sm:h-[55px]
                    sm:w-[55px]

                    md:h-[59px]
                    md:w-[59px]
                  "
                >
                  <Icon
                    size={28}
                    strokeWidth={2.5}
                    className="text-[#171717] sm:size-[30px] md:size-[31px]"
                  />
                </span>

                {/* =================================================
                    CATEGORY TITLE
                ================================================== */}

                <span
                  className="
                    mt-[11px]
                    whitespace-nowrap
                    text-[16px]
                    font-normal
                    leading-[24px]
                    tracking-[-0.35px]
                    text-[#17181D]

                    sm:mt-[12px]
                    sm:text-[18px]

                    md:mt-[14px]
                    md:text-[20px]
                  "
                >
                  {category.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 
