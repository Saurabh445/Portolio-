import SoftwarePlanningDetail from "./SoftwarePlanningDetail";
import { asset } from "../utils/assets";

export const project = {
  title: "Digital Infrastructure",
  category: "Digital Infrastructure",
  heroImg: asset("/photo-1.webp"),
  tagline:
    "One of the six areas I build through Beckkon Systems, my first venture.",
  year: "2026",
  stack: ["Digital Infrastructure", "Data Systems", "Technology & Execution"],
  features: [
    "Digital infrastructure sits alongside Data Systems and Automation as the systems side of what I build.",
    "Work runs through business strategy and execution as much as technology.",
    "I lead product, team and execution directly as Founder & CEO.",
  ],
  impact: [
    "Beckkon Systems: 15+ core team members, 50+ interns coordinated.",
    "Beckkon Systems: ₹2 Cr early-stage traction, incubated at IIT (BHU).",
  ],
  links: {},
};

export default function DigitalInfrastructureDetail({ onClose, mode }) {
  return <SoftwarePlanningDetail onClose={onClose} mode={mode} />;
}
