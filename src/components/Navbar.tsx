import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const productLinks = [
    { name: 'Problem', href: isHomePage ? '#problem' : '/#problem' },
    { name: 'Market Opportunity', href: isHomePage ? '#market-opportunity' : '/#market-opportunity' },
    { name: 'Solution', href: isHomePage ? '#solution' : '/#solution' },
    { name: 'Features', href: isHomePage ? '#features' : '/#features' },
    { name: 'How It Works', href: isHomePage ? '#how-it-works' : '/#how-it-works' },
    { name: 'Use Cases', href: isHomePage ? '#use-cases' : '/#use-cases' },
    { name: 'Integrations', href: isHomePage ? '#integrations' : '/#integrations' },
    { name: 'Analytics', href: isHomePage ? '#analytics' : '/#analytics' },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-md border border-cool-200 rounded-2xl shadow-lg max-w-7xl mx-auto">
      {/* Barcode accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-barcode-lines text-brand-300 opacity-40 overflow-hidden" />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo/bc-mock-logo-background-removed.png"
              alt="BrandCodes"
              className="h-10 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="flex items-center text-cool-600 hover:text-brand-500 font-medium transition py-2">
                Product
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isProductOpen && (
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="bg-white rounded-lg shadow-lg border border-cool-200 py-2 relative overflow-hidden">
                    {/* Corner bracket accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-400/60" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-400/60" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-400/60" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-400/60" />
                    {productLinks.map((link, index) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="flex items-center px-4 py-2 text-cool-600 hover:text-brand-500 hover:bg-cool-50 transition"
                      >
                        <span className="font-mono text-[9px] text-cool-300 mr-2 w-4">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Preview Link */}
            <Link
              to="/preview"
              className="text-cool-600 hover:text-brand-500 font-medium transition"
            >
              Preview
            </Link>

            {/* 2D Barcodes Link */}
            <Link
              to="/barcodes-explained"
              className="text-cool-600 hover:text-brand-500 font-medium transition"
            >
              2D Barcodes
            </Link>

            {/* Why Us Link */}
            <Link
              to="/why"
              className="text-cool-600 hover:text-brand-500 font-medium transition"
            >
              Why Us?
            </Link>

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className="text-cool-600 hover:text-brand-500 font-medium transition"
            >
              Pricing
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button
                className="flex items-center text-cool-600 hover:text-brand-500 font-medium transition-colors duration-200 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded cursor-pointer"
                aria-expanded={isCompanyOpen}
                aria-haspopup="true"
              >
                Company
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isCompanyOpen && (
                <div className="absolute top-full left-0 pt-2 w-52">
                  <div className="bg-white rounded-lg shadow-lg border border-cool-200 py-2 relative overflow-hidden">
                    {/* Corner bracket accents */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-400/60" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-400/60" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-400/60" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-400/60" />
                    {companyLinks.map((link, index) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center px-4 py-2 text-cool-600 hover:text-brand-500 hover:bg-cool-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded cursor-pointer"
                      >
                        <span className="font-mono text-[9px] text-cool-300 mr-2 w-4">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={isHomePage ? '#contact' : '/#contact'}
              className="px-4 py-2 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
            >
              Book Demo
            </a>
            {/* <a
              href="http://localhost:3000/"
              className="px-4 py-2 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition"
            >
              Get Started
            </a> */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-cool-600 hover:text-navy-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-cool-200 rounded-b-2xl mt-2">
          <div className="px-4 py-4 space-y-3">
            {/* Product Section - Mobile */}
            <div className="border-b border-cool-200 pb-3">
              <div className="text-sm font-semibold text-cool-400 mb-2 px-2 flex items-center">
                <span className="font-mono text-[9px] text-cool-300 mr-2">SEC_01</span>
                Product
              </div>
              {productLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center text-cool-600 hover:text-brand-500 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-mono text-[9px] text-cool-300 mr-2 w-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Preview Link - Mobile */}
            <Link
              to="/preview"
              className="block text-cool-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Preview
            </Link>

            {/* 2D Barcodes Link - Mobile */}
            <Link
              to="/barcodes-explained"
              className="block text-cool-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              2D Barcodes
            </Link>

            {/* Why Us Link - Mobile */}
            <Link
              to="/why"
              className="block text-cool-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Us?
            </Link>

            {/* Pricing Link - Mobile */}
            <Link
              to="/pricing"
              className="block text-cool-600 hover:text-brand-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>

            {/* Company Section - Mobile */}
            <div className="border-t border-cool-200 pt-3">
              <div className="text-sm font-semibold text-cool-600 mb-2 px-2 flex items-center">
                <span className="font-mono text-[9px] text-cool-300 mr-2">SEC_02</span>
                Company
              </div>
              {companyLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center text-cool-600 hover:text-brand-500 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-mono text-[9px] text-cool-300 mr-2 w-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-3 border-t border-cool-200">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                className="block px-4 py-2 text-center bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Demo
              </a>
              {/* <a
                href="http://localhost:3000/"
                className="block px-4 py-2 text-center bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition"
              >
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
