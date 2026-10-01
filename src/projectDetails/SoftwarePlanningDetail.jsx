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
  NodeRows,
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

const WireframePanel = ({ dark = false }) => (
  <Panel dark={dark} label="Dashboard" meta="Real-time data">
    <div className="mt-5 grid gap-4 md:grid-cols-[130px_minmax(0,1fr)]">
      <div
        className={cx(
          "hidden border-r pr-4 leading-7 md:block",
          TYPE.micro,
          TEXT.rule(dark),
          dark ? "text-white/45" : "text-black/45",
        )}
      >
        <div className={TEXT.accent(dark)}>Overview</div>
        <div>Users</div>
        <div>Attendance</div>
        <div>Alerts</div>
      </div>
      <div>
        <NodeCards
          dark={dark}
          items={[
            "WHO IS WHERE?",
            "WHAT IS HAPPENING?",
            "WHAT NEEDS ATTENTION?",
            "WHAT HAPPENED EARLIER?",
          ]}
        />
        <div className={cx("mt-3 h-16 border p-3", TEXT.rule(dark))}>
          <div className={cx("h-1.5 w-2/5", dark ? "bg-lime-300/60" : "bg-lime-500/60")} />
          <div className={cx("mt-3 h-1.5 w-4/5", dark ? "bg-white/15" : "bg-black/10")} />
          <div className={cx("mt-2 h-1.5 w-3/5", dark ? "bg-white/15" : "bg-black/10")} />
        </div>
      </div>
    </div>
  </Panel>
);

const RoleMap = ({ dark = false }) => (
  <div className="mt-7 grid gap-2">
    {[
      ["ADMIN", "OPERATIONS & ANALYTICS"],
      ["TEACHER", "STUDENTS & ATTENDANCE"],
      ["PARENT", "CHILD & NOTIFICATIONS"],
      ["MANAGEMENT", "OVERVIEW & INSIGHTS"],
    ].map(([role, outcome], index) => (
      <div
        key={role}
        className={cx(
          "grid gap-2 border p-4 sm:grid-cols-[150px_32px_minmax(0,1fr)_32px] sm:items-center",
          TYPE.node,
          dark ? "border-white/15 bg-white/[0.05] text-white/80" : "border-black/10 bg-white/70 text-black/75",
        )}
      >
        <span className={TEXT.accent(dark)}>{role}</span>
        <span className={cx("hidden text-center text-lg font-normal sm:block", TEXT.accent(dark))} aria-hidden="true">→</span>
        <span className="flex min-w-0 items-center gap-3 sm:block">
          <span className={cx("sm:hidden", TEXT.accent(dark))} aria-hidden="true">→</span>
          {outcome}
        </span>
        <span className={cx("hidden text-right text-[0.6875rem] font-normal sm:block", dark ? "text-white/35" : "text-black/35")}>
          0{index + 1}
        </span>
      </div>
    ))}
  </div>
);

