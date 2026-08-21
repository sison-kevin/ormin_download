"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HowItWorksStepProps = {
  number: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function HowItWorksStep({
  number,
  title,
  description,
  image,
  reverse = false,
}: HowItWorksStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={stepRef} className="relative py-8 md:py-12">
      {/* =========================
          DESKTOP TIMELINE (md and up)
      ========================= */}
      <div className="hidden md:grid min-h-[420px] grid-cols-[1fr_60px_1fr] items-center">
        {/* Left Side */}
        <div>
          {!reverse && (
            <div
              className={`pr-8 text-right transition-all duration-1000 ease-out ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
              }`}
            >
              <span className="text-sm font-semibold tracking-[0.25em] text-green-700">
                {number}
              </span>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                {title}
              </h3>
              <p className="ml-auto mt-4 max-w-md text-base leading-7 text-gray-600">
                {description}
              </p>
              <div className="relative ml-auto mt-7 h-52 w-full max-w-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="40vw"
                  className="object-contain transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>

        {/* Center Line & Badge */}
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute top-0 h-full w-px bg-gray-200" />
          <div
            className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-green-800 text-sm font-bold text-white shadow-md transition-all duration-700 ${
              isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            {number}
          </div>
        </div>

        {/* Right Side */}
        <div>
          {reverse && (
            <div
              className={`pl-8 text-left transition-all duration-1000 ease-out delay-150 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <span className="text-sm font-semibold tracking-[0.25em] text-green-700">
                {number}
              </span>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
                {title}
              </h3>
              <p className="mt-4 max-w-md text-base leading-7 text-gray-600">
                {description}
              </p>
              <div className="relative mt-7 h-52 w-full max-w-md">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="40vw"
                  className="object-contain transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =========================
          MOBILE LAYOUT (below md)
      ========================= */}
      <div
        className={`flex flex-col items-center text-center md:hidden transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5c1f2b] text-xs font-bold text-white shadow-md">
          {number}
        </div>
        <h3 className="mt-3 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600 max-w-sm">{description}</p>
        <div className="relative mt-5 h-48 w-full max-w-xs">
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