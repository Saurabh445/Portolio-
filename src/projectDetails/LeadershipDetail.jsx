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

const TeamStats = ({ dark = false }) => (
  <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10">
    {[
      ["15+", "CORE TEAM", "Software / Hardware / Design"],
      ["50+", "INTERNS", "Different areas / shared execution"],
    ].map(([number, label, detail]) => (
      <div
        key={label}
        className={cx(
          "relative overflow-hidden border p-5 md:p-6",
          dark ? "border-white/15 bg-white/[0.05]" : "border-black/10 bg-white/70",
        )}
      >
        <div className={cx("text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[0.85] tracking-[-0.06em]", TEXT.accent(dark))}>
          {number}
        </div>
        <div className={cx("mt-4 font-mono text-[0.875rem] font-bold uppercase tracking-[0.16em]", dark ? "text-white/85" : "text-black/80")}>
          {label}
        </div>
        <div className={cx("mt-2 font-mono text-[0.8125rem] uppercase leading-[1.5] tracking-[0.12em]", dark ? "text-white/55" : "text-black/55")}>
          {detail}
        </div>
        <span className={cx("absolute right-4 top-4 h-2 w-2 rounded-full", dark ? "bg-lime-300" : "bg-lime-500")} />
      </div>
    ))}
  </div>
);

const TeamNetwork = ({ dark = false }) => (
  <div
    className={cx(
      "relative mt-7 overflow-hidden border p-4 md:mt-8 md:p-6",
      dark ? "border-white/15 bg-white/[0.03]" : "border-black/10 bg-white/60",
    )}
  >
    <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-9rem)] w-px -translate-x-1/2 bg-lime-500/25 sm:block" />
    <div className="pointer-events-none absolute left-1/4 right-1/4 top-1/2 hidden h-px bg-lime-500/25 sm:block" />
    <div className="relative grid gap-3 sm:grid-cols-2">
      {["HARDWARE", "SOFTWARE", "DESIGN", "BUSINESS"].map((item, index) => (
        <div
          key={item}
          className={cx(
            "relative flex min-h-20 items-end border p-4",
            TYPE.node,
            dark ? "border-white/15 bg-[#0A0A0A] text-white/80" : "border-black/10 bg-[#FAF9F6] text-black/75",
          )}
        >
          <span className={cx("absolute right-3 top-3 text-[0.8125rem]", TEXT.accent(dark))}>
            0{index + 1}
          </span>
          {item}
        </div>
      ))}
    </div>
    <div className="relative mx-auto mt-6 flex max-w-xs items-center justify-center">
      <span className="absolute left-0 right-0 top-1/2 h-px bg-lime-500/35" />
      <div
        className={cx(
          "relative z-10 border px-7 py-4 font-mono text-[0.875rem] font-bold uppercase tracking-[0.2em]",
          dark ? "border-lime-300/50 bg-[#0A0A0A] text-lime-300" : "border-lime-500/50 bg-[#FAF9F6] text-lime-600",
        )}
      >
        PRODUCT
      </div>
    </div>
  </div>
);

