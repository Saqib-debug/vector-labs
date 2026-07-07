import { useEffect } from "react";

import { AnimatePresence, motion } from "motion/react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { useAnimationVariants } from "@/lib/animations";
import { SITE_NAME } from "@/lib/constants";
import { RouterProvider, useRouter } from "@/lib/router";
import About from "@/pages/About";
import AestheticClinics from "@/pages/AestheticClinics";
import CaseStudiesPage from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import DentalClinics from "@/pages/DentalClinics";
import Home from "@/pages/Home";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import Services from "@/pages/Services";
import TermsPage from "@/pages/Terms";

const routeMeta = {
  "/": {
    title: "Vector Labs — Digital Growth Systems for Dental & Aesthetic Clinics",
    description:
      "Premium websites, booking systems, patient acquisition infrastructure, and automation for dental and aesthetic clinics.",
  },
  "/services": {
    title: `Services | ${SITE_NAME}`,
    description:
      "Explore Vector Labs services across websites, local SEO, Google profiles, paid ads, automation, booking workflows, social systems, and reporting.",
  },
  "/dental-clinics": {
    title: `Dental Clinics | ${SITE_NAME}`,
    description:
      "Digital growth systems tailored to dental clinic owners, from implants and cosmetic dentistry funnels to local search and booking journeys.",
  },
  "/aesthetic-clinics": {
    title: `Aesthetic Clinics | ${SITE_NAME}`,
    description:
      "Luxury digital positioning, trust-building funnels, and patient acquisition systems designed for aesthetic clinic growth.",
  },
  "/case-studies": {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      "See how Vector Labs approaches clinic positioning, patient acquisition, and digital infrastructure through real case study formats.",
  },
  "/about": {
    title: `About | ${SITE_NAME}`,
    description:
      "Learn why Vector Labs exists, how it thinks about clinic systems, and the principles behind its design and technology decisions.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Book a strategy call with Vector Labs and submit your clinic growth details through the lead qualification form.",
  },
  "/privacy-policy": {
    title: `Privacy Policy | ${SITE_NAME}`,
    description:
      "Read the current Vector Labs privacy policy for website inquiries, form submissions, and future CRM-connected lead handling.",
  },
  "/terms": {
    title: `Terms | ${SITE_NAME}`,
    description:
      "Review the current Vector Labs website terms covering inquiries, informational use, and future service agreement expectations.",
  },
} as const;

function AppContent() {
  const { pathname } = useRouter();
  const { pageFade } = useAnimationVariants();

  const meta = routeMeta[pathname as keyof typeof routeMeta] ?? routeMeta["/"];

  useEffect(() => {
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    ogTitle?.setAttribute("content", meta.title);
    twitterTitle?.setAttribute("content", meta.title);
    ogDescription?.setAttribute("content", meta.description);
    twitterDescription?.setAttribute("content", meta.description);
  }, [meta.description, meta.title]);

  const page = (() => {
    switch (pathname) {
      case "/services":
        return <Services />;
      case "/dental-clinics":
        return <DentalClinics />;
      case "/aesthetic-clinics":
        return <AestheticClinics />;
      case "/case-studies":
        return <CaseStudiesPage />;
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case "/privacy-policy":
        return <PrivacyPolicyPage />;
      case "/terms":
        return <TermsPage />;
      case "/":
      default:
        return <Home />;
    }
  })();

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-base pb-24 text-body antialiased selection:bg-brand/10 selection:text-brand md:pb-0">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          id="main-content"
          variants={pageFade}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {page}
        </motion.main>
      </AnimatePresence>
      <StickyMobileCTA />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
