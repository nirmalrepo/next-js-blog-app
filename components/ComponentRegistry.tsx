import dynamic from "next/dynamic";
import { ComponentType } from "react";

interface ComponentRegistryType {
  [key: string]: any;
}

const ComponentRegistry: ComponentRegistryType = {
  sectionHero: dynamic(() => import("@/components/organisms/SectionHero")),
  sectionIntroduction: dynamic(
    () => import("@/components/organisms/SectionIntroduction")
  ),
  sectionContent: dynamic(
    () => import("@/components/organisms/SectionContent")
  ),
  sectionTextImage: dynamic(
    () => import("@/components/organisms/SectionTextImage")
  ),
};

export default ComponentRegistry;
