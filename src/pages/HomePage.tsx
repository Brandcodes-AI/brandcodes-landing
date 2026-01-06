import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import PlatformSpine from '../components/PlatformSpine';
import HowItWorks from '../components/HowItWorks';
import ProductPreview from '../components/ProductPreview';
import UseCases from '../components/UseCases';
import ScanPaths from '../components/ScanPaths';
import DesignPlayground from '../components/DesignPlayground';
import Analytics from '../components/Analytics';
import CTA from '../components/CTA';
import { duration, easing } from '../lib/motion';

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: duration.slow, ease: easing.default }}
    >
      <Hero />
      <PlatformSpine />
      <HowItWorks />
      <ProductPreview />
      <UseCases />
      <ScanPaths />
      <DesignPlayground />
      <Analytics />
      <CTA />
    </motion.div>
  );
}
