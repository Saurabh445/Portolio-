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
    data-iot-flow={items.join(" → ")}
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

const SignalNetwork = () => (
  <div className="relative mt-10 overflow-hidden border border-black/10 bg-black/[0.02] p-3 md:p-5">
    <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:14px_14px]" />
    <div className="relative grid gap-2 sm:grid-cols-4">
      {["DEVICE", "CONNECTIVITY", "DATA", "ACTION"].map((item, index) => (
        <div key={item} className="relative flex min-h-24 items-end border border-black/10 bg-[#FAF9F6]/90 p-3 sm:min-h-32 sm:p-4">
          <span className="absolute right-3 top-3 font-mono text-[9px] text-black/25">0{index + 1}</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/65">
            {item}
          </span>
        </div>
      ))}
    </div>
    <div className="relative mt-5 flex items-center justify-center gap-2" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
      <span className="h-px w-12 bg-lime-500/40" />
      <span className="h-3 w-3 rounded-full border border-lime-500/60" />
      <span className="h-px w-12 bg-lime-500/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
    </div>
  </div>
);

const IoTSection = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? "border-white/15" : "border-black/10"}`}>
    <section
      id={`iot-research-${number}`}
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
            IoT systems / field notes
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

const IoTIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>System map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ["01", "Device to data"],
          ["02", "BLE"],
          ["03", "Gateways"],
          ["04", "LoRa"],
          ["05", "Cloud"],
          ["06", "Information"],
          ["07", "Physical + digital"],
          ["08", "Real conditions"],
          ["09", "Learned"],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#iot-research-${number}`}
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

