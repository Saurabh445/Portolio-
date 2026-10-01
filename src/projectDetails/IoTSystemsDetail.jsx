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
  Reveal,
  SectionColumn,
  SectionShell,
  TEXT,
  TopBar,
  TYPE,
  cx,
} from "./caseStudy/kit";

const SignalNetwork = () => (
  <Panel>
    <div className="grid gap-2 sm:grid-cols-4">
      {["DEVICE", "CONNECTIVITY", "DATA", "ACTION"].map((item, index) => (
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
    <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
      <span className="h-px w-12 bg-lime-500/40" />
      <span className="h-3 w-3 rounded-full border border-lime-500/60" />
      <span className="h-px w-12 bg-lime-500/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
    </div>
  </Panel>
);

export default function IoTSystemsDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode} dataAttr="data-iot-detail">
      <TopBar section="IoT" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll dataAttr="data-iot-scroll">
        <main>
          <HeroSection
            kicker="Beckkon Systems / IoT Systems"
            lead="Connecting hardware, software, devices and real-world data to build intelligent systems."
          >
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>IoT</h1>
            <Outline as="p" className="mt-3 block md:mt-4">
              CONNECTING HARDWARE, SOFTWARE &amp; THE REAL WORLD
            </Outline>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid as="h3" heading="HOW I STARTED EXPLORING IOT">
                <p>For me, IoT started becoming interesting when the hardware we were building needed to actually communicate with the outside world.</p>
                <p>A device sitting on its own is not very useful.</p>
                <p>It becomes useful when it can collect something, communicate that information, send it somewhere, and eventually turn that data into something a person can understand or act on.</p>
                <p>That became an important part of what we were building at Beckkon.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 md:mt-12">
                <ConceptStrip items={["BLE", "LoRa", "IoT Gateways", "MQTT", "Backend", "Cloud", "Data", "Connectivity"]} />
                <SignalNetwork />
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="System map"
                  idPrefix="iot-research"
                  scrollAttr="data-iot-scroll"
                  items={[
                    ["01", "Device to data"],
                    ["02", "BLE"],
                    ["03", "Gateways"],
                    ["04", "LoRa"],
                    ["05", "Cloud"],
                    ["06", "Information"],
                    ["07", "Physical + digital"],
                    ["08", "Real conditions"],
                    ["09", "Learned"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    note="IoT systems / field notes"
                    title="FROM DEVICE TO DATA"
                    id="iot-research-01"
                  >
                    <p>We started thinking about the complete journey of data.</p>
                    <p>A physical device generates information.</p>
                    <p>That information needs to be detected, transmitted, received, processed and finally presented to the user.</p>
                    <p>The basic idea became:</p>
                    <FlowDiagram items={["DEVICE", "DATA", "CONNECTIVITY", "CLOUD", "SOFTWARE", "ACTION"]} />
                    <ConceptStrip items={["Data", "Connectivity", "Cloud", "Software", "Action"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    note="IoT systems / field notes"
                    title="WORKING WITH BLE"
                    id="iot-research-02"
                    dark
                  >
                    <p>BLE was one of the technologies we explored heavily for our connected devices.</p>
                    <p>We worked around BLE broadcasting and scanning to understand how devices could communicate their presence and information without requiring a direct physical connection.</p>
                    <p>For the student tracking system, this became an important part of understanding how a wearable device could interact with scanners placed around an environment.</p>
                    <ConceptStrip dark items={["BLE", "Broadcasting", "Scanning", "Wearable device", "Presence"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    note="IoT systems / field notes"
                    title="SCANNERS & GATEWAYS"
                    id="iot-research-03"
                  >
                    <p>A device alone cannot provide system-level visibility.</p>
                    <p>We explored scanners and IoT gateways that could receive information from multiple devices and pass that information forward.</p>
                    <p>This created another layer between the physical device and the software platform.</p>
                    <FlowDiagram items={["DEVICE", "BLE SCANNER", "IoT GATEWAY", "NETWORK", "BACKEND"]} />
                    <ConceptStrip items={["Scanners", "IoT Gateways", "Network", "Backend", "System-level visibility"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    note="IoT systems / field notes"
                    title="EXPLORING LoRa & LONG-RANGE CONNECTIVITY"
                    id="iot-research-04"
                    dark
                  >
                    <p>For larger environments, we also explored long-range communication using LoRa-based systems.</p>
                    <p>The idea was to understand how connected devices and infrastructure could communicate across larger physical spaces where normal short-range communication would not be enough.</p>
                    <p>This made us think about things like gateway placement, range, signal strength, coverage and the physical environment itself.</p>
                    <ConceptStrip dark items={["LoRa", "Long-range connectivity", "Gateway placement", "Range", "Signal strength", "Coverage"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    note="IoT systems / field notes"
                    title="MOVING DATA TO THE CLOUD"
                    id="iot-research-05"
                  >
                    <p>Once data could reach the gateway, the next challenge was getting it into the software system reliably.</p>
                    <p>We worked around technologies and systems such as MQTT, backend services, databases and cloud infrastructure to move incoming device data into a central platform.</p>
                    <p>The flow gradually became:</p>
                    <FlowDiagram items={["DEVICE", "BLE / LoRa", "SCANNER / GATEWAY", "MQTT", "BACKEND", "DATABASE", "DASHBOARD"]} />
                    <ConceptStrip items={["MQTT", "Backend", "Database", "Cloud", "Dashboard"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    note="IoT systems / field notes"
                    title="TURNING RAW DATA INTO INFORMATION"
                    id="iot-research-06"
                    dark
                  >
                    <p>Receiving data is only the beginning.</p>
                    <p>The system needs to understand where that data came from, what it represents and what should happen next.</p>
                    <p>For example, device signals could be used to understand presence, movement, location or activity inside an environment.</p>
                    <p>That information could then become something useful for tracking, monitoring, attendance, alerts or other applications.</p>
                    <NodeCards
                      dark
                      columns="sm:grid-cols-2 lg:grid-cols-4"
                      items={["Presence", "Movement", "Location", "Activity", "Tracking", "Monitoring", "Attendance", "Alerts"]}
                    />
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    note="IoT systems / field notes"
                    title="CONNECTING THE PHYSICAL & DIGITAL WORLDS"
                    id="iot-research-07"
                  >
                    <p>This was probably the most interesting part of working with IoT.</p>
                    <p>We were no longer building just a device or just a software application.</p>
                    <p>We were trying to connect both sides.</p>
                    <FlowDiagram items={["PHYSICAL WORLD", "DEVICES", "CONNECTIVITY", "DATA", "CLOUD", "SOFTWARE", "INTELLIGENCE", "ACTION"]} />
                    <p>The physical environment became a source of live data for the digital system.</p>
                    <ConceptStrip items={["Physical world", "Devices", "Connectivity", "Data", "Cloud", "Software", "Intelligence", "Action"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="08"
                    note="IoT systems / field notes"
                    title="BUILDING THE SYSTEM AROUND REAL CONDITIONS"
                    id="iot-research-08"
                    dark
                  >
                    <p>One thing I learned quickly is that IoT does not behave like a normal software application.</p>
                    <p>Physical environments introduce their own problems.</p>
                    <NodeCards
                      dark
                      items={[
                        "Signal strength changes.",
                        "Devices move.",
                        "Connectivity can drop.",
                        "Gateways need proper placement.",
                        "Battery life matters.",
                        "Different environments behave differently.",
                      ]}
                    />
                    <p>So the system has to be designed with the real world in mind, not just the ideal scenario.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="09"
                    note="IoT systems / field notes"
                    title="WHAT I LEARNED"
                    id="iot-research-09"
                  >
                    <p>Working on IoT changed the way I think about technology.</p>
                    <NodeCards
                      items={[
                        "Software can be changed with a few lines of code.",
                        "Hardware has physical limitations.",
                        "Connectivity has its own limitations.",
                        "And when all of them come together, the final system has to work reliably in the real world.",
                      ]}
                    />
                    <p>That is what made IoT interesting for me — it sits exactly between the physical and digital worlds.</p>
                  </CaseStudySection>
                </SectionColumn>
              </BodyGrid>
            </Gutter>
          </SectionShell>

          <DarkBand>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>My IoT approach</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[16ch]")}>
                    MY <span className="text-lime-300">IOT</span> APPROACH
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <FlowDiagram dark items={["DEVICE", "CONNECT", "COLLECT", "TRANSMIT", "PROCESS", "UNDERSTAND", "ACT"]} />
                </Reveal>
                <Reveal delay={0.16} className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:mt-12 md:gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                  <MonoLead>The goal is not simply to connect devices.</MonoLead>
                  <div className={cx(TYPE.body, "space-y-5", TEXT.body(true))}>
                    <p>The goal is to make the data coming from the physical world useful.</p>
                  </div>
                </Reveal>
                <BandFooter left="IOT SYSTEMS" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}