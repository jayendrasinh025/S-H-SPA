import React from "react";
import { TREATMENT_LIST, Treatment } from "../data/spaData";
import { ArrowUpRight } from "lucide-react";

interface TreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatment }) => {
  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#F4EFEA] border-t border-[#D8CEC1]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#795A40] font-medium">
            Offerings & Focus Areas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#29231E] tracking-tight">
            Tailored bodywork, customized for you.
          </h2>
          <p className="text-sm sm:text-base text-[#756A5F] leading-relaxed font-light">
            Each session is adapted to your current physical needs and personal comfort.
            Specific treatment options, session durations, and rates are discussed and finalized
            during your initial booking consultation.
          </p>
        </div>

        {/* Editorial Table / Full-width Rows with Fine Horizontal Rules */}
        <div className="mt-16 divide-y divide-[#D8CEC1]">
          {TREATMENT_LIST.map((treatment: Treatment, index: number) => (
            <div
              key={treatment.id}
              className="py-10 group transition-colors duration-200 hover:bg-[#EFE8DF]/40 -mx-4 px-4 sm:-mx-6 sm:px-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Index & Kicker */}
                <div className="lg:col-span-3 flex lg:flex-col justify-between items-start gap-2">
                  <span className="text-xs uppercase tracking-widest text-[#795A40]">
                    0{index + 1} / {treatment.kicker}
                  </span>
                  <span className="text-[11px] text-[#8C8075] uppercase tracking-wider font-light">
                    Consultation Tailored
                  </span>
                </div>

                {/* Title & Description */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="text-2xl font-serif text-[#29231E] group-hover:text-[#795A40] transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-sm text-[#756A5F] leading-relaxed font-light">
                    {treatment.description}
                  </p>
                  <div className="pt-2 text-xs text-[#8C8075]">
                    <span className="font-medium text-[#29231E]">Focus:</span>{" "}
                    <span>{treatment.focus}</span>
                  </div>
                </div>

                {/* Duration / Rate & Action */}
                <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:items-end items-center gap-4">
                  <div className="text-left lg:text-right">
                    <span className="block text-xs text-[#756A5F] italic font-serif">
                      {treatment.durationNote}
                    </span>
                    <span className="text-[11px] text-[#8C8075] uppercase tracking-wider">
                      Rates confirmed on enquiry
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTreatment(treatment.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#29231E] hover:text-[#795A40] border-b border-[#29231E] hover:border-[#795A40] pb-0.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Select for enquiry</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Note */}
        <div className="mt-12 p-6 bg-[#EFE8DF]/60 border border-[#D8CEC1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#756A5F]">
          <div>
            <p className="font-medium text-[#29231E]">A note on our treatment catalogue</p>
            <p className="font-light mt-0.5">
              Service details and session durations will be confirmed with the owner upon your enquiry.
              No payment is taken online.
            </p>
          </div>
          <a
            href="#booking"
            className="text-xs uppercase tracking-widest text-[#795A40] hover:text-[#29231E] font-medium underline underline-offset-4 whitespace-nowrap"
          >
            Inquire about custom session →
          </a>
        </div>
      </div>
    </section>
  );
};
