import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const footerLinks = {
    Product: [
      { name: 'Platform', href: isHomePage ? '#platform' : '/#platform', isRoute: false },
      { name: 'How It Works', href: isHomePage ? '#how-it-works' : '/#how-it-works', isRoute: false },
      { name: 'Use Cases', href: isHomePage ? '#use-cases' : '/#use-cases', isRoute: false },
      { name: 'Preview', href: isHomePage ? '#preview' : '/#preview', isRoute: false },
    ],
    Company: [
      { name: 'About', href: '/about', isRoute: true },
      { name: 'Team', href: '/team', isRoute: true },
      { name: 'Contact', href: '/contact', isRoute: true },
    ],
    Resources: [
      { name: 'FAQ', href: '/faq', isRoute: true },
      { name: 'Support', href: '/contact', isRoute: true },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy', isRoute: true },
    ],
  };

  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo/bc-mock-logo-background-removed.png"
                alt="BrandCodes"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">BrandCodes</span>
            </Link>
            <p className="text-deep-navy-200 text-sm mb-4">
              Turn every product into an intelligent digital experience with one scan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Brandcodes-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-navy-300 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/110915539"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-navy-300 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/brandcodes_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-navy-300 hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-deep-navy-200 hover:text-white text-sm transition"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-deep-navy-200 hover:text-white text-sm transition"
                      >
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
        <div className="mt-12 pt-8 border-t border-deep-navy-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-deep-navy-200 text-sm">
              &copy; {new Date().getFullYear()} BrandCodes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-deep-navy-200 text-sm">
                <MapPin size={16} />
                <span>Singapore</span>
              </div>
              <div className="flex items-center gap-2 text-deep-navy-200 text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neon-green">
                  <rect x="2" y="2" width="4" height="4" fill="currentColor" />
                  <rect x="10" y="2" width="4" height="4" fill="currentColor" />
                  <rect x="2" y="10" width="4" height="4" fill="currentColor" />
                  <rect x="6" y="6" width="4" height="4" fill="currentColor" opacity="0.6" />
                </svg>
                <span>GS1 Digital Link Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
