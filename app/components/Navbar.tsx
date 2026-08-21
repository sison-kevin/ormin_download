"use client";

import {
  Cinzel_Decorative,
  Inter,
  Noto_Sans_Hanunoo,
} from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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

const notoHanunoo = Noto_Sans_Hanunoo({
  subsets: ["hanunoo"],
  weight: ["400"],
  display: "swap",
});

/* ==================================================
   NAVBAR COMPONENT
================================================== */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* Track Active Section on Scroll */
  useEffect(() => {
    const sections = ["home", "features", "how-it-works", "explore"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Features", href: "#features", id: "features" },
    { name: "How It Works", href: "#how-it-works", id: "how-it-works" },
    { name: "Explore", href: "#explore", id: "explore" },
  ];

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-[9999]
        h-16
        w-full
        border-b
        border-[#E2B889]/15
        bg-[#2B1B1E]/70
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-300
        sm:h-[72px]
      "
    >
      {/* ==================================================
          MAIN FULL-WIDTH CONTAINER
      ================================================== */}

      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* ==================================================
            BRANDING
        ================================================== */}

        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex flex-col justify-center"
        >
          <span
            className={`
              ${cinzelDecorative.className}
              text-lg
              font-bold
              tracking-tight
              transition-opacity
              duration-300
              group-hover:opacity-90
              sm:text-xl
            `}
          >
            {/* Swapped green for unified gold accent */}
            <span className="text-[#E2B889]">e</span>
            <span className="text-white">Ormin</span>{" "}
            <span className="text-[#E2B889]">Heritage</span>
          </span>

          {/* Hanunoo Cultural Subtitle */}
          <span
            className={`
              ${notoHanunoo.className}
              -mt-0.5
              text-[9px]
              leading-none
              tracking-wider
              text-[#E2B889]/60
            `}
          >
            ᜁᜂᜇᜋᜒᜈ᜔ ᜑᜒᜇᜒᜆᜊᜒ
          </span>
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className={`
            ${inter.className}
            hidden
            items-center
            gap-8
            md:flex
          `}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  group
                  relative
                  py-1
                  text-xs
                  font-medium
                  tracking-wide
                  transition-colors
                  duration-300
                  lg:text-sm
                  ${
                    isActive
                      ? "text-[#E2B889]"
                      : "text-[#F3EBDD]/85 hover:text-[#E2B889]"
                  }
                `}
              >
                {link.name}

                {/* Subtle Hover & Active Underline Indicator */}
                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[1.5px]
                    w-full
                    bg-[#E2B889]
                    transition-transform
                    duration-300
                    ease-out
                    ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* ==================================================
            DESKTOP CTA
        ================================================== */}

        <div className="hidden md:block">
          <Link
            href="#download"
            className={`
              ${inter.className}
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#E2B889]
              px-5
              py-2
              text-xs
              font-semibold
              tracking-wider
              text-[#2B1B1E]
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#EBD0A8]
              active:scale-95
              lg:text-sm
            `}
          >
            Get The App
          </Link>
        </div>

        {/* ==================================================
            MOBILE HAMBURGER BUTTON
        ================================================== */}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            text-[#F3EBDD]
            transition-colors
            hover:text-[#E2B889]
            md:hidden
          "
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ==================================================
          MOBILE DROPDOWN MENU
      ================================================== */}

      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          border-b
          border-[#E2B889]/20
          bg-[#2B1B1E]/95
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          ease-in-out
          md:hidden
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
          overflow-hidden
        `}
      >
        <nav
          className={`
            ${inter.className}
            flex
            flex-col
            gap-1
            px-6
            py-6
          `}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  rounded-md
                  py-3
                  text-sm
                  font-medium
                  transition-colors
                  ${
                    isActive
                      ? "text-[#E2B889]"
                      : "text-[#F3EBDD]/80 hover:text-[#E2B889]"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="#download"
            onClick={() => setIsOpen(false)}
            className="
              mt-4
              block
              w-full
              rounded-md
              bg-[#E2B889]
              py-3
              text-center
              text-sm
              font-semibold
              text-[#2B1B1E]
              transition-all
              hover:bg-[#EBD0A8]
            "
          >
            Get The App
          </Link>
        </nav>
      </div>
    </header>
  );
}