import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Explore() {
  return (
    <section
      id="explore"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-[2rem]">
          <Image
            src="/images/feature-ar.jpg"
            alt="Augmented reality heritage experience"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>

          <span className="text-sm font-semibold text-green-700">
            AUGMENTED REALITY
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Experience Heritage
            <br />
            In A New Way
          </h2>

          <p className="mt-6 leading-7 text-gray-500">
            Bring historical artifacts to life through
            augmented reality. Discover detailed 3D
            representations and explore heritage from
            wherever you are.
          </p>

          <Link
            href="#download"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Explore AR
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </section>
  );
}