import BusinessDetail from "./BusinessDetail";
import { asset } from "../utils/assets";

export const project = {
  title: "Data Systems",
  category: "Data Systems",
  heroImg: asset("/photo-2.webp"),
  tagline:
    "One of the six areas I build through Beckkon Systems, my first venture.",
  year: "2026",
  stack: ["Data Systems", "Digital Infrastructure", "Automation"],
  features: [
    "Data systems sit alongside Digital Infrastructure and Automation as the systems side of what I build.",
    "Work sits at the intersection of technology, product development, business strategy and execution.",
    "I lead product, team and execution directly as Founder & CEO.",
  ],
  impact: [
    "Beckkon Systems: 15+ core team members, 50+ interns coordinated.",
    "Beckkon Systems: ₹2 Cr early-stage traction, incubated at IIT (BHU).",
  ],
  links: {},
};

export default function DataSystemsDetail({ onClose, mode }) {
  return <BusinessDetail onClose={onClose} mode={mode} />;
}
