"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      const heroActive =
        rect.top <= 0 &&
        rect.bottom > 0;

      setShowNavbar(heroActive);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ==========================================
   * SMOOTH SCROLL
   * ==========================================
   */

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const navbarOffset = 20;

    const sectionPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });

    // Close mobile menu
    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed left-1/2 top-5 z-[9999]
        w-[92%] max-w-6xl
        -translate-x-1/2
        transition-all duration-300
        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 pointer-events-none opacity-0"
        }
      `}
    >
      {/* =========================
          GLASS NAVBAR
      ========================= */}

      <div
        className="
          rounded-full
          border border-white/20
          bg-white/10
          px-5 py-3
          shadow-lg
          backdrop-blur-xl
        "
      >
        <div className="flex items-center justify-between">

          {/* =========================
              LOGO
          ========================= */}

          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="
              flex items-center gap-2
              cursor-pointer
              transition-all duration-200
              hover:opacity-90
              active:scale-95
            "
          >
            <div
              className="
                flex h-9 w-9
                items-center justify-center
                rounded-full
                bg-green-700
                text-sm font-bold
                text-white
                shadow-md
                transition-all duration-200
                active:scale-90
              "
            >
              eO
            </div>

            <span className="text-sm font-semibold sm:text-base">
                <span className="text-emerald-500">e</span>
                <span className="text-white">Ormin</span>{" "}
                <span className="text-[#C49A6C]">Heritage</span>
            </span>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}

          <div
            className="
              hidden
              items-center
              gap-7
              md:flex
            "
          >

            {/* HOME */}

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="
                cursor-pointer
                rounded-full
                px-3 py-2
                text-sm
                text-white/90
                transition-all duration-200
                hover:bg-white/10
                hover:text-white
                active:scale-95
                active:bg-white/20
              "
            >
              Home
            </button>

            {/* FEATURES */}

            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className="
                cursor-pointer
                rounded-full
                px-3 py-2
                text-sm
                text-white/90
                transition-all duration-200
                hover:bg-white/10
                hover:text-white
                active:scale-95
                active:bg-white/20
              "
            >
              Features
            </button>

            {/* HOW IT WORKS */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("how-it-works")
              }
              className="
                cursor-pointer
                rounded-full
                px-3 py-2
                text-sm
                text-white/90
                transition-all duration-200
                hover:bg-white/10
                hover:text-white
                active:scale-95
                active:bg-white/20
              "
            >
              How It Works
            </button>

            {/* EXPLORE */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("explore")
              }
              className="
                cursor-pointer
                rounded-full
                px-3 py-2
                text-sm
                text-white/90
                transition-all duration-200
                hover:bg-white/10
                hover:text-white
                active:scale-95
                active:bg-white/20
              "
            >
              Explore
            </button>

          </div>

          {/* =========================
              GET THE APP
          ========================= */}

          <button
            type="button"
            onClick={() =>
              scrollToSection("download")
            }
            className="
              hidden
              cursor-pointer
              rounded-full
              bg-white/90
              px-5 py-2.5
              text-sm font-medium
              text-green-900
              shadow-md
              transition-all
              duration-200
              hover:scale-105
              hover:bg-white
              hover:shadow-lg
              active:scale-95
              active:bg-green-50
              md:block
            "
          >
            Get The App
          </button>

          {/* =========================
              MOBILE MENU BUTTON
          ========================= */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              cursor-pointer
              rounded-full
              p-2
              text-white
              transition-all
              duration-200
              hover:bg-white/10
              active:scale-90
              active:bg-white/20
              md:hidden
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

        {/* =========================
            MOBILE MENU
        ========================= */}

        {menuOpen && (
          <div
            className="
              mt-4
              flex flex-col
              gap-2
              border-t
              border-white/20
              pt-4
              md:hidden
            "
          >

            {/* HOME */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("home")
              }
              className="
                cursor-pointer
                rounded-xl
                px-3 py-2
                text-left
                text-sm
                text-white
                transition-all duration-200
                hover:bg-white/10
                hover:text-green-200
                active:scale-[0.98]
                active:bg-white/20
              "
            >
              Home
            </button>

            {/* FEATURES */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("features")
              }
              className="
                cursor-pointer
                rounded-xl
                px-3 py-2
                text-left
                text-sm
                text-white
                transition-all duration-200
                hover:bg-white/10
                hover:text-green-200
                active:scale-[0.98]
                active:bg-white/20
              "
            >
              Features
            </button>

            {/* HOW IT WORKS */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("how-it-works")
              }
              className="
                cursor-pointer
                rounded-xl
                px-3 py-2
                text-left
                text-sm
                text-white
                transition-all duration-200
                hover:bg-white/10
                hover:text-green-200
                active:scale-[0.98]
                active:bg-white/20
              "
            >
              How It Works
            </button>

            {/* EXPLORE */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("explore")
              }
              className="
                cursor-pointer
                rounded-xl
                px-3 py-2
                text-left
                text-sm
                text-white
                transition-all duration-200
                hover:bg-white/10
                hover:text-green-200
                active:scale-[0.98]
                active:bg-white/20
              "
            >
              Explore
            </button>

            {/* GET THE APP */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("download")
              }
              className="
                mt-2
                cursor-pointer
                rounded-full
                bg-white/90
                px-5 py-3
                text-center
                text-sm font-medium
                text-green-900
                shadow-md
                transition-all
                duration-200
                hover:scale-[1.02]
                hover:bg-white
                hover:shadow-lg
                active:scale-95
                active:bg-green-50
              "
            >
              Get The App
            </button>

          </div>
        )}

      </div>
    </nav>
  );
}