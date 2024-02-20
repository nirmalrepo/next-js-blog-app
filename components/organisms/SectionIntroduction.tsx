import React from "react";
import { PortableText } from "@portabletext/react";
interface SectionIntroductionProps {
  subheading?: string;
  content: any;
}
export default function SectionIntroduction({
  subheading,
  content,
}: SectionIntroductionProps) {
  return (
    <section className="bg-neutralWhite flex justify-center items-center text-center w-full py-16 t-section">
      <div className="w-full mb-10">
        <div className="max-w-screen-sm mx-auto h-full sm:p-10">
          <h2 className="text-xl lg:text-4xl font-bold font-overpass leading-6 mb-4 text-center">
            {subheading}
          </h2>
          <PortableText value={content.content} components={{}} />
          <button className="bg-cream hover:bg-cream-300 px-6 py-2  rounded-full mt-10">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export const fragment = `
subheading,
content
`;
