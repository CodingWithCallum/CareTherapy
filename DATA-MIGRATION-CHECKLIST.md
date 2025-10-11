# Data Structure Migration Checklist

## ✅ What's Been Updated

### Data Files Created:
- [x] `src/data/blog-posts.ts` - Blog post data with 6 sample posts
- [x] `src/data/services.ts` - Service data with 6 services + packages
- [x] `src/data/index.ts` - Central export point
- [x] `src/types/index.ts` - TypeScript type definitions

### Pages Updated to Use Data:
- [x] `src/app/blog/page.tsx` - Blog listing page
- [x] `src/app/blog/[slug]/page.tsx` - Individual blog post page
- [x] `src/app/services/page.tsx` - Services page

### Components Updated to Use Data:
- [x] `src/components/home/ServicesOverview.tsx` - Home page services section
- [x] `src/components/home/FeaturedBlogPost.tsx` - Home page featured blog

### Documentation Created:
- [x] `DATA-STRUCTURE-README.md` - Complete guide
- [x] `PROJECT-SUMMARY.md` - Full project overview
- [x] Inline code comments throughout

---

## 📋 Files to Replace in Your Project

### 1. Create New Data Directory
```bash
mkdir -p src/data
```

Copy these files:
- `src/data/index.ts`
- `src/data/blog-posts.ts`
- `src/data/services.ts`

### 2. Update Existing Pages

**Replace these files:**
- `src/app/blog/page.tsx` - ✅ Updated version provided
- `src/app/blog/[slug]/page.tsx` - ✅ Updated version provided
- `src/app/services/page.tsx` - ✅ Updated version provided

### 3. Update Home Page Components

**Replace these files:**
- `src/components/home/ServicesOverview.tsx` - ✅ Updated version provided
- `src/components/home/FeaturedBlogPost.tsx` - ✅ Updated version provided

### 4. Keep As-Is (Already Good)

**These don't need data updates:**
- `src/app/page.tsx` - Home page (just imports components)
- `src/app/about/page.tsx` - About page (static content)
- `src/app/contact/page.tsx` - Contact page (form only)
- `src/components/layout/` - Layout components (navigation, footer, header)
- `src/components/home/HeroSection.tsx` - Hero section (static)
- `src/components/home/TestimonialHome.tsx` - Testimonials (hardcoded for now)

---

## 🔄 Migration Steps

### Step 1: Backup Current Code
```bash
git add .
git commit -m "Backup before data structure migration"
```

### Step 2: Create Data Directory
```bash
mkdir -p src/data
```

### Step 3: Add Data Files
Copy the following files to your project:
1. `src/data/index.ts`
2. `src/data/blog-posts.ts`
3. `src/data/services.ts`

### Step 4: Update Pages
Replace the following files with updated versions:
1. `src/app/blog/page.tsx`
2. `src/app/blog/[slug]/page.tsx`
3. `src/app/services/page.tsx`

### Step 5: Update Components
Replace the following files with updated versions:
1. `src/components/home/ServicesOverview.tsx`
2. `src/components/home/FeaturedBlogPost.tsx`

### Step 6: Test Everything
```bash
npm run dev
```

