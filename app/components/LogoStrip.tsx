const items = [
  "Virtual Museum",
  "AR Experience",
  "Digital Artifacts",
  "Heritage Tours",
  "Interactive Map",
];

export default function LogoStrip() {
  return (
    <section className="relative w-full overflow-hidden border-b border-gray-100 bg-amber-50/40 py-8">
      {/* Inline Keyframes for Infinite Smooth Carousel */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Fade Masks on Left & Right Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      {/* Moving Track */}
      <div className="animate-marquee">
        {/* Double array ensures endless loop seamless connection */}
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-6 whitespace-nowrap"
          >
            <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase transition-colors hover:text-[#5c1f2b]">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-amber-700/30" />
          </div>
        ))}
      </div>
    </section>
  );
}