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
  Reveal,
  SectionColumn,
  SectionShell,
  TEXT,
  TopBar,
  TYPE,
  cx,
} from "./caseStudy/kit";

export default function ProductInnovationDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode}>
      <TopBar section="Product Innovation" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll>
        <main>
          <HeroSection kicker="Beckkon Systems / Product Case Study">
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>
              PRODUCT <Outline>INNOVATION</Outline>
            </h1>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid heading="HOW WE STARTED BUILDING AT BECKKON">
                <p>When we started Beckkon Systems, we did not have a finished product.</p>
                <p>We had a problem we wanted to understand.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14 xl:gap-16">
                <div className={cx(TYPE.body, "space-y-5", TEXT.body(false))}>
                  <p>We started looking at how organizations, especially campuses and schools, were managing their day-to-day operations. A lot of things were happening physically, but very little of that information was connected in real time.</p>
                  <p>That is where the first product discussions started.</p>
                  <p>We started asking simple questions:</p>
                </div>
                <div className="border border-black/10 bg-white/70 p-5 md:p-7">
                  <ol className={cx("space-y-4 md:space-y-5", TYPE.node, "text-black/75")}>
                    <li className="flex gap-3"><span className="text-lime-600">01</span><span>Can we know what is happening in the physical environment?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">02</span><span>Can devices around us generate useful data?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">03</span><span>Can that data reach a central system?</span></li>
                    <li className="flex gap-3"><span className="text-lime-600">04</span><span>And most importantly — can someone actually use that information to make better decisions?</span></li>
                  </ol>
                </div>
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="Process map"
                  idPrefix="product-innovation"
                  items={[
                    ["01", "Problem"],
                    ["02", "Hardware"],
                    ["03", "Connectivity"],
                    ["04", "Software"],
                    ["05", "System"],
                    ["06", "Iteration"],
                    ["07", "Vision"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    title="STARTING WITH THE PROBLEM"
                    id="product-innovation-01"
                  >
                    <p>We spent time researching the problem, understanding the market and talking through different use cases.</p>
                    <p>Initially, the idea was not to build ten different products.</p>
                    <p>We were trying to figure out one useful system that could connect the physical environment with software.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    title="STARTING WITH HARDWARE"
                    id="product-innovation-02"
                    dark
                  >
                    <p>The first major step was exploring the hardware side.</p>
                    <p>We started working with microcontrollers, BLE, sensors, communication modules and different hardware configurations.</p>
                    <ConceptStrip dark items={["Microcontrollers", "BLE", "Sensors", "Communication modules"]} />
                    <p>One of the ideas that evolved from this was a smart ID-card based wearable.</p>
                    <p>Instead of treating an ID card as just an identification card, we explored how it could become a connected device.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    title="CONNECTING THE HARDWARE"
                    id="product-innovation-03"
                  >
                    <p>Once the hardware idea started taking shape, the next question was:</p>
                    <p className="font-mono font-bold uppercase tracking-[0.04em] text-black">How does this device communicate with the system?</p>
                    <p>That led us into BLE scanning, IoT gateways, LoRa connectivity, MQTT and different ways of moving data from the physical environment to the backend.</p>
                    <ConceptStrip items={["BLE scanning", "IoT gateways", "LoRa connectivity", "MQTT"]} />
                    <p>This was where the product started becoming more than just a hardware device.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    title="BUILDING THE SOFTWARE AROUND IT"
                    id="product-innovation-04"
                    dark
                  >
                    <p>The hardware could generate data, but that data needed somewhere to go.</p>
                    <p>So we started building the software side around it — backend services, databases, dashboards, applications and the systems required to process the incoming data.</p>
                    <p>The idea gradually became:</p>
                    <FlowDiagram dark items={["HARDWARE", "CONNECTIVITY", "CLOUD", "DATA", "SOFTWARE", "USER"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    title="FROM ONE PRODUCT TO A CONNECTED SYSTEM"
                    id="product-innovation-05"
                  >
                    <p>As we kept working on it, we realised that the real opportunity was not just the ID card.</p>
                    <p>The same infrastructure could be used for student tracking, attendance, monitoring, alerts, geofencing, campus operations and other connected applications.</p>
                    <ConceptStrip items={["Student tracking", "Attendance", "Monitoring", "Alerts", "Geofencing", "Campus operations"]} />
                    <p>That is how the idea of a broader Smart Campus and Digital Infrastructure platform started taking shape.</p>
                    <p>We started thinking about the complete system instead of one individual device.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    title="BUILDING AND ITERATING"
                    id="product-innovation-06"
                    dark
                  >
                    <p>A lot of the work was experimentation.</p>
                    <p>We tested different hardware, communication methods, product designs and software flows.</p>
                    <NodeCards dark columns="sm:grid-cols-3" items={['Some ideas worked.', 'Some needed to be changed.', 'Some were dropped completely.']} />
                    <p>The product kept changing as we understood the problem better.</p>
                    <p>For us, product innovation became a cycle:</p>
                    <FlowDiagram dark items={["PROBLEM", "RESEARCH", "BUILD", "TEST", "LEARN", "ITERATE"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    title="WHAT WE WERE REALLY TRYING TO BUILD"
                    id="product-innovation-07"
                  >
                    <p>Over time, the vision became much clearer.</p>
                    <p>We wanted to build a layer that connects the physical world with the digital world.</p>
                    <FlowDiagram items={["Physical environments", "Connected Devices", "Data", "Cloud", "Software", "Intelligence", "Action"]} />
                    <p>That thinking eventually became the foundation behind the different products and systems we worked on at Beckkon.</p>
                  </CaseStudySection>
                </SectionColumn>
              </BodyGrid>
            </Gutter>
          </SectionShell>

          <DarkBand>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>What I learned</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[14ch]")}>
                    WHAT I <span className="text-lime-300">LEARNED</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 grid gap-8 md:mt-12 md:grid-cols-[0.9fr_1.1fr] md:gap-10 lg:gap-16">
                  <MonoLead>
                    The biggest thing I learned from building Beckkon was that product innovation does not start with technology.
                  </MonoLead>
                  <div className={cx(TYPE.body, "space-y-5", TEXT.body(true))}>
                    <p>It starts with a problem.</p>
                    <p>Technology comes later.</p>
                    <p>You keep exploring, building, breaking things, talking to people, testing ideas and changing the product until the pieces start making sense.</p>
                    <p>That process — from a rough problem to something that can actually work in the real world — is what I enjoy most about building products.</p>
                  </div>
                </Reveal>
                <BandFooter left="PRODUCT INNOVATION" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}