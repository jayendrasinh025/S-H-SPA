import React from "react";

export const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 sm:py-32 border-t border-[#D8CEC1]/60 bg-[#F4EFEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Editorial Top Lockup */}
        <div className="max-w-3xl space-y-5">
          <p className="text-xs uppercase tracking-widest text-[#795A40] font-medium">
            The S&H Feeling
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#29231E] tracking-tight leading-tight text-balance">
            A pause from the pace of everyday life.
          </h2>
          <p className="text-base sm:text-lg text-[#756A5F] leading-relaxed font-light pt-2">
            A welcoming space, a slower rhythm, and time set aside for yourself.
            Nestled on residential Montrose Avenue near Bickford Park in Toronto,
            S&H Spa Massage provides a private setting where bodywork is unhurried,
            quiet, and centered around restorative stillness.
          </p>
        </div>

        {/* Quiet Three-Column Editorial Grid (No pill cards, generous whitespace, fine hairlines) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-12 border-t border-[#D8CEC1]/80">
          <div className="space-y-4">
            <span className="block text-xs uppercase tracking-widest text-[#795A40]">
              01 / Setting
            </span>
            <h3 className="text-xl font-serif text-[#29231E]">
              Quiet Atmosphere
            </h3>
            <p className="text-sm text-[#756A5F] leading-relaxed font-light">
              Gentle ambient illumination, warm natural wood surfaces, and acoustic privacy.
              Every treatment room is prepared deliberately to allow your senses to decompress
              the moment you step inside.
            </p>
          </div>

          <div className="space-y-4">
            <span className="block text-xs uppercase tracking-widest text-[#795A40]">
              02 / Focus
            </span>
            <h3 className="text-xl font-serif text-[#29231E]">
              Individual Attention
            </h3>
            <p className="text-sm text-[#756A5F] leading-relaxed font-light">
              We do not operate a rushed conveyor of back-to-back bookings. Sessions are
              spaced to ensure thorough room preparation and attentive, dedicated care
              tailored to your physical comfort.
            </p>
          </div>

          <div className="space-y-4">
            <span className="block text-xs uppercase tracking-widest text-[#795A40]">
              03 / Cadence
            </span>
            <h3 className="text-xl font-serif text-[#29231E]">
              Unhurried Cadence
            </h3>
            <p className="text-sm text-[#756A5F] leading-relaxed font-light">
              Time to settle in, breathe deeply, and allow accumulated muscle tightness to
              gradually soften under steady, rhythmic hands without feeling rushed out the door.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
