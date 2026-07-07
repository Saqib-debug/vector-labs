import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Star,
  Search,
  ArrowUpRight,
  TrendingUp,
  Check,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ecosystemServices } from "@/data/services";

// Pure CSS & Tailwind mockups for pixel-perfect instant load, absolute layout stability and zero external requests.
const MetaAdsMockup = () => (
  <div className="w-full max-w-[280px] bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden text-[10px] text-slate-800 flex flex-col font-sans">
    <div className="flex items-center justify-between p-3 border-b border-slate-50">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0F766E] to-teal-500 flex items-center justify-center text-white font-bold text-[8px]">
          C
        </div>
        <div>
          <div className="font-semibold text-slate-900 leading-none">Aura Clinic</div>
          <div className="text-[8px] text-slate-400 leading-none mt-0.5">Sponsored</div>
        </div>
      </div>
      <div className="text-slate-400 font-bold">•••</div>
    </div>
    
    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-100 via-slate-50 to-teal-50/20 flex items-center justify-center overflow-hidden border-b border-slate-50">
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/25 to-transparent z-10">
        <div className="text-white text-[12px] font-display font-medium tracking-tight">Premium Natural Fillers</div>
        <div className="text-white/80 text-[8px] mt-0.5">Book bespoke consultation with Dr. Keller</div>
      </div>
      <svg className="w-full h-full opacity-10 absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="#0F766E" strokeWidth="2" />
      </svg>
    </div>

    <div className="p-3 space-y-2">
      <div className="flex items-center justify-between text-slate-400">
        <div className="flex space-x-3">
          <span>♥</span>
          <span>💬</span>
          <span>✈</span>
        </div>
        <span>♦</span>
      </div>
      
      <div>
        <p className="text-slate-600 leading-relaxed text-[9px]">
          <span className="font-semibold text-slate-900 mr-1">aura.clinic</span>
          Experience Swiss medical precision. Lock in your consultation with our premium patient ecosystem.
        </p>
      </div>

      <div className="mt-2 flex items-center justify-between bg-brand/5 border border-brand/10 p-2 rounded-lg">
        <span className="font-semibold text-brand text-[9px] uppercase tracking-wider">Book Consultation</span>
        <ArrowUpRight className="w-3 h-3 text-brand" />
      </div>
    </div>
  </div>
);

const LocalSEOMockup = () => (
  <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-md border border-slate-100 p-4 text-[10px] text-slate-600 font-sans space-y-3">
    <div className="flex items-center space-x-1.5 pb-2 border-b border-slate-50">
      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      <div className="flex-1 bg-slate-50 rounded px-2 py-0.5 text-center text-[7.5px] text-slate-400 flex items-center justify-center space-x-1">
        <Search className="w-2.5 h-2.5 text-slate-400" />
        <span>google.ch/?q=best+aesthetic+clinic+zurich</span>
      </div>
    </div>

    <div className="flex items-center bg-slate-50 border border-slate-100 rounded-full px-2.5 py-1 text-[9px] text-slate-800">
      <Search className="w-3 h-3 text-brand mr-1.5" />
      <span className="font-medium">best aesthetic clinic zurich</span>
    </div>

    <div className="space-y-1 pt-1">
      <div className="text-[7.5px] text-slate-400 flex items-center space-x-1">
        <span>https://www.auraclinic.ch</span>
        <span>›</span>
        <span>zurich</span>
      </div>
      <h4 className="text-brand font-medium text-[11px] leading-tight hover:underline cursor-pointer">
        Aura Aesthetic Clinic Zurich | Premium Facial Rejuvenation
      </h4>
      <div className="flex items-center space-x-1 text-yellow-500 font-semibold text-[8px]">
        <span>4.9 ★★★★★</span>
        <span className="text-slate-400">· 242 reviews · Swiss Certified</span>
      </div>
      <p className="text-slate-500 leading-normal text-[9px]">
        Zurich's premier aesthetic sanctuary. Specializing in natural-looking dermal fillers, bespoke skincare roadmaps, and non-surgical procedures.
      </p>
      
      <div className="grid grid-cols-2 gap-2 pt-1.5">
        <div className="p-1.5 bg-slate-50 rounded border border-slate-100/50">
          <span className="font-medium text-[8px] text-brand block">Our Treatments</span>
          <span className="text-[7px] text-slate-400">Precision fillers, botox</span>
        </div>
        <div className="p-1.5 bg-slate-50 rounded border border-slate-100/50">
          <span className="font-medium text-[8px] text-brand block">Book Online</span>
          <span className="text-[7px] text-slate-400">24/7 client booking calendar</span>
        </div>
      </div>
    </div>
  </div>
);

