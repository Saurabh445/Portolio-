import HardwareResearchDetail from "./HardwareResearchDetail";
import { asset } from "../utils/assets";

export const project = {
  title: "IoT",
  category: "IoT",
  heroImg: asset("/photo-2.webp"),
  tagline:
    "One of the six areas I build through Beckkon Systems, my first venture.",
  year: "2026",
  stack: ["IoT", "Hardware", "Data Systems"],
  features: [
    "IoT sits alongside Hardware and Software as the product side of what I build.",
    "Work runs through product strategy, business development and technology execution.",
    "I lead product, team and execution directly as Founder & CEO.",
  ],
  impact: [
    "Beckkon Systems: 15+ core team members, 50+ interns coordinated.",
    "Beckkon Systems: ₹2 Cr early-stage traction, incubated at IIT (BHU).",
  ],
  links: {},
};

export default function IotDetail({ onClose, mode }) {
  return <HardwareResearchDetail onClose={onClose} mode={mode} />;
}
