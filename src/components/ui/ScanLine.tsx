import { motion } from 'framer-motion';
import { duration, easing } from '../../lib/motion';

interface ScanLineProps {
  isActive: boolean;
  direction?: 'horizontal' | 'vertical';
  color?: string;
  className?: string;
}

/**
 * ScanLine - Neon green sweep animation
 *
 * Design Rules:
 * - Single sweep on hover trigger
 * - 300ms duration, no loops
 * - Used in CTA and QR interactions
 * - Neon green color only
 */
export default function ScanLine({
  isActive,
  direction = 'horizontal',
  color = '#00FF88', // neon-green
  className = '',
}: ScanLineProps) {
  const isHorizontal = direction === 'horizontal';

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        [isHorizontal ? 'height' : 'width']: '2px',
        [isHorizontal ? 'width' : 'height']: '100%',
        [isHorizontal ? 'left' : 'top']: 0,
        background: `linear-gradient(${isHorizontal ? '90deg' : '180deg'},
          transparent 0%,
          ${color}80 20%,
          ${color} 50%,
          ${color}80 80%,
          transparent 100%
        )`,
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}60`,
      }}
      initial={{
        [isHorizontal ? 'y' : 'x']: '-10%',
        opacity: 0,
      }}
      animate={isActive ? {
        [isHorizontal ? 'y' : 'x']: '110%',
        opacity: [0, 1, 1, 0],
      } : {
        [isHorizontal ? 'y' : 'x']: '-10%',
        opacity: 0,
      }}
      transition={{
        duration: duration.slow,
        ease: easing.default,
      }}
    />
  );
}

/**
 * ScanLineContainer - Wrapper that triggers scan line on hover
 */
interface ScanLineContainerProps {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export function ScanLineContainer({
  children,
  direction = 'horizontal',
  className = '',
}: ScanLineContainerProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      initial="idle"
    >
      {children}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          [direction === 'horizontal' ? 'height' : 'width']: '2px',
          [direction === 'horizontal' ? 'width' : 'height']: '100%',
          [direction === 'horizontal' ? 'left' : 'top']: 0,
          background: `linear-gradient(${direction === 'horizontal' ? '90deg' : '180deg'},
            transparent 0%,
            #00FF8880 20%,
            #00FF88 50%,
            #00FF8880 80%,
            transparent 100%
          )`,
          boxShadow: '0 0 20px #00FF88, 0 0 40px #00FF8860',
        }}
        variants={{
          idle: {
            [direction === 'horizontal' ? 'y' : 'x']: '-10%',
            opacity: 0,
          },
          hover: {
            [direction === 'horizontal' ? 'y' : 'x']: '110%',
            opacity: [0, 1, 1, 0],
          },
        }}
        transition={{
          duration: duration.slow,
          ease: easing.default,
        }}
      />
    </motion.div>
  );
}