const GoogleProfileMockup = () => (
  <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden text-[10px] text-slate-600 font-sans">
    <div className="p-4 bg-gradient-to-r from-slate-50 to-slate-100/30 border-b border-slate-100 flex items-start justify-between">
      <div>
        <h4 className="text-slate-900 font-bold text-[12px] tracking-tight">Aura Aesthetic Clinic</h4>
        <p className="text-slate-400 text-[8px] mt-0.5">Medical & Aesthetic Clinic · Zurich</p>
        <div className="flex items-center space-x-1.5 mt-1.5">
          <span className="text-yellow-500 font-bold text-[10px]">4.9</span>
          <div className="flex text-yellow-400 space-x-0.5">
            <Star className="w-2.5 h-2.5 fill-current" />
            <Star className="w-2.5 h-2.5 fill-current" />
            <Star className="w-2.5 h-2.5 fill-current" />
            <Star className="w-2.5 h-2.5 fill-current" />
            <Star className="w-2.5 h-2.5 fill-current" />
          </div>
          <span className="text-slate-400 text-[8px]">(242 Reviews)</span>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
        <MapPin className="w-4 h-4" />
      </div>
    </div>

    <div className="grid grid-cols-4 gap-1 p-3 border-b border-slate-50 text-center text-[8px] font-semibold text-slate-700">
      <div className="p-1 bg-slate-50 rounded">📞 Call</div>
      <div className="p-1 bg-slate-50 rounded">📍 Route</div>
      <div className="p-1 bg-brand/5 text-brand rounded font-bold">🌐 Website</div>
      <div className="p-1 bg-slate-50 rounded">💾 Save</div>
    </div>

    <div className="p-4">
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100/60 relative">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-slate-800 text-[9px]">Elena Vasquez</span>
          <span className="text-slate-400 text-[8px]">Yesterday</span>
        </div>
        <div className="flex text-yellow-400 space-x-0.5 mb-1.5">
          <Star className="w-2 h-2 fill-current" />
          <Star className="w-2 h-2 fill-current" />
          <Star className="w-2 h-2 fill-current" />
          <Star className="w-2 h-2 fill-current" />
          <Star className="w-2 h-2 fill-current" />
        </div>
        <p className="italic text-slate-500 leading-normal text-[9px]">
          "Impeccable care from start to finish. Dr. Keller took so much time to personalize my filler roadmap. The automated reminder and gorgeous office are world class!"
        </p>
      </div>
    </div>
  </div>
);

const WebsiteMockup = () => (
  <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden text-[9px] text-slate-600 font-sans flex flex-col">
    <div className="flex items-center space-x-1.5 p-3 bg-slate-50/80 border-b border-slate-100">
      <div className="flex space-x-1">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded border border-slate-200/50 px-2 py-0.5 text-center text-[7.5px] text-slate-400">
        https://www.auraclinic.ch
      </div>
    </div>

    <div className="p-5 flex-1 flex flex-col justify-between min-h-[170px] bg-gradient-to-b from-slate-50/30 to-white relative">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <span className="font-display font-bold text-[10px] tracking-tight text-slate-900">AURA<span className="text-brand">.</span></span>
        <div className="flex space-x-3 text-[7.5px] font-medium text-slate-400">
          <span>Treatments</span>
          <span className="text-brand font-semibold">Book Now</span>
        </div>
      </div>

      <div className="my-auto py-3 space-y-1.5">
        <div className="inline-block bg-brand/5 border border-brand/10 text-brand text-[7px] font-mono px-1.5 py-0.5 rounded font-semibold">
          SWISS MEDICAL EXCELLENCE
        </div>
        <h3 className="font-display font-bold text-[14px] leading-tight text-slate-900 tracking-tight max-w-[200px]">
          The Art of Natural Aesthetics.
        </h3>
        <p className="text-slate-400 leading-relaxed text-[8px] max-w-[180px]">
          Bespoke facial rejuvenation roadmaps delivered with Swiss precision.
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="w-24 h-6 bg-brand text-white rounded flex items-center justify-center font-medium text-[8px] shadow-sm">
          Schedule Roadmap
        </div>
        <span className="text-slate-300">|</span>
        <span className="text-[7.5px] text-slate-400">Zurich, CH</span>
      </div>
    </div>
  </div>
);

