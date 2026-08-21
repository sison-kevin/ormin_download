import FeatureCard from "./FeatureCard";
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
   FEATURES DATA
================================================== */

const features = [
  {
    number: "01",
    title: "AR Visualization",
    hanunoo: "ᜀᜇ᜔ ᜊᜒᜐᜓᜀᜎᜒᜐᜀᜐ᜔ᜌᜓᜈ᜔",
    description:
      "Bring heritage to life through augmented reality. View selected artifacts as immersive 3D experiences and discover history in a more interactive way.",
    image: "/images/feature-ar.jpg",
    buttonText: "Experience AR",
  },

  {
    number: "02",
    title: "AR Navigation",
    hanunoo: "ᜀᜇ᜔ ᜈᜊᜒᜄᜐᜌ᜔",
    description:
      "Find your way around the museum with augmented reality navigation. Locate artifacts and important areas while exploring the museum.",
    image: "/images/feature-navigation.jpg",
    buttonText: "Start Navigation",
  },

  {
    number: "03",
    title: "Interactive Games",
    hanunoo: "ᜁᜈ᜔ᜆᜒᜇᜀᜃ᜔ᜆᜒᜊ᜔ ᜄᜒᜋ᜔",
    description:
      "Make learning about heritage more engaging through interactive games designed to help visitors discover and remember the history and culture of Oriental Mindoro.",
    image: "/images/feature-games.jpg",
    buttonText: "Play & Learn",
  },

  {
    number: "04",
    title: "Reservation",
    hanunoo: "ᜇᜒᜐᜒᜇ᜔ᜊᜐᜌ᜔",
    description:
      "Plan your museum visit ahead of time. Check available schedules and make a reservation through the application for a more convenient experience.",
    image: "/images/feature-reservation.jpg",
    buttonText: "Make a Reservation",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="
        w-full
        max-w-full
        overflow-hidden
        bg-[#F9F6F0]
        px-5
        py-20

        sm:px-6
        sm:py-24

        md:py-32
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

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
              ᜌᜓᜇ᜔ ᜑᜒᜇᜒᜆᜌ᜔ᜎ᜔ ᜃᜈᜒᜃᜆᜒᜇ᜔ᜃᜆᜒᜇ᜔ ᜐᜒᜌᜒᜈ᜔ᜐᜒᜎᜒ
            </span>
          </div>

          {/* Heading */}

          <h2
            className={`
              ${cinzelDecorative.className}
              mx-auto
              mt-5
              max-w-3xl
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-[#3A2024]

              sm:text-3xl
              md:text-5xl
            `}
          >
            Everything You Need to
            <br />
            Explore Heritage
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
            `}
          >
            Discover, experience, and learn about the history and
            culture of Oriental Mindoro through one interactive
            museum application.
          </p>
        </div>

        {/* ==================================================
            FEATURES
        ================================================== */}

        <div
          className="
            mt-20
            space-y-24

            sm:mt-24
            sm:space-y-28

            md:mt-24
            md:space-y-40
          "
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              number={feature.number}
              title={feature.title}
              hanunoo={feature.hanunoo}
              description={feature.description}
              image={feature.image}
              buttonText={feature.buttonText}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}