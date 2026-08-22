"use client";

import { MapPin, Navigation, Clock } from "lucide-react";
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

export default function Location() {
const latitude = 13.415007236559653;
const longitude = 121.1801800232431;

const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

return (
<section
id="location"
className="
relative
w-full
overflow-hidden
bg-[#EDE5D8]
px-5
py-20

```
    sm:px-6
    sm:py-24

    md:py-32
  "
>
  {/* ==================================================
      MAIN CONTAINER
  ================================================== */}

  <div
    className="
      relative
      z-10
      mx-auto
      max-w-6xl
    "
  >
    {/* ==================================================
        HEADER
    ================================================== */}

    <div className="text-center">

      {/* Hanunoo */}

      <div className="flex justify-center">
        <span
          className={`
            ${notoHanunoo.className}
            text-[10px]
            leading-none
            text-[#8A7565]

            sm:text-[11px]

            md:text-xs
          `}
        >
          ᜎᜓᜃᜐ᜔ᜌᜓᜈ᜔ ᜈᜅ᜔ ᜋᜒᜐᜒᜌᜓᜋ᜔
        </span>
      </div>

      {/* English Label */}

      <span
        className={`
          ${inter.className}
          mt-3
          inline-block
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#5C1F2B]

          sm:text-xs
        `}
      >
        Visit Us
      </span>

      {/* Heading */}

      <h2
        className={`
          ${cinzelDecorative.className}
          mx-auto
          mt-4
          max-w-3xl
          text-2xl
          font-bold
          leading-tight
          text-[#2B1B1E]

          sm:text-3xl

          md:text-5xl
        `}
      >
        Discover the Museum
        <br />
        <span className="text-[#5C1F2B]">
          In Person
        </span>
      </h2>

      {/* Description */}

      <p
        className={`
          ${inter.className}
          mx-auto
          mt-5
          max-w-2xl
          text-xs
          leading-5
          text-[#6F6258]

          sm:text-sm
          sm:leading-6

          md:text-base
          md:leading-7
        `}
      >
        Visit the Oriental Mindoro Heritage Museum and
        experience the history, culture, and heritage of
        Oriental Mindoro firsthand.
      </p>
    </div>

    {/* ==================================================
        LOCATION CONTENT
    ================================================== */}

    <div
      className="
        mt-12
        grid
        gap-8

        md:grid-cols-[1.15fr_0.85fr]
        md:items-stretch
        md:gap-12

        lg:mt-16
      "
    >

      {/* ==================================================
          MAP
      ================================================== */}

      <div
        className="
          relative
          min-h-[320px]
          overflow-hidden
          rounded-[2rem]
          border
          border-[#5C1F2B]/10
          bg-[#DCCFC0]
          shadow-[0_15px_40px_rgba(43,27,30,0.10)]

          sm:min-h-[380px]

          md:min-h-[460px]
        "
      >
        <iframe
          title="Oriental Mindoro Heritage Museum Location"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`}
          className="
            absolute
            inset-0
            h-full
            w-full
            border-0
          "
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Map Label */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-xl
            border
            border-white/50
            bg-[#F9F6F0]/95
            px-4
            py-3
            shadow-lg
            backdrop-blur-sm
          "
        >
          <div className="flex items-center gap-2">

            <MapPin
              size={17}
              className="text-[#5C1F2B]"
            />

            <span
              className={`
                ${inter.className}
                text-xs
                font-semibold
                text-[#2B1B1E]
              `}
            >
              Oriental Mindoro
              <br />
              Heritage Museum
            </span>

          </div>
        </div>
      </div>

      {/* ==================================================
          INFORMATION
      ================================================== */}

      <div
        className="
          flex
          flex-col
          justify-center
          rounded-[2rem]
          bg-[#3A2024]
          p-7
          shadow-[0_15px_40px_rgba(43,27,30,0.15)]

          sm:p-9

          md:p-10

          lg:p-12
        "
      >

        {/* Small Label */}

        <span
          className={`
            ${inter.className}
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#E2B889]

            sm:text-xs
          `}
        >
          Find Us
        </span>

        {/* Title */}

        <h3
          className={`
            ${cinzelDecorative.className}
            mt-4
            text-2xl
            font-bold
            leading-tight
            text-[#F3EBDD]

            sm:text-3xl
          `}
        >
          Oriental Mindoro
          <br />
          Heritage Museum
        </h3>

        {/* Divider */}

        <div className="my-7 h-px w-full bg-[#E2B889]/20" />

        {/* Address */}

        <div className="flex gap-4">

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#E2B889]/10
            "
          >
            <MapPin
              size={18}
              className="text-[#E2B889]"
            />
          </div>

          <div>

            <span
              className={`
                ${inter.className}
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-[#E2B889]
              `}
            >
              Address
            </span>

            <p
              className={`
                ${inter.className}
                mt-1
                text-sm
                leading-6
                text-[#F3EBDD]/75
              `}
            >
              Brgy. Ibaba East,
              <br />
              Calapan City,
              <br />
              Oriental Mindoro
            </p>

          </div>
        </div>

        {/* Hours */}

        <div className="mt-6 flex gap-4">

          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#E2B889]/10
            "
          >
            <Clock
              size={18}
              className="text-[#E2B889]"
            />
          </div>

          <div>

            <span
              className={`
                ${inter.className}
                text-[10px]
                font-semibold
                uppercase
                tracking-wider
                text-[#E2B889]
              `}
            >
              Museum Hours
            </span>

            <p
              className={`
                ${inter.className}
                mt-1
                text-sm
                leading-6
                text-[#F3EBDD]/75
              `}
            >
              Tuesday – Sunday
              <br />
              8:30 AM – 4:30 PM
            </p>

          </div>
        </div>

        {/* Directions Button */}

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${inter.className}
            group
            mt-8
            inline-flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#E2B889]
            px-6
            py-3.5
            text-sm
            font-semibold
            text-[#2B1B1E]
            shadow-[0_8px_20px_rgba(226,184,137,0.15)]
            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-[#EBD0A8]
            hover:shadow-[0_12px_28px_rgba(226,184,137,0.25)]

            active:translate-y-0
            active:scale-95
          `}
        >
          Get Directions

          <Navigation
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </a>

      </div>
    </div>
  </div>
</section>


);
}
