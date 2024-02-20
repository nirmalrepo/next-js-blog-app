import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/utils/helpers";
import { PortableText } from "@portabletext/react";

interface SectionTextImageProps {
  heading?: string;
  content?: any;
  image: any;
}

export default function SectionTextImage({
  heading,
  content,
  image,
}: SectionTextImageProps) {
  const isImageOnLeft = image.alignment === "left";
  return (
    <section className="hero bg-cover bg-center py-16 t-section">
      <div className="flex flex-wrap max-w-screen-xl mx-auto">
        <div
          className={`w-full sm:w-1/2 mb-10 ${
            isImageOnLeft ? "order-last" : "order-first"
          }`}
        >
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full p-16">
                <h2 className="text-xl lg:text-4xl font-bold font-overpass leading-6 mb-4">
                  {heading}
                </h2>
                <PortableText value={content.content} components={{}} />
                <button className="bg-cream hover:bg-cream-300 px-6 py-2 rounded-full mt-10">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <div
          className={`w-full sm:w-1/2 mb-10 relative ${
            isImageOnLeft ? "order-first" : "order-last"
          }`}
        >
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
  content,
  image
`;
