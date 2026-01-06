import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Features', href: isHomePage ? '#features' : '/#features', isRoute: false },
    { name: 'How It Works', href: isHomePage ? '#how-it-works' : '/#how-it-works', isRoute: false },
    { name: 'Use Cases', href: isHomePage ? '#use-cases' : '/#use-cases', isRoute: false },
    { name: 'Preview', href: isHomePage ? '#preview' : '/#preview', isRoute: false },
    { name: 'Pricing', href: '/pricing', isRoute: true },
  ];

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cool-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo/bc-mock-logo-background-removed.png"
              alt="BrandCodes"
              className="h-40 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-cool-600 hover:text-brand-500 font-medium transition"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-cool-600 hover:text-brand-500 font-medium transition"
                >
                  {link.name}
                </a>
              )
            )}

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center text-cool-600 hover:text-brand-500 font-medium transition py-2">
                Company
                <ChevronDown size={16} className="ml-1" />
              </button>

              {isCompanyOpen && (
                <div className="absolute top-full left-0 pt-2 w-48">
                  <div className="bg-white rounded-lg shadow-lg border border-cool-200 py-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-2 text-cool-600 hover:text-brand-500 hover:bg-cool-50 transition"
                      >
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
              className="px-4 py-2 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition"
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
            className="md:hidden p-2 text-cool-600 hover:text-navy-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-cool-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-cool-600 hover:text-brand-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-cool-600 hover:text-brand-500 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}

            {/* Company Section - Mobile */}
            <div className="border-t border-cool-200 pt-3">
              <div className="text-sm font-semibold text-cool-400 mb-2 px-2">Company</div>
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-cool-600 hover:text-brand-500 font-medium py-2 pl-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-3 border-t border-cool-200">
              <a
                href={isHomePage ? '#contact' : '/#contact'}
                className="block px-4 py-2 text-center bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 shadow-sm transition"
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
