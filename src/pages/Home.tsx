import CTA from "@/components/sections/CTA";
import CaseStudies from "@/components/sections/CaseStudies";
import Challenges from "@/components/sections/Challenges";
import Comparison from "@/components/sections/Comparison";
import Ecosystem from "@/components/sections/Ecosystem";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import ServicesPreview from "@/components/sections/ServicesPreview";
import SpecializationSplit from "@/components/sections/SpecializationSplit";

export default function Home() {
  return (
    <>
      <Hero />
      <Challenges />
      <ServicesPreview />
      <Ecosystem />
      <SpecializationSplit />
      <Comparison />
      <CaseStudies />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
