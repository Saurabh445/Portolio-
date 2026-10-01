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
    data-software-flow={items.join(" → ")}
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

const WireframePanel = ({ dark = false }) => (
  <div
    data-software-wireframe
    className={`relative mt-8 overflow-hidden border p-3 md:p-5 ${
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-black/[0.02]"
    }`}
  >
    <div className={`pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:14px_14px] ${dark ? "invert" : ""}`} />
    <div className={`relative border p-3 md:p-4 ${dark ? "border-white/15 bg-[#0A0A0A]" : "border-black/10 bg-[#FAF9F6]/90"}`}>
      <div className={`flex items-center justify-between border-b pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.16em] ${dark ? "border-white/10 text-white/45" : "border-black/10 text-black/45"}`}>
        <span>Dashboard</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
          Real-time data
        </span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[120px_minmax(0,1fr)]">
        <div className={`hidden border-r pr-3 font-mono text-[9px] font-bold uppercase leading-7 tracking-[0.12em] md:block ${dark ? "border-white/10 text-white/35" : "border-black/10 text-black/35"}`}>
          <div className={dark ? "text-lime-300" : "text-lime-600"}>Overview</div>
          <div>Users</div>
          <div>Attendance</div>
          <div>Alerts</div>
        </div>
        <div>
          <div className="grid gap-2 sm:grid-cols-2">
            {["WHO IS WHERE?", "WHAT IS HAPPENING?", "WHAT NEEDS ATTENTION?", "WHAT HAPPENED EARLIER?"].map((item, index) => (
              <div key={item} className={`border p-3 font-mono text-[9px] font-bold uppercase leading-4 tracking-[0.1em] ${dark ? "border-white/10 text-white/65" : "border-black/10 text-black/60"}`}>
                <span className={`mb-3 block text-[9px] ${dark ? "text-lime-300" : "text-lime-600"}`}>0{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
          <div className={`mt-3 h-16 border p-3 ${dark ? "border-white/10" : "border-black/10"}`}>
            <div className={`h-1.5 w-2/5 ${dark ? "bg-lime-300/60" : "bg-lime-500/60"}`} />
            <div className={`mt-3 h-1.5 w-4/5 ${dark ? "bg-white/15" : "bg-black/10"}`} />
            <div className={`mt-2 h-1.5 w-3/5 ${dark ? "bg-white/15" : "bg-black/10"}`} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RoleMap = ({ dark = false }) => (
  <div className="mt-8 space-y-2">
    {[
      ["ADMIN", "OPERATIONS & ANALYTICS"],
      ["TEACHER", "STUDENTS & ATTENDANCE"],
      ["PARENT", "CHILD & NOTIFICATIONS"],
      ["MANAGEMENT", "OVERVIEW & INSIGHTS"],
    ].map(([role, outcome], index) => (
      <div data-software-role key={role} className={`grid gap-2 border p-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] sm:grid-cols-[150px_32px_minmax(0,1fr)_32px] sm:items-center ${dark ? "border-white/10 bg-white/[0.03] text-white/70" : "border-black/10 bg-white/65 text-black/65"}`}>
        <span className={dark ? "text-lime-300" : "text-lime-600"}>{role}</span>
        <span className={`hidden text-center text-lg font-normal sm:block ${dark ? "text-lime-300/70" : "text-lime-600"}`} aria-hidden="true">→</span>
        <span className="flex min-w-0 items-center gap-3 sm:block">
          <span className={`sm:hidden ${dark ? "text-lime-300/70" : "text-lime-600"}`} aria-hidden="true">→</span>
          {outcome}
        </span>
        <span className={`hidden text-right text-[9px] font-normal sm:block ${dark ? "text-white/25" : "text-black/25"}`}>0{index + 1}</span>
      </div>
    ))}
  </div>
);

const SoftwareSection = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? "border-white/15" : "border-black/10"}`}>
    <section
      id={`software-planning-${number}`}
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
            Software planning / field notes
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

const SoftwareIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>Product map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ["01", "User"],
          ["02", "Product"],
          ["03", "Systems"],
          ["04", "Experience"],
          ["05", "Use cases"],
          ["06", "Backend"],
          ["07", "Interface"],
          ["08", "Roles"],
          ["09", "Iterate"],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#software-planning-${number}`}
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

export default function SoftwarePlanningDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div data-software-planning-detail className={`overflow-x-hidden bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black ${mode === "page" ? "min-h-screen" : "flex h-full flex-col"}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              Software Planning
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

      <div data-software-planning-scroll className="flex-1 overflow-y-auto scroll-smooth">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <TechnicalBackdrop />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / Software Planning</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-6xl text-[clamp(3.8rem,12vw,11rem)] font-black uppercase leading-[0.8] tracking-[-0.095em]">
                  SOFTWARE
                </h1>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.2rem,7vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                  SOFTWARE PLANNING
                </h2>
                <p className="mt-10 max-w-2xl text-base leading-8 text-black/65 md:text-lg md:leading-9">
                  Planning digital products, software systems, platforms and user-focused solutions.
                </p>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                <Reveal delay={0.08}>
                  <h3 className="max-w-xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW SOFTWARE BECAME THE PRODUCT LAYER
                  </h3>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <div className="space-y-5 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    <p>When the hardware and IoT side of Beckkon started taking shape, another question became important:</p>
                    <p>How do we turn all of this into something people can actually use?</p>
                    <p>That is where software planning became a major part of the product.</p>
                    <p>I started thinking about the software not just as an application, but as the layer that connects the technology with the actual user.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12">
                <ConceptStrip items={["User Experience", "Product Architecture", "Backend", "Database", "APIs", "Real-Time Data", "Dashboards", "Analytics", "Cloud"]} />
                <WireframePanel />
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <SoftwareIndex />
            <div className="min-w-0 space-y-8">
              <SoftwareSection number="01" title="STARTING FROM THE USER">
                <p>Before thinking about screens or features, I tried to understand who would actually use the product.</p>
                <p>For a school or organization, there can be different users with completely different needs.</p>
                <RoleMap />
                <p>Each person needs different information and different actions.</p>
                <p>So the software had to be planned around the user, not around the technology.</p>
              </SoftwareSection>

              <SoftwareSection number="02" title="PLANNING THE PRODUCT" dark>
                <p>Once the users and problems were clearer, I started breaking the product down into smaller systems.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "What should the user see?",
                    "What should happen in the backend?",
                    "What data needs to be stored?",
                    "What should happen in real time?",
                    "Which features are actually necessary?",
                  ].map((question, index) => (
                    <div key={question} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {question}
                    </div>
                  ))}
                </div>
                <p>This helped turn a large idea into smaller, buildable parts.</p>
              </SoftwareSection>

              <SoftwareSection number="03" title="THINKING IN SYSTEMS">
                <p>A product like this cannot work as one isolated application.</p>
                <p>There are multiple layers working together:</p>
                <FlowDiagram items={["USER", "APPLICATION", "BACKEND", "DATABASE", "IoT / DEVICE DATA", "CLOUD INFRASTRUCTURE"]} />
                <p>Planning these connections was an important part of understanding how the complete product should work.</p>
                <ConceptStrip items={["Product Architecture", "Backend", "Database", "IoT / Device data", "Cloud"]} />
              </SoftwareSection>

              <SoftwareSection number="04" title="DESIGNING THE USER EXPERIENCE" dark>
                <p>The goal was to make complex information simple for the person using it.</p>
                <p>For example, a school administrator should not need to understand BLE, MQTT, databases or IoT gateways.</p>
                <p>They should simply be able to see:</p>
                <WireframePanel dark />
                <p>The complexity should stay inside the system.</p>
                <p>The user experience should stay simple.</p>
                <ConceptStrip dark items={["User Experience", "Simple actions", "Complex system"]} />
              </SoftwareSection>

              <SoftwareSection number="05" title="BUILDING THE PLATFORM AROUND REAL USE CASES">
                <p>The software planning evolved around different real-world requirements.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                  {["Student tracking", "Attendance", "Live monitoring", "Alerts", "Geofencing", "Notices", "Timetable", "Parent-teacher communication", "Analytics", "Operational dashboards"].map((item, index) => (
                    <div key={item} className="border border-black/10 bg-white/70 p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-black/65">
                      <span className="mb-3 block text-lime-600">{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </div>
                  ))}
                </div>
                <p>Instead of treating these as completely separate applications, we explored how they could work together through one connected platform.</p>
              </SoftwareSection>

              <SoftwareSection number="06" title="PLANNING THE BACKEND" dark>
                <p>The visible application is only one part of the product.</p>
                <p>Behind it, we needed systems for:</p>
                <div className="grid gap-2 pt-2 sm:grid-cols-2">
                  {["Data ingestion", "APIs", "Authentication", "Databases", "Real-time communication", "Data processing", "Notifications", "Analytics", "IoT data"].map((item, index) => (
                    <div key={item} className="flex items-center gap-3 border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                      <span>{item}</span>
                      <span className="ml-auto text-white/20">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
                <p>This meant thinking about how information moves through the system before designing the final interface.</p>
                <ConceptStrip dark items={["Backend", "APIs", "Database", "Real-Time Data", "Analytics", "Cloud"]} />
              </SoftwareSection>

              <SoftwareSection number="07" title="FROM DATA TO INTERFACE">
                <p>One of the things I found interesting was deciding how raw data should become something useful for the user.</p>
                <p>For example:</p>
                <FlowDiagram items={["DEVICE DATA", "PROCESSING", "LOCATION / EVENT", "DATABASE", "ANALYTICS", "DASHBOARD", "USER ACTION"]} />
                <p>The software becomes the layer that makes all of this understandable.</p>
                <ConceptStrip items={["Data", "Processing", "Event", "Database", "Analytics", "Dashboard", "User action"]} />
              </SoftwareSection>

              <SoftwareSection number="08" title="BUILDING FOR DIFFERENT USERS" dark>
                <p>The same underlying system can serve different people in different ways.</p>
                <RoleMap dark />
                <p>Thinking this way helped us plan the platform as a system rather than a single application.</p>
              </SoftwareSection>

              <SoftwareSection number="09" title="ITERATING THE PRODUCT">
                <p>The first version of a software product is rarely the final version.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {["Features change.", "Flows change.", "Users behave differently than expected.", "Some things turn out to be unnecessary."].map((line, index) => (
                    <div key={line} className="border border-black/10 bg-white/70 p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-black/65">
                      <span className="mb-3 block text-lime-600">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>So the planning process remained flexible.</p>
                <FlowDiagram items={["PLAN", "DESIGN", "BUILD", "TEST", "GET FEEDBACK", "IMPROVE"]} />
              </SoftwareSection>
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
              <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-3 md:gap-4">
                {[
                  "Software planning taught me that building a product is not about deciding every feature beforehand.",
                  "It is about understanding the problem well enough to know what needs to be built first.",
                  "Good software should hide the complexity underneath and give the user a simple way to get something done.",
                ].map((line, index) => (
                  <div key={line} className="border border-white/10 bg-white/[0.04] p-5 text-base leading-7 text-white/70 md:min-h-52 md:p-6">
                    <span className="mb-12 block font-mono text-[10px] font-bold tracking-[0.16em] text-lime-300">0{index + 1}</span>
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
                <SectionKicker dark>My software approach</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  MY SOFTWARE <span className="text-lime-300">APPROACH</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12">
                <FlowDiagram dark items={["PROBLEM", "USER", "PRODUCT", "SYSTEM", "EXPERIENCE", "BUILD", "FEEDBACK", "ITERATE"]} />
              </Reveal>
              <Reveal delay={0.16} className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.14em] text-lime-300/80">
                  For me, software planning is about connecting the business problem, the technology behind it and the person who will actually use it.
                </p>
                <WireframePanel dark />
              </Reveal>
              <Reveal delay={0.22} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>SOFTWARE PLANNING</span>
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
