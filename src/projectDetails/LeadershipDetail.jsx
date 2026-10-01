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
    data-leadership-flow={items.join(" → ")}
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

const TeamStats = ({ dark = false }) => (
  <div className="mt-10 grid gap-3 sm:grid-cols-2">
    {[
      ["15+", "CORE TEAM", "Software / Hardware / Design"],
      ["50+", "INTERNS", "Different areas / shared execution"],
    ].map(([number, label, detail]) => (
      <div
        key={label}
        data-leadership-stat
        className={`relative overflow-hidden border p-5 md:p-6 ${
          dark ? "border-white/10 bg-white/[0.04]" : "border-black/10 bg-white/70"
        }`}
      >
        <div className={`font-black text-[clamp(3.5rem,8vw,6rem)] leading-[0.8] tracking-[-0.08em] ${dark ? "text-lime-300" : "text-lime-600"}`}>
          {number}
        </div>
        <div className={`mt-5 font-mono text-xs font-bold uppercase tracking-[0.16em] ${dark ? "text-white/75" : "text-black/70"}`}>
          {label}
        </div>
        <div className={`mt-2 font-mono text-[9px] uppercase tracking-[0.12em] ${dark ? "text-white/35" : "text-black/35"}`}>
          {detail}
        </div>
        <span className={`absolute right-4 top-4 h-2 w-2 rounded-full ${dark ? "bg-lime-300" : "bg-lime-500"}`} />
      </div>
    ))}
  </div>
);

const TeamNetwork = ({ dark = false }) => (
  <div
    data-leadership-team-network
    className={`relative mt-8 overflow-hidden border p-4 md:p-6 ${
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white/60"
    }`}
  >
    <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-9rem)] w-px -translate-x-1/2 bg-lime-500/25 sm:block" />
    <div className="pointer-events-none absolute left-1/4 right-1/4 top-1/2 hidden h-px bg-lime-500/25 sm:block" />
    <div className="relative grid gap-3 sm:grid-cols-2">
      {["HARDWARE", "SOFTWARE", "DESIGN", "BUSINESS"].map((item, index) => (
        <div
          key={item}
          className={`relative flex min-h-20 items-end border p-4 font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${
            dark ? "border-white/10 bg-[#0A0A0A] text-white/70" : "border-black/10 bg-[#FAF9F6] text-black/65"
          }`}
        >
          <span className={`absolute right-3 top-3 text-[9px] ${dark ? "text-lime-300" : "text-lime-600"}`}>0{index + 1}</span>
          {item}
        </div>
      ))}
    </div>
    <div className="relative mx-auto mt-6 flex max-w-xs items-center justify-center">
      <span className="absolute left-0 right-0 top-1/2 h-px bg-lime-500/35" />
      <div className={`relative z-10 border px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] ${dark ? "border-lime-300/50 bg-[#0A0A0A] text-lime-300" : "border-lime-500/50 bg-[#FAF9F6] text-lime-600"}`}>
        PRODUCT
      </div>
    </div>
  </div>
);

const LeadershipSection = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? "border-white/15" : "border-black/10"}`}>
    <section
      id={`leadership-research-${number}`}
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
            Leadership / field notes
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

const LeadershipIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>Leadership map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ["01", "Core team"],
          ["02", "Coordination"],
          ["03", "Ownership"],
          ["04", "Teams"],
          ["05", "Execution"],
          ["06", "Uncertainty"],
          ["07", "Balance"],
          ["08", "Learned"],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#leadership-research-${number}`}
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

