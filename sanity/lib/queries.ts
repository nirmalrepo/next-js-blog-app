import { groq } from "next-sanity";
import {
  SectionHeroFragment,
  SectionContentFragment,
  SectionIntroductionFragment,
} from "./fragments";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    "sections": sections[]{
    _type,
    ${SectionHeroFragment},
    ${SectionContentFragment},
    ${SectionIntroductionFragment}
  }
}`;

export const HOME_PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    "sections": sections[]{
    _type,
    ${SectionHeroFragment},
    ${SectionContentFragment},
    ${SectionIntroductionFragment}
  }
}`;