export default function SoftwarePlanningDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode} dataAttr="data-software-planning-detail">
      <TopBar section="Software Planning" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll dataAttr="data-software-planning-scroll">
        <main>
          <HeroSection
            kicker="Beckkon Systems / Software Planning"
            lead="Planning digital products, software systems, platforms and user-focused solutions."
          >
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>SOFTWARE</h1>
            <Outline as="p" className="mt-3 block md:mt-4">
              SOFTWARE PLANNING
            </Outline>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid heading="HOW SOFTWARE BECAME THE PRODUCT LAYER">
                <p>When the hardware and IoT side of Beckkon started taking shape, another question became important:</p>
                <p>How do we turn all of this into something people can actually use?</p>
                <p>That is where software planning became a major part of the product.</p>
                <p>I started thinking about the software not just as an application, but as the layer that connects the technology with the actual user.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 md:mt-12">
                <ConceptStrip items={["User Experience", "Product Architecture", "Backend", "Database", "APIs", "Real-Time Data", "Dashboards", "Analytics", "Cloud"]} />
                <WireframePanel />
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="Product map"
                  idPrefix="software-planning"
                  scrollAttr="data-software-planning-scroll"
                  items={[
                    ["01", "User"],
                    ["02", "Product"],
                    ["03", "Systems"],
                    ["04", "Experience"],
                    ["05", "Use cases"],
                    ["06", "Backend"],
                    ["07", "Interface"],
                    ["08", "Roles"],
                    ["09", "Iterate"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    note="Software planning / field notes"
                    title="STARTING FROM THE USER"
                    id="software-planning-01"
                  >
                    <p>Before thinking about screens or features, I tried to understand who would actually use the product.</p>
                    <p>For a school or organization, there can be different users with completely different needs.</p>
                    <RoleMap />
                    <p>Each person needs different information and different actions.</p>
                    <p>So the software had to be planned around the user, not around the technology.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    note="Software planning / field notes"
                    title="PLANNING THE PRODUCT"
                    id="software-planning-02"
                    dark
                  >
                    <p>Once the users and problems were clearer, I started breaking the product down into smaller systems.</p>
                    <NodeCards
                      dark
                      items={[
                        "What should the user see?",
                        "What should happen in the backend?",
                        "What data needs to be stored?",
                        "What should happen in real time?",
                        "Which features are actually necessary?",
                      ]}
                    />
                    <p>This helped turn a large idea into smaller, buildable parts.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    note="Software planning / field notes"
                    title="THINKING IN SYSTEMS"
                    id="software-planning-03"
                  >
                    <p>A product like this cannot work as one isolated application.</p>
                    <p>There are multiple layers working together:</p>
                    <FlowDiagram items={["USER", "APPLICATION", "BACKEND", "DATABASE", "IoT / DEVICE DATA", "CLOUD INFRASTRUCTURE"]} />
                    <p>Planning these connections was an important part of understanding how the complete product should work.</p>
                    <ConceptStrip items={["Product Architecture", "Backend", "Database", "IoT / Device data", "Cloud"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    note="Software planning / field notes"
                    title="DESIGNING THE USER EXPERIENCE"
                    id="software-planning-04"
                    dark
                  >
                    <p>The goal was to make complex information simple for the person using it.</p>
                    <p>For example, a school administrator should not need to understand BLE, MQTT, databases or IoT gateways.</p>
                    <p>They should simply be able to see:</p>
                    <WireframePanel dark />
                    <p>The complexity should stay inside the system.</p>
                    <p>The user experience should stay simple.</p>
                    <ConceptStrip dark items={["User Experience", "Simple actions", "Complex system"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    note="Software planning / field notes"
                    title="BUILDING THE PLATFORM AROUND REAL USE CASES"
                    id="software-planning-05"
                  >
                    <p>The software planning evolved around different real-world requirements.</p>
                    <NodeCards
                      columns="sm:grid-cols-2 lg:grid-cols-3"
                      items={[
                        "Student tracking",
                        "Attendance",
                        "Live monitoring",
                        "Alerts",
                        "Geofencing",
                        "Notices",
                        "Timetable",
                        "Parent-teacher communication",
                        "Analytics",
                        "Operational dashboards",
                      ]}
                    />
                    <p>Instead of treating these as completely separate applications, we explored how they could work together through one connected platform.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    note="Software planning / field notes"
                    title="PLANNING THE BACKEND"
                    id="software-planning-06"
                    dark
                  >
                    <p>The visible application is only one part of the product.</p>
                    <p>Behind it, we needed systems for:</p>
                    <NodeRows
                      dark
                      items={[
                        "Data ingestion",
                        "APIs",
                        "Authentication",
                        "Databases",
                        "Real-time communication",
                        "Data processing",
                        "Notifications",
                        "Analytics",
                        "IoT data",
                      ]}
                    />
                    <p>This meant thinking about how information moves through the system before designing the final interface.</p>
                    <ConceptStrip dark items={["Backend", "APIs", "Database", "Real-Time Data", "Analytics", "Cloud"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    note="Software planning / field notes"
                    title="FROM DATA TO INTERFACE"
                    id="software-planning-07"
                  >
                    <p>One of the things I found interesting was deciding how raw data should become something useful for the user.</p>
                    <p>For example:</p>
                    <FlowDiagram items={["DEVICE DATA", "PROCESSING", "LOCATION / EVENT", "DATABASE", "ANALYTICS", "DASHBOARD", "USER ACTION"]} />
                    <p>The software becomes the layer that makes all of this understandable.</p>
                    <ConceptStrip items={["Data", "Processing", "Event", "Database", "Analytics", "Dashboard", "User action"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="08"
                    note="Software planning / field notes"
                    title="BUILDING FOR DIFFERENT USERS"
                    id="software-planning-08"
                    dark
                  >
                    <p>The same underlying system can serve different people in different ways.</p>
                    <RoleMap dark />
                    <p>Thinking this way helped us plan the platform as a system rather than a single application.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="09"
                    note="Software planning / field notes"
                    title="ITERATING THE PRODUCT"
                    id="software-planning-09"
                  >
                    <p>The first version of a software product is rarely the final version.</p>
                    <NodeCards
                      items={[
                        "Features change.",
                        "Flows change.",
                        "Users behave differently than expected.",
                        "Some things turn out to be unnecessary.",
                      ]}
                    />
                    <p>So the planning process remained flexible.</p>
                    <FlowDiagram items={["PLAN", "DESIGN", "BUILD", "TEST", "GET FEEDBACK", "IMPROVE"]} />
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
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <NodeCards
                    dark
                    columns="sm:grid-cols-3"
                    className="[&>*]:min-h-44 md:[&>*]:min-h-52"
                    items={[
                      "Software planning taught me that building a product is not about deciding every feature beforehand.",
                      "It is about understanding the problem well enough to know what needs to be built first.",
                      "Good software should hide the complexity underneath and give the user a simple way to get something done.",
                    ]}
                  />
                </Reveal>
              </Gutter>
            </SectionShell>
          </DarkBand>

          <DarkBand bordered>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>My software approach</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[16ch]")}>
                    MY SOFTWARE <span className="text-lime-300">APPROACH</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <FlowDiagram dark items={["PROBLEM", "USER", "PRODUCT", "SYSTEM", "EXPERIENCE", "BUILD", "FEEDBACK", "ITERATE"]} />
                </Reveal>
                <Reveal delay={0.16} className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:mt-12 md:gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                  <MonoLead>
                    For me, software planning is about connecting the business problem, the technology behind it and the person who will actually use it.
                  </MonoLead>
                  <WireframePanel dark />
                </Reveal>
                <BandFooter left="SOFTWARE PLANNING" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}