const AIAutomationMockup = () => (
  <div className="w-full max-w-[280px] bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden text-[9px] text-slate-600 font-sans flex flex-col">
    <div className="bg-[#0F766E] text-white p-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-[10px]">
          A
        </div>
        <div>
          <div className="font-bold text-[10px] tracking-tight text-white">Aura AI Assistant</div>
          <div className="text-[7px] text-teal-200 flex items-center space-x-1">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse inline-block" />
            <span>Online · Quick Assist</span>
          </div>
        </div>
      </div>
      <div className="text-white/80">•••</div>
    </div>

    <div className="p-4 space-y-3 bg-[#FAF9F6] min-h-[210px] flex flex-col justify-end">
      <div className="self-start max-w-[85%] bg-white border border-slate-100 p-2.5 rounded-r-xl rounded-bl-xl shadow-sm text-slate-700 leading-normal">
        Welcome to Aura Clinic. Which practitioner treatment would you like to explore today?
      </div>

      <div className="self-end max-w-[80%] bg-brand text-white p-2.5 rounded-l-xl rounded-br-xl shadow-sm leading-normal">
        I want to book skin rejuvenation or fillers with Dr. Keller.
      </div>

      <div className="self-start max-w-[85%] bg-white border border-slate-100 p-2.5 rounded-r-xl rounded-bl-xl shadow-sm text-slate-700 leading-normal space-y-2">
        <div>Dr. Keller has two open slots left this Thursday:</div>
        <div className="grid grid-cols-2 gap-1.5 text-center text-[7.5px] font-medium text-brand">
          <div className="p-1 bg-brand/5 border border-brand/10 rounded hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer">
            Thursday 10:30
          </div>
          <div className="p-1 bg-brand/5 border border-brand/10 rounded hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer">
            Thursday 14:00
          </div>
        </div>
      </div>
    </div>
  </div>
);

const BookingSystemMockup = () => (
  <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-md border border-slate-100 p-4 text-[9px] text-slate-600 font-sans space-y-4">
    <div className="flex items-center justify-between pb-2 border-b border-slate-50">
      <h4 className="font-bold text-slate-900 text-[10px]">Select Consultation Time</h4>
      <span className="text-[7.5px] font-mono bg-brand/5 text-brand px-1.5 py-0.5 rounded font-semibold">STEP 2 OF 3</span>
    </div>

    <div className="grid grid-cols-5 gap-1.5 text-center">
      <div className="p-1 bg-slate-50 border border-slate-100 rounded">
        <span className="block text-slate-400 text-[7px]">Mon</span>
        <span className="block font-bold text-slate-700 mt-0.5">12</span>
      </div>
      <div className="p-1 bg-slate-50 border border-slate-100 rounded">
        <span className="block text-slate-400 text-[7px]">Tue</span>
        <span className="block font-bold text-slate-700 mt-0.5">13</span>
      </div>
      <div className="p-1 bg-slate-50 border border-slate-100 rounded">
        <span className="block text-slate-400 text-[7px]">Wed</span>
        <span className="block font-bold text-slate-700 mt-0.5">14</span>
      </div>
      <div className="p-1 bg-brand text-white border border-brand rounded shadow-sm shadow-brand/15">
        <span className="block text-brand-light/90 text-[7px]">Thu</span>
        <span className="block font-bold mt-0.5">15</span>
      </div>
      <div className="p-1 bg-slate-50 border border-slate-100 rounded">
        <span className="block text-slate-400 text-[7px]">Fri</span>
        <span className="block font-bold text-slate-700 mt-0.5">16</span>
      </div>
    </div>

    <div className="space-y-2">
      <span className="block font-semibold text-slate-800 text-[8px] tracking-wider uppercase">Available Slots</span>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="p-2 border border-slate-100 rounded text-center">
          09:30
        </div>
        <div className="p-2 bg-brand/5 border border-brand/20 rounded text-center text-brand font-semibold shadow-sm shadow-brand/5">
          14:00
        </div>
        <div className="p-2 border border-slate-100 rounded text-center">
          16:30
        </div>
      </div>
    </div>

    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100/60 flex items-center justify-between">
      <div>
        <div className="font-semibold text-slate-800">Thursday, Oct 15 at 14:00</div>
        <div className="text-slate-400 text-[8px] mt-0.5">Dr. Keller · Skin Roadmap</div>
      </div>
      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
        <Check className="w-3 h-3 stroke-[3]" />
      </div>
    </div>
  </div>
);

