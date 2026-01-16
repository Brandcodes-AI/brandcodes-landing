import { motion, useReducedMotion } from 'framer-motion';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import MarketOpportunity from '../components/MarketOpportunity';
import SolutionOverview from '../components/SolutionOverview';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import Integrations from '../components/Integrations';
import Analytics from '../components/Analytics';
import ProductPreview from '../components/ProductPreview';
import CTA from '../components/CTA';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      <Hero />
      <Problem />
      <MarketOpportunity />
      <SolutionOverview />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Analytics />
      <ProductPreview />
      <CTA />
    </motion.div>
  );
}
