"use client";

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
    <footer className="border-t border-gray-100 bg-white px-6 py-12 md:py-16">
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
              className="
                cursor-pointer
                text-left
                text-lg
                font-bold
                tracking-tight
                transition-all
                duration-300
                hover:opacity-80
                active:scale-95
              "
            >
              <span className="text-emerald-700">
                e
              </span>

              <span className="text-gray-900">
                Ormin
              </span>{" "}

              <span className="text-[#a3704c]">
                Heritage
              </span>
            </button>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
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
              text-gray-500
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
                hover:text-emerald-700
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
                hover:text-emerald-700
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
                hover:text-emerald-700
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
                hover:text-emerald-700
                active:scale-95
              "
            >
              Explore
            </button>

          </nav>

        </div>

        {/* =========================
            COPYRIGHT
        ========================= */}

        <div
          className="
            mt-10
            border-t
            border-gray-100
            pt-8
            text-xs
            font-normal
            tracking-wide
            text-gray-400
          "
        >
          © 2026 eOrmin Heritage. All rights reserved.
        </div>

      </div>
    </footer>
  );
}