const SocialMediaMockup = () => (
  <div className="w-full max-w-[280px] bg-white rounded-2xl shadow-md border border-slate-100 p-3 text-[10px] text-slate-600 font-sans space-y-3">
    <div className="flex items-center justify-between pb-2 border-b border-slate-50">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#0F766E] to-teal-500" />
        <span className="font-bold text-slate-900 text-[9px]">aura.zurich</span>
      </div>
      <div className="px-3 py-1 bg-brand text-white rounded text-[8px] font-bold">Follow</div>
    </div>

    <div className="grid grid-cols-3 gap-1">
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-slate-400 font-medium p-1 text-center">
        <span>Bespoke Care</span>
        <div className="absolute inset-0 bg-brand/5" />
      </div>
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-slate-400 font-medium p-1 text-center">
        <span>Aesthetic Wellness</span>
        <div className="absolute inset-0 bg-brand/5" />
      </div>
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-brand font-bold p-1 text-center">
        <span>Natural Fillers</span>
        <div className="absolute inset-0 bg-brand/10" />
      </div>
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-slate-400 font-medium p-1 text-center">
        <span>Clinic Tour</span>
        <div className="absolute inset-0 bg-brand/5" />
      </div>
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-slate-400 font-medium p-1 text-center">
        <span>Dr. Keller Q&A</span>
        <div className="absolute inset-0 bg-brand/5" />
      </div>
      <div className="aspect-square bg-slate-50 border border-slate-100/80 rounded relative overflow-hidden flex items-center justify-center text-[7px] text-brand font-semibold p-1 text-center">
        <span>Before / After</span>
        <div className="absolute inset-0 bg-brand/10" />
      </div>
    </div>

    <div className="flex space-x-3 pt-1 justify-center">
      <div className="flex flex-col items-center space-y-1">
        <div className="w-8 h-8 rounded-full border-2 border-brand/40 p-[2px] bg-white">
          <div className="w-full h-full rounded-full bg-slate-100" />
        </div>
        <span className="text-[6.5px]">Results</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="w-8 h-8 rounded-full border-2 border-brand/40 p-[2px] bg-white">
          <div className="w-full h-full rounded-full bg-slate-100" />
        </div>
        <span className="text-[6.5px]">Reviews</span>
      </div>
      <div className="flex flex-col items-center space-y-1">
        <div className="w-8 h-8 rounded-full border-2 border-brand/40 p-[2px] bg-white">
          <div className="w-full h-full rounded-full bg-slate-100" />
        </div>
        <span className="text-[6.5px]">Pricing</span>
      </div>
    </div>
  </div>
);

