import IoTSystemsDetail from "./IoTSystemsDetail";

export const project = {
  title: "Software",
  category: "Software",
  heroImg: "/photo-3.webp",
  tagline:
    "One of the six areas I build through Beckkon Systems, my first venture.",
  year: "2026",
  stack: ["Software", "Product Strategy", "Technology & Execution"],
  features: [
    "Software sits alongside Hardware and IoT as the product side of what I build.",
    "Work runs through product strategy and technology execution together.",
    "I lead product, team and execution directly as Founder & CEO.",
  ],
  impact: [
    "Beckkon Systems: 15+ core team members, 50+ interns coordinated.",
    "Beckkon Systems: ₹2 Cr early-stage traction, incubated at IIT (BHU).",
  ],
  links: {},
};

export default function SoftwareDetail({ onClose, mode }) {
  return <IoTSystemsDetail onClose={onClose} mode={mode} />;
}
