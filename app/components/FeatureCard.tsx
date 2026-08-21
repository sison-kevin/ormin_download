"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  reverse?: boolean;
};

export default function FeatureCard({
  number,
  title,
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

  // Scroll to CTA every time the button is clicked
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
      className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
    >
      {/* ==================================================
          IMAGE
      ================================================== */}

      <div
        className={`
          relative aspect-[4/3]
          overflow-hidden rounded-[2rem]
          bg-gray-100

          transition-all duration-1000 ease-out

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
            transition duration-700
            hover:scale-105
          "
        />

        {/* Image Overlay */}

        <div
          className="
            absolute inset-0
            bg-black/5
            transition duration-500
            hover:bg-black/0
          "
        />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div
        className={`
          relative

          transition-all duration-1000
          ease-out delay-150

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
        {/* Number */}

        <span
          className="
            text-sm
            font-semibold
            tracking-[0.25em]
            text-green-700
          "
        >
          {number}
        </span>

        {/* Title */}

        <h3
          className="
            mt-4
            text-3xl
            font-bold
            tracking-tight
            text-gray-900
            md:text-5xl
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-5
            max-w-lg
            text-base
            leading-7
            text-gray-600
            md:text-lg
          "
        >
          {description}
        </p>

        {/* ==================================================
            FEATURE BUTTON
        ================================================== */}

        <button
            type="button"
            onClick={handleFeatureClick}
            className="
                group
                mt-7
                inline-flex
                cursor-pointer
                items-center
                gap-2
                rounded-full
                bg-green-800
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm

                transition-all
                duration-200
                ease-out

                hover:-translate-y-1
                hover:gap-3
                hover:bg-green-900
                hover:shadow-lg

                active:translate-y-0
                active:scale-95
                active:bg-green-950
                active:shadow-inner
            "
            >
            {buttonText}

            <span
                aria-hidden="true"
                className="
                transition-transform
                duration-200
                group-hover:translate-x-1
                group-active:translate-x-0
                "
            >
                →
            </span>
            </button>
      </div>
    </article>
  );
}