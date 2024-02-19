import { dataset, projectId } from "@/env";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: object) {
  return builder.image(source);
}
