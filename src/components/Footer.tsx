import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const footerLinks = {
    Product: [
      { name: 'Features', href: isHomePage ? '#features' : '/#features', isRoute: false },
      { name: 'How It Works', href: isHomePage ? '#how-it-works' : '/#how-it-works', isRoute: false },
      { name: 'Use Cases', href: isHomePage ? '#use-cases' : '/#use-cases', isRoute: false },
      { name: 'Preview', href: isHomePage ? '#preview' : '/#preview', isRoute: false },
      { name: 'Pricing', href: '/pricing', isRoute: true },
    ],
    Company: [
      { name: 'About', href: '/about', isRoute: true },
      { name: 'Team', href: '/team', isRoute: true },
      { name: 'Contact', href: '/contact', isRoute: true },
    ],
    Resources: [
      { name: 'FAQ', href: '/faq', isRoute: true },
      { name: 'Support', href: '/contact', isRoute: true },
      // { name: 'Documentation', href: '#', isRoute: false },
      // { name: 'API Reference', href: '#', isRoute: false },
      // { name: 'GS1 Compliance', href: '#', isRoute: false },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy', isRoute: true },
      { name: 'Terms of Service', href: '/terms', isRoute: true },
      { name: 'Cookie Policy', href: '/cookies', isRoute: true },
    ],
  };

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* QR grid overlay */}
      <div className="absolute inset-0 bg-qr-grid-white opacity-[0.02]" />
      {/* Barcode accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-barcode-lines text-brand-400 opacity-30" />
      {/* Corner bracket decorations */}
      <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-brand-500/20 hidden lg:block" />
      <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-brand-500/20 hidden lg:block" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="mb-4 block">
            <img
              src="/logo/bc-mock-logo-background-removed.png"
              alt="BrandCodes"
              className="h-8 w-auto brightness-0 invert"
              loading="lazy"
            />
            </Link>
            <p className="text-navy-300 text-sm mb-4">
              Turn every product into an intelligent digital experience with one scan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Brandcodes-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950 rounded cursor-pointer"
                aria-label="BrandCodes on GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/110915539"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950 rounded cursor-pointer"
                aria-label="BrandCodes on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/brandcodes_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950 rounded cursor-pointer"
                aria-label="BrandCodes on X (Twitter)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center">
                <span className="font-mono text-[9px] text-navy-500 mr-2">
                  COL_{String(categoryIndex + 1).padStart(2, '0')}
                </span>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={link.name}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-navy-300 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950 rounded cursor-pointer flex items-center group"
                      >
                        <span className="font-mono text-[9px] text-navy-600 group-hover:text-navy-400 mr-2 w-3 transition-colors">
                          {String(linkIndex + 1).padStart(2, '0')}
                        </span>
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-navy-300 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-navy-950 rounded cursor-pointer flex items-center group"
                      >
                        <span className="font-mono text-[9px] text-navy-600 group-hover:text-navy-400 mr-2 w-3 transition-colors">
                          {String(linkIndex + 1).padStart(2, '0')}
                        </span>
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-navy-300 text-sm">
              &copy; {new Date().getFullYear()} BrandCodes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-navy-300 text-sm">
                <MapPin size={16} />
                <span>Singapore</span>
              </div>
              <p className="text-navy-300 text-sm">
                GS1 Digital Link Compliant
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
