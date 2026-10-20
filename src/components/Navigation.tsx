import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavigationProps {
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#F4EFEA]/95 backdrop-blur-md border-b border-[#D8CEC1]/70 py-3 shadow-[0_2px_12px_rgba(41,35,30,0.03)]"
          : "bg-transparent py-5 border-b border-[#D8CEC1]/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single element brand wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl sm:text-2xl font-serif tracking-tight text-[#29231E] hover:text-[#795A40] transition-colors whitespace-nowrap shrink-0"
        >
          S&H Spa Massage
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide uppercase text-[#756A5F]">
          <a
            href="#approach"
            onClick={(e) => handleNavClick(e, "#approach")}
            className="hover:text-[#29231E] transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b border-transparent hover:border-[#29231E]"
          >
            Our Approach
          </a>
          <a
            href="#space"
            onClick={(e) => handleNavClick(e, "#space")}
            className="hover:text-[#29231E] transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b border-transparent hover:border-[#29231E]"
          >
            The Space
          </a>
          <a
            href="#treatments"
            onClick={(e) => handleNavClick(e, "#treatments")}
            className="hover:text-[#29231E] transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b border-transparent hover:border-[#29231E]"
          >
            Treatments
          </a>
          <a
            href="#visit"
            onClick={(e) => handleNavClick(e, "#visit")}
            className="hover:text-[#29231E] transition-colors whitespace-nowrap shrink-0 pb-0.5 border-b border-transparent hover:border-[#29231E]"
          >
            Visit & Hours
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors rounded-none whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            Request Appointment
          </button>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#29231E] hover:text-[#795A40] transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4EFEA] border-b border-[#D8CEC1] px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-wider text-[#29231E]">
            <a
              href="#approach"
              onClick={(e) => handleNavClick(e, "#approach")}
              className="py-2 border-b border-[#D8CEC1]/50 flex items-center justify-between"
            >
              <span>Our Approach</span>
              <ArrowUpRight className="w-4 h-4 text-[#756A5F]" />
            </a>
            <a
              href="#space"
              onClick={(e) => handleNavClick(e, "#space")}
              className="py-2 border-b border-[#D8CEC1]/50 flex items-center justify-between"
            >
              <span>The Space</span>
              <ArrowUpRight className="w-4 h-4 text-[#756A5F]" />
            </a>
            <a
              href="#treatments"
              onClick={(e) => handleNavClick(e, "#treatments")}
              className="py-2 border-b border-[#D8CEC1]/50 flex items-center justify-between"
            >
              <span>Treatments</span>
              <ArrowUpRight className="w-4 h-4 text-[#756A5F]" />
            </a>
            <a
              href="#visit"
              onClick={(e) => handleNavClick(e, "#visit")}
              className="py-2 border-b border-[#D8CEC1]/50 flex items-center justify-between"
            >
              <span>Visit & Hours</span>
              <ArrowUpRight className="w-4 h-4 text-[#756A5F]" />
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs tracking-wider uppercase font-medium text-[#F4EFEA] bg-[#29231E] hover:bg-[#795A40] transition-colors cursor-pointer"
              >
                Request Appointment
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
