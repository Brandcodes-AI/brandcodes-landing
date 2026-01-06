import { motion } from 'framer-motion';
import { useState } from 'react';
import { duration, easing } from '../../lib/motion';

type QRVariant = 'default' | 'branded' | 'art' | 'gs1-strict';

interface QRCoreProps {
  variant?: QRVariant;
  size?: number;
  className?: string;
  showPulse?: boolean;
  interactive?: boolean;
}

/**
 * QRCore - Custom SVG QR visual component
 *
 * Design Rules:
 * - Static scannable core (always readable)
 * - Subtle outer pulse on hover (not continuous)
 * - Supports 4 style variants: default, branded, art, gs1-strict
 */
export default function QRCore({
  variant = 'default',
  size = 200,
  className = '',
  showPulse = true,
  interactive = true,
}: QRCoreProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Color schemes for each variant
  const variantStyles = {
    default: {
      primary: '#0055CC',     // electric-blue
      secondary: '#0A1628',   // deep-navy
      accent: '#E6F0FF',      // electric-blue-50
      background: '#FAFBFC',  // off-white
    },
    branded: {
      primary: '#0055CC',
      secondary: '#0055CC',
      accent: '#00FF88',      // neon-green accent
      background: '#FAFBFC',
    },
    art: {
      primary: '#0055CC',
      secondary: '#3385FF',   // electric-blue-400
      accent: '#00FF88',
      background: '#E6F0FF',
    },
    'gs1-strict': {
      primary: '#000000',     // Pure black for maximum scanability
      secondary: '#000000',
      accent: '#FFFFFF',
      background: '#FFFFFF',
    },
  };

  const colors = variantStyles[variant];

  // Generate a simplified QR-like pattern
  const generatePattern = () => {
    const modules = 7; // 7x7 grid for simplicity
    const moduleSize = size / (modules + 2); // Add padding
    const padding = moduleSize;
    const pattern: React.ReactNode[] = [];

    // QR finder patterns (3 corners)
    const finderPositions = [
      { x: 0, y: 0 },
      { x: modules - 3, y: 0 },
      { x: 0, y: modules - 3 },
    ];

    // Draw finder patterns
    finderPositions.forEach(({ x, y }, idx) => {
      // Outer square
      pattern.push(
        <rect
          key={`finder-outer-${idx}`}
          x={padding + x * moduleSize}
          y={padding + y * moduleSize}
          width={moduleSize * 3}
          height={moduleSize * 3}
          fill={colors.primary}
          rx={variant === 'art' ? 4 : 0}
        />
      );
      // Inner white square
      pattern.push(
        <rect
          key={`finder-inner-${idx}`}
          x={padding + (x + 0.5) * moduleSize}
          y={padding + (y + 0.5) * moduleSize}
          width={moduleSize * 2}
          height={moduleSize * 2}
          fill={colors.background}
          rx={variant === 'art' ? 3 : 0}
        />
      );
      // Center dot
      pattern.push(
        <rect
          key={`finder-center-${idx}`}
          x={padding + (x + 1) * moduleSize}
          y={padding + (y + 1) * moduleSize}
          width={moduleSize}
          height={moduleSize}
          fill={colors.secondary}
          rx={variant === 'art' ? 2 : 0}
        />
      );
    });

    // Add some data modules (simplified)
    const dataPositions = [
      { x: 4, y: 0 }, { x: 5, y: 1 }, { x: 4, y: 2 },
      { x: 0, y: 4 }, { x: 1, y: 5 }, { x: 2, y: 4 },
      { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 4 },
      { x: 4, y: 5 }, { x: 5, y: 6 }, { x: 6, y: 6 },
      { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 3 },
    ];

    dataPositions.forEach(({ x, y }, idx) => {
      pattern.push(
        <rect
          key={`data-${idx}`}
          x={padding + x * moduleSize}
          y={padding + y * moduleSize}
          width={moduleSize * 0.9}
          height={moduleSize * 0.9}
          fill={colors.secondary}
          rx={variant === 'art' ? 2 : 0}
        />
      );
    });

    return pattern;
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {/* Pulse effect layer (behind QR) */}
      {showPulse && (
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(135deg, ${colors.accent}40, ${colors.primary}20)`,
          }}
          animate={isHovered ? {
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5],
          } : {
            scale: 1,
            opacity: 0,
          }}
          transition={{
            duration: duration.slow,
            ease: easing.default,
          }}
        />
      )}

      {/* Main QR SVG */}
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative z-10"
        animate={isHovered ? {
          scale: 1.02,
        } : {
          scale: 1,
        }}
        transition={{
          duration: duration.normal,
          ease: easing.default,
        }}
      >
        {/* Background */}
        <rect
          x={0}
          y={0}
          width={size}
          height={size}
          fill={colors.background}
          rx={variant === 'art' ? 12 : 4}
        />

        {/* QR Pattern */}
        {generatePattern()}

        {/* Accent frame for branded/art variants */}
        {(variant === 'branded' || variant === 'art') && (
          <rect
            x={2}
            y={2}
            width={size - 4}
            height={size - 4}
            fill="none"
            stroke={colors.accent}
            strokeWidth={2}
            rx={variant === 'art' ? 10 : 2}
            opacity={0.6}
          />
        )}
      </motion.svg>

      {/* GS1 badge for gs1-strict variant */}
      {variant === 'gs1-strict' && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-deep-navy text-white text-[10px] px-2 py-0.5 rounded font-medium">
          GS1 Digital Link
        </div>
      )}
    </motion.div>
  );
}
