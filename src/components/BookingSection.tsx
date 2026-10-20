import React, { useState, useEffect } from "react";
import { BUSINESS_INFO, TREATMENT_LIST } from "../data/spaData";
import { Check, Copy, Mail, MessageSquare, Phone, RotateCcw } from "lucide-react";

interface BookingSectionProps {
  selectedTreatment: string;
  onClearTreatmentSelection: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedTreatment,
  onClearTreatmentSelection,
}) => {
  // Form state
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [timeWindow, setTimeWindow] = useState("Afternoon");
  const [treatment, setTreatment] = useState(selectedTreatment || "Customised Bodywork & Tension Release");
  const [notes, setNotes] = useState("");

  // Submission / enquiry state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Min date: today in YYYY-MM-DD
  const todayStr = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (selectedTreatment) {
      setTreatment(selectedTreatment);
    }
  }, [selectedTreatment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!fullName.trim()) {
      setValidationError("Please enter your name.");
      return;
    }
    if (!contactInfo.trim()) {
      setValidationError("Please enter a phone number or email address so we can reach you.");
      return;
    }
    if (!preferredDate) {
      setValidationError("Please select your preferred date.");
      return;
    }
    if (preferredDate < todayStr) {
      setValidationError("Preferred appointment date cannot be in the past.");
      return;
    }

    setIsSubmitted(true);
  };

  const formattedEnquiryText = `Booking Enquiry for S&H Spa Massage
-----------------------------------------
Client Name: ${fullName}
Contact: ${contactInfo}
Preferred Date: ${preferredDate}
Preferred Time Window: ${timeWindow}
Requested Treatment: ${treatment}
${notes ? `Additional Notes / Focus Areas: ${notes}\n` : ""}-----------------------------------------
Location: 429 Montrose Avenue, Toronto, ON M6G 3H2
*Sent via S&H Spa Massage booking enquiry concept`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedEnquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent(`Booking Enquiry: ${fullName} (${preferredDate})`);
  const mailtoBody = encodeURIComponent(formattedEnquiryText);
  const mailtoLink = `mailto:?subject=${mailtoSubject}&body=${mailtoBody}`;

  const smsBody = encodeURIComponent(
    `Hello, I would like to request an appointment at S&H Spa Massage for ${fullName} on ${preferredDate} (${timeWindow}). Treatment: ${treatment}. Contact: ${contactInfo}.`
  );
  const smsLink = `sms:${BUSINESS_INFO.phone}?body=${smsBody}`;

  const handleReset = () => {
    setIsSubmitted(false);
    onClearTreatmentSelection();
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-[#F4EFEA] border-t border-[#D8CEC1]/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#795A40] font-medium">
            Reservations & Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#29231E] tracking-tight">
            Find a time that works for you.
          </h2>
          <p className="text-sm sm:text-base text-[#756A5F] leading-relaxed font-light">
            To ensure each guest experiences calm, private sanctuary, appointments are scheduled
            individually. Submit your preferred timing below to initiate a direct booking enquiry.
          </p>
        </div>

        {/* Form Container (Clean editorial, no floating pill cards) */}
        <div className="mt-14 pt-10 border-t border-[#D8CEC1]">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              {validationError && (
                <div className="p-4 bg-[#795A40]/10 border border-[#795A40]/30 text-xs text-[#29231E]">
                  {validationError}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                  >
                    Your Full Name <span className="text-[#795A40]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    required
                    className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] placeholder:text-[#A89D91] outline-none transition-colors"
                  />
                </div>

                {/* Contact: Phone or Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="contactInfo"
                    className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                  >
                    Phone Number or Email <span className="text-[#795A40]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="e.g. +1 416-555-0199 or name@example.com"
                    required
                    className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] placeholder:text-[#A89D91] outline-none transition-colors"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                  >
                    Preferred Date <span className="text-[#795A40]">*</span>
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    min={todayStr}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] outline-none transition-colors cursor-pointer"
                  />
                  <span className="block text-[11px] text-[#8C8075]">
                    Appointments are subject to therapist confirmation
                  </span>
                </div>

                {/* Preferred Time Window */}
                <div className="space-y-2">
                  <label
                    htmlFor="timeWindow"
                    className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                  >
                    Preferred Time Window
                  </label>
                  <select
                    id="timeWindow"
                    value={timeWindow}
                    onChange={(e) => setTimeWindow(e.target.value)}
                    className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM – 5:00 PM)">Afternoon (12:00 PM – 5:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                    <option value="Late Evening / Flexible">Late Evening / Flexible</option>
                  </select>
                </div>
              </div>

              {/* Treatment Focus */}
              <div className="space-y-2">
                <label
                  htmlFor="treatment"
                  className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                >
                  Treatment Focus / Enquiry
                </label>
                <select
                  id="treatment"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] outline-none transition-colors cursor-pointer"
                >
                  {TREATMENT_LIST.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="General Bodywork Consultation">General Bodywork Consultation</option>
                </select>
              </div>

              {/* Optional Message */}
              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-xs uppercase tracking-widest text-[#29231E] font-medium"
                >
                  Optional Notes (Pressure preferences, specific areas of tension)
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Focus on lower back and left shoulder, medium firm pressure requested..."
                  className="w-full bg-transparent border-b border-[#D8CEC1] focus:border-[#29231E] py-2.5 px-0 text-sm text-[#29231E] placeholder:text-[#A89D91] outline-none transition-colors resize-y"
                />
              </div>

              {/* Action and Disclaimer */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#D8CEC1]/60">
                <p className="text-xs text-[#756A5F] max-w-md font-light">
                  <span className="font-medium text-[#29231E]">Booking Note:</span> This form
                  compiles a direct booking enquiry for the business. A confirmed reservation requires
                  direct scheduling confirmation.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-medium uppercase tracking-wider text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                >
                  Prepare Booking Enquiry
                </button>
              </div>
            </form>
          ) : (
            /* Prepared Enquiry Confirmation & Forwarding View */
            <div className="space-y-8 animate-fadeIn">
              <div className="p-6 sm:p-8 bg-[#EFE8DF] border border-[#D8CEC1]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D8CEC1]">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#795A40] font-medium">
                      Enquiry Ready
                    </span>
                    <h3 className="text-2xl font-serif text-[#29231E] mt-1">
                      Your booking enquiry details are prepared
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#756A5F] hover:text-[#29231E] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Edit details</span>
                  </button>
                </div>

                {/* Summary Table */}
                <div className="py-6 space-y-3 text-sm text-[#29231E]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-[#D8CEC1]/50">
                    <span className="text-xs uppercase tracking-wider text-[#756A5F]">Client</span>
                    <span className="sm:col-span-2 font-medium">{fullName}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-[#D8CEC1]/50">
                    <span className="text-xs uppercase tracking-wider text-[#756A5F]">Contact</span>
                    <span className="sm:col-span-2">{contactInfo}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-[#D8CEC1]/50">
                    <span className="text-xs uppercase tracking-wider text-[#756A5F]">Preferred Date</span>
                    <span className="sm:col-span-2 font-medium">{preferredDate}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-[#D8CEC1]/50">
                    <span className="text-xs uppercase tracking-wider text-[#756A5F]">Time Window</span>
                    <span className="sm:col-span-2">{timeWindow}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 border-b border-[#D8CEC1]/50">
                    <span className="text-xs uppercase tracking-wider text-[#756A5F]">Treatment</span>
                    <span className="sm:col-span-2 font-serif text-base">{treatment}</span>
                  </div>
                  {notes && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1">
                      <span className="text-xs uppercase tracking-wider text-[#756A5F]">Notes</span>
                      <span className="sm:col-span-2 italic text-xs text-[#756A5F]">{notes}</span>
                    </div>
                  )}
                </div>

                {/* What Happens Next Explanation */}
                <div className="pt-6 border-t border-[#D8CEC1] text-xs text-[#756A5F] space-y-2">
                  <p className="font-medium text-[#29231E]">What happens next:</p>
                  <p className="font-light leading-relaxed">
                    A booking enquiry is not an instantly confirmed calendar slot. To secure your appointment,
                    transmit your prepared details via your preferred communication channel below, or telephone
                    the listed spa number directly.
                  </p>
                </div>

                {/* Forwarding Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[#D8CEC1] flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied to Clipboard" : "Copy Enquiry Details"}</span>
                  </button>

                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#29231E] bg-[#E2D9CC] hover:bg-[#D4C8B8] transition-colors cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#795A40]" />
                    <span>Send via Email</span>
                  </a>

                  <a
                    href={smsLink}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#29231E] bg-[#E2D9CC] hover:bg-[#D4C8B8] transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#795A40]" />
                    <span>Text via SMS</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider font-medium text-[#29231E] hover:text-[#795A40] transition-colors cursor-pointer ml-auto"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#795A40]" />
                    <span>Call Listed Number ({BUSINESS_INFO.phone})</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