export default function LeadershipDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode} dataAttr="data-leadership-detail">
      <TopBar section="Leadership" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll dataAttr="data-leadership-scroll">
        <main>
          <HeroSection kicker="Beckkon Systems / Leadership Building">
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>LEADERSHIP</h1>
            <Outline as="p" className="mt-3 block md:mt-4">
              BUILDING PEOPLE, TEAMS AND EXECUTION
            </Outline>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid as="h3" heading="HOW THE TEAM STARTED TAKING SHAPE">
                <p>When I started building Beckkon, I quickly realised that building a product is not only about technology.</p>
                <p>You also need people who can take ownership, work together and keep moving when things are still uncertain.</p>
                <p>Over time, I worked on building a core team, coordinating interns and bringing people from different areas together to work towards the same product.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 md:mt-12">
                <TeamStats />
                <ConceptStrip items={["Ownership", "Communication", "Coordination", "Execution", "Team building"]} />
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="Leadership map"
                  idPrefix="leadership-research"
                  scrollAttr="data-leadership-scroll"
                  items={[
                    ["01", "Core team"],
                    ["02", "Coordination"],
                    ["03", "Ownership"],
                    ["04", "Teams"],
                    ["05", "Execution"],
                    ["06", "Uncertainty"],
                    ["07", "Balance"],
                    ["08", "Learned"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    note="Leadership / field notes"
                    title="BUILDING THE CORE TEAM"
                    id="leadership-research-01"
                  >
                    <p>At Beckkon, we built a 15+ member core team across Software, Hardware and Design.</p>
                    <p>Different people were working on different parts of the product, but the bigger challenge was making sure everyone understood what we were trying to build and how their work connected to the larger system.</p>
                    <TeamStats />
                    <ConceptStrip items={["Software", "Hardware", "Design", "Core team", "Product system"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    note="Leadership / field notes"
                    title="COORDINATING PEOPLE"
                    id="leadership-research-02"
                    dark
                  >
                    <p>Alongside the core team, I coordinated 50+ interns across different areas.</p>
                    <p>With more people involved, communication and coordination became a major part of the work.</p>
                    <p>The focus was not simply assigning tasks.</p>
                    <p>It was about giving people enough clarity to understand:</p>
                    <NodeCards
                      dark
                      items={[
                        "What needs to be done?",
                        "Why does it matter?",
                        "What is my responsibility?",
                        "What needs to happen next?",
                      ]}
                    />
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    note="Leadership / field notes"
                    title="GIVING OWNERSHIP"
                    id="leadership-research-03"
                  >
                    <p>One thing I learned early was that people work better when they have ownership.</p>
                    <p>Instead of trying to control every small decision, the goal was to give people responsibility for their part of the work and let them contribute to the execution.</p>
                    <p>That also meant being available when something was unclear, blocked or needed to be changed.</p>
                    <ConceptStrip items={["Ownership", "Responsibility", "Clarity", "Execution", "Feedback"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    note="Leadership / field notes"
                    title="CONNECTING DIFFERENT TEAMS"
                    id="leadership-research-04"
                    dark
                  >
                    <p>Building Beckkon required different areas to work together.</p>
                    <TeamNetwork dark />
                    <p>A hardware decision could affect software.</p>
                    <p>A software requirement could change the product.</p>
                    <p>A customer requirement could change what we needed to build.</p>
                    <p>So leadership also meant connecting these different parts instead of treating them as separate teams.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    note="Leadership / field notes"
                    title="FROM IDEAS TO EXECUTION"
                    id="leadership-research-05"
                  >
                    <p>Ideas are easy to discuss.</p>
                    <p>Execution is where things become real.</p>
                    <p>A lot of my role involved taking an idea, breaking it down into what actually needed to happen, getting the right people involved and keeping the work moving.</p>
                    <p>The process often looked like:</p>
                    <FlowDiagram items={["IDEA", "CLARITY", "OWNERSHIP", "EXECUTION", "FEEDBACK", "IMPROVEMENT"]} />
                    <ConceptStrip items={["Clarity", "Ownership", "Execution", "Feedback", "Improvement"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    note="Leadership / field notes"
                    title="LEADING THROUGH UNCERTAINTY"
                    id="leadership-research-06"
                    dark
                  >
                    <p>Building a startup means that not everything is defined from the beginning.</p>
                    <NodeCards
                      dark
                      items={[
                        "Products change.",
                        "Priorities change.",
                        "New information comes in.",
                        "Some ideas work and some do not.",
                      ]}
                    />
                    <p>Leadership, for me, has been about staying involved in the problem while helping the team move forward even when the path is still being figured out.</p>
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    note="Leadership / field notes"
                    title="BALANCING PRODUCT & PEOPLE"
                    id="leadership-research-07"
                  >
                    <p>As a founder, I have had to work across multiple areas at the same time — product development, technology, business strategy, partnerships, financial planning and team building.</p>
                    <p>That meant constantly switching between the bigger picture and the small details that were needed to keep execution moving.</p>
                    <ConceptStrip items={["Product development", "Technology", "Business strategy", "Partnerships", "Financial planning", "Team building"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="08"
                    note="Leadership / field notes"
                    title="WHAT I LEARNED"
                    id="leadership-research-08"
                    dark
                  >
                    <p>The biggest lesson I have learned is that leadership is not about having all the answers.</p>
                    <p>It is about creating clarity, taking responsibility and helping people move towards the same goal.</p>
                    <p>A good idea can start with one person.</p>
                    <p>But turning that idea into something real requires a team.</p>
                    <div className="mt-7 border border-white/15 bg-white/[0.05] p-5 md:mt-8 md:p-7">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-[0.875rem] font-bold uppercase leading-[1.5] tracking-[0.14em] text-lime-300/85 md:text-[0.875rem]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                        One idea / many people / one direction
                      </div>
                    </div>
                  </CaseStudySection>
                </SectionColumn>
              </BodyGrid>
            </Gutter>
          </SectionShell>

          <DarkBand>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>My leadership approach</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[16ch]")}>
                    MY LEADERSHIP <span className="text-lime-300">APPROACH</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <FlowDiagram dark items={["CLARITY", "OWNERSHIP", "COMMUNICATION", "EXECUTION", "FEEDBACK", "IMPROVEMENT"]} />
                </Reveal>
                <Reveal delay={0.16} className="mt-10 md:mt-12">
                  <TeamNetwork dark />
                </Reveal>
                <BandFooter left="LEADERSHIP BUILDING" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}
