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
   PROPS
================================================== */

type HowItWorksStepProps = {
  number: string;
  title: string;
  hanunoo: string;
  description: string;
  image: string;
  reverse?: boolean;
};

/* ==================================================
   COMPONENT
================================================== */

export default function HowItWorksStep({
  number,
  title,
  hanunoo,
  description,
  image,
  reverse = false,
}: HowItWorksStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* ==================================================
     SCROLL ANIMATION
  ================================================== */

  useEffect(() => {
    const element = stepRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  /* ==================================================
     ANIMATION CLASSES
  ================================================== */

  const leftAnimation = isVisible
    ? "translate-x-0 opacity-100"
    : "-translate-x-16 opacity-0";

  const rightAnimation = isVisible
    ? "translate-x-0 opacity-100"
    : "translate-x-16 opacity-0";

  const mobileAnimation = isVisible
    ? "translate-y-0 opacity-100"
    : "translate-y-10 opacity-0";

  return (
    <div
      ref={stepRef}
      className="relative py-8 md:py-12"
    >
      {/* ==================================================
          DESKTOP TIMELINE
      ================================================== */}

      <div className="hidden min-h-[420px] grid-cols-[1fr_60px_1fr] items-center md:grid">

        {/* ==================================================
            LEFT SIDE
        ================================================== */}

        <div>
          {!reverse && (
            <div
              className={`
                ${inter.className}
                pr-8
                text-right
                transition-all
                duration-1000
                ease-out
                ${leftAnimation}
              `}
            >
              {/* Number */}

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.25em]
                  text-[#5C1F2B]
                "
              >
                {number}
              </span>

              {/* Title */}

              <h3
                className={`
                  ${cinzelDecorative.className}
                  mt-3
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#2B1B1E]
                  lg:text-4xl
                `}
              >
                {title}
              </h3>

              {/* Hanunoo */}

              <div className="mt-2 flex items-center justify-end gap-2">
                {/* Left Line */}

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-8
                    bg-[#B78A4A]/50
                    lg:w-12
                  "
                />

                {/* Hanunoo Text */}

                <span
                  className={`
                    ${notoHanunoo.className}
                    text-[9px]
                    leading-none
                    text-[#8A7565]
                    lg:text-[10px]
                  `}
                >
                  {hanunoo}
                </span>

                {/* Right Line */}

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-8
                    bg-[#B78A4A]/50
                    lg:w-12
                  "
                />
              </div>

              {/* Description */}

              <p
                className="
                  ml-auto
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-[#5F5148]
                  lg:text-base
                  lg:leading-7
                "
              >
                {description}
              </p>

              {/* Image */}

              <div className="relative ml-auto mt-7 h-52 w-full max-w-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="40vw"
                  className="
                    object-contain
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          )}
        </div>

        {/* ==================================================
            CENTER TIMELINE
        ================================================== */}

        <div className="relative flex h-full items-center justify-center">

          {/* Vertical Line */}

          <div
            className="
              absolute
              top-0
              h-full
              w-px
              bg-[#5C1F2B]/20
            "
          />

          {/* Number Circle */}

          <div
            className={`
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border-4
              border-[#EDE5D8]
              bg-[#3A2024]
              text-sm
              font-bold
              text-[#E2B889]
              shadow-md
              transition-all
              duration-700
              ${
                isVisible
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
              }
            `}
          >
            {number}
          </div>
        </div>

        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div>
          {reverse && (
            <div
              className={`
                ${inter.className}
                pl-8
                text-left
                transition-all
                delay-150
                duration-1000
                ease-out
                ${rightAnimation}
              `}
            >
              {/* Number */}

              <span
                className="
                  text-xs
                  font-semibold
                  tracking-[0.25em]
                  text-[#5C1F2B]
                "
              >
                {number}
              </span>

              {/* Title */}

              <h3
                className={`
                  ${cinzelDecorative.className}
                  mt-3
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#2B1B1E]
                  lg:text-4xl
                `}
              >
                {title}
              </h3>

              {/* Hanunoo */}

              <div className="mt-2 flex items-center justify-start gap-2">
                {/* Left Line */}

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-8
                    bg-[#B78A4A]/50
                    lg:w-12
                  "
                />

                {/* Hanunoo Text */}

                <span
                  className={`
                    ${notoHanunoo.className}
                    text-[9px]
                    leading-none
                    text-[#8A7565]
                    lg:text-[10px]
                  `}
                >
                  {hanunoo}
                </span>

                {/* Right Line */}

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-8
                    bg-[#B78A4A]/50
                    lg:w-12
                  "
                />
              </div>

              {/* Description */}

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-[#5F5148]
                  lg:text-base
                  lg:leading-7
                "
              >
                {description}
              </p>

              {/* Image */}

              <div className="relative mt-7 h-52 w-full max-w-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="40vw"
                  className="
                    object-contain
                    transition
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ==================================================
          MOBILE LAYOUT
      ================================================== */}

      <div
        className={`
          ${inter.className}
          flex
          flex-col
          items-center
          text-center
          transition-all
          duration-1000
          ease-out
          md:hidden
          ${mobileAnimation}
        `}
      >
        {/* Number */}

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#3A2024]
            text-xs
            font-bold
            text-[#E2B889]
            shadow-md
          "
        >
          {number}
        </div>

        {/* Title */}

        <h3
          className={`
            ${cinzelDecorative.className}
            mt-3
            text-xl
            font-bold
            tracking-tight
            text-[#2B1B1E]
            sm:text-2xl
          `}
        >
          {title}
        </h3>

        {/* Hanunoo */}

        <div className="mt-2 flex w-full items-center justify-center gap-2 px-4">
          {/* Left Line */}

          <span
            aria-hidden="true"
            className="
              h-px
              w-6
              bg-[#B78A4A]/50
              sm:w-8
            "
          />

          {/* Hanunoo Text */}

          <span
            className={`
              ${notoHanunoo.className}
              shrink-0
              text-[8px]
              leading-none
              text-[#8A7565]
              sm:text-[9px]
            `}
          >
            {hanunoo}
          </span>

          {/* Right Line */}

          <span
            aria-hidden="true"
            className="
              h-px
              w-6
              bg-[#B78A4A]/50
              sm:w-8
            "
          />
        </div>

        {/* Description */}

        <p
          className="
            mt-3
            max-w-sm
            text-xs
            leading-5
            text-[#5F5148]
            sm:text-sm
            sm:leading-6
          "
        >
          {description}
        </p>

        {/* Image */}

        <div
          className="
            relative
            mt-5
            h-44
            w-full
            max-w-xs
            sm:h-48
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}