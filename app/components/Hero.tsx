"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const [contentStyle, setContentStyle] = useState({
    transform: "translateY(0)",
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Start video at 0:00
    video.pause();
    video.currentTime = 0;

    const updateContentAnimation = () => {
      if (!video.duration) return;

      /*
       * ==========================================
       * HERO CONTENT ANIMATION
       * ==========================================
       */

      // Animation starts at 3 seconds
      const animationStart = 3;

      // Animation finishes at 4.5 seconds
      const animationEnd = 4.5;

      let progress =
        (video.currentTime - animationStart) /
        (animationEnd - animationStart);

      // Keep progress between 0 and 1
      progress = Math.min(
        Math.max(progress, 0),
        1
      );

      /*
       * Move the entire content upward.
       *
       * 0%   = normal position
       * 100% = completely above the screen
       */
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
       * VIDEO PLAYBACK
       * ==========================================
       */

      // Play while scrolling
      if (video.paused) {
        video.play().catch(() => {});
      }

      /*
       * ==========================================
       * UPDATE CONTENT
       * ==========================================
       */

      updateContentAnimation();

      /*
       * Pause when scrolling stops
       */
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        video.pause();
      }, 100);
    };

    /*
     * Update content whenever video time changes
     */
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
      className="relative h-[380vh] bg-[#d6c2aa]"
    >
      {/* Sticky Hero */}
      <div className="sticky top-0 z-0 h-screen overflow-hidden">

        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source
            src="/images/hero-bg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4">

          <div
            className="text-center text-white will-change-transform"
            style={{
              transform: contentStyle.transform,
            }}
          >

            {/* Hero Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl">
              Explore Heritage, Culture & <br />

              <span className="mt-2 block font-extrabold text-[#E2B889] drop-shadow-md">
                History Made Simple
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 drop-shadow-sm">
              Discover the rich history and cultural heritage
              of Oriental Mindoro.
            </p>

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
                bg-green-700
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

        </div>

      </div>
    </section>
  );
}