import { ArrowUpRight, ChevronUp } from "lucide-react";

import Container from "@/components/ui/Container";
import LogoIcon from "@/components/ui/LogoIcon";
import {
  footerCompanyLinks,
  footerContactLinks,
  footerIndustryLinks,
  footerLegalLinks,
  footerServicesLinks,
} from "@/data/footer";

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: Array<{ name: string; href: string; external?: boolean }>;
}) {
  return (
    <div className="space-y-5">
      <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.name}`}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-2 text-sm text-body transition-colors hover:text-brand"
            >
              <span>{link.name}</span>
              {link.external ? (
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              ) : null}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className="relative overflow-hidden border-t border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(0,82,255,0.1),_transparent_35%),linear-gradient(180deg,_#ffffff_0%,_#f7faf9_100%)] pt-20 pb-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      <Container className="border-b border-slate-200/80 pb-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a
              href="/"
              className="group inline-flex items-center gap-3"
              id="footer-logo-link"
              aria-label="Vector Labs homepage"
            >
              <LogoIcon size={42} className="transition-transform duration-300 group-hover:scale-105" />
              <span className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-heading uppercase">
                VECTOR<span className="text-[0.85em] font-medium tracking-widest text-[#0052FF]">LABS</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-body">
              Premium digital growth systems for service and online businesses.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-brand/15 bg-brand/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              Websites. SEO. Automation. Conversion Systems.
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <FooterLinkList title="Services" links={footerServicesLinks} />
            <FooterLinkList title="Industries" links={footerIndustryLinks} />
            <FooterLinkList title="Company" links={footerCompanyLinks} />
            <FooterLinkList title="Contact" links={footerContactLinks} />
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-5 pt-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:gap-6">
          <span>© 2026 Vector Labs. All rights reserved.</span>
          <div className="flex items-center gap-4">
            {footerLegalLinks.map((link) => (
              <a key={link.name} href={link.href} className="transition-colors hover:text-brand">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/20 hover:text-brand md:self-auto"
          aria-label="Back to top"
        >
          <ChevronUp className="h-4 w-4" />
          Back to Top
        </button>
      </Container>
    </footer>
  );
}
