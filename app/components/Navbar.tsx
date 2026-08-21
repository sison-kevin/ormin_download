"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  /*
   * ==========================================
   * SHOW / HIDE NAVBAR BASED ON HERO
   * ==========================================
   */

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");

      if (!hero) return;

      const rect = hero.getBoundingClientRect();

      /*
       * The navbar is visible while the Hero
       * section is still visible.
       *
       * Once the Hero completely leaves the
       * viewport, hide the navbar.
       */

      const heroIsVisible =
        rect.top < window.innerHeight &&
        rect.bottom > 0;

      setShowNavbar(heroIsVisible);

      /*
       * Close mobile menu when leaving Hero.
       */

      if (!heroIsVisible) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Run once when the page loads
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        left-1/2
        top-4
        z-[9999]

        w-[calc(100%-1rem)]
        max-w-5xl

        -translate-x-1/2

        transition-all
        duration-500
        ease-out

        ${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 pointer-events-none opacity-0"
        }
      `}
    >
      {/* ==================================================
          GLASS NAVBAR
      ================================================== */}

      <div
        className="
          relative

          flex
          items-center
          justify-between

          rounded-full

          border
          border-white/20

          bg-white/10

          px-4
          py-2.5

          shadow-[0_8px_32px_rgba(0,0,0,0.18)]

          backdrop-blur-xl
          backdrop-saturate-150

          sm:px-5
        "
      >
        {/* ==================================================
            BRAND
        ================================================== */}

        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="
            flex
            shrink-0
            items-center
            gap-2

            transition
            duration-200

            hover:opacity-90
          "
        >
          {/* Logo */}

          <div
            className="
              flex
              h-8
              w-8
              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-emerald-600

              text-xs
              font-bold
              text-white

              shadow-md
            "
          >
            eO
          </div>

          {/* Brand Name */}

          <span
            className="
              text-sm
              font-bold
              tracking-tight
              text-white

              sm:text-base
            "
          >
            <span className="text-emerald-400">
              e
            </span>

            <span className="text-white">
              Ormin
            </span>{" "}

            <span className="text-[#d6c2aa]">
              Heritage
            </span>
          </span>
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="
            hidden

            items-center
            gap-5

            text-xs
            font-medium
            text-white/80

            md:flex
            lg:gap-7
            lg:text-sm
          "
        >
          {/* Home */}

          <Link
            href="#home"
            className="
              rounded-full
              px-2
              py-1.5

              transition
              duration-200

              hover:bg-white/10
              hover:text-white
            "
          >
            Home
          </Link>

          {/* Features */}

          <Link
            href="#features"
            className="
              rounded-full
              px-2
              py-1.5

              transition
              duration-200

              hover:bg-white/10
              hover:text-white
            "
          >
            Features
          </Link>

          {/* How It Works */}

          <Link
            href="#how-it-works"
            className="
              rounded-full
              px-2
              py-1.5

              transition
              duration-200

              hover:bg-white/10
              hover:text-white
            "
          >
            How It Works
          </Link>

          {/* Explore */}

          <Link
            href="#explore"
            className="
              rounded-full
              px-2
              py-1.5

              transition
              duration-200

              hover:bg-white/10
              hover:text-white
            "
          >
            Explore
          </Link>
        </nav>

        {/* ==================================================
            DESKTOP GET THE APP
        ================================================== */}

        <Link
          href="#download"
          className="
            hidden

            shrink-0

            rounded-full

            border
            border-white/20

            bg-white/90

            px-4
            py-2

            text-xs
            font-bold
            text-gray-900

            shadow-sm

            transition-all
            duration-200

            hover:-translate-y-0.5
            hover:bg-white
            hover:shadow-lg

            active:translate-y-0
            active:scale-95

            md:block
          "
        >
          Get The App
        </Link>

        {/* ==================================================
            MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            shrink-0

            items-center
            justify-center

            rounded-full

            p-2

            text-white

            transition-all
            duration-200

            hover:bg-white/10

            active:scale-90

            md:hidden
          "
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* ==================================================
          MOBILE MENU
      ================================================== */}

      <div
        className={`
          mt-2

          overflow-hidden

          rounded-2xl

          border
          border-white/20

          bg-black/50

          shadow-[0_12px_40px_rgba(0,0,0,0.25)]

          backdrop-blur-xl
          backdrop-saturate-150

          transition-all
          duration-300

          md:hidden

          ${
            isOpen
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }
        `}
      >
        <nav
          className="
            flex
            flex-col
            gap-2

            p-5

            text-center
            text-sm
            font-medium
            text-white
          "
        >
          {/* Home */}

          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-3
              py-2.5

              transition

              hover:bg-white/10
              hover:text-emerald-400
            "
          >
            Home
          </Link>

          {/* Features */}

          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-3
              py-2.5

              transition

              hover:bg-white/10
              hover:text-emerald-400
            "
          >
            Features
          </Link>

          {/* How It Works */}

          <Link
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-3
              py-2.5

              transition

              hover:bg-white/10
              hover:text-emerald-400
            "
          >
            How It Works
          </Link>

          {/* Explore */}

          <Link
            href="#explore"
            onClick={() => setIsOpen(false)}
            className="
              rounded-xl
              px-3
              py-2.5

              transition

              hover:bg-white/10
              hover:text-emerald-400
            "
          >
            Explore
          </Link>

          {/* Get The App */}

          <Link
            href="#download"
            onClick={() => setIsOpen(false)}
            className="
              mt-2

              w-full

              rounded-full

              bg-white

              py-3

              text-center

              text-sm
              font-bold
              text-gray-900

              shadow-md

              transition-all
              duration-200

              hover:bg-emerald-50
              hover:shadow-lg

              active:scale-95
            "
          >
            Get The App
          </Link>
        </nav>
      </div>
    </header>
  );
}