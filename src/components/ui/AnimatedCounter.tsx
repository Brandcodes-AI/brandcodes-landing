import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { duration } from '../../lib/motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  duration?: number;
}

/**
 * AnimatedCounter - Number counter that animates on scroll-into-view
 *
 * Design Rules:
 * - Triggers once when scrolled into view
 * - Smooth spring animation
 * - Used in Metrics & Trust section
 */
export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
  duration: animDuration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: animDuration,
  });

  const display = useTransform(spring, (current) => {
    return current.toFixed(decimals);
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

/**
 * MetricCard - Pre-styled metric display with counter
 */
interface MetricCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  trend?: { value: number; isPositive: boolean };
  className?: string;
}

export function MetricCard({
  value,
  label,
  suffix = '',
  prefix = '',
  icon,
  trend,
  className = '',
}: MetricCardProps) {
  return (
    <div className={`text-center ${className}`}>
      {icon && (
        <div className="flex justify-center mb-3 text-electric-blue">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-deep-navy mb-1">
        <AnimatedCounter
          value={value}
          suffix={suffix}
          prefix={prefix}
        />
      </div>
      <div className="text-deep-navy-300 text-sm">{label}</div>
      {trend && (
        <motion.div
          className={`text-xs mt-2 ${
            trend.isPositive ? 'text-neon-green' : 'text-red-500'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: duration.slow * 3 }}
        >
          {trend.isPositive ? '+' : ''}{trend.value}%
        </motion.div>
      )}
    </div>
  );
}

/**
 * CompactMetric - Inline metric display
 */
interface CompactMetricProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
}

export function CompactMetric({
  value,
  label,
  suffix = '',
  className = '',
}: CompactMetricProps) {
  return (
    <div className={`flex items-baseline gap-2 ${className}`}>
      <span className="text-2xl font-bold text-electric-blue">
        <AnimatedCounter value={value} suffix={suffix} />
      </span>
      <span className="text-deep-navy-400 text-sm">{label}</span>
    </div>
  );
}
