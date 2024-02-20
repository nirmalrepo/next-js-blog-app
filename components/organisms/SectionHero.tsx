import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/utils/helpers";

interface SectionHeroProps {
  heading?: string;
  tagLine?: string;
  image: object;
}

export default function SectionHero({
  heading,
  tagLine,
  image,
}: SectionHeroProps) {
  return (
    <section className="hero bg-cover bg-center py-16 t-section">
      <div className="flex flex-wrap max-w-screen-xl mx-auto">
        <div className="w-full sm:w-1/2 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full p-16">
                <h1 className="text-4xl lg:text-6xl font-bold font-overpass leading-6 mb-4">
                  {heading}
                </h1>
                <p className="mb-10">{tagLine}</p>
                <button className="bg-cream hover:bg-cream-300 px-6 py-2  rounded-full">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mb-10 relative">
          {image ? (
            <Image
              className="inset-0 object-cover"
              src={urlFor(image).url()}
              alt="Image"
              layout="fill"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}

export const fragment = `
  heading,
  tagLine,
  image
`;
