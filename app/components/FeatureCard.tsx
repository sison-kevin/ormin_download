"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Cinzel_Decorative,
  Inter,
  Noto_Sans_Hanunoo,
} from "next/font/google";

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

type FeatureCardProps = {
  number: string;
  title: string;
  hanunoo: string;
  description: string;
  image: string;
  buttonText: string;
  reverse?: boolean;
};

export default function FeatureCard({
  number,
  title,
  hanunoo,
  description,
  image,
  buttonText,
  reverse = false,
}: FeatureCardProps) {
  const featureRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = featureRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleFeatureClick = () => {
    const downloadSection = document.getElementById("download");

    if (!downloadSection) return;

    downloadSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <article
      ref={featureRef}
      className={`
        ${inter.className}
        grid
        items-center
        gap-10
        md:grid-cols-2
        md:gap-16
      `}
    >
      {/* IMAGE */}

      <div
        className={`
          relative
          aspect-[4/3]
          overflow-hidden
          rounded-[2rem]
          bg-[#F3EBDD]

          transition-all
          duration-1000
          ease-out

          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : reverse
                ? "translate-x-20 opacity-0"
                : "-translate-x-20 opacity-0"
          }

          ${reverse ? "md:order-2" : "md:order-1"}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover
            transition
            duration-700
            hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-black/5
            transition
            duration-500
            hover:bg-black/0
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className={`
          relative

          transition-all
          duration-1000
          ease-out
          delay-150

          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : reverse
                ? "-translate-x-20 opacity-0"
                : "translate-x-20 opacity-0"
          }

          ${reverse ? "md:order-1" : "md:order-2"}
        `}
      >
        {/* NUMBER */}

        <span
          className="
            text-sm
            font-semibold
            tracking-[0.25em]
            text-[#8A7565]
          "
        >
          {number}
        </span>

        {/* FEATURE TITLE */}

        <h3
          className={`
            ${cinzelDecorative.className}
            mt-3
            text-2xl
            font-bold
            leading-tight
            tracking-tight
            text-[#3A2024]

            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          `}
        >
          {title}
        </h3>

        {/* HANUNOO TRANSLATION */}

        <div
          className="
            mt-2
            flex
            items-center
            gap-3
          "
        >
          {/* Small decorative line */}

          <span
            className="
              h-px
              w-8
              bg-[#B78A4A]/50
            "
          />

          <span
            className={`
              ${notoHanunoo.className}
              text-[8px]
              leading-none
              text-[#8A7565]

              sm:text-[9px]
              md:text-[10px]
            `}
          >
            {hanunoo}
          </span>

          {/* Small decorative line */}

          <span
            className="
              h-px
              w-8
              bg-[#B78A4A]/50
            "
          />
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            mt-5
            max-w-lg
            text-sm
            leading-6
            text-[#6F6258]

            sm:text-base
            sm:leading-7

            md:text-lg
            md:leading-7
          "
        >
          {description}
        </p>

        {/* BUTTON */}

        <button
          type="button"
          onClick={handleFeatureClick}
          className="
            group
            mt-8
            inline-flex
            cursor-pointer
            items-center
            gap-2
            rounded-full
            bg-[#1F4D3A]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-[0_8px_20px_rgba(31,77,58,0.2)]

            transition-all
            duration-200

            hover:-translate-y-1
            hover:gap-3
            hover:bg-[#285F48]
            hover:shadow-[0_12px_25px_rgba(31,77,58,0.3)]

            active:translate-y-0
            active:scale-95
            active:bg-[#163A2C]
          "
        >
          {buttonText}

          <span
            aria-hidden="true"
            className="
              transition-transform
              duration-200
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </button>
      </div>
    </article>
  );
}