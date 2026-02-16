import { notFound } from "next/navigation";
import { getKestaticPostWithDocument, getKestaticRelatedPosts, getKestaticPostSlugs } from "@/lib/keystatic";
import BlogPostClient from "./BlogPostClient";

// Generate static params for all known post slugs
export async function generateStaticParams() {
  const slugs = await getKestaticPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch data server-side from Keystatic
  const result = await getKestaticPostWithDocument(slug);

  if (!result) {
    notFound();
  }

  const relatedPosts = await getKestaticRelatedPosts(slug, 3);

  return (
    <BlogPostClient
      post={result.post}
      document={result.document}
      relatedPosts={relatedPosts}
    />
  );
}