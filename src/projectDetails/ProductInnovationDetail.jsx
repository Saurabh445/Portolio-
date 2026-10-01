import { Fragment } from "react";
import { Gsap } from "../utils/gsapAnimate";
import { ArrowUpRight } from "lucide-react";

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
  <p className={`font-mono text-[10px] font-bold uppercase tracking-[0.22em] ${dark ? 'text-lime-300/70' : 'text-black/40'}`}>
    {children}
  </p>
);

const FlowDiagram = ({ items, dark = false }) => (
  <div className={`mt-8 overflow-hidden border ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-white/60'}`}>
    <div className="flex flex-col items-stretch gap-px bg-current/10 md:flex-row md:flex-wrap lg:flex-nowrap">
      {items.map((item, index) => (
        <Fragment key={item}>
          <div className={`relative flex min-h-16 min-w-0 flex-1 items-center justify-center px-3 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.1em] leading-[1.35] ${dark ? 'bg-[#0A0A0A] text-white/75' : 'bg-[#FAF9F6] text-black/70'}`}>
            <span className="break-words">{item}</span>
          </div>
          {index < items.length - 1 && (
            <div className={`flex shrink-0 items-center justify-center px-2 font-mono text-lg ${dark ? 'bg-[#0A0A0A] text-lime-300/70' : 'bg-[#FAF9F6] text-lime-600'}`} aria-hidden="true">
              <span className="hidden md:inline">→</span>
              <span className="md:hidden">↓</span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </div>
);

const ConceptStrip = ({ items, dark = false }) => (
  <div className="mt-7 flex flex-wrap gap-2">
    {items.map((item) => (
      <span
        key={item}
        className={`border px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] ${dark ? 'border-white/15 bg-white/[0.04] text-white/75' : 'border-black/10 bg-white/70 text-black/65'}`}
      >
        {item}
      </span>
    ))}
  </div>
);

const StepBlock = ({ number, title, children, dark = false }) => (
  <Reveal className={`scroll-mt-24 border-t ${dark ? 'border-white/15' : 'border-black/10'}`}>
    <section id={`product-innovation-${number}`} className={`relative overflow-hidden px-5 py-10 md:px-8 md:py-14 ${dark ? 'bg-[#0A0A0A] text-white' : 'bg-white/45 text-black'}`}>
      <div className="pointer-events-none absolute -right-5 -top-8 select-none font-black text-[8rem] leading-none tracking-[-0.12em] text-black/[0.035] md:text-[12rem]">
        {number}
      </div>
      <div className="relative grid gap-8 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
        <div>
          <span className={`font-mono text-4xl font-bold tracking-[-0.08em] ${dark ? 'text-lime-300' : 'text-lime-600'}`}>
            {number}
          </span>
          <div className={`mt-4 h-px w-12 ${dark ? 'bg-lime-300/60' : 'bg-lime-500/60'}`} />
        </div>
        <div>
          <h2 className={`max-w-3xl text-[clamp(1.55rem,3.5vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.04em] ${dark ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
          <div className={`mt-8 max-w-3xl space-y-5 text-[15px] leading-7 md:text-base md:leading-8 ${dark ? 'text-white/70' : 'text-black/65'}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  </Reveal>
);

const StepIndex = () => (
  <aside className="hidden lg:block">
    <div className="sticky top-24">
      <SectionKicker>Process map</SectionKicker>
      <nav className="mt-5 border-l border-black/10">
        {[
          ['01', 'Problem'],
          ['02', 'Hardware'],
          ['03', 'Connectivity'],
          ['04', 'Software'],
          ['05', 'System'],
          ['06', 'Iteration'],
          ['07', 'Vision'],
        ].map(([number, label]) => (
          <a
            key={number}
            href={`#product-innovation-${number}`}
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

export default function ProductInnovationDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <div className={`bg-[#FAF9F6] text-black selection:bg-lime-400 selection:text-black overflow-x-hidden ${mode === 'page' ? 'min-h-screen' : 'h-full flex flex-col'}`}>
      <div className="sticky top-0 z-40 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-10">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
              Product Innovation
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

      <div className="flex-1 overflow-y-auto">
        <main>
          <section className="relative isolate overflow-hidden border-b border-black/10 px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.045] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-lime-300/20 blur-3xl" />
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(163,230,53,0.75)]" />
                  <SectionKicker>Beckkon Systems / Product Case Study</SectionKicker>
                </div>
                <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.085em]">
                  PRODUCT <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>INNOVATION</span>
                </h1>
              </Reveal>

              <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-20">
                <Reveal delay={0.08}>
                  <h2 className="max-w-2xl text-[clamp(1.5rem,3.2vw,3rem)] font-black uppercase leading-[0.98] tracking-[-0.045em]">
                    HOW WE STARTED BUILDING AT BECKKON
                  </h2>
                </Reveal>
                <Reveal delay={0.16} className="border-l-2 border-lime-400 pl-5 md:pl-7">
                  <p className="text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    When we started Beckkon Systems, we did not have a finished product.
                  </p>
                  <p className="mt-4 text-base leading-8 text-black/70 md:text-lg md:leading-9">
                    We had a problem we wanted to understand.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={0.22} className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
                <div className="space-y-5 text-[15px] leading-7 text-black/65 md:text-base md:leading-8">
                  <p>We started looking at how organizations, especially campuses and schools, were managing their day-to-day operations. A lot of things were happening physically, but very little of that information was connected in real time.</p>
                  <p>That is where the first product discussions started.</p>
                  <p>We started asking simple questions:</p>
                </div>
                <div className="border border-black/10 bg-white/70 p-5 md:p-7">
                  <ol className="space-y-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-black/70 md:text-xs">
                    <li className="flex gap-3"><span className="text-lime-600">01</span><span>Can we know what is happening in the physical environment?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">02</span><span>Can devices around us generate useful data?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">03</span><span>Can that data reach a central system?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">04</span><span>And most importantly — can someone actually use that information to make better decisions?</span></li>
                  </ol>
                </div>
              </Reveal>
            </div>
          </section>

          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-14">
            <StepIndex />
            <div className="min-w-0 space-y-8">
              <StepBlock number="01" title="STARTING WITH THE PROBLEM">
                <p>We spent time researching the problem, understanding the market and talking through different use cases.</p>
                <p>Initially, the idea was not to build ten different products.</p>
                <p>We were trying to figure out one useful system that could connect the physical environment with software.</p>
              </StepBlock>

              <StepBlock number="02" title="STARTING WITH HARDWARE" dark>
                <p>The first major step was exploring the hardware side.</p>
                <p>We started working with microcontrollers, BLE, sensors, communication modules and different hardware configurations.</p>
                <ConceptStrip dark items={["Microcontrollers", "BLE", "Sensors", "Communication modules"]} />
                <p>One of the ideas that evolved from this was a smart ID-card based wearable.</p>
                <p>Instead of treating an ID card as just an identification card, we explored how it could become a connected device.</p>
              </StepBlock>

              <StepBlock number="03" title="CONNECTING THE HARDWARE">
                <p>Once the hardware idea started taking shape, the next question was:</p>
                <p className="font-mono font-bold uppercase tracking-[0.04em] text-black">How does this device communicate with the system?</p>
                <p>That led us into BLE scanning, IoT gateways, LoRa connectivity, MQTT and different ways of moving data from the physical environment to the backend.</p>
                <ConceptStrip items={["BLE scanning", "IoT gateways", "LoRa connectivity", "MQTT"]} />
                <p>This was where the product started becoming more than just a hardware device.</p>
              </StepBlock>

              <StepBlock number="04" title="BUILDING THE SOFTWARE AROUND IT" dark>
                <p>The hardware could generate data, but that data needed somewhere to go.</p>
                <p>So we started building the software side around it — backend services, databases, dashboards, applications and the systems required to process the incoming data.</p>
                <p>The idea gradually became:</p>
                <FlowDiagram dark items={["HARDWARE", "CONNECTIVITY", "CLOUD", "DATA", "SOFTWARE", "USER"]} />
              </StepBlock>

              <StepBlock number="05" title="FROM ONE PRODUCT TO A CONNECTED SYSTEM">
                <p>As we kept working on it, we realised that the real opportunity was not just the ID card.</p>
                <p>The same infrastructure could be used for student tracking, attendance, monitoring, alerts, geofencing, campus operations and other connected applications.</p>
                <ConceptStrip items={["Student tracking", "Attendance", "Monitoring", "Alerts", "Geofencing", "Campus operations"]} />
                <p>That is how the idea of a broader Smart Campus and Digital Infrastructure platform started taking shape.</p>
                <p>We started thinking about the complete system instead of one individual device.</p>
              </StepBlock>

              <StepBlock number="06" title="BUILDING AND ITERATING" dark>
                <p>A lot of the work was experimentation.</p>
                <p>We tested different hardware, communication methods, product designs and software flows.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-3">
                  {['Some ideas worked.', 'Some needed to be changed.', 'Some were dropped completely.'].map((line, index) => (
                    <div key={line} className="border border-white/10 bg-white/[0.04] p-4 font-mono text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-white/70">
                      <span className="mb-3 block text-lime-300">0{index + 1}</span>
                      {line}
                    </div>
                  ))}
                </div>
                <p>The product kept changing as we understood the problem better.</p>
                <p>For us, product innovation became a cycle:</p>
                <FlowDiagram dark items={["PROBLEM", "RESEARCH", "BUILD", "TEST", "LEARN", "ITERATE"]} />
              </StepBlock>

              <StepBlock number="07" title="WHAT WE WERE REALLY TRYING TO BUILD">
                <p>Over time, the vision became much clearer.</p>
                <p>We wanted to build a layer that connects the physical world with the digital world.</p>
                <FlowDiagram items={["Physical environments", "Connected Devices", "Data", "Cloud", "Software", "Intelligence", "Action"]} />
                <p>That thinking eventually became the foundation behind the different products and systems we worked on at Beckkon.</p>
              </StepBlock>
            </div>
          </div>

          <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-20 text-white md:px-10 md:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative mx-auto max-w-5xl">
              <Reveal>
                <SectionKicker dark>What I learned</SectionKicker>
                <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,7vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
                  WHAT I <span className="text-lime-300">LEARNED</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
                <p className="font-mono text-xs font-bold uppercase leading-6 tracking-[0.14em] text-lime-300/80">
                  The biggest thing I learned from building Beckkon was that product innovation does not start with technology.
                </p>
                <div className="space-y-5 text-base leading-8 text-white/70 md:text-lg md:leading-9">
                  <p>It starts with a problem.</p>
                  <p>Technology comes later.</p>
                  <p>You keep exploring, building, breaking things, talking to people, testing ideas and changing the product until the pieces start making sense.</p>
                  <p>That process — from a rough problem to something that can actually work in the real world — is what I enjoy most about building products.</p>
                </div>
              </Reveal>
              <Reveal delay={0.18} className="mt-16 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                  <span>PRODUCT INNOVATION</span>
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
