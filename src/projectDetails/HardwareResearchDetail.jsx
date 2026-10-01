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
        className={`border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${
          dark
            ? "border-white/15 bg-white/[0.04] text-white/75"
            : "border-black/10 bg-white/70 text-black/65"
        }`}
      >
        {item}
      </span>
    ))}
  </div>
);

const FlowDiagram = ({ items, dark = false }) => (
  <div
    data-hardware-flow={items.join(" → ")}
    className={`mt-8 overflow-hidden border ${
      dark ? "border-white/10 bg-white/[0.03]" : "border-black/10 bg-white/60"
    }`}
  >
    <div className="flex flex-col gap-px bg-current/10 lg:flex-row lg:flex-nowrap lg:gap-0">
      {items.map((item, index) => (
        <Fragment key={item}>
          <div
            className={`relative flex min-h-16 min-w-0 flex-1 items-center justify-center px-3 py-4 text-center font-mono text-[10px] font-bold uppercase leading-[1.35] tracking-[0.1em] ${
              dark ? "bg-[#0A0A0A] text-white/75" : "bg-[#FAF9F6] text-black/70"
            }`}
          >
            <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-lime-500/70" />
            <span className="break-words">{item}</span>
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

const SignalPanel = () => (
  <div className="relative mt-10 overflow-hidden border border-black/10 bg-black/[0.02] p-3 md:p-5">
    <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
    <div className="relative grid gap-2 sm:grid-cols-4">
      {[
        "SENSE",
        "PROCESS",
        "COMMUNICATE",
        "SYSTEM",
      ].map((item, index, items) => (
        <Fragment key={item}>
          <div className="relative flex min-h-24 items-end border border-black/10 bg-[#FAF9F6]/90 p-3 sm:min-h-32 sm:p-4">
            <span className="absolute right-3 top-3 font-mono text-[9px] text-black/25">0{index + 1}</span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/65">
              {item}
            </span>
          </div>
          {index < items.length - 1 && <span className="hidden" aria-hidden="true" />}
        </Fragment>
      ))}
    </div>
    <div className="relative mt-3 flex items-center justify-between px-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-black/35">
      <span>Physical input</span>
      <span className="h-px flex-1 bg-black/10 mx-3" />
      <span>Connected product</span>
    </div>
  </div>
);

const EnclosureDiagram = () => (
  <div className="relative mt-8 border border-white/10 bg-white/[0.03] p-4 sm:p-6">
    <div className="relative mx-auto max-w-xl border border-lime-300/25 p-3">
      <div className="border border-lime-300/50 bg-lime-300/[0.05] px-4 py-5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-lime-300">
        ENCLOSURE
      </div>
      <div className="mx-6 border-x border-white/20 px-3 py-3">
        <div className="border border-white/25 bg-white/[0.04] px-4 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
          PCB
        </div>
        <div className="mt-2 flex justify-center">
          <div className="h-3 w-28 border border-orange-300/40 bg-orange-300/10" aria-hidden="true" />
        </div>
        <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
          Battery
        </p>
      </div>
    </div>
    <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/35">
      <span>Dimensions</span>
      <span>Materials</span>
      <span>Access</span>
      <span>Protection</span>
    </div>
  </div>
);

const HardwareSection = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? "border-white/15" : "border-black/10"}`}>
    <section
      id={`hardware-research-${number}`}
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
            Hardware research / field notes
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

const HardwareIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>Research map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ["01", "Understanding"],
          ["02", "BLE"],
          ["03", "PCB"],
          ["04", "Prototyping"],
          ["05", "Power"],
          ["06", "Enclosure"],
          ["07", "System"],
          ["08", "Learned"],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#hardware-research-${number}`}
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

export default function HardwareResearchDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div data-hardware-research-detail className={`overflow-x-hidden bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black ${mode === "page" ? "min-h-screen" : "flex h-full flex-col"}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              Hardware Research
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

      <div data-hardware-research-scroll className="flex-1 overflow-y-auto scroll-smooth">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <TechnicalBackdrop />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / Hardware Research</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-6xl text-[clamp(3.2rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
                  <span className="block">HARDWARE</span>{" "}
                  <span className="mt-3 block text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                    HARDWARE RESEARCH
                  </span>
                </h1>
                <p className="mt-10 max-w-2xl text-base leading-8 text-black/65 md:text-lg md:leading-9">
                  Exploring hardware systems, electronics, prototyping and working with physical technology.
                </p>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
                <Reveal delay={0.08}>
                  <h2 className="max-w-xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW I STARTED WORKING WITH HARDWARE
                  </h2>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <div className="space-y-5 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    <p>A big part of building Beckkon was moving from an idea on paper to something that could actually exist in the physical world.</p>
                    <p>Once we started exploring connected products, hardware became one of the first things I had to understand properly.</p>
                    <p>I started exploring how a small device could sense something, process it, communicate with another device and eventually become part of a larger system.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12">
                <ConceptStrip items={["Microcontrollers", "BLE", "Sensors", "PCB", "Battery", "IoT Gateway", "Enclosure", "Prototyping"]} />
                <SignalPanel />
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <HardwareIndex />
            <div className="min-w-0 space-y-8">
              <HardwareSection number="01" title="UNDERSTANDING THE HARDWARE">
                <p>The first step was understanding what actually goes inside a connected device.</p>
                <p>I worked around microcontrollers, BLE modules, sensors, communication modules, batteries, PCBs and other electronic components.</p>
                <div className="border-l-2 border-lime-400 bg-lime-400/10 px-5 py-5 md:px-7">
                  <SectionKicker>Question I kept coming back to</SectionKicker>
                  <p className="mt-3 font-mono text-sm font-bold uppercase leading-6 tracking-[0.04em] text-black md:text-base md:leading-7">
                    What is the simplest hardware setup that can actually solve the problem?
                  </p>
                </div>
                <ConceptStrip items={["Microcontrollers", "BLE modules", "Sensors", "PCBs", "Batteries"]} />
              </HardwareSection>

              <HardwareSection number="02" title="EXPLORING BLE & CONNECTED DEVICES" dark>
                <p>For our student tracking work, BLE became an important part of the hardware system.</p>
                <p>I explored BLE-based wearable devices, broadcasting, scanning, power consumption and how multiple devices could work together with scanners and gateways.</p>
                <p>This helped me understand the practical side of building a connected device rather than just understanding BLE as a technology.</p>
                <ConceptStrip dark items={["BLE", "Wearable devices", "Broadcasting", "Scanning", "Power consumption", "Scanners"]} />
              </HardwareSection>

              <HardwareSection number="03" title="PCB & COMPONENT RESEARCH">
                <p>A major part of the work involved figuring out what should actually go onto the PCB.</p>
                <p>I explored different microcontrollers, BLE solutions, communication modules, sensors, power components and PCB configurations.</p>
                <ConceptStrip items={["Microcontrollers", "BLE solutions", "Communication modules", "Sensors", "Power components", "PCB configurations"]} />
                <p>The process involved comparing components, checking availability, looking at power requirements, understanding specifications and trying to keep the overall design practical and manufacturable.</p>
              </HardwareSection>

              <HardwareSection number="04" title="PROTOTYPING" dark>
                <p>Hardware rarely works perfectly in the first attempt.</p>
                <p>We went through different board configurations, component choices and physical designs while trying to get the device smaller, more reliable and easier to manufacture.</p>
                <p>The process was basically:</p>
                <FlowDiagram dark items={["IDEA", "COMPONENTS", "PCB", "PROTOTYPE", "TEST", "CHANGE", "REPEAT"]} />
                <ConceptStrip dark items={["Prototyping", "Board configurations", "Component choices", "Physical design"]} />
              </HardwareSection>

              <HardwareSection number="05" title="POWER & BATTERY">
                <p>Power was another important part of the hardware design.</p>
                <p>For a wearable device, battery life, physical size and power consumption all have to work together.</p>
                <p>I explored different battery configurations, sleep cycles, BLE broadcast behaviour and power requirements while thinking about how the device would actually be used in the field.</p>
                <ConceptStrip items={["Battery", "Battery life", "Physical size", "Power consumption", "Sleep cycles", "BLE broadcast behaviour"]} />
              </HardwareSection>

              <HardwareSection number="06" title="ENCLOSURE & PHYSICAL DESIGN" dark>
                <p>The PCB is only one part of a hardware product.</p>
                <p>We also had to think about how the electronics would physically live inside the product.</p>
                <p>This involved enclosure design, dimensions, materials, button/access considerations, battery replacement and protection from the surrounding environment.</p>
                <EnclosureDiagram />
                <p>The goal was to make the hardware functional but also practical enough to be used as a real product.</p>
                <ConceptStrip dark items={["Enclosure", "Dimensions", "Materials", "Button/access", "Battery replacement", "Protection"]} />
              </HardwareSection>

              <HardwareSection number="07" title="CONNECTING HARDWARE TO THE SYSTEM">
                <p>The hardware was never designed as an isolated device.</p>
                <p>The idea was always:</p>
                <FlowDiagram items={["DEVICE", "BLE", "SCANNER / GATEWAY", "CONNECTIVITY", "CLOUD", "SOFTWARE"]} />
                <p>This changed the way I looked at hardware.</p>
                <p>The device itself is only one part of the product. Its real value comes from what happens after it generates data.</p>
                <ConceptStrip items={["Device", "BLE", "IoT Gateway", "Connectivity", "Cloud", "Software"]} />
              </HardwareSection>

              <HardwareSection number="08" title="WHAT I LEARNED" dark>
                <p>Working with hardware taught me that small decisions matter.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "A different component can change power consumption.",
                    "A different PCB layout can change the physical design.",
                    "A small change in enclosure size can affect usability.",
                    "A communication choice can affect the entire system.",
                  ].map((line, index) => (
                    <div key={line} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>You cannot design hardware in isolation.</p>
                <p>You have to think about the complete product around it.</p>
              </HardwareSection>
            </div>
          </div>

          <section className="relative isolate overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white md:px-10 md:py-28">
            <TechnicalBackdrop dark />
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionKicker dark>My hardware approach</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  MY HARDWARE <span className="text-lime-300">APPROACH</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12">
                <FlowDiagram dark items={["UNDERSTAND THE REQUIREMENT", "SELECT COMPONENTS", "DESIGN", "PROTOTYPE", "TEST", "ITERATE", "MANUFACTURE"]} />
              </Reveal>
              <Reveal delay={0.16} className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.14em] text-lime-300/80">
                  For me, hardware research is not just about experimenting with electronics.
                </p>
                <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                  <p>It is about understanding how technology behaves in the physical world and turning that understanding into something that can actually be built and used.</p>
                </div>
              </Reveal>
              <Reveal delay={0.22} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>HARDWARE RESEARCH</span>
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
