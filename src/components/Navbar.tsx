import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Difference", href: "#comparison" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.15,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "hero") {
            setActiveSection("");
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sectionsToObserve = ["hero", ...menuItems.map((item) => item.href.substring(1))];
    sectionsToObserve.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 group" id="logo-link" aria-label="Vector Labs Homepage">
          <LogoIcon size={38} className="group-hover:scale-105 transition-transform duration-300" />
          <span className="font-display font-bold text-lg tracking-tight text-heading uppercase flex items-center gap-1.5">
            VECTOR<span className="text-[#0052FF] font-medium tracking-widest text-[0.85em]">LABS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav" aria-label="Main navigation">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold text-sm transition-colors relative group py-2 select-none ${
                  isActive ? "text-[#0F766E]" : "text-body hover:text-[#0F766E]"
                }`}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0F766E] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0F766E]/40 transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center" id="desktop-cta-container">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand text-white font-medium text-sm hover:bg-brand-hover transition-all duration-300 shadow-md shadow-brand/10 hover:shadow-brand/20 hover:-translate-y-0.5"
            id="btn-book-consultation-desktop"
            aria-label="Book a free consultation call"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-heading hover:text-brand transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-lg overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display font-semibold text-lg transition-colors flex items-center justify-between ${
                      isActive ? "text-[#0F766E]" : "text-heading hover:text-[#0F766E]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileIndicator"
                        className="w-1.5 h-1.5 rounded-full bg-[#0F766E]"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="#cta"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-hover transition-colors shadow-md shadow-brand/10"
                id="btn-book-consultation-mobile"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
