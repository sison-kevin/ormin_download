import FeatureCard from "./FeatureCard";

const features = [
  {
    number: "01",
    title: "AR Visualization",
    description:
      "Bring heritage to life through augmented reality. View selected artifacts as immersive 3D experiences and discover history in a more interactive way.",
    image: "/images/feature-ar.jpg",
    buttonText: "Experience AR",
  },
  {
    number: "02",
    title: "AR Navigation",
    description:
      "Find your way around the museum with augmented reality navigation. Locate artifacts and important areas while exploring the museum.",
    image: "/images/feature-navigation.jpg",
    buttonText: "Start Navigation",
  },
  {
    number: "03",
    title: "Interactive Games",
    description:
      "Make learning about heritage more engaging through interactive games designed to help visitors discover and remember the history and culture of Oriental Mindoro.",
    image: "/images/feature-games.jpg",
    buttonText: "Play & Learn",
  },
  {
    number: "04",
    title: "Reservation",
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
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="text-center">

          {/* Label */}

          <div className="flex justify-center">
            <span
              className="
                rounded-full
                bg-green-50
                px-4
                py-2
                text-xs
                font-semibold
                text-green-700
              "
            >
              Your Heritage, Connected Seamlessly
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-gray-900
              md:text-5xl
            "
          >
            Everything You Need to
            <br />
            Explore Heritage
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-gray-500
              md:text-base
            "
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
            mt-24
            space-y-28
            md:space-y-40
          "
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              number={feature.number}
              title={feature.title}
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