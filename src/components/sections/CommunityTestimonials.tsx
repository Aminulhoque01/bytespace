"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: "/images/testimonials/testimonials3.png",
    quote:
      `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: "/images/testimonials/testimonials2.png",
    quote:
      `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: "/images/testimonials/testimonials1.png",
    quote:
      `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function CommunityTestimonials() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#fafafa]"
      style={{
        minHeight: "766px",
        fontFamily: "Poppins, Arial, sans-serif",
      }}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Soft overall background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 74% 28%,
              rgba(218,255,0,0.24) 0%,
              rgba(218,255,0,0.10) 27%,
              transparent 55%
            ),
            radial-gradient(
              circle at 8% 94%,
              rgba(61,103,255,0.18) 0%,
              rgba(61,103,255,0.07) 28%,
              transparent 52%
            ),
            linear-gradient(
              180deg,
              #ffffff 0%,
              #fbfbfb 100%
            )
          `,
        }}
      />

      {/* Main lime glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-170px",
          right: "-100px",
          width: "760px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(211,255,0,0.38) 0%, rgba(211,255,0,0.17) 34%, rgba(211,255,0,0.05) 58%, transparent 74%)",
          filter: "blur(30px)",
        }}
      />

      {/* Center lime light */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "105px",
          left: "380px",
          width: "520px",
          height: "330px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(215,255,0,0.18) 0%, rgba(215,255,0,0.07) 48%, transparent 75%)",
          filter: "blur(28px)",
        }}
      />

      {/* Bottom-left blue glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-220px",
          left: "-180px",
          width: "680px",
          height: "440px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(57,103,255,0.30) 0%, rgba(57,103,255,0.12) 42%, transparent 72%)",
          filter: "blur(38px)",
        }}
      />

      {/* Very subtle decorative lime blur */}
      <div
        className="pointer-events-none absolute"
        style={{
          right: "20%",
          bottom: "-150px",
          width: "380px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(215,255,0,0.10), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          relative z-10 mx-auto w-full
          px-5
          sm:px-7
          md:px-8
          lg:px-0
        "
        style={{
          maxWidth: "1175px",
          paddingTop: "79px",
          paddingBottom: "80px",
        }}
      >
        {/* =======================================================
            HEADER
        ======================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[35px]
            md:grid-cols-2
            md:gap-[55px]
            lg:gap-[105px]
          "
          style={{
            alignItems: "start",
          }}
        >
          {/* =====================================================
              HEADING
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
            }}
          >
            <h2
              className="
                m-0
                w-full
                font-semibold
                text-[#080808]
                text-[32px]
                leading-[1.15]
                tracking-[-1.2px]
                sm:text-[38px]
                md:text-[40px]
                lg:w-[530px]
                lg:text-[46px]
                lg:leading-[1.12]
                lg:tracking-[-1.8px]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </motion.div>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="
              m-0
              w-full
              text-[#555]
              text-[14px]
              leading-[1.75]
              tracking-[-0.08px]
              sm:text-[15px]
              md:text-[15px]
              lg:w-[570px]
              lg:text-[16px]
              lg:leading-[1.8]
              lg:tracking-[-0.12px]
            "
            style={{
              paddingTop: "0px",
            }}
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </div>

        {/* =======================================================
            CARDS
        ======================================================== */}

        <div
          className="
            mt-[45px]
            grid
            grid-cols-1
            gap-[24px]
            sm:grid-cols-2
            sm:gap-[28px]
            md:mt-[55px]
            md:grid-cols-2
            md:gap-[30px]
            lg:mt-[65px]
            lg:grid-cols-3
            lg:gap-[40px]
          "
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                w-full
                bg-white
              "
              style={{
                minHeight: "432px",
                borderRadius: "24px",
                padding: "24px",
                boxSizing: "border-box",
                border: "1px solid rgba(0,0,0,0.055)",
                boxShadow:
                  "0 12px 35px rgba(20,30,50,0.055), 0 2px 8px rgba(20,30,50,0.035)",
                transition:
                  "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
            >
              {/* =================================================
                  AVATAR
              ================================================== */}

              <div
                className="
                  h-[68px]
                  w-[68px]
                  sm:h-[72px]
                  sm:w-[72px]
                  md:h-[76px]
                  md:w-[76px]
                  lg:h-[80px]
                  lg:w-[80px]
                "
                style={{
                  borderRadius: "50%",
                  padding: "2px",
                  background:
                    index === 0
                      ? "linear-gradient(135deg, #FFD84A, #C8FF00)"
                      : index === 1
                        ? "linear-gradient(135deg, #d8d8d8, #8d8d8d)"
                        : "linear-gradient(135deg, #e7e7e7, #c4c4c4)",
                }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="block h-full w-full rounded-full object-cover"
                />
              </div>

              {/* =================================================
                  NAME
              ================================================== */}

              <h3
                className="
                  m-0
                  font-semibold
                  text-[#080808]
                  text-[18px]
                  leading-[1.2]
                  tracking-[-0.3px]
                  sm:text-[19px]
                  lg:text-[20px]
                  lg:tracking-[-0.4px]
                "
                style={{
                  marginTop: "24px",
                }}
              >
                {testimonial.name}
              </h3>

              {/* =================================================
                  ROLE
              ================================================== */}

              <p
                className="
                  m-0
                  text-[#003BE2]
                  text-[14px]
                  leading-[1.5]
                  sm:text-[15px]
                  lg:text-[16px]
                "
                style={{
                  marginTop: "5px",
                  fontWeight: 400,
                }}
              >
                {testimonial.role}
              </p>

              {/* =================================================
                  DIVIDER
              ================================================== */}

              <div
                className="w-full"
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  height: "1px",
                  background: "rgba(0,0,0,0.07)",
                }}
              />

              {/* =================================================
                  QUOTE
              ================================================== */}

              <p
                className="
                  m-0
                  text-[#5C5C5C]
                  text-[14px]
                  leading-[1.75]
                  sm:text-[15px]
                  lg:text-[16px]
                  lg:leading-[1.8]
                "
                style={{
                  fontWeight: 400,
                  letterSpacing: "-0.08px",
                }}
              >
                {testimonial.quote}
              </p>

              {/* =================================================
                  BOTTOM DECORATION
              ================================================== */}

               
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}