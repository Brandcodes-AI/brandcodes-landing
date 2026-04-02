import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePage = lazy(() => import('./pages/CookiePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const WhyBrandCodesPage = lazy(() => import('./pages/WhyBrandCodesPage'));
const PreviewPage = lazy(() => import('./pages/PreviewPage'));
const BarcodesExplainedPage = lazy(() => import('./pages/BarcodesExplainedPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why" element={<WhyBrandCodesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/cookies" element={<CookiePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/barcodes-explained" element={<BarcodesExplainedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
