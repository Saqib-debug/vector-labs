import { useEffect } from "react";

import { AnimatePresence, motion } from "motion/react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { useAnimationVariants } from "@/lib/animations";
import { SITE_NAME } from "@/lib/constants";
import { RouterProvider, useRouter } from "@/lib/router";
import About from "@/pages/About";
import OnlineBusinesses from "@/pages/OnlineBusinesses";
import CaseStudiesPage from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import ServiceBusinesses from "@/pages/ServiceBusinesses";
import Home from "@/pages/Home";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import ServiceDetailPage from "@/pages/ServiceDetail";
import Services from "@/pages/Services";
import TermsPage from "@/pages/Terms";

const routeMeta = {
  "/": {
    title: "Vector Labs — Digital Growth Systems for Service & Online Businesses",
    description:
      "Premium websites, conversion systems, client acquisition infrastructure, and automation for service and online businesses.",
  },
  "/services": {
    title: `Services | ${SITE_NAME}`,
    description:
      "Explore Vector Labs services across websites, local SEO, Google profiles, paid ads, automation, conversion workflows, social systems, and reporting.",
  },
  "/service-businesses": {
    title: `Service Brands | ${SITE_NAME}`,
    description:
      "Digital growth systems tailored to service business owners, from lead-gens and conversion strategy funnels to local search and conversion journeys.",
  },
  "/online-businesses": {
    title: `Online Brands | ${SITE_NAME}`,
    description:
      "Luxury digital positioning, trust-building funnels, and client acquisition systems designed for online business growth.",
  },
  "/case-studies": {
    title: `Case Studies | ${SITE_NAME}`,
    description:
      "See how Vector Labs approaches business positioning, client acquisition, and digital infrastructure through real case study formats.",
  },
  "/about": {
    title: `About | ${SITE_NAME}`,
    description:
      "Learn why Vector Labs exists, how it thinks about business systems, and the principles behind its design and technology decisions.",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Book a strategy call with Vector Labs and submit your business growth details through the lead qualification form.",
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
  const serviceId = pathname.startsWith("/services/") ? pathname.replace("/services/", "") : "";
  const serviceTitle = serviceId
    ? serviceId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  const meta = routeMeta[pathname as keyof typeof routeMeta] ?? routeMeta["/"];
  const pageMeta = serviceId
    ? {
        title: `${serviceTitle} | Services | ${SITE_NAME}`,
        description: `Learn about Vector Labs ${serviceTitle.toLowerCase()} service and request this service through the contact page.`,
      }
    : meta;

  useEffect(() => {
    document.title = pageMeta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", pageMeta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    ogTitle?.setAttribute("content", pageMeta.title);
    twitterTitle?.setAttribute("content", pageMeta.title);
    ogDescription?.setAttribute("content", pageMeta.description);
    twitterDescription?.setAttribute("content", pageMeta.description);
  }, [pageMeta.description, pageMeta.title]);

  const page = (() => {
    if (serviceId) {
      return <ServiceDetailPage serviceId={serviceId} />;
    }

    switch (pathname) {
      case "/services":
        return <Services />;
      case "/service-businesses":
        return <ServiceBusinesses />;
      case "/online-businesses":
        return <OnlineBusinesses />;
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
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] pb-24 text-body antialiased selection:bg-brand/10 selection:text-brand md:pb-0">
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