Check these pages:
- [ ] Home page (http://localhost:3000)
- [ ] Services page (http://localhost:3000/services)
- [ ] Blog page (http://localhost:3000/blog)
- [ ] Individual blog post (http://localhost:3000/blog/benefits-of-therapeutic-exercise)

### Step 7: Verify Data Integration

Test these features:
- [ ] Services display correctly on services page
- [ ] Services display correctly on home page
- [ ] Blog posts display correctly on blog page
- [ ] Featured post displays on home page
- [ ] Individual blog posts load correctly
- [ ] Search functionality works on blog page
- [ ] Category filtering works on blog page
- [ ] Related posts show on blog post pages
- [ ] Service packages display correctly

---

## 🎯 What Changes for You

### Before (Hardcoded):
```typescript
const services = [
  { title: "Service 1", description: "..." },
  { title: "Service 2", description: "..." }
];
```

### After (Data-Driven):
```typescript
import { getAllServices } from '@/data';
const services = getAllServices();
```

### Benefits:
✅ Update content in one place  
✅ Type-safe data  
✅ Reusable across components  
✅ Easier to maintain  
✅ Ready for CMS migration  

---

## 🐛 Troubleshooting

### Import Errors
**Problem:** `Cannot find module '@/data'`  
**Solution:** Ensure `src/data/index.ts` exists and exports are correct

### Type Errors
**Problem:** TypeScript errors about data structure  
**Solution:** Check that `src/types/index.ts` has all type definitions

### Blog Posts Not Showing
**Problem:** Posts don't appear on blog page  
**Solution:** Check `getAllPosts()` is imported and called correctly

### Services Not Displaying
**Problem:** Services don't show on services page  
**Solution:** Verify `getAllServices()` import and icon mapping

### Featured Post Missing
**Problem:** No featured post on home page  
**Solution:** Ensure at least one post has `featured: true` in data file

---

## 📊 Data Structure Overview

### Blog Posts (`data/blog-posts.ts`)
```
blogPosts[] → Array of blog post objects
  ├── id: unique identifier
  ├── slug: URL-friendly name
  ├── title: post title
  ├── excerpt: short description
  ├── content: full HTML content
  ├── author: author object
  ├── publishedAt: date string
  ├── category: category name
  ├── tags: array of tags
  ├── featuredImage: image URL
  ├── readTime: e.g., "5 min read"
  └── featured: boolean (only ONE should be true)
```

### Services (`data/services.ts`)
```
services[] → Array of service objects
  ├── id: unique identifier
  ├── title: service name
  ├── description: full description
  ├── shortDescription: brief version
  ├── icon: Lucide icon name (e.g., "Dumbbell")
  ├── price: pricing string (e.g., "From R500")
  ├── duration: time string (e.g., "60 minutes")
  ├── features: array of benefit strings
  └── image: image URL/path
```

### Service Packages (`data/services.ts`)
```
servicePackages[] → Array of package objects
  ├── id: unique identifier
  ├── name: package name
  ├── sessions: number of sessions
  ├── discount: percentage off
  ├── price: total price in Rands
  ├── description: package description
  └── popular: boolean (optional)
```

---

## 🔍 How to Verify It's Working

### Test 1: Services Page
1. Navigate to `/services`
2. Should see 6 services loaded from data
3. Each service should have:
   - Icon (from Lucide)
   - Title
   - Description
   - 5 features
   - Pricing
   - Duration
4. Should see 3 packages at bottom

### Test 2: Blog Page
1. Navigate to `/blog`
2. Should see featured post at top
3. Should see 6 blog posts in grid
4. Test search bar - type "exercise"
5. Test category filters - click different categories
6. All posts should have images, metadata, author info

### Test 3: Individual Blog Post
1. Click any blog post
2. Should load full article with:
   - Title and metadata
   - Author info
   - Full content (formatted HTML)
   - Author bio at bottom
   - Related posts (3 posts from same category)

### Test 4: Home Page Integration
1. Navigate to `/`
2. Services section should show 4 services from data
3. Featured blog post should appear
4. All content should match data files

---

## 📝 Quick Reference: Available Functions

### From `@/data`:

#### Blog Functions:
```typescript
getAllPosts()                    // Get all posts, sorted by date
getPostBySlug(slug)              // Get single post by slug
getFeaturedPost()                // Get the featured post
getPostsByCategory(category)     // Filter by category
getAllCategories()               // Get all unique categories
getRelatedPosts(slug, limit)     // Get related posts (same category)
searchPosts(query)               // Search posts by query
```

#### Service Functions:
```typescript
getAllServices()                     // Get all services
getServiceById(id)                   // Get single service by id
getFeaturedServices(limit)           // Get first N services
getAllPackages()                     // Get all service packages
getPopularPackage()                  // Get the popular package
calculatePackageSavings(id, base)    // Calculate savings
```

---

## 🎨 Customization Guide

### Adding a New Blog Post
1. Open `src/data/blog-posts.ts`
2. Add new object to `blogPosts` array:
```typescript
{
  id: "7",
  slug: "new-post-slug",
  title: "Your New Post Title",
  excerpt: "Brief description...",
  content: `<p>Full HTML content...</p>`,
  author: {
    id: "author-1",
    name: "Dr. Sarah Johnson",
    role: "Clinical Exercise Specialist",
    bio: "Bio text...",
    avatar: "https://...",
  },
  publishedAt: "2024-03-20",
  category: "Exercise Therapy",
  tags: ["tag1", "tag2"],
  featuredImage: "https://...",
  readTime: "5 min read",
  featured: false,
}
```
3. Save file - post appears automatically!

### Adding a New Service
1. Open `src/data/services.ts`
2. Add new object to `services` array:
```typescript
{
  id: "new-service",
  title: "New Service Name",
  description: "Full description...",
  shortDescription: "Brief version...",
  icon: "IconName", // Must be valid Lucide icon
  price: "From R500 per session",
  duration: "60 minutes",
  features: [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5"
  ],
  image: "/images/services/new-service.jpg"
}
```
3. Save file - service appears automatically!

### Changing Featured Post
1. Open `src/data/blog-posts.ts`
2. Find current featured post (has `featured: true`)
3. Change to `featured: false`
4. Find new post to feature
5. Change to `featured: true`
6. Save - new featured post appears!

---

## ✨ Benefits Summary

### Before Data Structure:
❌ Content scattered across components  
❌ Hard to update without touching code  
❌ Duplicate data in multiple places  
❌ No type safety  
❌ Difficult to add new content  

### After Data Structure:
✅ All content in centralized data files  
✅ Update content without touching components  
✅ Single source of truth  
✅ Full TypeScript type safety  
✅ Easy to add new posts/services  
✅ Ready for CMS migration  
✅ Reusable helper functions  
✅ Better maintainability  

---

## 🚀 Next Steps After Migration

### 1. Update Content
- [ ] Replace sample blog posts with real content
- [ ] Update service descriptions and pricing
- [ ] Add real images to `/public/images/`
- [ ] Update author information

### 2. Enhance Functionality
- [ ] Add more blog posts
- [ ] Add more services if needed
- [ ] Create testimonials data file
- [ ] Add team members data file

### 3. Prepare for CMS
- [ ] Choose CMS (Contentful, Sanity, Strapi)
- [ ] Create CMS schema matching data types
- [ ] Build API integration layer
- [ ] Migrate data to CMS
- [ ] Update helper functions to fetch from CMS

### 4. Testing
- [ ] Test all pages thoroughly
- [ ] Check responsive design
- [ ] Test search and filters
- [ ] Verify all links work
- [ ] Check image loading

---

## 📞 Support & Resources

### Documentation Files:
- `DATA-STRUCTURE-README.md` - Complete usage guide
- `PROJECT-SUMMARY.md` - Full project overview
- This file - Migration checklist

### Key Files to Reference:
- `src/types/index.ts` - Type definitions
- `src/data/blog-posts.ts` - Blog data structure
- `src/data/services.ts` - Service data structure
- `src/data/index.ts` - Export configuration

### If You Need Help:
1. Check the README files
2. Review inline code comments
3. Look at existing examples in data files
4. Test in development environment
5. Use TypeScript errors as guidance

---

## ✅ Final Checklist

Before considering migration complete:

### Data Files:
- [ ] `src/data/index.ts` created
- [ ] `src/data/blog-posts.ts` created
- [ ] `src/data/services.ts` created
- [ ] All helper functions work

### Pages Updated:
- [ ] Blog listing page uses data
- [ ] Blog post page uses data
- [ ] Services page uses data

### Components Updated:
- [ ] ServicesOverview uses data
- [ ] FeaturedBlogPost uses data

### Testing Complete:
- [ ] Home page loads correctly
- [ ] Services page displays all services
- [ ] Blog page shows all posts
- [ ] Search works on blog page
- [ ] Filters work on blog page
- [ ] Individual blog posts load
- [ ] Related posts display
- [ ] No console errors
- [ ] No TypeScript errors

### Documentation:
- [ ] Read DATA-STRUCTURE-README.md
- [ ] Read PROJECT-SUMMARY.md
- [ ] Understand how to add content
- [ ] Know how to troubleshoot

---

**Migration Status:** Ready to implement ✅  
**Estimated Time:** 30-45 minutes  
**Difficulty:** Easy (just file replacement)  
**Risk Level:** Low (all changes are isolated)

Good luck with your migration! 🎉