const GrowthResultsMockup = () => (
  <div className="w-full max-w-[320px] bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-4 text-[9px] text-slate-400 font-sans space-y-4">
    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
      <div>
        <h4 className="text-white font-bold text-[10px]">Aura Growth Dashboard</h4>
        <p className="text-[7px] text-slate-500">Live patient acquisition tracker</p>
      </div>
      <span className="text-[7.5px] font-mono bg-brand/20 text-brand px-1.5 py-0.5 rounded font-semibold">SYS ACTIVE</span>
    </div>

    <div className="grid grid-cols-3 gap-2">
      <div className="bg-slate-800/50 rounded-lg p-2 border border-slate-800">
        <span className="text-[7px] text-slate-500 block uppercase font-medium">Bookings</span>
        <span className="text-[11px] font-bold text-white block mt-0.5">+184/mo</span>
        <span className="text-emerald-400 text-[6.5px] mt-0.5 flex items-center font-semibold">
          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +24%
        </span>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-2 border border-slate-800">
        <span className="text-[7px] text-slate-500 block uppercase font-medium">Ad ROI</span>
        <span className="text-[11px] font-bold text-brand block mt-0.5">5.2x</span>
        <span className="text-emerald-400 text-[6.5px] mt-0.5 flex items-center font-semibold">
          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +15%
        </span>
      </div>
      <div className="bg-slate-800/50 rounded-lg p-2 border border-slate-800">
        <span className="text-[7px] text-slate-500 block uppercase font-medium">Conv. Rate</span>
        <span className="text-[11px] font-bold text-white block mt-0.5">9.4%</span>
        <span className="text-emerald-400 text-[6.5px] mt-0.5 flex items-center font-semibold">
          <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +4.2%
        </span>
      </div>
    </div>

    <div className="bg-slate-800/30 border border-slate-800 rounded-lg p-2.5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-300 font-semibold text-[8px]">New Patient Bookings</span>
        <span className="text-slate-500 text-[6.5px]">Last 6 Months</span>
      </div>
      <div className="h-20 flex items-end">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0F766E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="35" x2="100" y2="35" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2,2" />
          <line x1="0" y1="20" x2="100" y2="20" stroke="#1E293B" strokeWidth="0.5" strokeDasharray="2,2" />
          <path d="M0,38 Q15,30 30,28 T60,18 T85,12 T100,5 L100,40 L0,40 Z" fill="url(#chartGlow)" />
          <path d="M0,38 Q15,30 30,28 T60,18 T85,12 T100,5" fill="none" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="100" cy="5" r="2.5" fill="#0F766E" />
          <circle cx="100" cy="5" r="4" fill="none" stroke="#0F766E" strokeWidth="1" className="animate-ping" />
        </svg>
      </div>
    </div>
  </div>
);

function MockupScreen({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <MetaAdsMockup />;
    case 1:
      return <LocalSEOMockup />;
    case 2:
      return <GoogleProfileMockup />;
    case 3:
      return <WebsiteMockup />;
    case 4:
      return <AIAutomationMockup />;
    case 5:
      return <BookingSystemMockup />;
    case 6:
      return <SocialMediaMockup />;
    case 7:
    default:
      return <GrowthResultsMockup />;
  }
}

