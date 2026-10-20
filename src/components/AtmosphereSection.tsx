import React, { useState } from "react";
import { SPA_ROOMS } from "../data/spaData";
import { Maximize2, X } from "lucide-react";

export const AtmosphereSection: React.FC = () => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>("suite-2");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeRoom = SPA_ROOMS.find((r) => r.id === selectedSuiteId) || SPA_ROOMS[1];

  return (
    <section id="space" className="bg-[#241C16] text-[#F4EFEA] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#3D3025]">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#A77A50] font-medium">
              Atmosphere & Space
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight mt-3 text-balance">
              Step in. Slow down. Breathe.
            </h2>
          </div>

          {/* Room switcher buttons (clean segmented tabs, not pills) */}
          <div className="flex items-center gap-2 self-start md:self-end">
            {SPA_ROOMS.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setSelectedSuiteId(room.id)}
                className={`text-xs uppercase tracking-wider px-4 py-2 transition-all cursor-pointer border ${
                  selectedSuiteId === room.id
                    ? "border-[#A77A50] text-[#F4EFEA] bg-[#34271E]"
                    : "border-[#3D3025] text-[#9A8D80] hover:text-[#F4EFEA] hover:border-[#6B5746]"
                }`}
              >
                {room.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Immersive Photographic Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Image Container */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden bg-[#1B1511]">
              <img
                src={activeRoom.image}
                alt={activeRoom.title}
                className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1511]/60 via-transparent to-transparent pointer-events-none" />

              {/* Lightbox trigger */}
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute bottom-4 right-4 bg-[#241C16]/80 backdrop-blur-sm text-[#F4EFEA] hover:bg-[#34271E] p-2.5 transition-colors cursor-pointer border border-[#4A3A2D] text-xs flex items-center gap-1.5"
                title="View full room photograph"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#A77A50]" />
                <span className="hidden sm:inline uppercase tracking-widest text-[10px]">Expand Photo</span>
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-[#9A8D80]">
              <span className="font-serif italic text-sm text-[#D8CEC1]">{activeRoom.subtitle}</span>
              <span className="text-[11px] uppercase tracking-widest text-[#A77A50]">Authentic S&H Interior</span>
            </div>
          </div>

          {/* Editorial Text Area */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#A77A50]">
                {activeRoom.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F4EFEA] leading-snug">
                {activeRoom.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-[#B5A99C] leading-relaxed font-light">
                {activeRoom.description}
              </p>
            </div>

            {/* Quiet features list */}
            <div className="pt-6 border-t border-[#3D3025] space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#A77A50]">
                Room Elements
              </span>
              <ul className="space-y-2.5 text-xs text-[#C5B9AC]">
                {activeRoom.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#A77A50] mt-0.5">·</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note on genuine premises */}
            <p className="text-xs text-[#8A7C6E] italic font-serif">
              Photographs recorded at 429 Montrose Avenue, Toronto.
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#16120E]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 text-[#F4EFEA] hover:text-[#A77A50] transition-colors cursor-pointer"
            aria-label="Close photo view"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={activeRoom.image}
              alt={activeRoom.title}
              className="max-h-[75vh] w-auto max-w-full object-contain border border-[#3D3025]"
            />
            <div className="mt-4 text-center">
              <p className="font-serif text-lg text-[#F4EFEA]">{activeRoom.title} – {activeRoom.subtitle}</p>
              <p className="text-xs text-[#A77A50] tracking-widest uppercase mt-1">S&H Spa Massage · 429 Montrose Ave, Toronto</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