export default function LeadershipDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div data-leadership-detail className={`overflow-x-hidden bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black ${mode === "page" ? "min-h-screen" : "flex h-full flex-col"}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              Leadership
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

      <div data-leadership-scroll className="flex-1 overflow-y-auto scroll-smooth">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <TechnicalBackdrop />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / Leadership Building</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-6xl text-[clamp(3.8rem,12vw,11rem)] font-black uppercase leading-[0.8] tracking-[-0.095em]">
                  LEADERSHIP
                </h1>
                <h2 className="mt-6 max-w-5xl text-[clamp(2.2rem,7vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                  BUILDING PEOPLE, TEAMS AND EXECUTION
                </h2>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                <Reveal delay={0.08}>
                  <h3 className="max-w-xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW THE TEAM STARTED TAKING SHAPE
                  </h3>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <div className="space-y-5 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    <p>When I started building Beckkon, I quickly realised that building a product is not only about technology.</p>
                    <p>You also need people who can take ownership, work together and keep moving when things are still uncertain.</p>
                    <p>Over time, I worked on building a core team, coordinating interns and bringing people from different areas together to work towards the same product.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12">
                <TeamStats />
                <ConceptStrip items={["Ownership", "Communication", "Coordination", "Execution", "Team building"]} />
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <LeadershipIndex />
            <div className="min-w-0 space-y-8">
              <LeadershipSection number="01" title="BUILDING THE CORE TEAM">
                <p>At Beckkon, we built a 15+ member core team across Software, Hardware and Design.</p>
                <p>Different people were working on different parts of the product, but the bigger challenge was making sure everyone understood what we were trying to build and how their work connected to the larger system.</p>
                <TeamStats />
                <ConceptStrip items={["Software", "Hardware", "Design", "Core team", "Product system"]} />
              </LeadershipSection>

              <LeadershipSection number="02" title="COORDINATING PEOPLE" dark>
                <p>Alongside the core team, I coordinated 50+ interns across different areas.</p>
                <p>With more people involved, communication and coordination became a major part of the work.</p>
                <p>The focus was not simply assigning tasks.</p>
                <p>It was about giving people enough clarity to understand:</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "What needs to be done?",
                    "Why does it matter?",
                    "What is my responsibility?",
                    "What needs to happen next?",
                  ].map((question, index) => (
                    <div key={question} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {question}
                    </div>
                  ))}
                </div>
              </LeadershipSection>

              <LeadershipSection number="03" title="GIVING OWNERSHIP">
                <p>One thing I learned early was that people work better when they have ownership.</p>
                <p>Instead of trying to control every small decision, the goal was to give people responsibility for their part of the work and let them contribute to the execution.</p>
                <p>That also meant being available when something was unclear, blocked or needed to be changed.</p>
                <ConceptStrip items={["Ownership", "Responsibility", "Clarity", "Execution", "Feedback"]} />
              </LeadershipSection>

              <LeadershipSection number="04" title="CONNECTING DIFFERENT TEAMS" dark>
                <p>Building Beckkon required different areas to work together.</p>
                <TeamNetwork dark />
                <p>A hardware decision could affect software.</p>
                <p>A software requirement could change the product.</p>
                <p>A customer requirement could change what we needed to build.</p>
                <p>So leadership also meant connecting these different parts instead of treating them as separate teams.</p>
              </LeadershipSection>

              <LeadershipSection number="05" title="FROM IDEAS TO EXECUTION">
                <p>Ideas are easy to discuss.</p>
                <p>Execution is where things become real.</p>
                <p>A lot of my role involved taking an idea, breaking it down into what actually needed to happen, getting the right people involved and keeping the work moving.</p>
                <p>The process often looked like:</p>
                <FlowDiagram items={["IDEA", "CLARITY", "OWNERSHIP", "EXECUTION", "FEEDBACK", "IMPROVEMENT"]} />
                <ConceptStrip items={["Clarity", "Ownership", "Execution", "Feedback", "Improvement"]} />
              </LeadershipSection>

              <LeadershipSection number="06" title="LEADING THROUGH UNCERTAINTY" dark>
                <p>Building a startup means that not everything is defined from the beginning.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {["Products change.", "Priorities change.", "New information comes in.", "Some ideas work and some do not."].map((line, index) => (
                    <div key={line} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>Leadership, for me, has been about staying involved in the problem while helping the team move forward even when the path is still being figured out.</p>
              </LeadershipSection>

              <LeadershipSection number="07" title="BALANCING PRODUCT & PEOPLE">
                <p>As a founder, I have had to work across multiple areas at the same time — product development, technology, business strategy, partnerships, financial planning and team building.</p>
                <p>That meant constantly switching between the bigger picture and the small details that were needed to keep execution moving.</p>
                <ConceptStrip items={["Product development", "Technology", "Business strategy", "Partnerships", "Financial planning", "Team building"]} />
              </LeadershipSection>

              <LeadershipSection number="08" title="WHAT I LEARNED" dark>
                <p>The biggest lesson I have learned is that leadership is not about having all the answers.</p>
                <p>It is about creating clarity, taking responsibility and helping people move towards the same goal.</p>
                <p>A good idea can start with one person.</p>
                <p>But turning that idea into something real requires a team.</p>
                <div className="mt-8 border border-white/10 bg-white/[0.04] p-5 md:p-7">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-lime-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                    One idea / many people / one direction
                  </div>
                </div>
              </LeadershipSection>
            </div>
          </div>

          <section className="relative isolate overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white md:px-10 md:py-28">
            <TechnicalBackdrop dark />
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionKicker dark>My leadership approach</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  MY LEADERSHIP <span className="text-lime-300">APPROACH</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12">
                <FlowDiagram dark items={["CLARITY", "OWNERSHIP", "COMMUNICATION", "EXECUTION", "FEEDBACK", "IMPROVEMENT"]} />
              </Reveal>
              <Reveal delay={0.16} className="mt-12">
                <TeamNetwork dark />
              </Reveal>
              <Reveal delay={0.22} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>LEADERSHIP BUILDING</span>
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
