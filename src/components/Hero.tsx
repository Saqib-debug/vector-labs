import { motion } from "motion/react";
import { ArrowUpRight, Star, CheckCircle, TrendingUp, Laptop, Smartphone } from "lucide-react";

// Import the generated image asset path
import heroMockupImg from "../assets/images/hero_mockup_1783148883811.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-bg-base flex items-center"
    >
      {/* 1. Base subtle grid pattern (barely visible, masked) */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 118, 110, 0.012) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 118, 110, 0.012) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />

      {/* 2. Premium fine noise/grain texture to give tactile editorial feel */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 3. Soft, layered teal gradient blobs with controlled low opacity (5-8%) */}
      {/* Blob A: Soft teal light source behind left content */}
      <div className="absolute left-[-15%] top-[10%] w-[50rem] h-[50rem] rounded-full bg-[#0F766E]/[0.05] blur-[150px] pointer-events-none -z-10" />
      
      {/* Blob B: Accent light source behind right visual ecosystem */}
      <div className="absolute right-[-10%] top-[15%] w-[55rem] h-[55rem] rounded-full bg-[#0F766E]/[0.07] blur-[160px] pointer-events-none -z-10" />
      
      {/* Blob C: Ambient centerpiece radial gradient behind content */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[650px] rounded-full pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle at center, rgba(15, 118, 110, 0.04) 0%, rgba(250, 250, 250, 0) 70%)"
        }}
      />

      {/* 4. Soft premium contrasting light spots for extra depth */}
      <div className="absolute left-[30%] top-[30%] w-[350px] h-[350px] rounded-full bg-white opacity-45 blur-[90px] pointer-events-none -z-10" />
      <div className="absolute right-[25%] bottom-[20%] w-[400px] h-[400px] rounded-full bg-white opacity-35 blur-[100px] pointer-events-none -z-10" />

      {/* 5. Smooth bottom fade transition layer to merge seamlessly into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-8" id="hero-left-content">
          {/* Label Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-slate-200/80 bg-white/50 backdrop-blur-sm"
            id="hero-label-pill"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] md:text-xs font-semibold tracking-widest text-slate-500 uppercase font-sans">
              Digital Infrastructure in Aesthetics
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-heading leading-[1.05]"
            id="hero-heading"
          >
            Digital Systems <br />
            That Turn <br />
            <span className="relative inline-block">
              <span className="text-brand bg-gradient-to-r from-brand to-[#14B8A6] bg-clip-text text-transparent">Growth</span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#0F766E]/35 to-transparent rounded-full" />
            </span> <br />
            Into Reality.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-body max-w-xl leading-relaxed"
            id="hero-subheading"
          >
            We build the digital infrastructure for the world's most prestigious dental and aesthetic clinics. High-conversion systems for high-value patients.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            id="hero-ctas"
          >
            <motion.a
              href="#cta"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={{
                initial: { scale: 1, y: 0 },
                hover: { scale: 1.015, y: -2.5 },
                tap: { scale: 0.985, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group inline-flex h-[56px] items-center justify-center px-9 rounded-full bg-[#0F766E] text-white font-semibold text-sm tracking-wide shadow-[0_12px_24px_-8px_rgba(15,118,110,0.25),_0_4px_12px_rgba(15,118,110,0.1)] hover:shadow-[0_20px_32px_-6px_rgba(15,118,110,0.4),_0_8px_16px_rgba(15,118,110,0.15)] transition-all duration-300 select-none relative overflow-hidden"
              id="btn-hero-primary"
            >
              {/* Soft premium highlight overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10">Book Free Strategy Call</span>
              <motion.span
                className="relative z-10 ml-2"
                variants={{
                  initial: { x: 0, y: 0 },
                  hover: { x: 3.5, y: -3.5 },
                  tap: { x: 0, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 380, damping: 20 }}
              >
                <ArrowUpRight className="w-4.5 h-4.5" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group inline-flex h-[52px] items-center justify-center px-8 rounded-full border border-slate-200 bg-white text-[#0F172A] font-semibold text-sm tracking-wide shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-[#0F766E]/40 hover:text-[#0F766E] hover:shadow-[0_10px_25px_-10px_rgba(15,118,110,0.15)] transition-all duration-300 select-none"
              id="btn-hero-secondary"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4 ml-2 opacity-0 -mr-2 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300 ease-out" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right Graphic Column */}
        <div className="lg:col-span-6 relative flex items-center justify-center pt-8 pb-12 lg:py-0" id="hero-right-visual">
          {/* Framer motion wrapper for float animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] sm:max-w-[550px] lg:max-w-none aspect-[4/3] flex items-center justify-center"
          >
            {/* Soft decorative shadow/blob element */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#0F766E]/20 to-[#0F766E]/5 blur-3xl opacity-70 -z-10" />

            {/* Very subtle radial teal glow behind the hero visual to add luxurious depth */}
            <div 
              className="absolute -inset-20 sm:-inset-28 rounded-full pointer-events-none -z-20 blur-[130px]"
              style={{
                background: "radial-gradient(circle at center, rgba(15, 118, 110, 0.08) 0%, rgba(20, 184, 166, 0.02) 50%, transparent 75%)"
              }}
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative w-full z-10"
              id="hero-mockup-wrapper"
            >
              {/* 1. Floating MacBook display representing high-end dental clinic website */}
              <div className="relative w-[90%] mx-auto rounded-t-2xl bg-slate-900 p-2 pb-0 shadow-2xl border border-slate-700/30 overflow-hidden">
                <div className="w-full aspect-[16/10] bg-[#FAFAFA] rounded-t-lg overflow-hidden flex flex-col font-sans select-none border border-slate-200/50">
                  {/* Website Header */}
                  <div className="px-3.5 py-2.5 border-b border-slate-100 flex items-center justify-between bg-white text-[10.5px] sm:text-[11.5px]">
                    <div className="flex items-center gap-1.5 font-bold text-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E]" />
                      <span>AURA DENTAL</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 font-semibold text-[9.5px] sm:text-[10.5px]">
                      <span>Treatments</span>
                      <span>Results</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#0F766E] text-white text-[8px] sm:text-[9px]">Book Now</span>
                    </div>
                  </div>
                  
                  {/* Website Hero Content */}
                  <div className="p-5 flex-1 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#0F766E]/5 blur-md" />
                    <div className="absolute right-5 top-5 w-12 h-12 rounded-full border border-[#0F766E]/10 flex items-center justify-center">
                      <span className="w-6 h-6 rounded-full border border-dashed border-[#0F766E]/20" />
                    </div>
                    
                    <div className="max-w-[65%] space-y-1.5 z-10">
                      <div className="inline-block px-2 py-0.5 bg-[#0F766E]/10 rounded-full text-[7px] sm:text-[8px] text-[#0F766E] font-bold tracking-wider uppercase">
                        Aesthetic Excellence
                      </div>
                      <h2 className="text-[11.5px] sm:text-[15px] font-bold text-slate-800 font-display leading-tight">
                        Where Medical Precision Meets High-End Artistry
                      </h2>
                      <p className="text-[8px] sm:text-[9.5px] text-slate-500 leading-relaxed">
                        Bespoke dental restoration tailored specifically to your natural anatomy.
                      </p>
                      <div className="flex gap-2 pt-1">
                        <span className="px-2 py-0.5 bg-slate-900 text-white rounded text-[7px] font-medium">Explore Work</span>
                        <span className="px-2 py-0.5 border border-slate-200 text-slate-600 rounded text-[7px] font-medium bg-white">Consult</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MacBook Keyboard Base */}
              <div className="relative w-[98%] mx-auto h-2 bg-slate-800 rounded-b-xl border-t border-slate-700/20 shadow-md flex justify-center">
                <div className="w-20 h-1 bg-slate-700/50 rounded-b-sm" />
              </div>

              {/* 2. Floating iPhone display representing the online booking flow */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-10 -right-4 sm:-right-8 w-[156px] sm:w-[186px] aspect-[9/19] bg-slate-900 rounded-[28px] p-2 shadow-2xl border-2 border-slate-800/90 z-20 overflow-hidden"
              >
                <div className="w-full h-full bg-[#FAFAFA] rounded-[20px] overflow-hidden flex flex-col font-sans relative border border-slate-200/50">
                  {/* Notch & Status bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-lg z-50 flex items-center justify-center">
                    <span className="w-3.5 h-0.5 bg-slate-800 rounded-full" />
                  </div>
                  
                  {/* Screen Content */}
                  <div className="pt-5 px-2.5 pb-2.5 flex-1 flex flex-col text-[10.5px] bg-white">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <span className="font-bold text-slate-800 text-[9px] sm:text-[10px]">Aura Booking</span>
                      <span className="text-[8px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 rounded">Live</span>
                    </div>
                    
                    {/* Booking Progress */}
                    <div className="py-2.5 space-y-2 flex-1">
                      <div className="text-[8px] text-slate-400 font-bold">SELECT TIMESLOT</div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-slate-700">Thursday, July 9</div>
                      
                      {/* Slots */}
                      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
                        <div className="p-1.5 border border-slate-150 rounded text-center text-slate-400 text-[8px] font-medium bg-slate-50/50">
                          09:30 AM
                        </div>
                        <div className="p-1.5 border border-[#0F766E] rounded text-center text-[#0F766E] text-[8px] font-bold bg-[#0F766E]/5">
                          10:30 AM
                        </div>
                        <div className="p-1.5 border border-slate-150 rounded text-center text-slate-400 text-[8px] font-medium bg-slate-50/50">
                          11:30 AM
                        </div>
                        <div className="p-1.5 border border-slate-150 rounded text-center text-slate-400 text-[8px] font-medium bg-slate-50/50">
                          01:00 PM
                        </div>
                      </div>

                      {/* Service Detail */}
                      <div className="mt-3 p-1.5 bg-slate-50 rounded border border-slate-100 space-y-0.5">
                        <div className="text-[7px] text-slate-400 uppercase font-bold">TREATMENT</div>
                        <div className="text-[8.5px] font-bold text-slate-700">Premium Veneer Design</div>
                      </div>
                    </div>
                    
                    {/* Booking CTA */}
                    <button className="w-full py-2 bg-[#0F766E] hover:bg-[#0D5C56] text-white font-semibold rounded-md text-[9px] sm:text-[10px] text-center shadow-sm">
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* 3. Google Reviews Popup */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[8%] -right-12 sm:-right-16 z-30 p-2.5 bg-white/95 backdrop-blur-md border border-white/50 rounded-lg shadow-lg max-w-[180px] space-y-0.5"
                id="hero-review-popup"
              >
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2 h-2 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="text-[7.5px] text-slate-400 font-semibold">2h ago</span>
                </div>
                <p className="text-[8.5px] text-slate-600 leading-normal italic">
                  "Subtle transformation. Absolutely world class."
                </p>
                <div className="text-[8.5px] text-slate-800 font-bold">
                  — Sophia M.
                </div>
              </motion.div>

              {/* 4. WhatsApp Conversation Widget */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-10 -left-8 sm:-left-12 z-30 p-3 bg-white border border-slate-100 rounded-xl shadow-xl max-w-[200px] sm:max-w-[228px] space-y-1.5"
                id="hero-whatsapp-widget"
              >
                <div className="flex items-center justify-between pb-1 border-b border-slate-50">
                  <div className="flex items-center gap-1.5">
                    <div className="relative">
                      <div className="w-5.5 h-5.5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-[#0F766E]">
                        S
                      </div>
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-emerald-500 border border-white" />
                    </div>
                    <div>
                      <div className="text-[8.5px] font-bold text-slate-800 leading-tight">Sarah (Care Team)</div>
                      <div className="text-[7px] text-slate-400 leading-none">Response: &lt;5m</div>
                    </div>
                  </div>
                  <span className="px-1.5 py-0.5 bg-slate-150 text-slate-500 rounded text-[7px] font-bold uppercase tracking-wider scale-[0.9]">WhatsApp</span>
                </div>
                <div className="space-y-1.5 text-[8.5px]">
                  <div className="bg-slate-100 p-1.5 rounded-lg rounded-tl-none text-slate-600 max-w-[95%]">
                    "Do you have veneer openings this Thursday?"
                  </div>
                  <div className="bg-[#0F766E]/10 text-[#0F766E] p-1.5 rounded-lg rounded-tr-none max-w-[95%] ml-auto text-right font-medium">
                    "Yes, 10:30 AM is open. Secure it now?"
                  </div>
                </div>
              </motion.div>

              {/* 5. Booking Confirmation Popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[32%] -left-[12%] sm:-left-[16%] z-30 px-2.5 py-2 bg-[#0F766E] text-white rounded shadow-lg flex items-center gap-1.5 max-w-[190px] border border-[#0F766E]/30"
                id="hero-booking-confirmation"
              >
                <CheckCircle className="w-3.5 h-3.5 text-white shrink-0" />
                <div className="leading-tight">
                  <div className="text-[6px] uppercase tracking-wider font-bold opacity-80">CONFIRMATION</div>
                  <div className="text-[9.5px] font-extrabold whitespace-nowrap">Appointment Confirmed!</div>
                </div>
              </motion.div>

              {/* 6. Analytics Growth Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-12 right-[12%] z-20 p-2.5 bg-white/95 border border-slate-100 rounded-lg shadow-xl min-w-[132px] space-y-0.5"
                id="hero-analytics-growth"
              >
                <div className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider">Acquisition Rate</div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-sm font-bold text-slate-800 font-display">+142.8%</span>
                  <span className="text-[6px] text-emerald-600 font-semibold flex items-center gap-0.5">
                    <TrendingUp className="w-1.5 h-1.5" /> growth
                  </span>
                </div>
                <div className="flex items-end gap-0.5 h-3.5 pt-0.5">
                  <div className="w-full bg-slate-100 rounded-sm h-1.5" />
                  <div className="w-full bg-slate-100 rounded-sm h-2" />
                  <div className="w-full bg-[#0F766E]/30 rounded-sm h-2.5" />
                  <div className="w-full bg-[#0F766E] rounded-sm h-3.5" />
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
