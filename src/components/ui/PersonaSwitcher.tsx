import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { User, Store, Factory } from 'lucide-react';
import { duration, easing } from '../../lib/motion';

type Persona = 'consumer' | 'retailer' | 'manufacturer';

interface PersonaSwitcherProps {
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const personas: Record<Persona, { label: string; icon: typeof User; description: string }> = {
  consumer: {
    label: 'Consumer',
    icon: User,
    description: 'Product info, manuals & support',
  },
  retailer: {
    label: 'Retail Staff',
    icon: Store,
    description: 'Inventory & shelf placement',
  },
  manufacturer: {
    label: 'Manufacturer',
    icon: Factory,
    description: 'Analytics & batch tracking',
  },
};

/**
 * PersonaSwitcher - Mouse-position-based label switcher
 *
 * Design Rules:
 * - Changes based on mouse position in container
 * - Consumer (default) / Retail staff / Manufacturer
 * - Smooth transitions between states (200ms)
 */
export default function PersonaSwitcher({
  className = '',
  showIcon = true,
  size = 'md',
}: PersonaSwitcherProps) {
  const [activePersona, setActivePersona] = useState<Persona>('consumer');
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-2.5',
  };

  const iconSizes = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const third = width / 3;

      if (x < third) {
        setActivePersona('consumer');
      } else if (x < third * 2) {
        setActivePersona('retailer');
      } else {
        setActivePersona('manufacturer');
      }
    };

    const handleMouseLeave = () => {
      setActivePersona('consumer'); // Reset to default
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const currentPersona = personas[activePersona];
  const Icon = currentPersona.icon;

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
    >
      <motion.div
        className={`
          flex items-center gap-2
          bg-deep-navy/90 backdrop-blur-sm text-white
          rounded-full shadow-lg
          ${sizeClasses[size]}
        `}
        layout
        transition={{
          duration: duration.normal,
          ease: easing.default,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activePersona}
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{
              duration: duration.fast,
              ease: easing.default,
            }}
          >
            {showIcon && (
              <Icon size={iconSizes[size]} className="text-neon-green" />
            )}
            <span className="font-medium whitespace-nowrap">
              {currentPersona.label}
            </span>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Description tooltip */}
      <AnimatePresence>
        <motion.div
          key={`desc-${activePersona}`}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2
            bg-white text-deep-navy text-xs px-3 py-1.5 rounded-lg shadow-md
            whitespace-nowrap"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{
            duration: duration.fast,
            ease: easing.default,
          }}
        >
          {currentPersona.description}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/**
 * PersonaIndicator - Shows all three personas with active state
 */
interface PersonaIndicatorProps {
  activePersona?: Persona;
  onChange?: (persona: Persona) => void;
  className?: string;
}

export function PersonaIndicator({
  activePersona = 'consumer',
  onChange,
  className = '',
}: PersonaIndicatorProps) {
  const personaList: Persona[] = ['consumer', 'retailer', 'manufacturer'];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {personaList.map((persona) => {
        const { icon: Icon, label } = personas[persona];
        const isActive = persona === activePersona;

        return (
          <motion.button
            key={persona}
            onClick={() => onChange?.(persona)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm
              transition-colors
              ${isActive
                ? 'bg-electric-blue text-white'
                : 'bg-deep-navy-100 text-deep-navy-400 hover:bg-deep-navy-200'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: duration.fast,
              ease: easing.default,
            }}
          >
            <Icon size={14} />
            <span>{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
