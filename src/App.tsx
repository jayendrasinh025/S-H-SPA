/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Approach } from "./components/Approach";
import { AtmosphereSection } from "./components/AtmosphereSection";
import { Treatments } from "./components/Treatments";
import { BookingSection } from "./components/BookingSection";
import { VisitHours } from "./components/VisitHours";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedTreatment, setSelectedTreatment] = useState<string>("");

  const scrollToBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
    }
    const bookingElement = document.getElementById("booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
      // Give a tiny timeout for scroll to finish before focusing
      setTimeout(() => {
        const input = document.getElementById("fullName");
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  const scrollToTreatments = () => {
    const treatmentsElement = document.getElementById("treatments");
    if (treatmentsElement) {
      treatmentsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EFEA] text-[#29231E] font-sans selection:bg-[#795A40]/25 selection:text-[#29231E] flex flex-col">
      {/* Top Navigation */}
      <Navigation onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Editorial Hero with Real Suite I Photo */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreTreatments={scrollToTreatments}
        />

        {/* Brand Introduction ("The S&H Feeling") */}
        <Approach />

        {/* Photographic Atmosphere Section (Dark Rich Wood Treatment Suite II) */}
        <AtmosphereSection />

        {/* Treatment Menu (Flexible Editorial Rows) */}
        <Treatments
          onSelectTreatment={(treatmentName) => scrollToBooking(treatmentName)}
        />

        {/* Working Booking Enquiry Experience */}
        <BookingSection
          selectedTreatment={selectedTreatment}
          onClearTreatmentSelection={() => setSelectedTreatment("")}
        />

        {/* Location, Schedule & Google Maps */}
        <VisitHours />
      </main>

      {/* Minimal Understated Footer */}
      <Footer />
    </div>
  );
}
