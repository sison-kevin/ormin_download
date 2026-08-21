"use client";

import Image from "next/image";
import {
  Cinzel_Decorative,
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

/* ==================================================
   MUSEUM MARQUEE ITEMS
   ================================================== */

const items = [
  {
    hanunoo: "ᜂᜋᜒᜃᜎ᜔ ᜋᜓᜐᜒᜌᜓᜋ᜔",
    english: "Virtual Museum",
  },
  {
    hanunoo: "ᜀᜇ᜔ ᜁᜃ᜔ᜐ᜔ᜉᜒᜇᜒᜀᜈ᜔ᜐ᜔",
    english: "AR Experience",
  },
  {
    hanunoo: "ᜇᜒᜄᜒᜆᜎ᜔ ᜀᜇ᜔ᜆᜒᜉᜃ᜔ᜆ᜔",
    english: "Digital Artifacts",
  },
  {
    hanunoo: "ᜑᜒᜇᜒᜆᜌ᜔ ᜆᜓᜇ᜔ᜐ᜔",
    english: "Heritage Tours",
  },
  {
    hanunoo: "ᜁᜈ᜔ᜆᜒᜇᜀᜃ᜔ᜆᜒᜊ᜔ ᜋᜉ᜔",
    english: "Interactive Map",
  },
];

export default function LogoStrip() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        border-b
        border-[#5C1F2B]/10
        bg-[#F3EBDD]
        py-6
        sm:py-7
      "
    >
      {/* ==================================================
          MARQUEE ANIMATION
          ================================================== */}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ==================================================
          LEFT FADE
          ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-16
          bg-gradient-to-r
          from-[#F3EBDD]
          to-transparent

          sm:w-24
        "
      />

      {/* ==================================================
          RIGHT FADE
          ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-16
          bg-gradient-to-l
          from-[#F3EBDD]
          to-transparent

          sm:w-24
        "
      />

      {/* ==================================================
          MOVING TRACK
          ================================================== */}

      <div className="animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.english}-${index}`}
            className="
              flex
              items-center
              px-6
              sm:px-10
            "
          >
            {/* Museum Label */}
            <div
              className="
                flex
                min-w-[170px]
                flex-col
                items-center
                justify-center
                text-center

                sm:min-w-[210px]
              "
            >
              {/* Hanunoo */}
              <span
                className={`
                  ${notoHanunoo.className}
                  text-base
                  leading-none
                  text-[#5C1F2B]

                  sm:text-lg
                `}
              >
                {item.hanunoo}
              </span>

              {/* English Translation */}
              <span
                className={`
                  ${cinzelDecorative.className}
                  mt-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#8A7565]

                  sm:text-[10px]
                `}
              >
                {item.english}
              </span>
            </div>

            {/* Museum Symbol PNG */}
            <div
              className="
                ml-6
                flex
                shrink-0
                items-center
                justify-center

                sm:ml-10
              "
            >
              <Image
                src="/images/symbol.png"
                alt=""
                width={28}
                height={28}
                className="
                  h-6
                  w-6
                  object-contain
                  opacity-70

                  sm:h-7
                  sm:w-7
                "
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}