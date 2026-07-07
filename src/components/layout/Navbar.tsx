import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

import { mainNavigation } from "@/data/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LogoIcon from "@/components/ui/LogoIcon";
import { DEFAULT_EASE, useAnimationVariants } from "@/lib/animations";
import { useRouter } from "@/lib/router";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { pathname } = useRouter();
  const { shouldReduceMotion } = useAnimationVariants();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const isHome = pathname === "/";
  const useTransparentState = isHome && !scrolled && !isOpen;

  const isRouteActive = (href: string, matchPaths?: string[]) => {
    if (href === "/") return pathname === "/";
    return matchPaths?.includes(pathname) ?? pathname === href;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        useTransparentState
          ? "bg-transparent py-6"
          : "border-b border-slate-100/80 bg-white/75 py-4 shadow-sm backdrop-blur-xl"
      }`}
    >
      <Container className="flex items-center justify-between">
        <a href="/" className="group flex items-center space-x-3" id="logo-link" aria-label="Vector Labs Homepage">
          <LogoIcon size={38} className="transition-transform duration-300 group-hover:scale-105" />
          <span className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-heading uppercase">
            VECTOR<span className="text-[0.85em] font-medium tracking-widest text-[#0052FF]">LABS</span>
          </span>
        </a>

        <nav className="hidden items-center space-x-8 md:flex" id="desktop-nav" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const isActive = isRouteActive(item.href, item.matchPaths);

            if (item.children?.length) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <a
                    href={item.href}
                    className={cn(
                      "group relative flex items-center py-2 text-sm font-semibold transition-colors",
                      isActive ? "text-brand" : "text-body hover:text-brand",
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute right-0 bottom-0 left-0 h-[2.5px] rounded-full bg-brand"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand/40 transition-all duration-300 group-hover:w-full" />
                    )}
                  </a>

                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: shouldReduceMotion ? 0.16 : 0.22, ease: DEFAULT_EASE }}
                        className="absolute top-full left-1/2 mt-4 w-[420px] -translate-x-1/2 rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-2xl backdrop-blur-xl"
                      >
                        <div className="grid gap-2">
                          {item.children.map((child) => (
                            <a
                              key={child.name}
                              href={child.href}
                              className="rounded-2xl border border-transparent p-4 transition-all duration-200 hover:border-brand/15 hover:bg-brand/[0.03]"
                            >
                              <div className="text-sm font-semibold text-heading">{child.name}</div>
                              {child.description ? (
                                <div className="mt-1 text-xs leading-relaxed text-body">{child.description}</div>
                              ) : null}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className={`group relative py-2 text-sm font-semibold transition-colors ${
                  isActive ? "text-brand" : "text-body hover:text-brand"
                }`}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute right-0 bottom-0 left-0 h-[2.5px] rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand/40 transition-all duration-300 group-hover:w-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Button href="/contact" size="sm" id="btn-book-consultation-desktop">
            Book Strategy Call
          </Button>
        </div>

        <button
          className="p-2 text-heading transition-colors hover:text-brand md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.18 : 0.25, ease: DEFAULT_EASE }}
            className="fixed inset-0 top-0 z-40 bg-[#F8FAFC]/96 backdrop-blur-xl md:hidden"
            id="mobile-drawer"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              transition={{ duration: shouldReduceMotion ? 0.16 : 0.28, ease: DEFAULT_EASE }}
            >
              <Container className="flex min-h-screen flex-col pt-28 pb-10">
                <div className="flex flex-1 flex-col justify-between">
                  <div className="space-y-3">
                    {mainNavigation.map((item) => {
                      const isActive = isRouteActive(item.href, item.matchPaths);
                      return (
                        <div key={item.name} className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm">
                          <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between text-xl font-semibold transition-colors ${
                              isActive ? "text-brand" : "text-heading hover:text-brand"
                            }`}
                          >
                            <span>{item.name}</span>
                            {isActive ? <span className="h-2 w-2 rounded-full bg-brand" /> : null}
                          </a>

                          {item.children?.length ? (
                            <div className="mt-4 grid gap-2 border-t border-slate-100 pt-4">
                              {item.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-body transition-colors hover:text-brand"
                                >
                                  {child.name}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-4 pt-10">
                    <Button
                      href="/contact"
                      size="md"
                      icon={<ArrowRight className="h-4 w-4" />}
                      id="btn-book-consultation-mobile"
                      onClick={() => setIsOpen(false)}
                      className="w-full"
                    >
                      Book Strategy Call
                    </Button>
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-slate-400">
                      Multi-page clinic growth site
                    </p>
                  </div>
                </div>
              </Container>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
