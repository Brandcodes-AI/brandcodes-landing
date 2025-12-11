import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import MarketOpportunity from './components/MarketOpportunity';
import SolutionOverview from './components/SolutionOverview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Integrations from './components/Integrations';
import Analytics from './components/Analytics';
import ProductPreview from './components/ProductPreview';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
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
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
