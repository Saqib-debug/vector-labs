import { Linkedin, Instagram } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const resourceLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Difference", href: "#comparison" },
    { name: "Strategic Process", href: "#process" },
    { name: "Clinic Portfolio", href: "#portfolio" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact Support", href: "mailto:miniaura951@gmail.com" },
    { name: "Careers", href: "#" },
  ];

  return (
    <footer id="main-footer" className="bg-white border-t border-slate-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-slate-100">
        {/* Brand Summary Column */}
        <div className="md:col-span-6 space-y-6 flex flex-col items-start" id="footer-col-brand">
          <a href="#" className="flex items-center space-x-3 group" id="footer-logo-link" aria-label="Vector Labs homepage">
            <LogoIcon size={38} className="group-hover:scale-105 transition-transform duration-300" />
            <span className="font-display font-bold text-lg tracking-tight text-heading uppercase flex items-center gap-1.5">
              VECTOR<span className="text-[#0052FF] font-medium tracking-widest text-[0.85em]">LABS</span>
            </span>
          </a>
          <p className="text-xs sm:text-sm text-body leading-relaxed max-w-sm font-sans font-medium">
            Defining the digital standard for high-end aesthetic medicine. We blend clinical precision with luxury design to create world-class practices.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-2" id="footer-social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-brand hover:bg-brand/5 hover:border-brand/20 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="LinkedIn profile"
              id="footer-social-linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 text-slate-500 hover:text-brand hover:bg-brand/5 hover:border-brand/20 flex items-center justify-center transition-all duration-300 shadow-sm"
              aria-label="Instagram profile"
              id="footer-social-instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Resources column */}
        <div className="md:col-span-3 space-y-4" id="footer-col-resources">
          <h4 className="font-display font-bold text-sm text-heading uppercase tracking-wider">
            Resources
          </h4>
          <ul className="space-y-2.5 flex flex-col">
            {resourceLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm text-body hover:text-brand transition-colors font-sans font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Column */}
        <div className="md:col-span-3 space-y-4" id="footer-col-legal">
          <h4 className="font-display font-bold text-sm text-heading uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2.5 flex flex-col">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm text-body hover:text-brand transition-colors font-sans font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] md:text-xs text-slate-400 font-sans font-semibold uppercase tracking-wider" id="footer-bottom-info">
        <div id="footer-copy">
          © {currentYear} Vector Labs. Excellence in Aesthetic Digital Strategy.
        </div>
        <div id="footer-subtext">
          Bespoke Digital Medical Solutions.
        </div>
      </div>
    </footer>
  );
}
