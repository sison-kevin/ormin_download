import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Cinzel_Decorative,
  Inter,
  Noto_Sans_Hanunoo,
} from "next/font/google";

/* ==================================================
   FONTS
================================================== */

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

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* ==================================================
   COMPONENT
================================================== */

export default function Explore() {
  return (
    <section
      id="explore"
      className="
        w-full
        overflow-hidden
        bg-[#F9F6F0]
        px-5
        py-20

        sm:px-6
        sm:py-24

        md:py-32
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-10

          sm:gap-12

          md:grid-cols-2
          md:gap-16
        "
      >

        {/* ==================================================
            IMAGE
        ================================================== */}

        <div
          className="
            relative
            aspect-square
            overflow-hidden
            rounded-[2rem]
            bg-[#EDE5D8]
          "
        >
          <Image
            src="/images/feature-ar.jpg"
            alt="Augmented reality heritage experience"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
              object-cover
              transition
              duration-700
              hover:scale-105
            "
          />

          {/* Image Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-[#3A2024]/5
            "
          />
        </div>

        {/* ==================================================
            CONTENT
        ================================================== */}

        <div>

          {/* Museum Label */}

          <div className="mb-2">
            <span
              className={`
                ${notoHanunoo.className}
                text-[9px]
                leading-none
                text-[#8A7565]

                sm:text-[10px]

                md:text-[11px]
              `}
            >
              ᜀᜇ᜔ ᜁᜃ᜔ᜐ᜔ᜉᜒᜇᜒᜀᜈ᜔ᜐ᜔
            </span>
          </div>

          {/* English Label */}

          <span
            className={`
              ${inter.className}
              text-[10px]
              font-semibold
              tracking-[0.2em]
              text-[#5C1F2B]
              uppercase

              sm:text-xs
            `}
          >
            Augmented Reality
          </span>

          {/* Heading */}

          <h2
            className={`
              ${cinzelDecorative.className}
              mt-4
              text-2xl
              font-bold
              leading-tight
              text-[#3A2024]

              sm:text-3xl

              md:text-4xl

              lg:text-5xl
            `}
          >
            Experience Heritage
            <br />
            <span className="text-[#5C1F2B]">
              In A New Way
            </span>
          </h2>

          {/* Description */}

          <p
            className={`
              ${inter.className}
              mt-5
              max-w-lg
              text-xs
              leading-5
              text-[#6F6258]

              sm:mt-6
              sm:text-sm
              sm:leading-6

              md:text-base
              md:leading-7
            `}
          >
            Bring historical artifacts to life through
            augmented reality. Discover detailed 3D
            representations and explore heritage from
            wherever you are.
          </p>

          {/* Button */}

          <Link
            href="#download"
            className={`
              ${inter.className}
              group
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#3A2024]
              px-6
              py-3
              text-xs
              font-semibold
              text-[#F3EBDD]
              shadow-[0_8px_20px_rgba(58,32,36,0.2)]
              transition-all
              duration-300

              hover:-translate-y-1
              hover:gap-3
              hover:bg-[#4E2B31]
              hover:shadow-[0_12px_28px_rgba(58,32,36,0.3)]

              active:translate-y-0
              active:scale-95
              active:bg-[#2B1B1E]

              sm:mt-7
              sm:px-7
              sm:py-3.5
              sm:text-sm
            `}
          >
            Explore AR

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>
      </div>
    </section>
  );
}