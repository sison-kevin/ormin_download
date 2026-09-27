"use client";

import {
  Cinzel_Decorative,
  Inter,
  Noto_Sans_Hanunoo,
} from "next/font/google";
import { useEffect, useRef, useState } from "react";

/* ==================================================
   FONTS
================================================== */

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
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
   HERO COMPONENT
================================================== */

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [contentStyle, setContentStyle] = useState({
    transform: "translateY(0)",
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Always start video at 0:00
    video.pause();
    video.currentTime = 0;

    const updateContentAnimation = () => {
      if (!video.duration) return;

      /*
       * ==========================================
       * HERO CONTENT ANIMATION
       * ==========================================
       */

      const animationStart = 3;
      const animationEnd = 4.5;

      let progress =
        (video.currentTime - animationStart) /
        (animationEnd - animationStart);

      progress = Math.min(Math.max(progress, 0), 1);

      const translateY = progress * -100;

      setContentStyle({
        transform: `translateY(${translateY}vh)`,
      });
    };

    const handleScroll = () => {
      const hero = document.getElementById("home");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const isHeroVisible =
        rect.top <= window.innerHeight &&
        rect.bottom >= 0;

      if (!isHeroVisible) return;

      /*
       * ==========================================
       * PLAY VIDEO WHILE SCROLLING
       * ==========================================
       */

      if (video.paused) {
        video.play().catch(() => {});
      }

      updateContentAnimation();

      /*
       * ==========================================
       * PAUSE WHEN SCROLLING STOPS
       * ==========================================
       */

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        video.pause();
      }, 100);
    };

    video.addEventListener(
      "timeupdate",
      updateContentAnimation
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      video.removeEventListener(
        "timeupdate",
        updateContentAnimation
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-[400vh] bg-[#2B1B1E]"
    >
      {/* ==================================================
          STICKY HERO
          ================================================== */}

      <div className="sticky top-0 z-0 h-screen overflow-hidden">

        {/* ==================================================
            BACKGROUND VIDEO
            ================================================== */}

        <video
          ref={videoRef}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          muted
          playsInline
          preload="auto"
        >
          <source
            src="/images/hero-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* ==================================================
            DARK OVERLAY
            ================================================== */}

        <div
          className="
            absolute
            inset-0
            bg-black/40
          "
        />

        {/* ==================================================
            WARM HERITAGE TINT
            ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#3A2024]/20
          "
        />

        {/* ==================================================
            HERO CONTENT
            ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            sm:px-6
          "
        >
          <div
            className="
              w-full
              max-w-5xl
              text-center
              text-white
              will-change-transform
            "
            style={{
              transform: contentStyle.transform,
            }}
          >

            {/* ==================================================
                LABEL
                ================================================== */}

            <div className="mb-0 leading-none">
              <span
                className={`
                  ${notoHanunoo.className}
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2.5
                  text-sm
                  text-[#E2B889]

                  sm:text-base
                  md:text-lg
                  lg:text-xl
                  xl:text-xl
                `}
              >
                ᜠᜳᜍᜬᜨᜲᜈ᜔ ᜑᜒᜍᜒᜆᜊᜒ ᜋᜒᜐᜒᜌᜓᜋ᜔
              </span>
            </div>

            {/* ==================================================
                HERO TITLE
                ================================================== */}

            <h1
              className={`
                ${cinzelDecorative.className}
                text-2xl
                font-bold
                leading-[1.15]
                tracking-normal
                text-[#F3EBDD]
                drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]

                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                xl:text-7xl
              `}
            >
              Explore Heritage,
              <br />

              <span
                className="
                  text-[#E2B889]
                  drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]
                "
              >
                Culture & History
              </span>

              <br />

              <span className="text-[#F3EBDD]">
                Made Simple
              </span>
            </h1>

            {/* ==================================================
                DESCRIPTION
                ================================================== */}

            <p
              className={`
                ${inter.className}
                mx-auto
                mt-4
                max-w-xl
                text-[10px]
                leading-4
                text-[#F3EBDD]/85
                drop-shadow-md

                sm:mt-5
                sm:text-xs
                sm:leading-5

                md:mt-5
                md:text-sm
                md:leading-6

                lg:text-base
                lg:leading-6

                xl:text-base
                xl:leading-6
              `}
            >
              Discover the rich history and cultural heritage
              of Oriental Mindoro through an interactive
              digital museum experience.
            </p>

            {/* ==================================================
                DOWNLOAD BUTTON
                ================================================== */}

            <a
              href="/eormin-heritage.apk"
              download="eormin-heritage.apk"
              className={`
                ${inter.className}
                group
                relative

                mt-16
                sm:mt-[72px]
                md:mt-20
                lg:mt-14
                xl:mt-16

                inline-flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                bg-[#E2B889]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-[#2B1B1E]
                shadow-[0_10px_30px_rgba(226,184,137,0.25)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:bg-[#EBD0A8]
                hover:shadow-[0_15px_40px_rgba(226,184,137,0.35)]
                active:translate-y-0
                active:scale-95
              `}
            >
              {/* ==================================================
                  SHINE EFFECT
                  ================================================== */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              {/* ==================================================
                  DOWNLOAD ICON
                  ================================================== */}

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

              {/* ==================================================
                  BUTTON TEXT
                  ================================================== */}

              <span className="relative">
                Download App
              </span>
            </a>

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
                text-xs
                text-[#F3EBDD]/60
              `}
            >
              <span>AR Experience</span>
              <span>•</span>
              <span>Games</span>
              <span>•</span>
              <span>Reservations</span>
            </div>

          </div>
        </div>

        {/* ==================================================
            BOTTOM GRADIENT
            ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-32
            bg-gradient-to-t
            from-[#2B1B1E]
            to-transparent
          "
        />

      </div>
    </section>
  );
}