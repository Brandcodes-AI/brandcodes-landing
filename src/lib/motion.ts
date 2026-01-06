/**
 * Motion Configuration for BrandCodes
 *
 * Design Rules (Hard Limits):
 * - Max 1 animated element per viewport
 * - No continuous loops above the fold
 * - All animations: 150-300ms
 * - All easing: ease-out
 * - QR always remains visibly scannable
 */

// Standardized durations (150-300ms range)
export const duration = {
  fast: 0.15,    // 150ms - micro-interactions, hovers
  normal: 0.2,   // 200ms - standard transitions
  slow: 0.3,     // 300ms - larger movements, emphasis
} as const;

// Ease-out cubic bezier for all animations
export const easing = {
  default: [0, 0, 0.2, 1] as const,  // ease-out
  smooth: [0.4, 0, 0.2, 1] as const, // ease-in-out for special cases
} as const;

// Stagger delays for sequential animations
export const stagger = {
  fast: 0.03,    // 30ms between items
  normal: 0.05,  // 50ms between items
  slow: 0.08,    // 80ms between items
} as const;

// Common animation variants for Framer Motion
export const variants = {
  // Fade in (simplest)
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Slide up and fade (most common)
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },

  // Slide from left
  slideLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  // Slide from right
  slideRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  // Scale up (for emphasis)
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
} as const;

// Standard transition config
export const transition = {
  fast: { duration: duration.fast, ease: easing.default },
  normal: { duration: duration.normal, ease: easing.default },
  slow: { duration: duration.slow, ease: easing.default },
} as const;

// Viewport options for scroll-triggered animations
export const viewportOptions = {
  once: true,        // Only animate once
  margin: '-50px',   // Trigger slightly before element is fully visible
  amount: 0.2,       // 20% of element must be visible
} as const;

// Helper to create staggered children animation
export const staggerContainer = (staggerDelay = stagger.normal) => ({
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      ease: easing.default,
    },
  },
});

// Helper for creating scroll-triggered animation props
export const scrollAnimation = (variant: keyof typeof variants = 'slideUp') => ({
  initial: variants[variant].initial,
  whileInView: variants[variant].animate,
  viewport: viewportOptions,
  transition: transition.normal,
});

// Scan line animation for CTA hover effect
export const scanLineAnimation = {
  initial: { x: '-100%', opacity: 0 },
  animate: {
    x: '100%',
    opacity: [0, 1, 1, 0],
  },
  transition: {
    duration: duration.slow,
    ease: easing.default,
  },
};

// QR pulse animation (hover-triggered only, not continuous)
export const qrPulseAnimation = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.9, 1],
  },
  transition: {
    duration: duration.slow,
    ease: easing.default,
  },
};
