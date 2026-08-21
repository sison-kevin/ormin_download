"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Cinzel_Decorative,
  Inter,
  Noto_Sans_Hanunoo,
} from "next/font/google";

/* ==================================================
   FONTS
================================================== */

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const notoHanunoo = Noto_Sans_Hanunoo({
  subsets: ["hanunoo"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ==================================================
   IMAGES
================================================== */

const images = [
  "/images/how-app.png",
  "/images/how-explore.png",
  "/images/how-ar.png",
  "/images/how-game.png",
  "/images/how-reservation.png",
];

/* ==================================================
   IMAGE POSITIONS
================================================== */

const positions = [
  "left-[2%] top-[8%]",
  "left-[18%] top-[3%]",
  "left-[34%] top-[10%]",
  "right-[34%] top-[5%]",
  "right-[18%] top-[3%]",
  "right-[2%] top-[8%]",

  "left-[5%] bottom-[5%]",
  "left-[23%] bottom-[2%]",
  "left-[40%] bottom-[5%]",
  "right-[40%] bottom-[3%]",
  "right-[22%] bottom-[2%]",
  "right-[5%] bottom-[5%]",

  "left-[12%] top-[42%]",
  "right-[12%] top-[42%]",
];

/* ==================================================
   COMPONENT
================================================== */

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  /* ==================================================
     SCROLL ANIMATION
  ================================================== */

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const repeatedImages = [
    ...images,
    ...images,
    ...images,
  ];

  return (
    <section
      ref={sectionRef}
      id="download"
      className="
        w-full
        max-w-full
        overflow-hidden
        bg-[#F9F6F0]
      "
    >

      {/* ==================================================
          CTA BACKGROUND
      ================================================== */}

      <div
        className={`
          relative
          w-full
          overflow-hidden
          bg-gradient-to-br
          from-[#241519]
          via-[#2B1B1E]
          to-[#3A2024]
          py-20

          sm:py-24

          md:py-28

          transition-opacity
          duration-1000

          ${visible ? "opacity-100" : "opacity-0"}
        `}
      >

        {/* ==================================================
            BACKGROUND GLOW
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            -top-40
            h-80
            w-80
            rounded-full
            bg-[#5C1F2B]/30
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-40
            -right-40
            h-96
            w-96
            rounded-full
            bg-[#E2B889]/10
            blur-3xl
          "
        />

        {/* ==================================================
            DECORATIVE CIRCLE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[320px]
            w-[320px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#E2B889]/10

            sm:h-[440px]
            sm:w-[440px]

            md:h-[520px]
            md:w-[520px]
          "
        />

        {/* ==================================================
            PNG ILLUSTRATIONS
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
        >
          {repeatedImages.map((src, index) => (
            <div
              key={index}
              className={`
                absolute
                h-20
                w-20

                sm:h-24
                sm:w-24

                md:h-28
                md:w-28

                ${positions[index]}

                transition-all
                duration-1000

                ${
                  visible
                    ? "scale-100 opacity-50"
                    : "scale-75 opacity-0"
                }
              `}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className="
                  object-contain
                  drop-shadow-xl
                "
              />
            </div>
          ))}
        </div>

        {/* ==================================================
            MAIN CTA
        ================================================== */}

        <div
          className="
            relative
            z-20
            flex
            min-h-[420px]
            items-center
            justify-center
            px-5
            text-center

            sm:min-h-[460px]

            md:min-h-[500px]
          "
        >
          <div
            className={`
              max-w-2xl
              transition-all
              duration-1000

              ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >

            {/* ==================================================
                HANUNOO LABEL
            ================================================== */}

            <div className="mb-2">
              <span
                className={`
                  ${notoHanunoo.className}
                  text-[9px]
                  leading-none
                  text-[#BFA98F]

                  sm:text-[10px]

                  md:text-[11px]
                `}
              >
                ᜁᜂᜇ᜔ᜋᜒᜈ᜔ ᜑᜒᜇᜒᜆᜊᜒ ᜋᜓᜐᜒᜌᜓᜋ᜔
              </span>
            </div>

            {/* ==================================================
                HEADING
            ================================================== */}

            <h2
              className={`
                ${cinzelDecorative.className}
                mt-5
                text-2xl
                font-bold
                leading-tight
                tracking-tight
                text-[#F9F6F0]

                sm:text-3xl

                md:text-5xl

                lg:text-6xl
              `}
            >
              Ready to Explore
              <br />

              <span className="text-[#E2B889]">
                Oriental Mindoro?
              </span>
            </h2>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <p
              className={`
                ${inter.className}
                mx-auto
                mt-5
                max-w-xl
                text-xs
                leading-5
                text-[#D8CCC1]

                sm:text-sm
                sm:leading-6

                md:text-base
              `}
            >
              Discover history, culture, and heritage through
              an interactive digital museum experience.
            </p>

            {/* ==================================================
                DOWNLOAD BUTTON
            ================================================== */}

            <div className="mt-7">
              <button
                type="button"
                className={`
                  ${inter.className}
                  group
                  relative
                  inline-flex
                  items-center
                  gap-3
                  overflow-hidden
                  rounded-full
                  bg-[#E2B889]
                  px-7
                  py-3.5
                  text-xs
                  font-semibold
                  text-[#2B1B1E]
                  shadow-[0_10px_30px_rgba(226,184,137,0.25)]
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#EBD0A8]
                  hover:shadow-[0_15px_40px_rgba(226,184,137,0.35)]

                  active:translate-y-0
                  active:scale-95
                  active:bg-[#D4A36F]

                  sm:px-8
                  sm:py-4
                  sm:text-sm
                `}
              >

                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/40
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                {/* Download Icon */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    relative
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                >
                  <path d="M12 3v12" />
                  <path d="m7 10 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>

                {/* Text */}

                <span className="relative">
                  Download App
                </span>
              </button>
            </div>

            {/* ==================================================
                FEATURES
            ================================================== */}

            <div
              className={`
                ${inter.className}
                mt-5
                flex
                flex-wrap
                justify-center
                gap-x-3
                gap-y-1
                text-[10px]
                text-[#BFAFA5]

                sm:text-xs
              `}
            >
              <span>AR Experience</span>
              <span className="text-[#E2B889]/50">•</span>
              <span>Navigation</span>
              <span className="text-[#E2B889]/50">•</span>
              <span>Games</span>
              <span className="text-[#E2B889]/50">•</span>
              <span>Reservations</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}