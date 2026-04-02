import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

function RouteLoadingFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center px-4 py-16 text-cool-500">
      Loading...
    </div>
  );
}

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cool-50">
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Outlet key={location.pathname} />
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
