import {
  BandFooter,
  BodyGrid,
  CaseStudyRoot,
  CaseStudyScroll,
  CaseStudySection,
  CaseStudyIndex,
  ConceptStrip,
  DarkBand,
  FlowDiagram,
  Gutter,
  HeroSection,
  IntroGrid,
  Kicker,
  MonoLead,
  NodeCards,
  Outline,
  Panel,
  PullQuote,
  Reveal,
  SectionColumn,
  SectionShell,
  TEXT,
  TopBar,
  TYPE,
  cx,
} from "./caseStudy/kit";

const SignalPanel = () => (
  <Panel>
    <div className="grid gap-2 sm:grid-cols-4">
      {["SENSE", "PROCESS", "COMMUNICATE", "SYSTEM"].map((item, index) => (
        <div
          key={item}
          className="relative flex min-h-24 items-end border border-black/10 bg-[#FAF9F6]/90 p-3 sm:min-h-28 sm:p-4"
        >
          <span className="absolute right-3 top-3 font-mono text-[0.6875rem] text-black/35">
            0{index + 1}
          </span>
          <span className={cx(TYPE.node, "text-black/75")}>{item}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex items-center justify-between gap-3 px-1 font-mono text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-black/45">
      <span>Physical input</span>
      <span className="h-px flex-1 bg-black/10" />
      <span>Connected product</span>
    </div>
  </Panel>
);

const EnclosureDiagram = () => (
  <div className="relative mt-8 overflow-hidden border border-white/15 bg-white/[0.03] p-4 sm:p-6">
    <div className="relative mx-auto max-w-xl border border-lime-300/25 p-3">
      <div className={cx("border border-lime-300/50 bg-lime-300/[0.05] px-4 py-5 text-center text-lime-300", TYPE.meta)}>
        ENCLOSURE
      </div>
      <div className="mx-6 border-x border-white/20 px-3 py-3">
        <div className={cx("border border-white/25 bg-white/[0.05] px-4 py-4 text-center text-white/75", TYPE.meta)}>
          PCB
        </div>
        <div className="mt-3 flex justify-center">
          <div className="h-3 w-28 border border-orange-300/40 bg-orange-300/10" aria-hidden="true" />
        </div>
        <p className={cx("mt-2 text-center text-white/45", TYPE.micro)}>Battery</p>
      </div>
    </div>
    <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-white/45">
      {["Dimensions", "Materials", "Access", "Protection"].map((item) => (
        <span key={item} className={TYPE.micro}>{item}</span>
      ))}
    </div>
  </div>
);

export default function HardwareResearchDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode} dataAttr="data-hardware-research-detail">
      <TopBar section="Hardware Research" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll dataAttr="data-hardware-research-scroll">
        <main>
          <HeroSection
            kicker="Beckkon Systems / Hardware Research"
            lead="Exploring hardware systems, electronics, prototyping and working with physical technology."
          >
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>
              <span className="block">HARDWARE</span>
              <Outline className="mt-2 block" as="span">
                HARDWARE RESEARCH
              </Outline>
            </h1>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid heading="HOW I STARTED WORKING WITH HARDWARE">
                <p>A big part of building Beckkon was moving from an idea on paper to something that could actually exist in the physical world.</p>
                <p>Once we started exploring connected products, hardware became one of the first things I had to understand properly.</p>
                <p>I started exploring how a small device could sense something, process it, communicate with another device and eventually become part of a larger system.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 md:mt-12">
                <ConceptStrip items={["Microcontrollers", "BLE", "Sensors", "PCB", "Battery", "IoT Gateway", "Enclosure", "Prototyping"]} />
                <SignalPanel />
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="Research map"
                  idPrefix="hardware-research"
                  scrollAttr="data-hardware-research-scroll"
                  items={[
                    ["01", "Understanding"],
                    ["02", "BLE"],
                    ["03", "PCB"],
                    ["04", "Prototyping"],
                    ["05", "Power"],
                    ["06", "Enclosure"],
                    ["07", "System"],
                    ["08", "Learned"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    note="Hardware research / field notes"
                    title="UNDERSTANDING THE HARDWARE"
                    id="hardware-research-01"
                  >
                    <p>The first step was understanding what actually goes inside a connected device.</p>
                    <p>I worked around microcontrollers, BLE modules, sensors, communication modules, batteries, PCBs and other electronic components.</p>
                    <PullQuote
                      className="my-7"
                      kicker="Question I kept coming back to"
                      body="What is the simplest hardware setup that can actually solve the problem?"
                    />
                    <ConceptStrip items={["Microcontrollers", "BLE modules", "Sensors", "PCBs", "Batteries"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    note="Hardware research / field notes"
                    title="EXPLORING BLE & CONNECTED DEVICES"
                    id="hardware-research-02"
                    dark
                  >
                    <p>For our student tracking work, BLE became an important part of the hardware system.</p>
                    <p>I explored BLE-based wearable devices, broadcasting, scanning, power consumption and how multiple devices could work together with scanners and gateways.</p>
                    <p>This helped me understand the practical side of building a connected device rather than just understanding BLE as a technology.</p>
                    <ConceptStrip dark items={["BLE", "Wearable devices", "Broadcasting", "Scanning", "Power consumption", "Scanners"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    note="Hardware research / field notes"
                    title="PCB & COMPONENT RESEARCH"
                    id="hardware-research-03"
                  >
                    <p>A major part of the work involved figuring out what should actually go onto the PCB.</p>
                    <p>I explored different microcontrollers, BLE solutions, communication modules, sensors, power components and PCB configurations.</p>
                    <ConceptStrip items={["Microcontrollers", "BLE solutions", "Communication modules", "Sensors", "Power components", "PCB configurations"]} />
                    <p>The process involved comparing components, checking availability, looking at power requirements, understanding specifications and trying to keep the overall design practical and manufacturable.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    note="Hardware research / field notes"
                    title="PROTOTYPING"
                    id="hardware-research-04"
                    dark
                  >
                    <p>Hardware rarely works perfectly in the first attempt.</p>
                    <p>We went through different board configurations, component choices and physical designs while trying to get the device smaller, more reliable and easier to manufacture.</p>
                    <p>The process was basically:</p>
                    <FlowDiagram dark items={["IDEA", "COMPONENTS", "PCB", "PROTOTYPE", "TEST", "CHANGE", "REPEAT"]} />
                    <ConceptStrip dark items={["Prototyping", "Board configurations", "Component choices", "Physical design"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    note="Hardware research / field notes"
                    title="POWER & BATTERY"
                    id="hardware-research-05"
                  >
                    <p>Power was another important part of the hardware design.</p>
                    <p>For a wearable device, battery life, physical size and power consumption all have to work together.</p>
                    <p>I explored different battery configurations, sleep cycles, BLE broadcast behaviour and power requirements while thinking about how the device would actually be used in the field.</p>
                    <ConceptStrip items={["Battery", "Battery life", "Physical size", "Power consumption", "Sleep cycles", "BLE broadcast behaviour"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    note="Hardware research / field notes"
                    title="ENCLOSURE & PHYSICAL DESIGN"
                    id="hardware-research-06"
                    dark
                  >
                    <p>The PCB is only one part of a hardware product.</p>
                    <p>We also had to think about how the electronics would physically live inside the product.</p>
                    <p>This involved enclosure design, dimensions, materials, button/access considerations, battery replacement and protection from the surrounding environment.</p>
                    <EnclosureDiagram />
                    <p>The goal was to make the hardware functional but also practical enough to be used as a real product.</p>
                    <ConceptStrip dark items={["Enclosure", "Dimensions", "Materials", "Button/access", "Battery replacement", "Protection"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    note="Hardware research / field notes"
                    title="CONNECTING HARDWARE TO THE SYSTEM"
                    id="hardware-research-07"
                  >
                    <p>The hardware was never designed as an isolated device.</p>
                    <p>The idea was always:</p>
                    <FlowDiagram items={["DEVICE", "BLE", "SCANNER / GATEWAY", "CONNECTIVITY", "CLOUD", "SOFTWARE"]} />
                    <p>This changed the way I looked at hardware.</p>
                    <p>The device itself is only one part of the product. Its real value comes from what happens after it generates data.</p>
                    <ConceptStrip items={["Device", "BLE", "IoT Gateway", "Connectivity", "Cloud", "Software"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="08"
                    note="Hardware research / field notes"
                    title="WHAT I LEARNED"
                    id="hardware-research-08"
                    dark
                  >
                    <p>Working with hardware taught me that small decisions matter.</p>
                    <NodeCards
                      dark
                      items={[
                        "A different component can change power consumption.",
                        "A different PCB layout can change the physical design.",
                        "A small change in enclosure size can affect usability.",
                        "A communication choice can affect the entire system.",
                      ]}
                    />
                    <p>You cannot design hardware in isolation.</p>
                    <p>You have to think about the complete product around it.</p>
                  </CaseStudySection>
                </SectionColumn>
              </BodyGrid>
            </Gutter>
          </SectionShell>

          <DarkBand>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>My hardware approach</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[16ch]")}>
                    MY HARDWARE <span className="text-lime-300">APPROACH</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <FlowDiagram dark items={["UNDERSTAND THE REQUIREMENT", "SELECT COMPONENTS", "DESIGN", "PROTOTYPE", "TEST", "ITERATE", "MANUFACTURE"]} />
                </Reveal>
                <Reveal delay={0.16} className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:mt-12 md:gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                  <MonoLead>For me, hardware research is not just about experimenting with electronics.</MonoLead>
                  <div className={cx(TYPE.body, "space-y-5", TEXT.body(true))}>
                    <p>It is about understanding how technology behaves in the physical world and turning that understanding into something that can actually be built and used.</p>
                  </div>
                </Reveal>
                <BandFooter left="HARDWARE RESEARCH" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}