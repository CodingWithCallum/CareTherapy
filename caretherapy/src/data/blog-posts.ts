import { BlogPost } from "@/types";

/**
 * Blog Posts Data File
 * 
 * This file contains all blog post data for the CARE Therapy website.
 * Each post follows the BlogPost type defined in /types/index.ts
 * 
 * To add a new blog post:
 * 1. Copy an existing post object
 * 2. Update all fields with new content
 * 3. Ensure the slug is unique and URL-friendly
 * 4. Update the publishedAt date
 * 5. Choose appropriate category and tags
 */

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "benefits-of-therapeutic-exercise",
    title: "The Long-Term Benefits of Therapeutic Exercise",
    excerpt: "Discover how consistent therapeutic exercise can improve your quality of life, prevent injuries, and enhance overall physical performance.",
    content: `
      <p>Therapeutic exercise is more than just a temporary fix for injuries or discomfort. When approached systematically and consistently, it becomes a powerful tool for long-term health, performance enhancement, and injury prevention.</p>

      <h2>Understanding Therapeutic Exercise</h2>
      <p>Unlike general fitness programs, therapeutic exercise is specifically designed to address individual movement dysfunctions, restore optimal function, and prevent future injuries. It's a personalized approach that considers your unique body mechanics, lifestyle, and goals.</p>

      <h2>Key Long-Term Benefits</h2>
      
      <h3>1. Improved Movement Quality</h3>
      <p>Regular therapeutic exercise helps reprogram movement patterns, leading to more efficient and safer movements in daily activities and sports. Over time, your body learns to move optimally, reducing strain on joints and muscles.</p>

      <h3>2. Enhanced Strength and Stability</h3>
      <p>Progressive therapeutic exercise builds functional strength that translates to real-world activities. This isn't just about lifting heavier weights—it's about having the strength and stability to perform daily tasks with ease and confidence.</p>

      <h3>3. Injury Prevention</h3>
      <p>Perhaps the most valuable benefit is injury prevention. By addressing movement compensations and building resilience, therapeutic exercise significantly reduces your risk of both acute injuries and chronic overuse problems.</p>

      <h3>4. Better Posture and Alignment</h3>
      <p>Modern lifestyles often lead to postural problems. Therapeutic exercise corrects these issues, leading to better alignment, reduced pain, and improved function in all areas of life.</p>

      <h3>5. Increased Performance</h3>
      <p>Whether you're an athlete or simply want to perform better in daily activities, therapeutic exercise optimizes your body's capabilities. Better movement patterns mean better performance in everything you do.</p>

      <h2>The Importance of Consistency</h2>
      <p>The key to unlocking these benefits is consistency. While you may notice some improvements quickly, the most profound changes occur over weeks and months of regular practice. Think of therapeutic exercise as an investment in your long-term health and quality of life.</p>

      <h2>Getting Started</h2>
      <p>Working with a qualified exercise therapist ensures you're performing exercises correctly and progressing appropriately. At CARE Therapy, we design personalized programs that fit your lifestyle and goals, making it easier to stay consistent and see results.</p>

      <p>Ready to experience these benefits for yourself? Contact us today to schedule your initial assessment and start your journey toward better movement and lasting health.</p>
    `,
    author: {
      id: "author-1",
      name: "Dr. Sarah Johnson",
      role: "Clinical Exercise Specialist",
      bio: "Dr. Johnson has over 15 years of experience in therapeutic exercise and rehabilitation, specializing in movement optimization and injury prevention.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    publishedAt: "2024-03-15",
    category: "Exercise Therapy",
    tags: ["therapeutic exercise", "injury prevention", "movement quality", "rehabilitation"],
    featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=60",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "elderly-mobility-tips",
    title: "5 Essential Mobility Tips for Seniors",
    excerpt: "Simple exercises and strategies to maintain independence, improve balance, and reduce fall risk as you age.",
    content: `
      <p>Maintaining mobility and independence is crucial for quality of life as we age. These five essential tips can help seniors stay active, reduce fall risk, and continue enjoying their favorite activities.</p>

      <h2>1. Practice Balance Exercises Daily</h2>
      <p>Balance naturally declines with age, but it can be improved with consistent practice. Simple exercises like standing on one foot, heel-to-toe walks, and tai chi movements can significantly enhance stability.</p>

      <h3>Simple Balance Exercise to Try:</h3>
      <p>Stand near a counter or sturdy chair for support. Lift one foot off the ground and hold for 10 seconds. Switch feet. Repeat 3 times on each side. As you improve, try doing this without holding on.</p>

      <h2>2. Strengthen Your Core and Legs</h2>
      <p>Strong core and leg muscles are essential for maintaining balance and preventing falls. Focus on exercises that target these areas, such as chair squats, leg raises, and gentle core work.</p>

      <h2>3. Stay Flexible with Regular Stretching</h2>
      <p>Flexibility helps maintain range of motion and reduces the risk of injury. Dedicate 10-15 minutes daily to gentle stretching, focusing on major muscle groups.</p>

      <h2>4. Walk Daily for Cardiovascular Health</h2>
      <p>Walking is one of the best exercises for seniors. It improves cardiovascular health, strengthens bones, and helps maintain a healthy weight. Aim for 30 minutes most days of the week.</p>

      <h2>5. Work with a Professional</h2>
      <p>An exercise therapist can design a personalized program that addresses your specific needs and limitations. Professional guidance ensures you're exercising safely and effectively.</p>

      <h2>Safety First</h2>
      <p>Always consult with your healthcare provider before starting a new exercise program. At CARE Therapy, we specialize in creating safe, effective exercise programs for seniors that can be done in the comfort of your own home.</p>
    `,
    author: {
      id: "author-2",
      name: "Michael Chen",
      role: "Senior Exercise Therapist",
      bio: "Michael specializes in elderly care and has helped hundreds of seniors maintain their independence through targeted exercise programs.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    publishedAt: "2024-03-10",
    category: "Elderly Care",
    tags: ["elderly care", "mobility", "balance", "fall prevention", "seniors"],
    featuredImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200&auto=format&fit=crop&q=60",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "3",
    slug: "sports-injury-prevention",
    title: "Preventing Sports Injuries: A Proactive Approach",
    excerpt: "Learn the key principles of injury prevention for athletes, from proper warm-ups to strength training protocols.",
    content: `
      <p>Sports injuries can sideline athletes for weeks or even months. However, many injuries are preventable with the right approach to training, preparation, and recovery.</p>

      <h2>The Foundation: Proper Warm-Up</h2>
      <p>A comprehensive warm-up prepares your body for the demands of sport. It should include dynamic stretching, sport-specific movements, and gradual intensity increases.</p>

      <h3>Effective Warm-Up Structure:</h3>
      <p>Start with 5-10 minutes of light cardiovascular activity, followed by dynamic stretching targeting major muscle groups. Finish with sport-specific movements at gradually increasing intensity.</p>

      <h2>Strength Training for Injury Prevention</h2>
      <p>Building strength in key muscle groups creates resilience and reduces injury risk. Focus on compound movements and exercises that address common weak points in your sport.</p>

      <h2>Flexibility and Mobility Work</h2>
      <p>Maintaining good flexibility and joint mobility allows for proper movement patterns and reduces strain on muscles and connective tissues.</p>

      <h2>Recovery is Training Too</h2>
      <p>Adequate recovery allows your body to adapt to training stress and repair itself. Prioritize sleep, nutrition, and active recovery days.</p>

      <h2>Listen to Your Body</h2>
      <p>Pain is your body's warning system. Don't ignore early signs of overuse or injury. Early intervention can prevent minor issues from becoming major problems.</p>

      <h2>Work with Professionals</h2>
      <p>At CARE Therapy, we help athletes optimize their training, prevent injuries, and perform at their best. Our sports performance programs are designed to give you a competitive edge while keeping you healthy.</p>
    `,
    author: {
      id: "author-1",
      name: "Dr. Sarah Johnson",
      role: "Clinical Exercise Specialist",
      bio: "Dr. Johnson has over 15 years of experience in therapeutic exercise and rehabilitation, specializing in movement optimization and injury prevention.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    publishedAt: "2024-03-05",
    category: "Sports Performance",
    tags: ["sports", "injury prevention", "athletes", "training", "performance"],
    featuredImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&auto=format&fit=crop&q=60",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: "4",
    slug: "understanding-movement-assessment",
    title: "What to Expect During Your Movement Assessment",
    excerpt: "A comprehensive guide to understanding how movement assessments work and why they're crucial for personalized treatment.",
    content: `
      <p>A movement assessment is the foundation of effective therapeutic exercise. It provides valuable insights into how your body moves, identifies areas of dysfunction, and guides the creation of your personalized program.</p>

      <h2>Why Movement Assessment Matters</h2>
      <p>Everyone moves differently based on their history, injuries, lifestyle, and physical characteristics. A thorough assessment ensures your exercise program addresses your specific needs rather than applying a one-size-fits-all approach.</p>

      <h2>What We Assess</h2>
      
      <h3>1. Movement Patterns</h3>
      <p>We observe how you perform fundamental movements like squatting, lunging, pushing, and pulling. This reveals compensations and limitations that may contribute to pain or dysfunction.</p>

      <h3>2. Strength and Stability</h3>
      <p>Testing specific muscle groups helps identify imbalances that could lead to injury or limit performance.</p>

      <h3>3. Flexibility and Mobility</h3>
      <p>We assess range of motion in key joints to identify restrictions that might affect your movement quality.</p>

      <h3>4. Postural Analysis</h3>
      <p>Your posture reveals much about how you use your body daily. We look for patterns that might contribute to discomfort or dysfunction.</p>

      <h2>The Assessment Process</h2>
      <p>Your initial assessment typically takes 60-90 minutes. We'll discuss your goals, medical history, and current concerns before moving through a series of movements and tests.</p>

      <h2>After the Assessment</h2>
      <p>We'll explain our findings in clear, understandable terms and create a customized exercise program designed to address your specific needs and goals.</p>

      <h2>Ready to Get Started?</h2>
      <p>Book your movement assessment today and take the first step toward better movement, reduced pain, and improved performance.</p>
    `,
    author: {
      id: "author-2",
      name: "Michael Chen",
      role: "Senior Exercise Therapist",
      bio: "Michael specializes in elderly care and has helped hundreds of seniors maintain their independence through targeted exercise programs.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    publishedAt: "2024-02-28",
    category: "Assessment",
    tags: ["assessment", "movement screening", "evaluation", "diagnosis"],
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=60",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "5",
    slug: "post-injury-rehabilitation-guide",
    title: "Your Complete Guide to Post-Injury Rehabilitation",
    excerpt: "Navigate your recovery journey with confidence. Learn about the stages of rehabilitation and what to expect along the way.",
    content: `
      <p>Recovering from an injury can be challenging, but understanding the rehabilitation process helps you stay motivated and achieve the best possible outcome.</p>

      <h2>The Stages of Rehabilitation</h2>

      <h3>Stage 1: Protection and Pain Management</h3>
      <p>Immediately after injury, the focus is on protecting the injured area, managing pain and inflammation, and beginning gentle movement within tolerance.</p>

      <h3>Stage 2: Restoring Movement</h3>
      <p>As healing progresses, we work on restoring full range of motion and beginning strengthening exercises.</p>

      <h3>Stage 3: Building Strength</h3>
      <p>Once movement is restored, we focus on rebuilding strength in the affected area and surrounding muscles.</p>

      <h3>Stage 4: Functional Training</h3>
      <p>Training becomes more specific to your activities and goals, preparing you to return to sport or daily activities.</p>

      <h3>Stage 5: Return to Activity</h3>
      <p>A gradual, monitored return to your normal activities ensures you're ready both physically and mentally.</p>

      <h2>Keys to Successful Rehabilitation</h2>

      <h3>Patience</h3>
      <p>Healing takes time. Rushing the process increases the risk of re-injury.</p>

      <h3>Consistency</h3>
      <p>Regular exercise and adherence to your program are crucial for optimal recovery.</p>

      <h3>Communication</h3>
      <p>Keep your therapist informed about your progress, concerns, and any setbacks.</p>

      <h2>Common Challenges</h2>
      <p>Rehabilitation isn't always linear. Setbacks are normal and can be learning opportunities. Stay positive and trust the process.</p>

      <h2>When to Seek Help</h2>
      <p>If you're experiencing increased pain, unusual symptoms, or lack of progress, contact your therapist. Early intervention can prevent complications.</p>

      <h2>Your Partner in Recovery</h2>
      <p>At CARE Therapy, we guide you through every stage of rehabilitation with evidence-based treatment and compassionate support. Contact us to start your recovery journey.</p>
    `,
    author: {
      id: "author-1",
      name: "Dr. Sarah Johnson",
      role: "Clinical Exercise Specialist",
      bio: "Dr. Johnson has over 15 years of experience in therapeutic exercise and rehabilitation, specializing in movement optimization and injury prevention.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    publishedAt: "2024-02-22",
    category: "Rehabilitation",
    tags: ["rehabilitation", "injury recovery", "healing", "post-injury"],
    featuredImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&auto=format&fit=crop&q=60",
    readTime: "10 min read",
    featured: false,
  },
  {
    id: "6",
    slug: "home-exercise-equipment-guide",
    title: "Essential Home Exercise Equipment for Therapy",
    excerpt: "Budget-friendly equipment recommendations to support your therapeutic exercises at home between sessions.",
    content: `
      <p>You don't need a fully equipped gym to do effective therapeutic exercise at home. With a few key pieces of equipment, you can perform most exercises prescribed by your therapist.</p>

      <h2>Must-Have Equipment</h2>

      <h3>1. Resistance Bands (R200-500)</h3>
      <p>Versatile and portable, resistance bands are perfect for strength training, stretching, and rehabilitation exercises. Get a set with varying resistance levels.</p>

      <h3>2. Foam Roller (R300-600)</h3>
      <p>Essential for self-myofascial release, mobility work, and recovery. Helps reduce muscle tension and improve flexibility.</p>

      <h3>3. Exercise Mat (R200-800)</h3>
      <p>Provides cushioning for floor exercises and stretching. Choose one that's thick enough for comfort but stable for balance work.</p>

      <h3>4. Stability Ball (R200-400)</h3>
      <p>Great for core strengthening, balance training, and adding variety to exercises. Choose a size appropriate for your height.</p>

      <h2>Nice-to-Have Equipment</h2>

      <h3>Small Hand Weights (R300-1000)</h3>
      <p>Useful for progression but not essential initially. Start with 1-5kg depending on your strength level.</p>

      <h3>Balance Disc or Cushion (R200-500)</h3>
      <p>Adds a balance challenge to standing exercises and improves proprioception.</p>

      <h3>Massage Ball (R50-200)</h3>
      <p>Perfect for targeting specific tight spots and trigger points.</p>

      <h2>Budget-Friendly Alternatives</h2>
      <p>Don't have budget for equipment? Use household items! Water bottles for weights, towels for sliding exercises, stairs for step-ups, and walls for support.</p>

      <h2>Quality Matters</h2>
      <p>While budget is important, invest in quality equipment that will last. Poor quality resistance bands can snap, and unstable balls can be dangerous.</p>

      <h2>Storage and Space</h2>
      <p>All this equipment can be stored in a small space. A closet or under-bed storage is usually sufficient.</p>

      <h2>Getting Started</h2>
      <p>Your CARE Therapy therapist will recommend specific equipment based on your program. We can also demonstrate proper use during your sessions.</p>
    `,
    author: {
      id: "author-2",
      name: "Michael Chen",
      role: "Senior Exercise Therapist",
      bio: "Michael specializes in elderly care and has helped hundreds of seniors maintain their independence through targeted exercise programs.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    publishedAt: "2024-02-15",
    category: "Equipment",
    tags: ["equipment", "home exercise", "budget", "fitness gear"],
    featuredImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&auto=format&fit=crop&q=60",
    readTime: "5 min read",
    featured: false,
  },
];

/**
 * Helper Functions for Blog Data
 */

// Get all blog posts
export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Get a single post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Get featured post
export const getFeaturedPost = (): BlogPost | undefined => {
  return blogPosts.find(post => post.featured);
};

// Get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return getAllPosts();
  return blogPosts.filter(post => post.category === category);
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ["All", ...Array.from(new Set(categories))];
};

// Get related posts (by category, excluding current post)
export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.slug !== currentSlug && 
      post.category === currentPost.category
    )
    .slice(0, limit);
};

/**
 * Get a random blog post for "I'm Feeling Lucky"
 */
export const getRandomPost = (): BlogPost | undefined => {
  if (blogPosts.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * blogPosts.length);
  return blogPosts[randomIndex];
};

/**
 * Get most popular posts (currently returns most recent, but you can add view tracking later)
 * @param limit - Number of posts to return
 */
export const getPopularPosts = (limit: number = 6): BlogPost[] => {
  // For now, return most recent posts
  // In the future, you could track views and sort by popularity
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

/**
 * Get recent posts
 * @param limit - Number of posts to return
 */
export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};

// Search posts by query
export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

