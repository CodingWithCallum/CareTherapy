# Data Structure Documentation

This document explains the data structure system for the CareTherapy website and how to use it effectively.

## 📁 File Organization

```
caretherapy/src/
├── data/
│   ├── index.ts           # Central export point
│   ├── blog-posts.ts      # Blog post data and helper functions
│   └── services.ts        # Service data and helper functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── app/
    ├── blog/
    │   ├── page.tsx       # Uses blog data
    │   └── [slug]/
    │       └── page.tsx   # Uses individual post data
    └── services/
        └── page.tsx       # Uses services data
```

## 🎯 Why Use This Structure?

### Benefits:
1. **Single Source of Truth** - All content in one place
2. **Type Safety** - TypeScript ensures data consistency
3. **Easy Maintenance** - Update content without touching components
4. **Reusability** - Use same data across multiple components
5. **Helper Functions** - Pre-built functions for common operations
6. **Scalability** - Easy to migrate to CMS/database later

## 📝 Adding New Blog Posts

### Step 1: Add to `data/blog-posts.ts`

```typescript
{
  id: "7",
  slug: "your-post-slug",  // URL-friendly, unique
  title: "Your Post Title",
  excerpt: "Brief description (150-200 characters)",
  content: `
    <p>Your full HTML content here...</p>
    <h2>Section Heading</h2>
    <p>More content...</p>
  `,
  author: {
    id: "author-1",
    name: "Dr. Sarah Johnson",
    role: "Clinical Exercise Specialist",
    bio: "Author bio...",
    avatar: "https://...",
  },
  publishedAt: "2024-03-20",  // YYYY-MM-DD format
  category: "Exercise Therapy",  // Must match existing category
  tags: ["tag1", "tag2"],  // Optional
  featuredImage: "https://...",  // Required
  readTime: "5 min read",
  featured: false,  // Set to true for featured post (only one)
}
```

### Step 2: That's it!
The post automatically appears on:
- Blog listing page
- Category filters
- Search results
- Related posts (if same category)

## 🛠️ Adding New Services

### Add to `data/services.ts`

```typescript
{
  id: "unique-service-id",
  title: "Service Name",
  description: "Full description (2-3 sentences)",
  shortDescription: "Brief one-liner",
  icon: "IconName",  // Lucide icon name
  price: "From R500 per session",
  duration: "60 minutes",
  features: [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5"
  ],
  image: "/images/services/service-name.jpg"
}
```

## 🔧 Using Data in Components

### Import from central location:

```typescript
import { 
  getAllPosts, 
  getPostBySlug, 
  getAllServices 
} from '@/data';
```

### Available Functions:

#### Blog Posts:
- `getAllPosts()` - Get all posts, sorted by date
- `getPostBySlug(slug)` - Get single post
- `getFeaturedPost()` - Get featured post
- `getPostsByCategory(category)` - Filter by category
- `getAllCategories()` - Get all unique categories
- `getRelatedPosts(slug, limit)` - Get related posts
- `searchPosts(query)` - Search posts

#### Services:
- `getAllServices()` - Get all services
- `getServiceById(id)` - Get single service
- `getFeaturedServices(limit)` - Get first N services
- `getAllPackages()` - Get service packages
- `getPopularPackage()` - Get popular package
- `calculatePackageSavings(packageId, basePrice)` - Calculate savings

## 📊 Example Usage

### In a Component:

```typescript
"use client";

import { getAllPosts } from '@/data';

export default function BlogPage() {
  // Get all posts
  const posts = getAllPosts();
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### In a Dynamic Route:

```typescript
import { getPostBySlug } from '@/data';

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) return <div>Not found</div>;
  
  return <article>{/* render post */}</article>;
}
```

## 🎨 Content Guidelines

### Blog Posts:

#### Title:
- Clear and descriptive
- 50-70 characters
- Include main keyword

#### Excerpt:
- 150-200 characters
- Engaging preview
- Include benefit/value

#### Content:
- Use HTML tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`
- Break into sections with headings
- Keep paragraphs concise
- Include actionable tips

#### Images:
- Minimum 1200x600px
- Relevant to content
- High quality
- Proper attribution

#### Categories:
Current categories:
- Exercise Therapy
- Elderly Care
- Sports Performance
- Assessment
- Rehabilitation
- Equipment

Add new categories carefully - they appear in filters.

### Services:

#### Title:
- Clear service name
- Professional and descriptive

#### Description:
- 2-3 sentences
- Explain what the service is
- Include benefits

#### Features:
- List 5 key benefits
- Use action-oriented language
- Be specific and measurable

#### Pricing:
- Be clear and transparent
- Include "From" if variable
- Use consistent currency (R for Rands)

## 🔄 Migration Path

### Current: Static Data Files
```
data/blog-posts.ts → Components
```

### Future: CMS Integration
```
CMS (Contentful/Sanity) → API → Components
```

**The data structure stays the same!** Only the source changes.

### Example Migration:

