import Image from "next/image";

const features = [
  {
    id: 1,
    src: "/images/features/feature1.png",
    alt: "Feature 1",
  },
  {
    id: 2,
    src: "/images/features/feature2.png",
    alt: "Feature 2",
  },
  {
    id: 3,
    src: "/images/features/feature3.png",
    alt: "Feature 3",
  },
  {
    id: 4,
    src: "/images/features/feature4.png",
    alt: "Feature 4",
  },
  {
    id: 5,
    src: "/images/features/feature5.png",
    alt: "Feature 5",
  },
];

export default function FeatureLogos() {
  return (
    <section className="w-full bg-[#F5F5F6]">
      <div
        className="
          mx-auto
          flex
          min-h-[150px]
          w-full
          max-w-[1365px]
          items-center
          px-5
          py-8

          sm:px-8
          sm:py-9

          md:min-h-[155px]
          md:px-10

          lg:px-[70px]
          lg:py-0
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-2
            items-center
            justify-items-center
            gap-x-6
            gap-y-8

            sm:grid-cols-3
            sm:gap-x-8
            sm:gap-y-9

            md:grid-cols-3
            md:gap-x-10

            lg:grid-cols-5
            lg:gap-0
          "
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
                flex
                w-full
                items-center
                justify-center
              "
            >
              <Image
                src={feature.src}
                alt={feature.alt}
                width={190}
                height={60}
                priority
                className="
                  h-auto
                  w-[135px]
                  max-w-full
                  object-contain

                  sm:w-[150px]

                  md:w-[165px]

                  lg:w-[185px]
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}