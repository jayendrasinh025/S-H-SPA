import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/spaData";
import { ArrowUp, Info, X, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const [conceptModalOpen, setConceptModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#241C16] text-[#F4EFEA] pt-16 pb-12 border-t border-[#3D3025]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-[#3D3025]">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl tracking-tight text-[#F4EFEA]">
              S&H Spa Massage
            </h3>
            <p className="text-xs text-[#9A8D80] leading-relaxed max-w-sm font-light">
              A private massage therapy sanctuary on Montrose Avenue in Toronto. Dedicated to
              quiet, attentive bodywork in warm ambient treatment suites.
            </p>
            <div className="pt-2 text-xs text-[#C5B9AC] space-y-1">
              <p>{BUSINESS_INFO.address.street}</p>
              <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.province} {BUSINESS_INFO.address.postalCode}</p>
              <p className="text-[#8A7C6E]">Tel: {BUSINESS_INFO.phone}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs tracking-wider uppercase text-[#9A8D80]">
            <span className="block text-[#F4EFEA] font-medium text-[11px] tracking-widest pb-1">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#approach" className="hover:text-[#F4EFEA] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#space" className="hover:text-[#F4EFEA] transition-colors">
                  The Space & Suites
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-[#F4EFEA] transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#F4EFEA] transition-colors">
                  Booking Enquiry
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#F4EFEA] transition-colors">
                  Visit & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* External Links & Concept Info */}
          <div className="md:col-span-4 space-y-4">
            <span className="block text-[#F4EFEA] font-medium text-[11px] tracking-widest uppercase">
              Confirmed Business Listing
            </span>
            <p className="text-xs text-[#9A8D80] leading-relaxed font-light">
              Google Maps verified location in Palmerston-Little Italy, Toronto.
            </p>
            <div className="pt-1 flex flex-col gap-2 text-xs">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A77A50] hover:text-[#F4EFEA] transition-colors"
              >
                <span>View Google Business Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                type="button"
                onClick={() => setConceptModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-[#8A7C6E] hover:text-[#F4EFEA] transition-colors text-left cursor-pointer pt-2"
              >
                <Info className="w-3.5 h-3.5 text-[#A77A50]" />
                <span className="underline underline-offset-4">Demonstration Concept Notes</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6E62]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} S&H Spa Massage. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Toronto, Canada</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#9A8D80] hover:text-[#F4EFEA] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Demonstration Concept Modal for Owner / Reviewer */}
      {conceptModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#16120E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div className="bg-[#241C16] border border-[#3D3025] max-w-xl w-full p-6 sm:p-8 relative text-[#F4EFEA] space-y-6">
            <button
              type="button"
              onClick={() => setConceptModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-[#9A8D80] hover:text-[#F4EFEA] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#A77A50] font-medium">
                Prototype Demonstration Concept
              </span>
              <h4 className="text-2xl font-serif text-[#F4EFEA] mt-1">
                About this Bespoke Website Design
              </h4>
            </div>

            <div className="space-y-3 text-xs text-[#B5A99C] leading-relaxed font-light">
              <p>
                This website is a bespoke design concept created specifically for{" "}
                <strong className="text-[#F4EFEA]">S&H Spa Massage</strong> at 429 Montrose Avenue,
                Toronto.
              </p>
              <p>
                <strong className="text-[#F4EFEA]">Authentic Photography:</strong> All interior
                photographs shown are the authentic treatment suites from the public Google Maps listing,
                celebrating the natural timber, warm vertical panels, and ambient lighting of the real
                premises.
              </p>
              <p>
                <strong className="text-[#F4EFEA]">Design Principles:</strong> Inspired by the quiet
                luxury, restrained typography, and warm amber warmth of high-end editorial brands
                (like Aesop), avoiding generic spa templates, artificial stock photos, or cluttered
                widgets.
              </p>
              <p>
                <strong className="text-[#F4EFEA]">Owner Customization:</strong> Exact treatment names,
                pricing, confirmed business hours, therapist credentials, and booking integrations can be
                directly tailored upon owner review.
              </p>
            </div>

            <div className="pt-4 border-t border-[#3D3025] flex justify-end">
              <button
                type="button"
                onClick={() => setConceptModalOpen(false)}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#F4EFEA] bg-[#34271E] hover:bg-[#A77A50] hover:text-[#241C16] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