**Before (Static):**
```typescript
import { getAllPosts } from '@/data';
const posts = getAllPosts();
```

**After (CMS):**
```typescript
import { getAllPosts } from '@/lib/cms';
const posts = await getAllPosts();
```

Same interface, different source!

## 🚀 Quick Reference

### Add Blog Post
1. Open `data/blog-posts.ts`
2. Copy existing post object
3. Update all fields
4. Ensure unique `id` and `slug`
5. Save file
6. Post appears automatically

### Add Service
1. Open `data/services.ts`
2. Copy existing service object
3. Update all fields
4. Add to `services` array
5. Save file

### Update Existing Content
1. Find item by `id` or `slug`
2. Edit fields directly
3. Save file
4. Changes appear immediately

## 🐛 Troubleshooting

### Post Not Appearing
- Check `id` is unique
- Check `slug` is unique and URL-friendly
- Verify date format: YYYY-MM-DD
- Check no syntax errors in object

### Category Filter Not Working
- Ensure category matches exactly (case-sensitive)
- Add category to existing list if new

### Related Posts Empty
- Check other posts have same category
- Verify slug is different from current post

### Images Not Loading
- Check URL is valid
- Ensure image exists at URL
- Check for HTTPS vs HTTP

## 📈 Best Practices

### 1. Consistent Naming
```typescript
// Good
slug: "benefits-of-exercise"
id: "1"

// Bad
slug: "Benefits_Of_Exercise"
id: "Post1"
```

### 2. Proper Date Format
```typescript
// Good
publishedAt: "2024-03-15"

// Bad
publishedAt: "15/03/2024"
publishedAt: "March 15, 2024"
```

### 3. Clean HTML Content
```typescript
// Good
content: `
  <p>Clear paragraph.</p>
  <h2>Section Title</h2>
  <p>Another paragraph.</p>
`

// Bad
content: "<p>Messy<h2>formatting</h2>everywhere</p>"
```

### 4. Author Consistency
```typescript
// Reuse existing author objects
author: {
  id: "author-1",  // Consistent ID
  name: "Dr. Sarah Johnson",  // Consistent name
  ...
}
```

### 5. Featured Post Management
```typescript
// Only ONE post should have featured: true
// Set others to false when adding new featured post
featured: true  // Only one!
```

## 📝 Content Checklist

Before publishing a blog post:
- [ ] Unique ID and slug
- [ ] Title is clear and keyword-rich
- [ ] Excerpt is compelling (150-200 chars)
- [ ] Content is well-formatted with headings
- [ ] Featured image is high quality
- [ ] Author info is complete
- [ ] Category is correct
- [ ] Tags are relevant
- [ ] Date is correct format
- [ ] Read time is accurate
- [ ] Proofread for typos

## 🔐 Type Safety

All data must match TypeScript types defined in `types/index.ts`:

```typescript
interface BlogPost {
  id: string;                    // Required
  slug: string;                  // Required
  title: string;                 // Required
  excerpt: string;               // Required
  content: string;               // Required
  author: Author;                // Required
  publishedAt: Date | string;    // Required
  category: string;              // Required
  tags?: string[];              // Optional
  featuredImage?: string;       // Optional
  readTime?: string;            // Optional
  featured?: boolean;           // Optional
  updatedAt?: Date | string;    // Optional
}
```

TypeScript will show errors if you:
- Forget required fields
- Use wrong data types
- Misspell property names

## 🎯 Next Steps

1. **Start Simple**: Add 1-2 blog posts to test
2. **Add Images**: Upload images to `/public/images/blog/`
3. **Test Features**: Try search, filters, related posts
4. **Expand Content**: Add more posts and services
5. **Monitor Performance**: Check load times with more data
6. **Plan Migration**: When ready, migrate to CMS

## 📚 Additional Resources

- [TypeScript Types Documentation](../types/README.md)
- [Component Integration Guide](../components/README.md)
- [Image Optimization Guide](../public/images/README.md)

## 💡 Tips

### For Developers:
- Use TypeScript! It catches errors early
- Test with various data scenarios
- Keep helper functions DRY
- Comment complex logic

### For Content Creators:
- Follow content guidelines strictly
- Use provided templates
- Preview before publishing
- Keep backups of content

### For Everyone:
- Communicate changes
- Document new patterns
- Test thoroughly
- Ask questions!

## 🆘 Need Help?

Common issues and solutions:

**Q: How do I add a new category?**
A: Add posts with the new category name. It will appear automatically in filters.

**Q: Can I have multiple featured posts?**
A: No, only one post should have `featured: true`.

**Q: How do I change the order of posts?**
A: Posts are sorted by `publishedAt` date automatically.

**Q: Can I use Markdown instead of HTML?**
A: Currently no, but you can add a Markdown parser later.

**Q: Where do I put images?**
A: Upload to `/public/images/blog/` or use external URLs.

---

**Last Updated:** October 2025  
**Maintainer:** CodeCallum