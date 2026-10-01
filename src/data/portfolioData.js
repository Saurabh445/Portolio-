// ─── Portfolio Data (single source of truth for site content) ────
//
// This is the LIVE data the site renders and the AI assistant reads. It is
// imported by `src/services/aiContext.js` and `src/components/ChatWidget.jsx`.
//
// CUSTOMIZING: edit the values below with your own details. See also
// `docs/customization.md`.
//
// FIELDS TO EDIT:
//   profile.name / role / bio / location / email / socials  → your identity
//   experience[]   → your education / work / venture history
//   techStack[]    → your skills, grouped by `category`
//   projects[]     → short project summaries (keep `slug` in sync with
//                    projectMeta.js + projectDetailsData.js)
//   achievements[] → recognition / milestones (optional)
//   capabilities[] → high-level specializations
export const PORTFOLIO_DATA = {
    profile: {
        name: "Saurabh Kumar",
        role: "Founder & CEO, Beckkon Systems Pvt. Ltd.",
        bio: "Engineering Physics student at IIT (BHU) and Founder & CEO of Beckkon Systems. I work at the intersection of technology, product development, business strategy and execution.",
        location: "Varanasi, India",
        // Contact details are intentionally empty until provided.
        email: "",
        socials: {
            github: "",
            linkedin: ""
        }
    },
    experience: [
        {
            title: "Founder & CEO — Beckkon Systems Pvt. Ltd.",
            period: "12 Jun 2026 - Present",
            description: [
                "My first venture — 15+ core team members.",
                "50+ interns coordinated.",
                "₹2 Cr early-stage traction.",
                "IIT (BHU) incubation.",
                "End-to-end leadership."
            ]
        },
        {
            title: "Business Development Intern — Plantitude Essentials Private Limited",
            period: "2026",
            description: []
        },
        {
            title: "Exploring Business & Startups",
            period: "2025",
            description: []
        },
        {
            title: "Engineering Physics IDD — IIT (BHU), Varanasi",
            period: "2022 - 2027",
            description: []
        },
        {
            title: "Early Life & School — Mainpuri, UP",
            period: "2004 - 2022",
            description: []
        }
    ],
    techStack: [
        { name: "Hardware", category: "Product Development" },
        { name: "IoT", category: "Product Development" },
        { name: "Software", category: "Product Development" },
        { name: "Digital Infrastructure", category: "Systems & Data" },
        { name: "Data Systems", category: "Systems & Data" },
        { name: "Automation", category: "Systems & Data" }
    ],
    projects: [
        {
            slug: "hardware",
            title: "Hardware",
            category: "Hardware",
            description: "Hardware systems built through Beckkon Systems."
        },
        {
            slug: "iot",
            title: "IoT",
            category: "IoT",
            description: "IoT work built through Beckkon Systems."
        },
        {
            slug: "software",
            title: "Software",
            category: "Software",
            description: "Software products built through Beckkon Systems."
        },
        {
            slug: "digital-infrastructure",
            title: "Digital Infrastructure",
            category: "Digital Infrastructure",
            description: "Digital infrastructure built through Beckkon Systems."
        },
        {
            slug: "data-systems",
            title: "Data Systems",
            category: "Data Systems",
            description: "Data systems built through Beckkon Systems."
        },
        {
            slug: "automation",
            title: "Automation",
            category: "Automation",
            description: "Automation built through Beckkon Systems."
        }
    ],
    achievements: [
        {
            title: "Beckkon Systems — Founder & CEO",
            project: "Beckkon Systems Pvt. Ltd.",
            description: "My first venture. 15+ core team members, 50+ interns coordinated, ₹2 Cr early-stage traction, and incubation at IIT (BHU).",
            team: "Saurabh Kumar",
            track: "Founder & CEO | June 2026 - Present",
            techStack: ["Hardware", "IoT", "Software", "Digital Infrastructure", "Data Systems", "Automation"],
            links: {}
        }
    ],
    capabilities: [
        "Product Strategy",
        "Business Development",
        "Technology & Execution",
        "Leadership"
    ]
};
