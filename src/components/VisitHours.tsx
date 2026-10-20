import React from "react";
import { BUSINESS_INFO } from "../data/spaData";
import { MapPin, Phone, Clock, ArrowUpRight, Navigation as NavIcon } from "lucide-react";

export const VisitHours: React.FC = () => {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#EFE8DF] border-t border-[#D8CEC1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Address, Contact & Hours */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#795A40] font-medium">
                Location & Schedule
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#29231E] tracking-tight mt-3">
                Visiting Montrose Avenue.
              </h2>
              <p className="text-sm sm:text-base text-[#756A5F] leading-relaxed font-light mt-3">
                Situated on quiet residential Montrose Avenue in Toronto, steps from
                Bickford Park and the Palmerston neighbourhood. An unhurried setting designed
                for complete discretion and calm.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-6 pt-4 border-t border-[#D8CEC1]">
              {/* Address Row */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#795A40] shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <span className="block text-xs uppercase tracking-wider text-[#756A5F]">Address</span>
                  <p className="font-serif text-lg text-[#29231E] leading-snug">
                    {BUSINESS_INFO.address.street}
                  </p>
                  <p className="text-sm text-[#756A5F]">
                    {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.province} {BUSINESS_INFO.address.postalCode}
                  </p>
                  <p className="text-xs text-[#8A7C6E]">
                    Neighbourhood: {BUSINESS_INFO.address.neighborhood}
                  </p>
                  <div className="pt-2">
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#795A40] hover:text-[#29231E] border-b border-[#795A40] pb-0.5"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Telephone Row */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D8CEC1]/60">
                <Phone className="w-5 h-5 text-[#795A40] shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <span className="block text-xs uppercase tracking-wider text-[#756A5F]">Telephone</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-serif text-lg text-[#29231E] hover:text-[#795A40] transition-colors block"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#8A7C6E] leading-relaxed">
                    Listed number from Google business listing. Inquiries and scheduling confirmation can be made via call or message.
                  </p>
                </div>
              </div>

              {/* Hours & Availability Row */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#D8CEC1]/60">
                <Clock className="w-5 h-5 text-[#795A40] shrink-0 mt-0.5" />
                <div className="space-y-1 text-sm">
                  <span className="block text-xs uppercase tracking-wider text-[#756A5F]">Hours & Booking Availability</span>
                  <p className="font-medium text-[#29231E]">
                    {BUSINESS_INFO.openingHoursListing}
                  </p>
                  <p className="text-xs text-[#756A5F] leading-relaxed font-light pt-1">
                    {BUSINESS_INFO.openingHoursPolicy}
                  </p>
                  <div className="pt-2 text-[11px] text-[#795A40] uppercase tracking-wider">
                    Please submit a booking enquiry in advance to confirm your slot.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Location Map Card & Direction Link */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border border-[#D8CEC1] bg-[#E5DDD2]">
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Screenshot_2026-10-21-00-43-31-01_3d9111e2d3171bf4882369f490c087b4_4bf5c223.jpg`}
                alt="Map location of S&H Spa Massage at 429 Montrose Avenue near Bickford Park, Toronto"
                className="w-full h-full object-cover object-center filter saturate-90 hover:saturate-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29231E]/60 via-transparent to-transparent pointer-events-none" />

              {/* Overlay location pin badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#F4EFEA]/95 backdrop-blur-sm border border-[#D8CEC1] flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-sm text-[#29231E] font-medium">429 Montrose Avenue</p>
                  <p className="text-[11px] text-[#756A5F]">Near Bickford Park & Bloor St W</p>
                </div>
                <a
                  href={BUSINESS_INFO.mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-[11px] uppercase tracking-wider font-medium text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors whitespace-nowrap"
                >
                  <NavIcon className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#8A7C6E] pt-1">
              <span>Toronto public transit: Christie / Ossington stations nearby</span>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#795A40] hover:text-[#29231E] underline underline-offset-2"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
