import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Use Cases', href: '#use-cases' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'GS1 Compliance', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo/bc-mock-logo-background-removed.png"
                alt="BrandCodes"
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="text-xl font-bold">BrandCodes</span>
            </a>
            <p className="text-slate-400 text-sm mb-4">
              Turn every product into an intelligent digital experience with one scan.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Brandcodes-web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition"
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
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} BrandCodes. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              GS1 Digital Link Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
