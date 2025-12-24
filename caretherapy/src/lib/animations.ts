/**
 * Animation Constants and Utilities
 *
 * Centralized animation configurations for consistent motion across the application.
 * Uses Framer Motion (via motion package) for animations.
 */

import type { Variants } from "motion/react";

// ============================================================================
// TIMING CONSTANTS
// ============================================================================

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
} as const;

export const ANIMATION_DELAY = {
  none: 0,
  short: 0.1,
  medium: 0.2,
  long: 0.3,
} as const;

export const STAGGER_DELAY = 0.1;

// ============================================================================
// EASING FUNCTIONS
// ============================================================================

export const EASING = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  sharp: [0.4, 0, 0.6, 1],
} as const;

// ============================================================================
// COMMON ANIMATION VARIANTS
// ============================================================================

/**
 * Fade in animation from transparent to visible
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade in with upward movement
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade in with downward movement
 */
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade in with leftward movement
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Fade in with rightward movement
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Scale up animation
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.normal,
      ease: EASING.easeOut,
    },
  },
};

/**
 * Container animation for staggered children
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: ANIMATION_DELAY.medium,
    },
  },
};

/**
 * Child item for staggered animations
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.fast,
      ease: EASING.easeOut,
    },
  },
};

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================

/**
 * Standard viewport configuration for scroll-triggered animations
 */
export const viewportConfig = {
  once: true,
  amount: 0.3,
  margin: "-100px",
} as const;

/**
 * Viewport configuration for elements that should trigger earlier
 */
export const viewportConfigEarly = {
  once: true,
  amount: 0.1,
  margin: "-50px",
} as const;

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

/**
 * Subtle scale on hover
 */
export const hoverScale = {
  scale: 1.05,
  transition: { duration: ANIMATION_DURATION.fast },
};

/**
 * Lift effect on hover
 */
export const hoverLift = {
  y: -5,
  transition: { duration: ANIMATION_DURATION.fast },
};

/**
 * Glow effect on hover
 */
export const hoverGlow = {
  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
  transition: { duration: ANIMATION_DURATION.fast },
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Create a custom fade in variant with specific delay
 * @param delay - Delay in seconds
 */
export function createFadeInVariant(delay: number = 0): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATION.normal,
        delay,
        ease: EASING.easeOut,
      },
    },
  };
}

/**
 * Create a stagger container with custom delay
 * @param staggerDelay - Delay between children
 * @param delayChildren - Initial delay before first child
 */
export function createStaggerContainer(
  staggerDelay: number = STAGGER_DELAY,
  delayChildren: number = ANIMATION_DELAY.medium
): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

// ============================================================================
// USAGE EXAMPLES
// ============================================================================

/*
Example 1: Basic fade in animation
--------------------------------------
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>

Example 2: Scroll-triggered animation
--------------------------------------
import { motion } from "motion/react";
import { fadeInUp, viewportConfig } from "@/lib/animations";

<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportConfig}
>
  Content
</motion.div>

Example 3: Staggered children
--------------------------------------
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";

<motion.div
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>

Example 4: Custom delay
--------------------------------------
import { createFadeInVariant } from "@/lib/animations";

const customVariant = createFadeInVariant(0.5);

<motion.div
  variants={customVariant}
  initial="hidden"
  animate="visible"
>
  Content
</motion.div>
*/
