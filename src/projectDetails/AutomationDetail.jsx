import LeadershipDetail from "./LeadershipDetail";
import { asset } from "../utils/assets";

export const project = {
  title: "Automation",
  category: "Automation",
  heroImg: asset("/photo-3.webp"),
  tagline:
    "One of the six areas I build through Beckkon Systems, my first venture.",
  year: "2026",
  stack: ["Automation", "Digital Infrastructure", "Technology & Execution"],
  features: [
    "Automation sits alongside Digital Infrastructure and Data Systems as the systems side of what I build.",
    "Work runs through business strategy and execution as much as technology.",
    "I lead product, team and execution directly as Founder & CEO.",
  ],
  impact: [
    "Beckkon Systems: 15+ core team members, 50+ interns coordinated.",
    "Beckkon Systems: ₹2 Cr early-stage traction, incubated at IIT (BHU).",
  ],
  links: {},
};

export default function AutomationDetail({ onClose, mode }) {
  return <LeadershipDetail onClose={onClose} mode={mode} />;
}
