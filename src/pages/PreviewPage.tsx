import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

// Workflow steps data
const workflowSteps = [
  {
    id: 'create',
    stepNumber: 1,
    title: 'Add Products in Seconds',
    description:
      'Start with GTIN automation or bulk import. Let BrandCodes auto-fill product information, configure settings, and publish instantly.',
    image: {
      src: '/preview/Add-product.png',
      alt: 'Product creation wizard with GTIN autofill and configuration options',
    },
    features: [
      'GTIN-based auto-fill for instant product data',
      'Bulk import for multiple products at once',
      'Configure documents, support, links, and localization',
      'Design custom 2D barcodes and QR codes',
      'AI-powered product assistant setup',
      'One-click publish to make products live',
    ],
  },
  {
    id: 'manage',
    stepNumber: 2,
    title: 'Centralized Product Dashboard',
    description:
      'Edit, configure, and manage all your products from one powerful dashboard. Full control over variants, digital links, and barcode generation.',
    image: {
      src: '/preview/Product-Dashboard.png',
      alt: 'Product management dashboard with editing and configuration tools',
    },
    features: [
      'Edit product information on the fly',
      'View, download, and customize 2D barcodes/QR codes',
      'Configure product variant data (sizes, colors, SKUs)',
      'Set GS1-compliant digital links',
      'Batch operations for efficient management',
      'Real-time product status tracking',
    ],
  },
  {
    id: 'analytics',
    stepNumber: 3,
    title: 'Deep Analytics & Insights',
    description:
      'Understand how customers interact with your products across regions and time. Track scans, engagement, and AI chat interactions.',
    image: {
      src: '/preview/Analytics.png',
      alt: 'Analytics dashboard showing product performance metrics and insights',
    },
    features: [
      'Overall analytics dashboard + individual product metrics',
      'Regional analytics (scans, trends per geography)',
      'Time analytics (hourly, daily, weekly patterns)',
      'Activity heatmaps and peak time analysis',
      'AI chat insights (sentiment, resolution rate, topics)',
      'Engagement metrics (session duration, visitor types)',
    ],
  },
  {
    id: 'collaborate',
    stepNumber: 4,
    title: 'Team Management',
    description:
      'Invite team members and control access with role-based permissions. Collaborate seamlessly across your organization.',
    image: {
      src: '/preview/Manage-team.png',
      alt: 'Team management interface with member roles and permissions',
    },
    features: [
      'Add team members via email',
      'Role-based access control (Owner, Member)',
      'Manage team member permissions',
      'Collaborative product management',
    ],
  },
];

export default function PreviewPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Lightbox image
  const currentImage = workflowSteps[currentStepIndex]?.image;

  // Track scroll position for sticky progress bar
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 400; // Approximate hero section height
      setShowProgress(window.scrollY > heroHeight);

      // Update active step based on scroll position
      const scrollPosition = window.scrollY + 200; // Offset for better UX
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  const openLightbox = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
    setLightboxOpen(true);
  };

  const scrollToStep = (stepIndex: number) => {
    const section = sectionRefs.current[stepIndex];
    if (section) {
      const offset = 100; // Account for navbar + progress bar
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToNextStep = (currentIndex: number) => {
    if (currentIndex < workflowSteps.length - 1) {
      scrollToStep(currentIndex + 1);
    }
  };

  const scrollToPrevStep = (currentIndex: number) => {
    if (currentIndex > 0) {
      scrollToStep(currentIndex - 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
              See{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-accent-500">
                BrandCodes
              </span>{' '}
              in Action
            </h1>
            <p className="text-xl text-cool-600 mb-8">
              Follow our complete workflow from product creation to team collaboration
            </p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <button
                onClick={() => scrollToStep(0)}
                className="flex flex-col items-center text-cool-500 hover:text-brand-500 transition-colors"
              >
                <span className="text-sm font-medium mb-2">Start Tour</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Progress Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showProgress ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-cool-200 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {workflowSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => scrollToStep(index)}
                className="flex items-center gap-2 flex-1 group"
              >
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${index <= activeStep
                    ? 'bg-brand-500 text-white scale-110'
                    : 'border-2 border-cool-300 text-cool-500 group-hover:border-brand-400 group-hover:scale-110'
                    }`}
                >
                  {index < activeStep ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    step.stepNumber
                  )}
                </div>
                <span
                  className={`hidden md:block text-sm font-medium transition-colors ${index === activeStep ? 'text-brand-500' : 'text-cool-600'
                    } group-hover:text-brand-500`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Workflow Sections */}
      {workflowSteps.map((step, index) => (
        <section
          key={step.id}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-cool-50'
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Screenshot - Left on desktop */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div
                  className="relative cursor-pointer group"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={step.image.src}
                    alt={step.image.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="w-full rounded-2xl shadow-2xl border border-cool-200 transition-shadow duration-300 group-hover:shadow-brand-500/20"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/5 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-4 py-2 rounded-lg font-medium text-navy-900 shadow-lg">
                      Click to enlarge
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content - Right on desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Step number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {step.stepNumber}
                    </span>
                  </div>
                  <div className="flex-1 h-1 bg-brand-200 rounded-full">
                    <div
                      className="h-full bg-brand-500 rounded-full transition-all duration-500"
                      style={{ width: `${((step.stepNumber) / workflowSteps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Title and description */}
                <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
                  {step.title}
                </h2>
                <p className="text-xl text-cool-600 mb-8">{step.description}</p>

                {/* Features list */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-base text-cool-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Navigation buttons */}
                <div className="flex gap-4 mt-8">
                  {index > 0 && (
                    <button
                      onClick={() => scrollToPrevStep(index)}
                      className="flex items-center gap-2 px-6 py-3 bg-cool-100 text-navy-900 font-medium rounded-lg hover:bg-cool-200 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Previous
                    </button>
                  )}
                  {index < workflowSteps.length - 1 && (
                    <button
                      onClick={() => scrollToNextStep(index)}
                      className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors ml-auto"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-500 to-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to transform your product packaging?
            </h2>
            <p className="text-xl text-brand-100 mb-8">
              See how BrandCodes can help you create GS1-compliant digital experiences
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-brand-500 font-semibold rounded-lg hover:bg-cool-100 transition"
              >
                Book a Demo
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/95 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-[95vw] max-h-[95vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto max-h-[95vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white text-lg font-medium">
                  {workflowSteps[currentStepIndex]?.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
