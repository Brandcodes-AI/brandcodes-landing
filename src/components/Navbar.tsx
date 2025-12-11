import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <img
              src="/logo/bc-mock-logo-background-removed.png"
              alt="BrandCodes"
              className="h-40 w-auto"
            />
            {/* <span className="text-xl font-bold text-slate-900">BrandCodes</span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 font-medium transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
            >
              Book Demo
            </a>
            <a
              href="http://localhost:3000/"
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-600 hover:text-indigo-600 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a
                href="#contact"
                className="block px-4 py-2 text-center text-gray-700 font-medium hover:bg-gray-100 rounded-lg transition"
              >
                Book Demo
              </a>
              <a
                href="http://localhost:3000/"
                className="block px-4 py-2 text-center bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 shadow-sm transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
