import { motion } from "motion/react";
import { Rocket, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Curved Card wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand rounded-[2.5rem] p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand/10 border border-brand-light/10"
          id="cta-wrapper"
        >
          {/* Subtle background abstract blobs */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-light/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          {/* Floating Icon Container */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-light border border-white/20 backdrop-blur-sm shadow-inner"
              id="cta-floating-icon"
            >
              <Rocket className="w-7 h-7 stroke-[2]" />
            </motion.div>
          </div>

          {/* Core Content */}
          <div className="max-w-2xl mx-auto space-y-6" id="cta-content">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white leading-[1.1]">
              Ready to Transform Your Clinic?
            </h2>
            <p className="text-sm sm:text-base text-brand-light/90 leading-relaxed font-sans font-medium">
              Join the world's most prestigious clinics. Book your strategy call today to receive a custom growth audit and digital roadmap.
            </p>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10" id="cta-buttons">
            <a
              href="mailto:miniaura951@gmail.com?subject=Vector%20Labs%20Clinic%20Strategy%20Call"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-brand font-bold text-sm hover:bg-brand-light transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-black/10 hover:-translate-y-0.5"
              id="btn-cta-primary"
            >
              Book Your Strategy Call
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
              id="btn-cta-secondary"
            >
              View Our Framework
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
