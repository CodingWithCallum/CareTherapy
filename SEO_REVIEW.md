# SEO Review & Actionable Recommendations

This document provides a review of the website's Search Engine Optimization (SEO) based on the existing codebase. The analysis covers on-page and technical SEO factors and offers recommendations for improvement.

## Overall Summary

The website has a strong technical SEO foundation due to its use of Next.js, which provides excellent performance, clean URLs, and a mobile-friendly design out of the box. The content is well-structured and relevant. The main opportunities for improvement lie in enhancing on-page metadata, implementing structured data (Schema Markup), and ensuring search engines can efficiently crawl the site.

---

## 1. On-Page SEO

### 1.1. Title Tags & Meta Descriptions

**Analysis:**
- The root layout (`layout.tsx`) sets a good, general title and description: `CareTherapy | Professional Exercise and Rehabilitation Services`.
- The pages I created (`terms`, `privacy`, `sitemap`) and the blog posts (`[slug]/page.tsx` would need this) have unique `metadata` objects, which is excellent practice. Each page should have its own specific title and description.

**Recommendations:**
- **Ensure Every Page is Unique:** Audit all pages (About, Services, Contact, etc.) to ensure they each export their own `metadata` object with a unique, descriptive title and meta description.
- **Keyword Optimization:** While the titles are good, ensure the primary keyword for each page is included near the beginning of the title tag. For example, for the "Elderly Care" service page, a title could be: "Elderly Care & Mobility Services in Johannesburg | CareTherapy".

### 1.2. Header Tags (H1, H2, etc.)

**Analysis:**
- The pages use a logical heading structure. For example, the pages I created use an `<h1>` for the main page title and `<h2>` for major sections. This is great for both readability and SEO, as it helps search engines understand the content's structure.

**Recommendations:**
- **Maintain Consistency:** Continue this practice across all pages. Ensure there is only one `<h1>` per page, which should correspond to the page's main topic.

### 1.3. Image SEO (Alt Text)

**Analysis:**
- The site uses the `next/image` component, which is excellent for performance.
- The Logo image in `navigation.tsx` has `alt` text (`alt="Care Therapy Logo"`).

**Recommendations:**
- **Audit All Images:** Perform a check across all components to ensure that every `Image` component has a descriptive `alt` attribute. For decorative images, use an empty `alt=""`. For informative images, describe the image's content. For example, for a blog post image about stretching, `alt="A person performing a hamstring stretch in a well-lit room"` is much better than `alt="blog post image"`.

### 1.4. Internal Linking

**Analysis:**
- The website has a great internal linking structure thanks to the navigation, footer, and the new sitemap page.
- The blog posts in `blog-posts.ts` contain HTML content in a string.

**Recommendations:**
- **Contextual Internal Links:** Within the `content` of your blog posts and service descriptions, add links to other relevant pages on your site. For example, a blog post about "Post-Injury Rehabilitation" should link to your `/services#post-injury-rehabilitation` page. This helps distribute "link equity" throughout your site and guides users to relevant content.

---

## 2. Technical SEO

### 2.1. URL Structure

**Analysis:**
- The Next.js file-based routing creates clean, human-readable URLs (e.g., `/blog/benefits-of-therapeutic-exercise`). This is ideal for SEO.

**Recommendations:**
- No changes needed. Keep the structure as is.

### 2.2. Structured Data (Schema Markup)

**Analysis:**
- I have not found any evidence of structured data (like JSON-LD) being used. This is a major opportunity. Structured data provides explicit clues to search engines about the meaning of your content, which can result in "rich snippets" (e.g., star ratings, FAQs, article info) in search results.

**Recommendations:**
- **Implement Schema Markup:**
    - **For Blog Posts:** Use `Article` or `BlogPosting` schema to mark up your blog posts. This can show publication dates and author information in search results.
    - **For Services:** Use `Service` schema for each of your services, including descriptions and pricing information.
    - **For the Business:** Use `LocalBusiness` (or a more specific type like `MedicalBusiness`) schema on your homepage or contact page. This should include your business name, address, phone number, and opening hours.
    - **For FAQs:** Use `FAQPage` schema on your `/faq` page to make your questions and answers eligible for display directly in search results.

**Example for a Blog Post (using JSON-LD):**
You can add this to your blog post page component:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    // ... and so on
  }) }}
/>
```

### 2.3. `sitemap.xml` and `robots.txt`

**Analysis:**
- I have not found a `sitemap.xml` or `robots.txt` file. While we created a user-facing sitemap page, a `sitemap.xml` file is the standard way to inform search engines about all the pages on your site that are available for crawling. A `robots.txt` file tells them which pages *not* to crawl.

**Recommendations:**
- **Generate a `sitemap.xml`:** Next.js can dynamically generate a `sitemap.xml` file. This is crucial for ensuring all your pages, especially dynamic blog posts and service pages, are discovered by search engines. You can do this by creating a `sitemap.ts` (or `sitemap.js`) file in your `app` directory.
- **Create a `robots.txt`:** Create a `public/robots.txt` file. A basic setup would be:
  ```
  User-agent: *
  Allow: /
  Sitemap: [Your Website URL]/sitemap.xml
  ```
  This allows all crawlers to access your site and tells them where to find your sitemap.

## Summary of High-Priority Actions

1.  **Implement Structured Data (Schema Markup):** Start with `LocalBusiness` on the homepage and `Article` for your blog posts. This has a high potential for improving your appearance in search results.
2.  **Generate a `sitemap.xml`:** This is a fundamental technical SEO requirement. Use Next.js's capabilities to create a dynamic sitemap.
3.  **Create a `robots.txt` file:** A simple but essential file for crawler management.
4.  **Audit and Add Descriptive `alt` Text:** Go through all images and ensure they have meaningful alt text.
5.  **Add Contextual Internal Links:** Edit your blog and service content to include links to other relevant pages on your site.
