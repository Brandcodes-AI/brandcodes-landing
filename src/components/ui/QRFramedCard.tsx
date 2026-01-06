import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { duration, easing } from '../../lib/motion';

interface QRFramedCardProps {
  children: ReactNode;
  className?: string;
  cornerSize?: number;
  variant?: 'light' | 'dark';
}

/**
 * QRFramedCard - Card with QR-inspired corner decorations
 *
 * Design Rules:
 * - Used for metrics display in Metrics & Trust section
 * - Animated counters display inside these cards
 * - Subtle hover effect
 */
export default function QRFramedCard({
  children,
  className = '',
  cornerSize = 16,
  variant = 'light',
}: QRFramedCardProps) {
  const colors = {
    light: {
      bg: 'bg-white',
      border: 'border-deep-navy-100',
      corner: '#0055CC', // electric-blue
    },
    dark: {
      bg: 'bg-deep-navy-500',
      border: 'border-deep-navy-400',
      corner: '#00FF88', // neon-green
    },
  };

  const style = colors[variant];

  // Corner pattern component
  const Corner = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
    const positions = {
      tl: 'top-0 left-0',
      tr: 'top-0 right-0 rotate-90',
      bl: 'bottom-0 left-0 -rotate-90',
      br: 'bottom-0 right-0 rotate-180',
    };

    return (
      <svg
        className={`absolute ${positions[position]}`}
        width={cornerSize}
        height={cornerSize}
        viewBox="0 0 16 16"
      >
        {/* Outer L-shape */}
        <path
          d="M0 0 H16 V4 H4 V16 H0 Z"
          fill={style.corner}
        />
        {/* Inner accent square */}
        <rect
          x={6}
          y={6}
          width={4}
          height={4}
          fill={variant === 'dark' ? '#0055CC' : '#00FF88'}
          opacity={0.6}
        />
      </svg>
    );
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-lg
        ${style.bg} ${style.border} border
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        boxShadow: variant === 'dark'
          ? '0 8px 30px rgba(0, 255, 136, 0.15)'
          : '0 8px 30px rgba(0, 85, 204, 0.1)',
      }}
      transition={{
        duration: duration.normal,
        ease: easing.default,
      }}
    >
      {/* Corner decorations */}
      <Corner position="tl" />
      <Corner position="tr" />
      <Corner position="bl" />
      <Corner position="br" />

      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * QRFramedCardGrid - Grid layout for multiple QR framed cards
 */
interface QRFramedCardGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function QRFramedCardGrid({
  children,
  columns = 4,
  className = '',
}: QRFramedCardGridProps) {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-4 ${columnClasses[columns]} ${className}`}>
      {children}
    </div>
  );
}
