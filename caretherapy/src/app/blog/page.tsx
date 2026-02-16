import { getAllKestaticPosts, getKestaticFeaturedPost, getKestaticCategories } from "@/lib/keystatic";
import BlogPageClient from "./BlogPageClient";

export default async function BlogPage() {
  // Fetch data server-side from Keystatic
  const allPosts = await getAllKestaticPosts();
  const categories = await getKestaticCategories();
  const featuredPost = await getKestaticFeaturedPost();

  return (
    <BlogPageClient
      allPosts={allPosts}
      categories={categories}
      featuredPost={featuredPost}
    />
  );
}