import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BUSINESS_INFO } from "../data/spaData";

interface HeroProps {
  onOpenBooking: () => void;
  onExploreTreatments: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreTreatments }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Restrained category kicker (clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#756A5F]">
              <span>S&H Spa Massage</span>
              <span aria-hidden="true">·</span>
              <span>Montrose Avenue, Toronto</span>
            </div>

            {/* Serif Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#29231E] leading-[1.12] text-balance">
              Make room to unwind.
            </h1>

            {/* Natural, honest supporting copy */}
            <p className="text-base sm:text-lg text-[#756A5F] leading-relaxed max-w-xl font-light">
              A calm space to pause, reset, and take a little time for yourself.
              Tucked away on Montrose Avenue in Toronto, offering attentive bodywork
              in quiet, warm ambient treatment rooms.
            </p>

            {/* Intentional Action Pair */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors cursor-pointer shadow-sm"
              >
                Request an appointment
              </button>

              <button
                type="button"
                onClick={onExploreTreatments}
                className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-medium uppercase tracking-wider text-[#29231E] hover:text-[#795A40] transition-colors py-3 group cursor-pointer"
              >
                <span>Explore treatments</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#795A40]" />
              </button>
            </div>

            {/* Key context row */}
            <div className="pt-6 border-t border-[#D8CEC1]/60 flex items-center gap-6 text-xs text-[#756A5F] tracking-wide">
              <div>
                <span className="block text-[#29231E] font-medium font-serif text-sm">429 Montrose Ave</span>
                <span className="text-[11px]">Palmerston - Little Italy</span>
              </div>
              <div className="h-6 w-px bg-[#D8CEC1]/80" />
              <div>
                <span className="block text-[#29231E] font-medium font-serif text-sm">Private Sessions</span>
                <span className="text-[11px]">Individual Appointments</span>
              </div>
              <div className="h-6 w-px bg-[#D8CEC1]/80" />
              <div>
                <span className="block text-[#29231E] font-medium font-serif text-sm">Quiet Sanity</span>
                <span className="text-[11px]">Warm Ambient Suites</span>
              </div>
            </div>
          </div>

          {/* Real Spa Photograph Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] w-full overflow-hidden bg-[#EAE2D7]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/IMG_20261021_005409_9abade26.jpg`}
                alt="Treatment Suite at S&H Spa Massage with warm beige vertical wood panels, timber floor, cushioned massage table, and warm glowing ambient lights"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                loading="eager"
              />
              {/* Subtle ambient lighting vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#29231E]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Editorial Caption */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#756A5F]">
              <span className="italic font-serif">Treatment Suite I — Light timber flooring & warm vertical panels</span>
              <span className="text-[11px] tracking-wider uppercase text-[#795A40]">Actual premises</span>
            </div>
          </div>
        </div>
      </div>

      {/* Understated scroll indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full pt-8 flex items-center justify-between text-xs text-[#756A5F]">
        <a
          href="#approach"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#756A5F] hover:text-[#29231E] transition-colors"
        >
          <span>Discover</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </a>
        <span className="text-[11px] uppercase tracking-widest hidden sm:inline">
          {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.province}
        </span>
      </div>
    </section>
  );
};
