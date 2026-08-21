import HowItWorksStep from "./HowItWorksStep";

const steps = [
  {
    number: "01",
    title: "Open the App",
    description:
      "Start your heritage journey by opening the eOrMin Heritage application and accessing the museum experience from your mobile device.",
    image: "/images/how-app.png",
  },
  {
    number: "02",
    title: "Explore",
    description:
      "Discover historical artifacts, exhibits, and cultural information about Oriental Mindoro through the interactive museum experience.",
    image: "/images/how-explore.png",
  },
  {
    number: "03",
    title: "Experience AR",
    description:
      "Bring history to life by selecting an artifact and launching an immersive augmented reality experience.",
    image: "/images/how-ar.png",
  },
  {
    number: "04",
    title: "Navigate & Play",
    description:
      "Use AR navigation to explore the museum and enjoy interactive games that make learning about heritage more engaging.",
    image: "/images/how-game.png",
  },
  {
    number: "05",
    title: "Reserve",
    description:
      "Plan your visit by selecting an available schedule and making a reservation through the application.",
    image: "/images/how-reservation.png",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#f8f7f4] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            HEADER
        ========================= */}

        <div className="text-center">

          <div className="flex justify-center">
            <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            Your Journey Through
            <br />
            eOrMin Heritage
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Experience history in a simple, interactive, and
            engaging way from discovery to exploration.
          </p>

        </div>

        {/* =========================
            TIMELINE
        ========================= */}

        <div className="mt-20">

          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.number}
              number={step.number}
              title={step.title}
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