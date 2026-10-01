import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { Gsap } from "../utils/gsapAnimate";

const EASE = [0.16, 1, 0.3, 1];

const Reveal = ({ children, className = "", delay = 0 }) => (
  <Gsap.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.65, delay, ease: EASE }}
    className={className}
  >
    {children}
  </Gsap.div>
);

const SectionKicker = ({ children, dark = false }) => (
  <p
    className={`font-mono text-[10px] font-bold uppercase tracking-[0.22em] ${
      dark ? "text-lime-300/70" : "text-black/40"
    }`}
  >
    {children}
  </p>
);

const TechnicalBackdrop = ({ dark = false }) => (
  <>
    <div
      className={`pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px] ${
        dark ? "invert opacity-[0.12]" : ""
      }`}
    />
    <div className="pointer-events-none absolute -right-24 top-8 -z-10 h-72 w-72 rounded-full border border-lime-500/10 md:h-96 md:w-96" />
    <div className="pointer-events-none absolute right-12 top-24 -z-10 h-2 w-2 rounded-full bg-lime-500/50 shadow-[0_0_0_8px_rgba(163,230,53,0.08),0_0_0_18px_rgba(163,230,53,0.04)]" />
  </>
);

const ConceptStrip = ({ items, dark = false }) => (
  <div className="mt-7 flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className={`border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${
          dark
            ? "border-white/15 bg-white/[0.04] text-white/75 hover:border-lime-300/50 hover:text-lime-300"
            : "border-black/10 bg-white/70 text-black/65 hover:border-lime-500/50 hover:text-black"
        }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const FlowDiagram = ({ items, dark = false }) => (
  <div
    data-business-flow={items.join(" → ")}
    className={`mt-8 overflow-hidden border ${
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white/60"
    }`}
  >
    <div className="flex flex-col gap-px bg-current/10 lg:flex-row lg:flex-nowrap lg:gap-0">
      {items.map((item, index) => (
        <Fragment key={item}>
          <div
            className={`relative flex min-h-16 min-w-0 flex-1 items-center justify-center px-3 py-4 text-center font-mono text-[10px] font-bold uppercase leading-[1.35] tracking-[0.1em] transition-colors ${
              dark
                ? "bg-[#0A0A0A] text-white/75 hover:bg-white/[0.06] hover:text-lime-300"
                : "bg-[#FAF9F6] text-black/70 hover:bg-lime-50 hover:text-black"
            }`}
          >
            <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-lime-500/70" />
            <span className="min-w-0 break-words">{item}</span>
          </div>
          {index < items.length - 1 && (
            <div
              className={`flex shrink-0 items-center justify-center px-2 font-mono text-lg ${
                dark ? "bg-[#0A0A0A] text-lime-300/70" : "bg-[#FAF9F6] text-lime-600"
              }`}
              aria-hidden="true"
            >
              <span className="hidden lg:inline">→</span>
              <span className="lg:hidden">↓</span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);

const MarketFrame = ({ dark = false }) => (
  <div
    data-business-frame
    className={`relative mt-10 overflow-hidden border p-3 md:p-5 ${
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"
    }`}
  >
    <div className={`pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:14px_14px] ${dark ? "invert" : ""}`} />
    <div className={`relative border p-4 md:p-6 ${dark ? "border-white/15 bg-[#0A0A0A]" : "border-black/10 bg-[#FAF9F6]/90"}`}>
      <div className={`flex items-center justify-between border-b pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] ${dark ? "border-white/10 text-white/45" : "border-black/10 text-black/45"}`}>
        <span>Opportunity map</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
          Market signal
        </span>
      </div>
      <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
        {["PROBLEM", "MARKET", "CUSTOMER", "VALUE"].map((item, index) => (
          <div key={item} className={`relative flex min-h-24 items-end border p-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] sm:min-h-28 ${dark ? "border-white/10 text-white/70" : "border-black/10 text-black/65"}`}>
            <span className={`absolute right-3 top-3 text-[9px] ${dark ? "text-lime-300" : "text-lime-600"}`}>0{index + 1}</span>
            {item}
          </div>
        ))}
      </div>
      <div className="relative mt-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px flex-1 bg-lime-500/35" />
        <span className="h-2 w-2 rounded-full bg-lime-500" />
        <span className="h-px w-16 bg-lime-500/35" />
        <span className="h-3 w-3 rounded-full border border-lime-500/60" />
        <span className="h-px flex-1 bg-lime-500/35" />
      </div>
    </div>
  </div>
);

const BusinessSection = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? "border-white/15" : "border-black/10"}`}>
    <section
      id={`business-research-${number}`}
      className={`relative isolate overflow-hidden px-5 py-10 md:px-8 md:py-14 ${
        dark ? "bg-[#0A0A0A] text-white" : "bg-white/45 text-black"
      }`}
    >
      <TechnicalBackdrop dark={dark} />
      <div className={`pointer-events-none absolute -right-5 -top-8 select-none font-black text-[8rem] leading-none tracking-[-0.12em] md:text-[12rem] ${dark ? "text-white/[0.035]" : "text-black/[0.035]"}`}>
        {number}
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
        <div>
          <span className={`font-mono text-4xl font-bold tracking-[-0.08em] ${dark ? "text-lime-300" : "text-lime-600"}`}>
            {number}
          </span>
          <div className={`mt-4 h-px w-12 ${dark ? "bg-lime-300/60" : "bg-lime-500/60"}`} />
          <p className={`mt-4 hidden max-w-[12ch] font-mono text-[9px] font-bold uppercase leading-4 tracking-[0.14em] lg:block ${dark ? "text-white/30" : "text-black/30"}`}>
            Business building / field notes
          </p>
        </div>
        <div>
          <h2 className={`max-w-4xl text-[clamp(1.55rem,3.5vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] ${dark ? "text-white" : "text-black"}`}>
            {title}
          </h2>
          <div className={`mt-8 max-w-3xl space-y-5 text-[15px] leading-7 md:text-base md:leading-8 ${dark ? "text-white/70" : "text-black/65"}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  </Reveal>
);

const BusinessIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>Business map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ["01", "Market"],
          ["02", "Customer"],
          ["03", "Opportunity"],
          ["04", "Model"],
          ["05", "Partnerships"],
          ["06", "Financials"],
          ["07", "Market"],
          ["08", "Execution"],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#business-research-${number}`}
            className="group flex items-center gap-3 border-l-2 border-transparent px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-black/35 transition-colors hover:border-lime-500 hover:text-black"
          >
            <span className="text-black/25 group-hover:text-lime-600">{number}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  </aside>
);

export default function BusinessDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div data-business-detail className={`overflow-x-hidden bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black ${mode === "page" ? "min-h-screen" : "flex h-full flex-col"}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              Business
            </span>
            <span className="shrink-0 border-l border-black/20 pl-3 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/30">
              Beckkon Systems
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex shrink-0 items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wide shadow-sm transition-all duration-300 hover:bg-black hover:text-white hover:shadow-md sm:px-5 sm:text-sm"
          >
            <ArrowUpRight className="rotate-[225deg]" size={16} />
            {closeLabel}
          </button>
        </div>
      </div>

      <div data-business-scroll className="flex-1 overflow-y-auto scroll-smooth">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <TechnicalBackdrop />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / Business Building</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-6xl text-[clamp(3.8rem,12vw,11rem)] font-black uppercase leading-[0.8] tracking-[-0.095em]">
                  BUSINESS
                </h1>
                <p className="mt-10 max-w-3xl text-base uppercase leading-8 tracking-[-0.015em] text-black/65 md:text-lg md:leading-9">
                  Exploring markets, opportunities, partnerships, strategy and business growth.
                </p>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                <Reveal delay={0.08}>
                  <h2 className="max-w-xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW THE BUSINESS SIDE EVOLVED
                  </h2>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <div className="space-y-5 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    <p>When we started Beckkon, building the product was only one part of the problem.</p>
                    <p>We also had to figure out whether the problem was actually worth solving, who would pay for it, how the product should be positioned and how we could take it into the market.</p>
                    <p>That became a completely different side of building the company for me.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12">
                <ConceptStrip items={["Market Research", "Customer Discovery", "Opportunity", "Pricing", "Unit Economics", "Partnerships", "Financial Planning", "Business Strategy", "Growth"]} />
                <MarketFrame />
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <BusinessIndex />
            <div className="min-w-0 space-y-8">
              <BusinessSection number="01" title="UNDERSTANDING THE MARKET">
                <p>We started by trying to understand the market before deciding how big the opportunity actually was.</p>
                <p>I spent time looking at existing solutions, competitors, customer problems, pricing models and where current products were falling short.</p>
                <p>The objective was simple:</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "WHO HAS THE PROBLEM?",
                    "HOW BIG IS THE PROBLEM?",
                    "WHAT ARE THEY USING TODAY?",
                    "AND WOULD THEY PAY FOR A BETTER SOLUTION?",
                  ].map((question, index) => (
                    <div key={question} className="border border-black/10 bg-white/70 p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-black/65">
                      <span className="mb-3 block text-lime-600">0{index + 1}</span>
                      {question}
                    </div>
                  ))}
                </div>
                <FlowDiagram items={["PROBLEM", "MARKET", "CUSTOMER", "VALUE", "BUSINESS MODEL"]} />
              </BusinessSection>

              <BusinessSection number="02" title="CUSTOMER DISCOVERY" dark>
                <p>A product can look great internally and still not solve something people care about.</p>
                <p>So customer discovery became an important part of the process.</p>
                <p>We started speaking to potential users and organizations, understanding their current workflows and trying to identify what they actually needed rather than assuming what they needed.</p>
                <p>These conversations helped us change both the product and the way we positioned it.</p>
                <ConceptStrip dark items={["Customer Discovery", "Potential users", "Organizations", "Workflows", "Positioning"]} />
              </BusinessSection>

              <BusinessSection number="03" title="FINDING THE RIGHT OPPORTUNITY">
                <p>As we explored different use cases, we started looking at where our technology could create the most value.</p>
                <p>Schools and campuses became an important starting point because they had a combination of physical infrastructure, people, devices, data and operational problems.</p>
                <p>This helped us move from a broad technology idea toward a more focused market opportunity.</p>
                <MarketFrame />
                <ConceptStrip items={["Opportunity", "Schools", "Campuses", "Physical infrastructure", "People", "Devices", "Data"]} />
              </BusinessSection>

              <BusinessSection number="04" title="BUILDING THE BUSINESS MODEL" dark>
                <p>Once the problem and market started becoming clearer, we had to think about the business behind the product.</p>
                <p>We explored:</p>
                <FlowDiagram dark items={["PRODUCT PRICING", "HARDWARE COST", "PLATFORM SUBSCRIPTION", "DEPLOYMENT COST", "CUSTOMER VALUE", "UNIT ECONOMICS"]} />
                <p>The challenge was finding a model where the product could be useful for the customer and sustainable for the business.</p>
                <ConceptStrip dark items={["Pricing", "Hardware cost", "Platform subscription", "Deployment cost", "Customer value", "Unit Economics"]} />
              </BusinessSection>

              <BusinessSection number="05" title="PARTNERSHIPS & OUTREACH">
                <p>Building the product also meant finding the right people and organizations to work with.</p>
                <p>I worked on business outreach, conversations with potential customers, partnerships and connecting with people who could help us validate or deploy the product.</p>
                <p>A lot of business development was simply about starting conversations and understanding where there could be a genuine fit.</p>
                <FlowDiagram items={["MARKET", "OUTREACH", "PARTNERSHIPS", "VALIDATION", "GROWTH"]} />
                <ConceptStrip items={["Partnerships", "Outreach", "Potential customers", "Validation", "Growth"]} />
              </BusinessSection>

              <BusinessSection number="06" title="FINANCIAL THINKING" dark>
                <p>I also started getting deeper into the financial side of the company.</p>
                <p>From understanding hardware costs and software expenses to thinking about pricing, deployment costs, margins and funding requirements.</p>
                <p>This changed the way I looked at product decisions.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {["Hardware costs", "Software expenses", "Pricing", "Deployment costs", "Margins", "Funding requirements"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                      <span>{item}</span>
                      <span className="ml-auto text-white/20">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
                <p>A product cannot only be technically possible.</p>
                <p>It also has to make business sense.</p>
                <ConceptStrip dark items={["Financial Planning", "Pricing", "Margins", "Business Strategy"]} />
              </BusinessSection>

              <BusinessSection number="07" title="FROM IDEA TO MARKET">
                <p>One of the biggest things I learned was that building something and selling something are two different challenges.</p>
                <p>The product needs to work.</p>
                <p>But the business also needs:</p>
                <FlowDiagram items={["A CLEAR PROBLEM", "A CLEAR CUSTOMER", "A CLEAR VALUE PROPOSITION", "A WORKABLE BUSINESS MODEL", "A WAY TO REACH THE MARKET"]} />
                <ConceptStrip items={["Problem", "Customer", "Value proposition", "Business model", "Market"]} />
              </BusinessSection>

              <BusinessSection number="08" title="LEARNING THROUGH EXECUTION" dark>
                <p>A lot of the business side was experimentation as well.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "Some conversations led somewhere.",
                    "Some did not.",
                    "Some assumptions were right.",
                    "Some were completely wrong.",
                  ].map((line, index) => (
                    <div key={line} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>We kept learning from customer conversations, market research, outreach and actual responses.</p>
                <p>That feedback continuously influenced our product and business strategy.</p>
                <ConceptStrip dark items={["Execution", "Customer conversations", "Market research", "Outreach", "Feedback", "Business Strategy"]} />
              </BusinessSection>
            </div>
          </div>

          <section className="relative isolate overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white md:px-10 md:py-28">
            <TechnicalBackdrop dark />
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionKicker dark>What I learned</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  WHAT I <span className="text-lime-300">LEARNED</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12 grid gap-3 md:grid-cols-2">
                {[
                  "Building Beckkon taught me that business is not separate from product.",
                  "The market influences the product.",
                  "The customer influences the product.",
                  "The economics influence the product.",
                  "And the product ultimately has to create enough value for someone to choose it.",
                  "For me, business became about connecting all of these pieces.",
                ].map((line, index) => (
                  <div key={line} className={`border border-white/10 bg-white/[0.04] p-5 text-base leading-7 text-white/70 md:p-6 ${index === 0 || index === 5 ? "md:col-span-2" : ""}`}>
                    <span className="mb-8 block font-mono text-[10px] font-bold tracking-[0.16em] text-lime-300">{String(index + 1).padStart(2, "0")}</span>
                    {line}
                  </div>
                ))}
              </Reveal>
            </div>
          </section>

          <section className="relative isolate overflow-hidden bg-[#0A0A0A] px-6 pb-20 text-white md:px-10 md:pb-28">
            <TechnicalBackdrop dark />
            <div className="relative mx-auto max-w-6xl border-t border-white/15 pt-16 md:pt-20">
              <Reveal>
                <SectionKicker dark>My business approach</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  MY BUSINESS <span className="text-lime-300">APPROACH</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12">
                <FlowDiagram dark items={["PROBLEM", "MARKET", "CUSTOMER", "VALUE", "BUSINESS MODEL", "PARTNERSHIPS", "EXECUTION", "GROWTH"]} />
              </Reveal>
              <Reveal delay={0.16} className="mt-12 border-t border-white/15 pt-10">
                <p className="max-w-4xl text-base leading-8 text-white/70 md:text-lg md:leading-9">
                  I enjoy the process of taking an idea, understanding whether there is a real opportunity behind it, and then figuring out how to turn that opportunity into something that can actually work as a business.
                </p>
              </Reveal>
              <Reveal delay={0.22} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>BUSINESS BUILDING</span>
                  <span>BECKKON SYSTEMS</span>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
