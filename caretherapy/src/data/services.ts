import { Service } from "@/types";

/**
 * Services Data File
 * 
 * This file contains all service offerings for CARE Therapy.
 * Each service follows the Service type defined in /types/index.ts
 * 
 * To add a new service:
 * 1. Copy an existing service object
 * 2. Update all fields with new content
 * 3. Ensure the id is unique
 * 4. Add relevant features/benefits
 * 5. Update pricing information
 */

export const services: Service[] = [
  {
    id: "adapted-exercise",
    title: "Adapted Functional Fitness",
    description: "Our adapted functional exercise programs are designed to address specific movement dysfunctions, improve strength, flexibility, and restore optimal physical function. Whether recovering from injury or preventing future issues, we create personalized plans tailored to your needs.",
    shortDescription: "Customized exercise programs to restore function and improve movement quality.",
    icon: "Dumbbell",
    price: "R800 per session",
    duration: "60 minutes",
    features: [
      "Improved strength and flexibility",
      "Enhanced movement patterns",
      "Injury prevention",
      "Pain reduction",
      "Better posture and alignment"
    ],
    image: "/images/services/therapeutic-exercise.jpg"
  },
  {
    id: "stretching-therapy",
    title: "Assisted and PnF Stretching",
    description: "Deeply effective assisted stretching techniques including PnF (Proprioceptive Neuromuscular Facilitation) to dramatically improve flexibility, range of motion, and muscle function.",
    shortDescription: "Professional assisted stretching for maximum flexibility and performance.",
    icon: "Zap",
    price: "R450 (30min) / R800 (60min)",
    duration: "30 or 60 minutes",
    features: [
      "Improved range of motion",
      "Reduced muscle tension",
      "Enhanced athletic performance",
      "Postural correction",
      "Relaxation and recovery"
    ],
    image: "/images/services/stretching.jpg"
  },
  {
    id: "elderly-care",
    title: "Older adults Wellness and adapted exercise",
    description: "Our specialized programs for older adults focus on maintaining and improving mobility, balance, and functional independence. We help you stay active, reduce fall risk, and maintain your quality of life.",
    shortDescription: "Maintaining independence and improving quality of life for older adults.",
    icon: "Users",
    price: "R800 per session",
    duration: "60 minutes",
    features: [
      "Fall prevention strategies",
      "Balance and coordination training",
      "Strength maintenance",
      "Functional movement for daily activities",
      "Social engagement opportunities"
    ],
    image: "/images/services/elderly-care.jpg"
  },
  {
    id: "high-performance-coaching",
    title: "High-Performance Coaching",
    description: "Elevate your physical and mental performance with our elite coaching. Focused on movement efficiency, strength development, and injury resilience for athletes and high-performers.",
    shortDescription: "Elite coaching for athletes and high-achievers looking to push their limits.",
    icon: "Trophy",
    price: "R800 per session",
    duration: "60 minutes",
    features: [
      "Advanced strength & conditioning",
      "Movement optimization",
      "Performance metrics tracking",
      "Injury resilience building",
      "Sport-specific development"
    ],
    image: "/images/services/performance.jpg"
  },
  {
    id: "movement-assessment",
    title: "Movement Assessment",
    description: "Our detailed movement assessments identify compensations, imbalances, and areas of dysfunction. Using evidence-based screening tools, we create a roadmap for your adapted exercise journey.",
    shortDescription: "Comprehensive analysis to identify movement dysfunctions and imbalances.",
    icon: "Activity",
    price: "R800 per assessment",
    duration: "60 minutes",
    features: [
      "Identify movement compensations",
      "Assess strength and flexibility",
      "Postural analysis",
      "Functional movement screening",
      "Personalized recommendations"
    ],
    image: "/images/services/assessment.jpg"
  },
  {
    id: "post-injury-rehabilitation",
    title: "Post-injury Recovery",
    description: "Our rehabilitation programs help you safely return to your activities after injury or surgery. We focus on progressive loading, movement re-education, and building resilience to prevent re-injury.",
    shortDescription: "Guided recovery programs to restore function after injury or surgery.",
    icon: "Heart",
    price: "R800 per session",
    duration: "60 minutes",
    features: [
      "Structured recovery pathway",
      "Progressive exercise protocols",
      "Movement re-education",
      "Scar tissue management",
      "Return to sport/activity planning"
    ],
    image: "/images/services/rehabilitation.jpg"
  },
  {
    id: "home-sessions",
    title: "Mobile Home Sessions",
    description: "We bring our expertise to you! Our mobile service delivers professional adapted exercise care in your home, community setting, or preferred location, making quality care accessible and convenient.",
    shortDescription: "Convenient therapy sessions in the comfort of your own home.",
    icon: "Home",
    price: "R800 per session",
    duration: "60 minutes",
    features: [
      "No travel required",
      "Familiar environment",
      "Flexible scheduling",
      "Real-world training setting",
      "Family involvement opportunities"
    ],
    image: "/images/services/mobile-sessions.jpg"
  }
];

/**
 * Service Packages
 */
export interface ServicePackage {
  id: string;
  name: string;
  sessions: number;
  discount: number; // percentage
  price: number; // in Rands
  description: string;
  popular?: boolean;
}

export const servicePackages: ServicePackage[] = [
  {
    id: "starter",
    name: "Starter Package",
    sessions: 5,
    discount: 5,
    price: 2375,
    description: "Perfect for getting started with your adapted exercise journey"
  },
  {
    id: "momentum",
    name: "Momentum Package",
    sessions: 10,
    discount: 10,
    price: 4500,
    description: "Our most popular package for consistent progress",
    popular: true
  },
  {
    id: "transformation",
    name: "Transformation Package",
    sessions: 20,
    discount: 15,
    price: 8500,
    description: "For comprehensive long-term rehabilitation"
  }
];

/**
 * Helper Functions for Service Data
 */

// Get all services
export const getAllServices = (): Service[] => {
  return services;
};

// Get a single service by id
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Get services for overview/preview (e.g., home page)
export const getFeaturedServices = (limit: number = 4): Service[] => {
  return services.slice(0, limit);
};

// Get all packages
export const getAllPackages = (): ServicePackage[] => {
  return servicePackages;
};

// Calculate package savings
export const calculatePackageSavings = (packageId: string, basePrice: number = 500): number => {
  const pkg = servicePackages.find(p => p.id === packageId);
  if (!pkg) return 0;

  const regularPrice = basePrice * pkg.sessions;
  const savings = regularPrice - pkg.price;
  return savings;
};

// Get popular package
export const getPopularPackage = (): ServicePackage | undefined => {
  return servicePackages.find(pkg => pkg.popular);
};