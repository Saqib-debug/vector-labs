import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Ecosystem from "./components/Ecosystem";
import Comparison from "./components/Comparison";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base overflow-x-hidden selection:bg-brand/10 selection:text-brand antialiased text-body">
      {/* Handcrafted Header Navigation */}
      <Navbar />

      <main id="main-content">
        {/* Hero Banner with floating iMac Device Mockups */}
        <Hero />

        {/* Modern Clinic Challenges Section (3x2 grid) */}
        <Challenges />

        {/* Dynamic Growth Ecosystem Section (4x2 solution grid) */}
        <Ecosystem />

        {/* The Vector Labs Difference Comparison Table */}
        <Comparison />

        {/* Case Studies Section (Dark slate theme featuring Luxe Skin Clinic and Aura Dental) */}
        <CaseStudies />

        {/* Our Strategic Process Timeline (Highlighting step 06 Growth) */}
        <Process />

        {/* FAQ Accordion (Common Inquiries) */}
        <FAQ />

        {/* Call To Action Banner with animated rocket */}
        <CTA />
      </main>

      {/* Structured Multi-Column Footer */}
      <Footer />
    </div>
  );
}