export default function IoTSystemsDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div data-iot-detail className={`overflow-x-hidden bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black ${mode === "page" ? "min-h-screen" : "flex h-full flex-col"}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              IoT
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

      <div data-iot-scroll className="flex-1 overflow-y-auto scroll-smooth">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <TechnicalBackdrop />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / IoT Systems</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-6xl text-[clamp(4.8rem,16vw,14rem)] font-black uppercase leading-[0.78] tracking-[-0.1em]">
                  IoT
                </h1>
                <h2 className="mt-7 max-w-5xl text-[clamp(2rem,6vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-transparent" style={{ WebkitTextStroke: "2px black" }}>
                  CONNECTING HARDWARE, SOFTWARE & THE REAL WORLD
                </h2>
                <p className="mt-10 max-w-2xl text-base leading-8 text-black/65 md:text-lg md:leading-9">
                  Connecting hardware, software, devices and real-world data to build intelligent systems.
                </p>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
                <Reveal delay={0.08}>
                  <h3 className="max-w-xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW I STARTED EXPLORING IOT
                  </h3>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <div className="space-y-5 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    <p>For me, IoT started becoming interesting when the hardware we were building needed to actually communicate with the outside world.</p>
                    <p>A device sitting on its own is not very useful.</p>
                    <p>It becomes useful when it can collect something, communicate that information, send it somewhere, and eventually turn that data into something a person can understand or act on.</p>
                    <p>That became an important part of what we were building at Beckkon.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12">
                <ConceptStrip items={["BLE", "LoRa", "IoT Gateways", "MQTT", "Backend", "Cloud", "Data", "Connectivity"]} />
                <SignalNetwork />
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <IoTIndex />
            <div className="min-w-0 space-y-8">
              <IoTSection number="01" title="FROM DEVICE TO DATA">
                <p>We started thinking about the complete journey of data.</p>
                <p>A physical device generates information.</p>
                <p>That information needs to be detected, transmitted, received, processed and finally presented to the user.</p>
                <p>The basic idea became:</p>
                <FlowDiagram items={["DEVICE", "DATA", "CONNECTIVITY", "CLOUD", "SOFTWARE", "ACTION"]} />
                <ConceptStrip items={["Data", "Connectivity", "Cloud", "Software", "Action"]} />
              </IoTSection>

              <IoTSection number="02" title="WORKING WITH BLE" dark>
                <p>BLE was one of the technologies we explored heavily for our connected devices.</p>
                <p>We worked around BLE broadcasting and scanning to understand how devices could communicate their presence and information without requiring a direct physical connection.</p>
                <p>For the student tracking system, this became an important part of understanding how a wearable device could interact with scanners placed around an environment.</p>
                <ConceptStrip dark items={["BLE", "Broadcasting", "Scanning", "Wearable device", "Presence"]} />
              </IoTSection>

              <IoTSection number="03" title="SCANNERS & GATEWAYS">
                <p>A device alone cannot provide system-level visibility.</p>
                <p>We explored scanners and IoT gateways that could receive information from multiple devices and pass that information forward.</p>
                <p>This created another layer between the physical device and the software platform.</p>
                <FlowDiagram items={["DEVICE", "BLE SCANNER", "IoT GATEWAY", "NETWORK", "BACKEND"]} />
                <ConceptStrip items={["Scanners", "IoT Gateways", "Network", "Backend", "System-level visibility"]} />
              </IoTSection>

              <IoTSection number="04" title="EXPLORING LoRa & LONG-RANGE CONNECTIVITY" dark>
                <p>For larger environments, we also explored long-range communication using LoRa-based systems.</p>
                <p>The idea was to understand how connected devices and infrastructure could communicate across larger physical spaces where normal short-range communication would not be enough.</p>
                <p>This made us think about things like gateway placement, range, signal strength, coverage and the physical environment itself.</p>
                <ConceptStrip dark items={["LoRa", "Long-range connectivity", "Gateway placement", "Range", "Signal strength", "Coverage"]} />
              </IoTSection>

              <IoTSection number="05" title="MOVING DATA TO THE CLOUD">
                <p>Once data could reach the gateway, the next challenge was getting it into the software system reliably.</p>
                <p>We worked around technologies and systems such as MQTT, backend services, databases and cloud infrastructure to move incoming device data into a central platform.</p>
                <p>The flow gradually became:</p>
                <FlowDiagram items={["DEVICE", "BLE / LoRa", "SCANNER / GATEWAY", "MQTT", "BACKEND", "DATABASE", "DASHBOARD"]} />
                <ConceptStrip items={["MQTT", "Backend", "Database", "Cloud", "Dashboard"]} />
              </IoTSection>

              <IoTSection number="06" title="TURNING RAW DATA INTO INFORMATION" dark>
                <p>Receiving data is only the beginning.</p>
                <p>The system needs to understand where that data came from, what it represents and what should happen next.</p>
                <p>For example, device signals could be used to understand presence, movement, location or activity inside an environment.</p>
                <p>That information could then become something useful for tracking, monitoring, attendance, alerts or other applications.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {["Presence", "Movement", "Location", "Activity", "Tracking", "Monitoring", "Attendance", "Alerts"].map((item, index) => (
                    <div key={item} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {item}
                    </div>
                  ))}
                </div>
              </IoTSection>

              <IoTSection number="07" title="CONNECTING THE PHYSICAL & DIGITAL WORLDS">
                <p>This was probably the most interesting part of working with IoT.</p>
                <p>We were no longer building just a device or just a software application.</p>
                <p>We were trying to connect both sides.</p>
                <FlowDiagram items={["PHYSICAL WORLD", "DEVICES", "CONNECTIVITY", "DATA", "CLOUD", "SOFTWARE", "INTELLIGENCE", "ACTION"]} />
                <p>The physical environment became a source of live data for the digital system.</p>
                <ConceptStrip items={["Physical world", "Devices", "Connectivity", "Data", "Cloud", "Software", "Intelligence", "Action"]} />
              </IoTSection>

              <IoTSection number="08" title="BUILDING THE SYSTEM AROUND REAL CONDITIONS" dark>
                <p>One thing I learned quickly is that IoT does not behave like a normal software application.</p>
                <p>Physical environments introduce their own problems.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "Signal strength changes.",
                    "Devices move.",
                    "Connectivity can drop.",
                    "Gateways need proper placement.",
                    "Battery life matters.",
                    "Different environments behave differently.",
                  ].map((line, index) => (
                    <div key={line} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>So the system has to be designed with the real world in mind, not just the ideal scenario.</p>
              </IoTSection>

              <IoTSection number="09" title="WHAT I LEARNED">
                <p>Working on IoT changed the way I think about technology.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  {[
                    "Software can be changed with a few lines of code.",
                    "Hardware has physical limitations.",
                    "Connectivity has its own limitations.",
                    "And when all of them come together, the final system has to work reliably in the real world.",
                  ].map((line, index) => (
                    <div key={line} className="border border-black/10 bg-white/70 p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-black/65">
                      <span className="mb-3 block text-lime-600">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>That is what made IoT interesting for me — it sits exactly between the physical and digital worlds.</p>
              </IoTSection>
            </div>
          </div>

          <section className="relative isolate overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white md:px-10 md:py-28">
            <TechnicalBackdrop dark />
            <div className="relative mx-auto max-w-6xl">
              <Reveal>
                <SectionKicker dark>My IoT approach</SectionKicker>
                <h2 className="mt-5 max-w-5xl text-[clamp(2.5rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
                  MY <span className="text-lime-300">IOT</span> APPROACH
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12">
                <FlowDiagram dark items={["DEVICE", "CONNECT", "COLLECT", "TRANSMIT", "PROCESS", "UNDERSTAND", "ACT"]} />
              </Reveal>
              <Reveal delay={0.16} className="mt-12 grid gap-8 border-t border-white/15 pt-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.14em] text-lime-300/80">
                  The goal is not simply to connect devices.
                </p>
                <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                  <p>The goal is to make the data coming from the physical world useful.</p>
                </div>
              </Reveal>
              <Reveal delay={0.22} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>IOT SYSTEMS</span>
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
