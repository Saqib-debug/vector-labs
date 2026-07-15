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
  const { navigate, pathname } = useRouter();
  const { shouldReduceMotion } = useAnimationVariants();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setScrolled(false);
    window.scrollTo({ top: 0, behavior: "auto" });
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
  const desktopLinkClass = (isActive: boolean) =>
    cn(
      "transition-colors",
      scrolled
        ? isActive
          ? "text-white"
          : "text-white/78 hover:text-white"
        : isActive
        ? "text-slate-950"
        : "text-slate-900/72 hover:text-slate-950",
    );

  const isRouteActive = (href: string, matchPaths?: string[]) => {
    if (href === "/") return pathname === "/";
    if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
    return matchPaths?.includes(pathname) ?? pathname === href;
  };

  const handleMobileNavigate = (href: string) => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    navigate(href);
  };

  return (
    <header
      id="main-header"
      className={`fixed right-0 left-0 z-50 transition-[top,padding] duration-300 ease-out ${
        isOpen
          ? "top-0 bg-transparent py-3 md:py-6"
          : useTransparentState
          ? "top-0 bg-transparent py-3 md:py-6"
          : "top-2 py-0 md:top-3"
      }`}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[max-width,padding,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
          scrolled &&
            !isOpen &&
            "max-w-[1240px] rounded-full border border-blue-300/35 bg-brand/90 px-5 py-2 shadow-[0_18px_55px_rgba(0,82,255,0.2)] backdrop-blur-3xl backdrop-saturate-150 md:px-6 md:py-2.5",
        )}
      >
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            setIsOpen(false);
            setServicesOpen(false);
            setMobileServicesOpen(false);
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={cn(
            "group flex items-center space-x-3 transition-opacity duration-300",
            isOpen && "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto",
          )}
          id="logo-link"
          aria-label="Vector Labs Homepage"
        >
          <LogoIcon size={34} className="transition-transform duration-300 group-hover:scale-105 md:size-[38px]" />
          <span
            className={cn(
              "flex items-center gap-1.5 text-lg font-bold tracking-tight uppercase transition-colors duration-300",
              scrolled ? "text-white" : "text-slate-950",
            )}
          >
            VECTOR
            <span className={cn("text-[0.85em] font-medium tracking-widest", scrolled ? "text-white" : "text-[#0052FF]")}>
              LABS
            </span>
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
                      desktopLinkClass(isActive),
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className={cn("absolute right-0 bottom-0 left-0 h-[2.5px] rounded-full", scrolled ? "bg-white" : "bg-brand")}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : (
                      <span className={cn("absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full", scrolled ? "bg-white/50" : "bg-brand/40")} />
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
                className={cn("group relative py-2 text-sm font-semibold transition-colors", desktopLinkClass(isActive))}
              >
                <span>{item.name}</span>
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={cn("absolute right-0 bottom-0 left-0 h-[2.5px] rounded-full", scrolled ? "bg-white" : "bg-brand")}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className={cn("absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full", scrolled ? "bg-white/50" : "bg-brand/40")} />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Button
            href="/contact"
            size="sm"
            id="btn-book-conversion-desktop"
            className={cn(scrolled && "!bg-white !text-brand shadow-[0_14px_30px_-16px_rgba(255,255,255,0.7)] hover:!bg-slate-950 hover:!text-white")}
          >
            Book Strategy Call
          </Button>
        </div>

        <button
          className={cn(
            "relative z-50 rounded-full border border-transparent bg-transparent p-2 text-brand transition-all duration-300 hover:border-brand/15 hover:bg-white/70 md:hidden",
            scrolled && !isOpen && "border-white/30 bg-white text-brand shadow-sm hover:bg-white",
            isOpen && "border-slate-200 bg-white text-slate-950",
          )}
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
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.18, ease: DEFAULT_EASE }}
            className="fixed inset-0 top-0 z-40 overflow-y-auto bg-[#f5f5f5]/96 backdrop-blur-2xl md:hidden"
            id="mobile-drawer"
          >
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              transition={{ duration: shouldReduceMotion ? 0.12 : 0.2, ease: DEFAULT_EASE }}
            >
              <Container className="flex min-h-dvh flex-col pt-24 pb-8">
                <div className="relative flex flex-1 flex-col justify-between rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_-45px_rgba(15,23,42,0.55)]">
                  <div>
                    <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                        Navigation
                      </span>
                      <span className="h-2 w-2 rounded-full bg-brand shadow-[0_0_18px_rgba(0,82,255,0.8)]" />
                    </div>

                    <div className="space-y-2">
                      {mainNavigation.map((item) => {
                        const isActive = isRouteActive(item.href, item.matchPaths);
                        const hasChildren = Boolean(item.children?.length);
                        return (
                          <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            {hasChildren ? (
                              <button
                                type="button"
                                onClick={() => setMobileServicesOpen((open) => !open)}
                                className={`flex w-full items-center justify-between text-sm font-semibold transition-colors ${
                                  isActive ? "text-brand" : "text-slate-900 hover:text-brand"
                                }`}
                                aria-expanded={mobileServicesOpen}
                              >
                                <span>{item.name}</span>
                                <ChevronDown
                                  className={`h-4 w-4 text-slate-400 transition-transform ${
                                    mobileServicesOpen ? "rotate-180 text-brand" : ""
                                  }`}
                                />
                              </button>
                            ) : (
                              <a
                                href={item.href}
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleMobileNavigate(item.href);
                                }}
                                className={`flex items-center justify-between text-sm font-semibold transition-colors ${
                                  isActive ? "text-brand" : "text-slate-900 hover:text-brand"
                                }`}
                              >
                                <span>{item.name}</span>
                                <ArrowRight className={`h-3.5 w-3.5 transition-transform ${isActive ? "text-brand" : "text-slate-400"}`} />
                              </a>
                            )}

                            <AnimatePresence initial={false}>
                              {hasChildren && mobileServicesOpen ? (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.24, ease: DEFAULT_EASE }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-3 grid gap-1.5 border-t border-slate-200 pt-3">
                                    {item.children.map((child) => (
                                      <a
                                        key={child.name}
                                        href={child.href}
                                        onClick={(event) => {
                                          event.preventDefault();
                                          handleMobileNavigate(child.href);
                                        }}
                                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:border-brand/25 hover:bg-brand/[0.04] hover:text-brand"
                                      >
                                        {child.name}
                                      </a>
                                    ))}
                                  </div>
                                </motion.div>
                              ) : null}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-4 pt-8">
                    <Button
                      href="/contact"
                      size="md"
                      icon={<ArrowRight className="h-4 w-4" />}
                      id="btn-book-conversion-mobile"
                      onClick={(event) => {
                        event.preventDefault();
                        handleMobileNavigate("/contact");
                      }}
                      className="w-full"
                    >
                      Book Strategy Call
                    </Button>
                    <p className="text-center text-xs uppercase tracking-[0.18em] text-slate-400">
                      Multi-page business growth site
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