export default function Ecosystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section id="solutions" className="overflow-visible bg-white">
      {/* Premium ambient glow behind the ecosystem to anchor it as a single system wrapped in an overflow-hidden layer so it doesn't break sticky behavior */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-brand/[0.015] rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-20 gap-6" id="ecosystem-header">
          <SectionHeader
            eyebrow="Growth Ecosystem"
            title="Visibility → Trust → Conversion → Automation → Retention → Growth"
            description="This is one of the strongest Vector Labs ideas: clinics do not need isolated services, they need a connected system."
          />
          <p className="text-body max-w-sm lg:text-right font-sans text-sm md:text-base leading-relaxed">
            Integrated digital tools working together as a single patient acquisition and retention engine.
          </p>
        </div>

        <div className="mb-10 hidden items-center gap-3 lg:flex">
          {["Visibility", "Trust", "Conversion", "Automation", "Retention", "Growth"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <div className="rounded-full border border-brand/10 bg-brand/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                {item}
              </div>
              {index < 5 ? <div className="h-px w-8 bg-gradient-to-r from-brand/40 to-brand/10" /> : null}
            </div>
          ))}
        </div>

        {/* Sticky-Scroll 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* Left Column: Sticky Device Mockup Panel */}
          <div className="hidden lg:flex lg:col-span-5 sticky top-32 h-[520px] items-center justify-center overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/70 p-8 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
                <MockupScreen index={activeIndex} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Vertically Stacked Cards */}
          <div className="col-span-1 space-y-6 lg:col-span-7 lg:space-y-8 lg:pb-20">
            {ecosystemServices.map((card, index) => {
              const isActive = index === activeIndex;

              if (card.isCTA) {
                return (
                  <motion.a
                    key={index}
                    href="/contact"
                    onViewportEnter={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                    viewport={{ amount: 0.55 }}
                    animate={{
                      scale: isActive ? 1.015 : 0.99,
                      opacity: isActive ? 1 : 0.45,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative block min-h-[220px] cursor-pointer overflow-hidden rounded-2xl bg-brand p-8 text-white shadow-lg transition-all duration-300 group ${
                      isActive ? "border-brand shadow-brand/20" : "border-transparent"
                    }`}
                    id="ecosystem-card-cta"
                  >
                    <div className="w-full space-y-4">
                      {/* Stage Badge */}
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono tracking-wider text-white/70 group-hover:text-white transition-colors duration-300 font-semibold">
                          {card.stage}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="font-display font-bold text-xl md:text-2xl leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-xs text-brand-light/80 leading-relaxed font-sans">
                          {card.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Embedded Mockup in Card for Mobile Viewports */}
                    <div className="lg:hidden w-full mt-6 p-4 bg-slate-900/40 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">
                      <MockupScreen index={index} />
                    </div>

                    <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-brand">
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90 stroke-[2.5]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </div>
                  </motion.a>
                );
              }

              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  onViewportEnter={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  viewport={{ amount: 0.55 }}
                  animate={{
                    scale: isActive ? 1.015 : 0.99,
                    opacity: isActive ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex min-h-[220px] cursor-pointer flex-col items-start justify-between space-y-6 rounded-2xl border bg-white p-8 transition-all duration-300 group ${
                    isActive
                      ? "border-brand/45 shadow-[0_12px_30px_-10px_rgba(15,118,110,0.08)]"
                      : "border-slate-100/80 shadow-sm"
                  }`}
                  id={`ecosystem-card-${index}`}
                >
                  <div className="space-y-5 w-full">
                    {/* Header Row */}
                    <div className="flex items-center justify-between w-full">
                      {/* Icon Container */}
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm ${
                        isActive
                          ? "bg-brand text-white border-brand"
                          : "bg-bg-base text-brand border-border-light group-hover:bg-brand group-hover:text-white"
                      }`}>
                        <IconComponent className="w-4 h-4 stroke-[2]" />
                      </div>

                      {/* Sequential Stage Badge */}
                      <span className={`text-[10px] font-mono tracking-wider transition-colors duration-300 font-semibold ${
                        isActive ? "text-brand" : "text-slate-400 group-hover:text-brand"
                      }`}>
                        {card.stage}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className={`font-display font-bold text-lg transition-colors duration-300 ${
                        isActive ? "text-brand" : "text-heading"
                      }`}>
                        {card.title}
                      </h3>
                      <p className="text-xs text-body leading-relaxed max-w-xl">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Embedded Mockup in Card for Mobile Viewports */}
                  <div className="lg:hidden w-full mt-6 p-4 bg-slate-50/80 rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center">
                    <MockupScreen index={index} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-3xl rounded-[2rem] border border-brand/10 bg-brand/[0.03] px-8 py-8 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">System Layer CTA</div>
            <h3 className="mt-3 text-2xl font-bold text-heading md:text-3xl">
              See how your clinic would fit into this ecosystem
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-body">
              The point is not to buy random services. It is to identify which layer of visibility,
              trust, conversion, or automation is holding your clinic back first.
            </p>
            <div className="mt-6">
              <Button href="/contact" icon={<ArrowUpRight className="h-4 w-4" />}>
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
