import { Navbar } from "./navigation";
import { getAllKestaticPosts } from "@/lib/keystatic";

export default async function Header() {
  // Fetch latest blog post for the navigation menu "Featured" section
  const posts = await getAllKestaticPosts();
  const latestPost = posts.length > 0 ? posts[0] : null;

  return (
    <header className="relative sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Navbar featuredPost={latestPost} />
    </header>
  );
}