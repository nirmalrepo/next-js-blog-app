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
  // Add more mappings for other section types
};

export default ComponentRegistry;
