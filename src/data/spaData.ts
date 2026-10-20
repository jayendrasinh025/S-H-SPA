export interface Treatment {
  id: string;
  name: string;
  kicker: string;
  description: string;
  focus: string;
  durationNote: string;
}

export interface SpaRoom {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  features: string[];
}

export const BUSINESS_INFO = {
  name: "S&H Spa Massage",
  category: "Massage Therapist & Spa",
  address: {
    street: "429 Montrose Avenue",
    city: "Toronto",
    province: "Ontario",
    postalCode: "M6G 3H2",
    country: "Canada",
    full: "429 Montrose Avenue, Toronto, ON M6G 3H2, Canada",
    neighborhood: "Palmerston - Little Italy / Bickford Park",
  },
  phone: "+1 208-340-4149",
  mapsUrl: "https://maps.app.goo.gl/MhfCJUJenpuzaTtPAP",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=429+Montrose+Avenue+Toronto+ON+M6G3H2+Canada",
  openingHoursListing: "Open 24 hours (Google Listing)",
  openingHoursPolicy:
    "Google Maps indicates 24-hour operation; however, private massage sessions are scheduled individually upon advance booking enquiry to guarantee an undisturbed, attentive experience.",
};

export const TREATMENT_LIST: Treatment[] = [
  {
    id: "custom-bodywork",
    name: "Customised Bodywork & Tension Release",
    kicker: "Tailored Experience",
    description:
      "A personalized whole-body approach addressing specific areas of physical strain, incorporating steady pressure and intentional pacing to release chronic holding patterns.",
    focus: "Full body, back & shoulders, tailored pressure",
    durationNote: "Duration & specifics confirmed upon enquiry",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue & Postural Alignment",
    kicker: "Targeted Intensity",
    description:
      "Focused therapeutic work designed to release deeper myofascial tightness, relieve stubborn knots, and restore mobility after physical exertion or prolonged desk work.",
    focus: "Deep muscular relief, neck, lumbar & hips",
    durationNote: "Duration & specifics confirmed upon enquiry",
  },
  {
    id: "warm-relaxation",
    name: "Warm Ambient Relaxation Massage",
    kicker: "Restorative Cadence",
    description:
      "A soothing, rhythmic session set within warm ambient lighting, crafted to quiet sensory overload, lower cortisol, and invite profound mental and physical ease.",
    focus: "Nervous system reset, gentle continuous flow",
    durationNote: "Duration & specifics confirmed upon enquiry",
  },
  {
    id: "upper-body-focus",
    name: "Targeted Upper Body & Shoulder Release",
    kicker: "Concentrated Relief",
    description:
      "A concentrated treatment zeroing in on high-stress zones: cervical spine, upper trapezius, and shoulder blades for rapid relief from everyday strain.",
    focus: "Neck, shoulders, upper back & scalp",
    durationNote: "Duration & specifics confirmed upon enquiry",
  },
];

export const SPA_ROOMS: SpaRoom[] = [
  {
    id: "suite-1",
    title: "Treatment Suite I",
    subtitle: "Warm Vertical Paneling & Timber",
    image: `${import.meta.env.BASE_URL}assets/aistudio/IMG_20261021_005409_9abade26.jpg`,
    description:
      "An airy, serene treatment space featuring natural timber flooring, warm beige vertical wall panels, a cushioned table with fresh soft linens, and ambient illumination designed to create an immediate sense of calm.",
    features: [
      "Natural wood flooring & woven textured rug",
      "Soft ambient illumination & botanical glow lamp",
      "Comfortable cushioned massage table with plush linens",
      "Quiet corner seating area for consultation",
    ],
  },
  {
    id: "suite-2",
    title: "Treatment Suite II",
    subtitle: "Dark Wood Walls & Ambient Glow",
    image: `${import.meta.env.BASE_URL}assets/aistudio/IMG_20261021_005420_e1b6e56a.jpg`,
    description:
      "A deeply intimate treatment sanctuary lined with rich dark wooden walls, stone vessel basin, backlit circular mirrors, and warm ambient warmth for complete privacy and deep relaxation.",
    features: [
      "Rich horizontal dark wood paneling",
      "Backlit circular mirrors & bespoke timber vanity",
      "Integrated stone wash basin & freshly prepared waffle linens",
      "Secluded, low-luminance atmosphere for deep unwinding",
    ],
  },
];
