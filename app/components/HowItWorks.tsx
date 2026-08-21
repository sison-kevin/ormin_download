
import HowItWorksStep from "./HowItWorksStep";
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
   STEPS
================================================== */

const steps = [
  {
    number: "01",
    title: "Open the App",
    hanunoo: "ᜂᜉᜒᜈ᜔ ᜆᜒ ᜀᜉ᜔",
    description:
      "Start your heritage journey by opening the eOrMin Heritage application and accessing the museum experience from your mobile device.",
    image: "/images/how-app.png",
  },
  {
    number: "02",
    title: "Explore",
    hanunoo: "ᜁᜃ᜔ᜐ᜔ᜉᜎᜓᜇ᜔",
    description:
      "Discover historical artifacts, exhibits, and cultural information about Oriental Mindoro through the interactive museum experience.",
    image: "/images/how-explore.png",
  },
  {
    number: "03",
    title: "Experience AR",
    hanunoo: "ᜀᜇ᜔ ᜁᜃ᜔ᜐ᜔ᜉᜒᜇᜒᜀᜈ᜔ᜐ᜔",
    description:
      "Bring history to life by selecting an artifact and launching an immersive augmented reality experience.",
    image: "/images/how-ar.png",
  },
  {
    number: "04",
    title: "Navigate & Play",
    hanunoo: "ᜈᜊᜒᜄᜐᜌ᜔ ᜀᜈ᜔ ᜉᜎᜒ",
    description:
      "Use AR navigation to explore the museum and enjoy interactive games that make learning about heritage more engaging.",
    image: "/images/how-game.png",
  },
  {
    number: "05",
    title: "Reserve",
    hanunoo: "ᜇᜒᜐᜒᜇ᜔ᜊ᜔",
    description:
      "Plan your visit by selecting an available schedule and making a reservation through the application.",
    image: "/images/how-reservation.png",
  },
];

/* ==================================================
   COMPONENT
================================================== */

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="
        w-full
        overflow-hidden
        bg-[#EDE5D8]
        px-5
        py-20
        sm:px-6
        sm:py-24
        md:py-32
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="text-center">

          {/* Hanunoo Label */}

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
              ᜑᜏ᜔ ᜁᜆ᜔ ᜏᜒᜇ᜔ᜃ᜔ᜐ᜔
            </span>
          </div>

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
              tracking-tight
              text-[#2B1B1E]
              sm:text-3xl
              md:text-5xl
            `}
          >
            Your Journey Through
            <br />
            eOrMin Heritage
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
              text-[#5F5148]
              sm:text-sm
              sm:leading-6
              md:text-base
            `}
          >
            Experience history in a simple, interactive, and
            engaging way from discovery to exploration.
          </p>
        </div>

        {/* FEATURES / TIMELINE */}

        <div
          className="
            mt-20
            sm:mt-24
            md:mt-28
          "
        >
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.number}
              number={step.number}
              title={step.title}
              hanunoo={step.hanunoo}
              description={step.description}
              image={step.image}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
