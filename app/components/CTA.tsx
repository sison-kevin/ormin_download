"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  "/images/how-app.png",
  "/images/how-explore.png",
  "/images/how-ar.png",
  "/images/how-game.png",
  "/images/how-reservation.png",
];

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

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      className="w-full max-w-full overflow-hidden bg-white"
    >
      <div
        className={
        "relative w-full overflow-hidden " +
          "bg-gradient-to-br from-green-900 via-green-800 to-green-700 " +
          "py-20 sm:py-24 md:py-28 " +
          "transition-opacity duration-1000 " +
          (visible ? "opacity-100" : "opacity-0")
        }
      >
        {/* Background glow */}

        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#E2B889]/10 blur-3xl" />

        {/* Decorative circle */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[440px] sm:w-[440px] md:h-[520px] md:w-[520px]" />

        {/* PNG illustrations */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {repeatedImages.map((src, index) => (
            <div
              key={index}
              className={
                "absolute h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 " +
                positions[index] +
                " transition-all duration-1000 " +
                (visible
                  ? "scale-100 opacity-70"
                  : "scale-75 opacity-0")
              }
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className="object-contain drop-shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Main CTA */}

        <div className="relative z-20 flex min-h-[420px] items-center justify-center px-5 text-center sm:min-h-[460px] md:min-h-[500px]">
          <div
            className={
              "max-w-2xl transition-all duration-1000 " +
              (visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0")
            }
          >
            {/* Label */}

            <span className="inline-flex rounded-full border border-[#E2B889]/40 bg-[#E2B889]/10 px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#E2B889]">
              EORMIN HERITAGE MUSEUM
            </span>

            {/* Heading */}

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Explore
              <br />

              <span className="text-[#E2B889]">
                Oriental Mindoro?
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              Discover history, culture, and heritage through
              an interactive digital museum experience.
            </p>

            {/* Button */}

            <div className="mt-6">
                {/* Download Button */}
           <button
            className="
                group
                relative
                mt-8
                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-green-500
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                shadow-[0_10px_30px_rgba(22,101,52,0.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-green-600
                hover:shadow-[0_15px_40px_rgba(22,101,52,0.45)]
                active:translate-y-0
                active:scale-95
            "
            >
            {/* Shine animation */}
            <span
                className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
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

            {/* Feature list */}

            <div className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-white/50">
              <span>AR Experience</span>
              <span>•</span>
              <span>Navigation</span>
              <span>•</span>
              <span>Games</span>
              <span>•</span>
              <span>Reservations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}