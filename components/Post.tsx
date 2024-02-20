import { SanityDocument } from "next-sanity";
import ComponentRegistry from "./ComponentRegistry";

export default function Post({ post }: { post: SanityDocument }) {
  const { sections } = post;

  return (
    <main className="container-fluid mx-auto prose prose-lg">
      {sections.map((section: any, index: number) => {
        const Component = ComponentRegistry[section._type];
        if (Component) {
          return <Component key={index} {...section} />;
        }
        return null;
      })}
    </main>
  );
}
