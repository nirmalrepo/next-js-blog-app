// ./app/page.tsx

import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { loadQuery } from "@/sanity/lib/store";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import PostPreview from "@/components/PostPreview";
import Post from "@/components/Post";

export default async function Page() {
  const initial = await loadQuery<SanityDocument>(
    HOME_PAGE_QUERY,
    { slug: "home-page" },
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={{ slug: "home-page" }} />
  ) : (
    <Post post={initial.data} />
  );
}
