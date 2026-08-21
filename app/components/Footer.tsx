"use client";

import Image from "next/image";
import {
  Cinzel_Decorative,
  Inter,
} from "next/font/google";

/* ==================================================
   FONTS
================================================== */

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`
        ${inter.className}
        border-t
        border-[#3A2024]/10
        bg-[#F3EBDD]
        px-6
        py-12

        md:py-16
      `}
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            MAIN FOOTER ROW
        ========================= */}

        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

          {/* =========================
              BRAND
          ========================= */}

          <div className="max-w-sm">

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className={`
                ${cinzelDecorative.className}
                cursor-pointer
                text-left
                text-lg
                font-bold
                tracking-tight
                transition-all
                duration-300
                hover:opacity-80
                active:scale-95
              `}
            >
              {/* KEEP ORIGINAL e COLOR */}

              <span className="text-emerald-700">
                e
              </span>

              {/* KEEP ORIGINAL Ormin COLOR */}

              <span className="text-gray-900">
                Ormin
              </span>{" "}

              {/* KEEP ORIGINAL HERITAGE COLOR */}

              <span className="text-[#a3704c]">
                Heritage
              </span>
            </button>

            <p
              className="
                mt-3
                text-sm
                leading-relaxed
                text-[#6F6258]
              "
            >
              Exploring heritage through technology.
            </p>

          </div>

          {/* =========================
              NAVIGATION
          ========================= */}

          <nav
            className="
              flex
              flex-wrap
              items-center
              gap-x-8
              gap-y-3
              text-sm
              font-medium
              text-[#5C1F2B]
            "
          >

            {/* Home */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#8A7565]
                active:scale-95
              "
            >
              Home
            </button>

            {/* Features */}

            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#8A7565]
                active:scale-95
              "
            >
              Features
            </button>

            {/* How It Works */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("how-it-works")
              }
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#8A7565]
                active:scale-95
              "
            >
              How It Works
            </button>

            {/* Explore */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("explore")
              }
              className="
                cursor-pointer
                transition-all
                duration-300
                hover:text-[#8A7565]
                active:scale-95
              "
            >
              Explore
            </button>

          </nav>

        </div>

        {/* Logos */}

        {/* Logos */}

        <div className="mt-5 flex items-center gap-.5">
          <Image
            src="/images/logo1.png"
            alt="Logo 1"
            width={55}
            height={55}
            className="h-12 w-auto object-contain"
          />

          <Image
            src="/images/logo2.png"
            alt="Logo 2"
            width={65}
            height={65}
            className="h-17 w-auto object-contain"
          />

          <Image
            src="/images/logo3.png"
            alt="Logo 3"
            width={65}
            height={65}
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* =========================
            COPYRIGHT
        ========================= */}

        <div
          className="
            mt-10
            border-t
            border-[#3A2024]/10
            pt-8
            text-xs
            font-normal
            tracking-wide
            text-[#8A7565]
          "
        >
          © 2026 eOrmin Heritage. All rights reserved.
        </div>

      </div>
    </footer>
  );
}