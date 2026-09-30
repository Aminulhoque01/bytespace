

"use client";

import Image from "next/image";
import {
  Check,
  GraduationCap,
  LockKeyhole,
  PlayCircle,
  UserRound,
  Video,
  Star,
  Video as VideoIcon,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   TYPES
========================================================= */

interface CourseDetailsContentProps {
  instructorName?: string;
  instructorRole?: string;
  instructorImage?: string;
}

/* =========================================================
   TABS
========================================================= */

const tabs = ["About", "Lessons", "Reviews"];

/* =========================================================
   KEY POINTS
========================================================= */

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

/* =========================================================
   LESSONS
========================================================= */

const lessons = [
  {
    number: "1",
    title: "Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    number: "2",
    title: "Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as Color Theory in Digital Design and Typography Essentials.",
  },
  {
    number: "4",
    title: "User-Centric Design Strategies",
    description:
      "Understand Design Thinking in Digital Creation and delve into User Experience essentials.",
  },
  {
    number: "5",
    title: "Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like Creating Interactive Presentations and Integrating Multimedia Elements.",
  },
  {
    number: "6",
    title: "Project Showcase and Critique",
    description:
      "Perfect your presentation skills with Effective Presentation Techniques and embrace collaboration.",
  },
  {
    number: "7",
    title: "Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for Mobile Platforms and optimize for Social Media.",
  },
];

/* =========================================================
   REVIEWS
========================================================= */

const reviews = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "Professional Creator",
    image: "/images/review/reviewer1.png",
    rating: 5,
    time: "a year ago",
    text:
      "The course provided me with a comprehensive understanding of digital asset creation. The lessons were clear, practical, and immediately applicable to my work.",
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    image: "/images/review/reviewer2.png",
    rating: 5,
    time: "a year ago",
    text:
      "This course helped me approach digital design differently. The explanation of theory, hands-on exercises, and real-world applications made it a truly enriching experience.",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    image: "/images/review/reviewer3.png",
    rating: 5,
    time: "a year ago",
    text:
      "The project showcase and critique module created a collaborative environment where I could share my work, receive valuable feedback, and refine my skills.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UX/UI Designer",
    image: "/images/review/reviewer4.png",
    rating: 5,
    time: "a year ago",
    text:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course helped me develop practical knowledge and improve my overall workflow.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function CourseDetailsContent({
  instructorName = "PurePearl Studio",
  instructorRole = "Professional Creator",
  instructorImage = "/images/students/student1.png",
}: CourseDetailsContentProps) {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1059px]
          grid-cols-1

          lg:grid-cols-[minmax(0,1fr)_330px]
          lg: ml-20
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            min-w-0
            px-[24px]
            py-[30px]

            sm:px-[30px]
            sm:py-[35px]

            lg:border-r
            lg:border-[#E4E4E4]
            lg:px-0
            lg:pr-[38px]
          "
        >
          {/* =================================================
              TABS
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-[8px]
            "
          >
            {tabs.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex
                    h-[30px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    px-[12px]
                    text-[8px]
                    font-medium
                    transition-all
                    duration-200

                    ${
                      active
                        ? `
                          border-[#C8FF00]
                          bg-[#C8FF00]
                          text-[#222]
                        `
                        : `
                          border-[#F0F0F0]
                          bg-[#F5F5F5]
                          text-[#777]
                          hover:bg-[#EEEEEE]
                        `
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* =================================================
              ABOUT TAB
          ================================================== */}

          {activeTab === "About" && (
            <AboutContent />
          )}

          {/* =================================================
              LESSONS TAB
          ================================================== */}

          {activeTab === "Lessons" && (
            <LessonsContent />
          )}

          {/* =================================================
              REVIEWS TAB
          ================================================== */}

          {activeTab === "Reviews" && (
            <ReviewsContent />
          )}
        </div>
 

        <aside
          className="
            hidden
            lg:block
            lg:w-[330px]
          "
        >
          
         
        </aside>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT CONTENT
========================================================= */

function AboutContent() {
  return (
    <div className="mt-[27px]">
      {/* DESCRIPTION */}

      <h2
        className="
          m-0
          text-[20px]
          font-semibold
          text-[#242528]
        "
      >
        Description
      </h2>

      <div
        className="
          mt-[15px]
          max-w-[680px]
          space-y-[16px]
          text-[16px]
          leading-[160%]
          text-[#4B4C53]
        "
      >
        <p className="m-0">
          Embark on an enlightening exploration into the world of
          digital creation with our comprehensive course,
          "Build Digital Assets: A Comprehensive Guide." This
          transformative learning experience invites you to delve
          deep into the intricacies of crafting impactful digital
          content.
        </p>

        <p className="m-0">
          From laying the groundwork with foundational concepts to
          mastering advanced techniques, this guide is meticulously
          crafted to empower you with the skills essential for
          navigating the dynamic landscape of digital asset creation.
        </p>

        <p className="m-0">
          In the initial modules, you'll establish a solid foundation
          by immersing yourself in the foundational principles that
          form the backbone of digital asset creation.
        </p>

        <p className="m-0">
          As you progress through the course, you'll ascend to higher
          levels of expertise, delving into the nuances of design
          principles that drive impactful creations. Uncover the
          secrets behind effective visual communication, exploring
          color theory, typography, and layout strategies that elevate
          your digital assets to new heights.
        </p>
      </div>

      {/* SNEAK PEEK */}

      <div className="mt-[25px]">
        <h2
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Sneak Peek
        </h2>

        <div
          className="
            mt-[12px]
            grid
            grid-cols-2
            gap-[8px]

            sm:grid-cols-4
          "
        >
          <PeekImage
            src="/images/course/peak1.jpg"
            alt="Course preview 1"
          />

          <PeekImage
            src="/images/course/peak2.jpg"
            alt="Course preview 2"
          />

          <PeekImage
            src="/images/course/peak3.jpg"
            alt="Course preview 3"
          />

          <PeekImage
            src="/images/course/peak4.jpg"
            alt="Course preview 4"
          />
        </div>
      </div>

      {/* KEY POINTS */}

      <div className="mt-[25px]">
        <h2
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Key Points
        </h2>

        <div className="mt-[12px] space-y-[8px]">
          {keyPoints.map((point) => (
            <div
              key={point}
              className="
                flex
                items-center
                gap-[7px]
                text-[16px]
                text-[#4B4C53]
              "
            >
              <span
                className="
                  flex
                  h-[20px]
                  w-[20px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#003BE2]
                "
              >
                <Check
                  size={16}
                  strokeWidth={3}
                  className="text-white"
                />
              </span>

              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LESSONS CONTENT
========================================================= */

function LessonsContent() {
  return (
    <div className="mt-[27px]">
      {/* TITLE */}

      <h2
        className="
          m-0
          text-[20px]
          font-semibold
          text-[#242528]
        "
      >
        Explore the Modules
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          m-0
          mt-[12px]
          max-w-[650px]
          text-[16px]
          leading-[160%]
          text-[#4B4C53]
        "
      >
        Immerse yourself in the course content as we break down each
        module into comprehensive lessons, providing practical insights
        and hands-on experiences.
      </p>

      {/* LESSON LIST */}

      <div className="mt-[15px]">
        <h3
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Lesson List
        </h3>

        <div className="mt-[16px] space-y-[20px]">
          {lessons.map((lesson) => (
            <LessonItem
              key={lesson.number}
              number={lesson.number}
              title={lesson.title}
              description={lesson.description}
            />
          ))}
        </div>
      </div>

      {/* LESSON CONTENT */}

      <div className="mt-[20px]">
        <h3
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Lesson Content
        </h3>

        <p
          className="
            m-0
            mt-[10px]
            max-w-[650px]
            text-[16px]
            leading-[160%]
            text-[#4B4C53]
          "
        >
          Engage with each lesson through captivating video content,
          detailed textual explanations, and interactive elements.
          Download resources, complete assignments, and test your
          understanding with quizzes.
        </p>
      </div>

      {/* PROGRESS TRACKING */}

      <div className="mt-[20px]">
        <h3
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Lesson Progress Tracking
        </h3>

        <p
          className="
            m-0
            mt-[10px]
            max-w-[650px]
            text-[16px]
            leading-[160%]
            text-[#4F4F4F]
          "
        >
          Witness your growth as you complete lessons, with an intuitive
          progress tracking feature guiding you through your learning
          journey.
        </p>
      </div>

      {/* PROGRESS CARD */}

      <div
        className="
          mt-[12px]
          max-w-[723px]
          h-[116px]
          rounded-[16px]
          border
          border-[#CED0D3]
          px-[10px]
          py-[9px]
           
        "
      >
        <p
          className="
            mt-2
            text-[14px]
            text-[#242528]
             
          "
        >
          Learning Progress
        </p>

        <p
          className="
           
            mt-2
            text-[25px]
            font-semibold
            leading-none
            text-[#242528]
            w-[72px]
            h-[43px]
          "
        >
          55%
        </p>

        <div
          className="
            mt-[8px]
            h-[8px]
            w-full
            overflow-hidden
            rounded-full
            bg-[#CED0D3]
          "
        >
          <div
            className="
              h-full
              w-[55%]
              rounded-[24px]
              bg-[#D4FB20]
            "
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   LESSON ITEM
========================================================= */

interface LessonItemProps {
  number: string;
  title: string;
  description: string;
}

function LessonItem({
  number,
  title,
  description,
}: LessonItemProps) {
  return (
    <div
      className="
        flex
        items-start
        gap-[9px]
      "
    >
      {/* VIDEO BUTTON */}

      <button
        type="button"
        aria-label={`Play lesson ${number}`}
        className="
          flex
          h-[72px]
          w-[72px]
          shrink-0
          items-center
          justify-center
          rounded-[24px]
          border-0
          p-[16px]
          bg-[#D4FB20]
          text-[#222]
          gap-[8px]
        "
      >
        <VideoIcon
          size={23}
          strokeWidth={2}
        />
      </button>

      {/* CONTENT */}

      <div className="min-w-0 pt-[1px]">
        <h4
          className="
            m-0
            text-[16px]
            font-semibold
            leading-[120%]
            text-[#242528]
          "
        >
          Module {number}: {title}
        </h4>

        <p
          className="
            m-0
            mt-[2px]
            max-w-[610px]
            text-[16px]
            leading-[160%]
            text-[#666]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   REVIEWS CONTENT
========================================================= */

function ReviewsContent() {
  return (
    <div className="mt-[27px]">
      {/* =================================================
          REVIEW HEADING
      ================================================== */}

      <h2
        className="
          m-0
          text-[20px]
          font-semibold
          text-[#242528]
        "
      >
        What Learners Are Saying
      </h2>

      <p
        className="
          m-0
          mt-[10px]
          max-w-[650px]
          text-[16px]
          leading-[160%]
          text-[#4F4F4F]
        "
      >
        Discover what our learners have to say about their
        experiences with Build Digital Assets: A Comprehensive
        Guide. Read reviews and ratings from individuals who have
        embarked on the transformative journey of mastering digital
        asset creation.
      </p>

      {/* =================================================
          RATING SUMMARY
      ================================================== */}

      <div
        className="
          mt-[16px]
          flex
          max-w-[723px]
          h-[226px]
          
          gap-[13px]
          rounded-[8px]
          border
          border-[#E2E2E2]
          p-[11px]
          items-center
          justify-center
        "
      >
        {/* BIG RATING */}

        <div
          className="
            flex
            h-[129px]
            w-[140px]
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-[8px]
            bg-[#D4FB20]
          "
        >
          <span
            className="
              text-[14px]
              font-medium
              text-[#242528]
            "
          >
            Ratings
          </span>

          <span
            className="
              mt-[1px]
              text-[36px]
              font-semibold
              leading-none
              text-[#242528]
            "
          >
            4.7
          </span>
        </div>

        {/* RATING BARS */}

        <div className="flex-1 space-y-[4px] pt-[2px]">
          <RatingBar
            stars={5}
            percentage={92}
            count="120"
          />

          <RatingBar
            stars={4}
            percentage={70}
            count="27"
          />

          <RatingBar
            stars={3}
            percentage={35}
            count="12"
          />

          <RatingBar
            stars={2}
            percentage={20}
            count="10"
          />

          <RatingBar
            stars={1}
            percentage={10}
            count="10"
          />
        </div>
      </div>

      {/* =================================================
          INDIVIDUAL REVIEWS
      ================================================== */}

      <div className="mt-[20px]">
        <h3
          className="
            m-0
            text-[20px]
            font-semibold
            text-[#242528]
          "
        >
          Individual Reviews:
        </h3>

        {/* FILTER BUTTONS */}

        <div className="mt-[12px] flex flex-wrap gap-[8px]">
          {["All ratings", "5", "4", "3", "2", "1"].map(
            (rating, index) => (
              <button
                key={rating}
                type="button"
                className={`
                  flex
                  w-[97px]
                  h-[43px]
                  items-center
                  justify-center
                  gap-[3px]
                  rounded-full
                  border
                  px-[8px]
                  text-[7px]
                  transition-all

                  ${
                    index === 0
                      ? "border-[#D4FB20] bg-[#D4FB20] text-[#242528]"
                      : "border-[#EEEEEE] bg-[#F5F5F6] text-[#4B4C53]"
                  }
                `}
              >
                {index === 0 ? (
                  rating
                ) : (
                  <>
                    <Star
                      size={25}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                    {rating}
                  </>
                )}
              </button>
            )
          )}
        </div>

        {/* REVIEW CARDS */}

        <div className="mt-[20px] space-y-[12px]">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              {...review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RATING BAR
========================================================= */

function RatingBar({
  stars,
  percentage,
  count,
}: {
  stars: number;
  percentage: number;
  count: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-[8px]
      "
    >
       <div
        className="
          h-[8px]
          flex-1
          overflow-hidden
          rounded-full
          bg-[#E5E5E5]
          gap-[16px]
           
        "
      >
        <div
          className="
            h-[8px]
            
            rounded-[24px]
            bg-[#D4FB20]
          "
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <div
        className="
          flex
          w-[47px]
          shrink-0
          items-center
          gap-[1px]
        "
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={25}
            fill={index < stars ? "currentColor" : "none"}
            strokeWidth={3}
            className={
              index < stars
                ? "text-[#4B4C53]"
                : "text-[#999]"
            }
          />
        ))}
      </div>

     

      <span
        className="
          w-[22px]
          text-right
          text-[16px]
          text-[#4B4C53]
        "
      >
        {count}
      </span>
    </div>
  );
}

/* =========================================================
   REVIEW CARD
========================================================= */

interface ReviewCardProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  time: string;
  text: string;
}

function ReviewCard({
  name,
  role,
  image,
  rating,
  time,
  text,
}: ReviewCardProps) {
  return (
    <article
      className="
        max-w-[723px]
        h-[276px]
        rounded-[24px]
        p-[40px]
        border
        border-[#E2E2E2]
        bg-white
        
        transition-all
        duration-200
        hover:border-[#D2D2D2]
        hover:shadow-[0_3px_12px_rgba(0,0,0,0.04)]
       
      "
    >
      {/* USER INFO */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
          {/* REVIEWER IMAGE */}

          <div
            className="
              relative
              h-[52px]
              w-[52px]
              shrink-0
              overflow-hidden
              rounded-full
              bg-[#EEEEEE]
            "
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="52px"
            />
          </div>

          {/* NAME */}

          <div>
            <h4
              className="
                m-0
                text-[18px]
                font-semibold
                leading-none
                text-[#242528]
              "
            >
              {name}
            </h4>

            <p
              className="
                m-0
                mt-[3px]
                text-[16px]
                leading-[24px]
                text-[#4B4C53]
              "
            >
              {role}
            </p>
          </div>
        </div>

        {/* DATE */}

        <span
          className="
            text-[6px]
            text-[#4F4F4F]
            text-[16px]
          "
        >
          {time}
        </span>
      </div>

      {/* STARS */}

      <div className="mt-[25px] flex items-center gap-[4px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={25}
            fill={
              index < rating
                ? "currentColor"
                : "none"
            }
            strokeWidth={1}
            className={
              index < rating
                ? "text-[#4B4C53]"
                : "text-[#AAA]"
            }
          />
        ))}
      </div>

      {/* REVIEW TEXT */}

      <p
        className="
          m-0
          mt-[20px]
          text-[16px]
          leading-[24px]
          text-[#4B4C53]
        "
      >
        {text}
      </p>
    </article>
  );
}

/* =========================================================
   PEEK IMAGE
========================================================= */

interface PeekImageProps {
  src: string;
  alt: string;
}

function PeekImage({
  src,
  alt,
}: PeekImageProps) {
  return (
    <div
      className="
        group
        relative
        w-[167px]
        h-[125px]
        aspect-[1.65/1]
        overflow-hidden
        rounded-[16px]
        bg-[#F1F1F1]
      "
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform
          duration-300
          group-hover:scale-[1.04]
        "
        sizes="
          (max-width: 639px) 50vw,
          160px
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/0
          opacity-0
          transition-all
          duration-200
          group-hover:bg-black/20
          group-hover:opacity-100
        "
      >
        <PlayCircle
          size={25}
          className="text-white drop-shadow-md"
        />
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR FEATURE
========================================================= */

function SidebarFeature({
  icon: Icon,
  text,
}: {
  icon: typeof GraduationCap;
  text: string;
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-[7px]
        text-[8px]
        text-[#555]
      "
    >
      <Icon
        size={11}
        strokeWidth={1.8}
        className="text-[#003BE2]"
      />

      <span>{text}</span>
    </div>
  );
}