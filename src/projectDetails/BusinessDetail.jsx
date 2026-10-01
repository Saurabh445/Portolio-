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
  NodeRows,
  Panel,
  Reveal,
  SectionColumn,
  SectionShell,
  TEXT,
  TopBar,
  TYPE,
  cx,
} from "./caseStudy/kit";

const MarketFrame = ({ dark = false }) => (
  <Panel dark={dark} label="Opportunity map" meta="Market signal">
    <div className="mt-5 grid gap-3 sm:grid-cols-2">
      {["PROBLEM", "MARKET", "CUSTOMER", "VALUE"].map((item, index) => (
        <div
          key={item}
          className={cx(
            "relative flex min-h-24 items-end border p-4 sm:min-h-28",
            TYPE.node,
            dark ? "border-white/15 text-white/80" : "border-black/10 text-black/75",
          )}
        >
          <span className={cx("absolute right-3 top-3 text-[0.6875rem]", TEXT.accent(dark))}>
            0{index + 1}
          </span>
          {item}
        </div>
      ))}
    </div>
    <div className="mt-5 flex items-center justify-center gap-2" aria-hidden="true">
      <span className="h-px flex-1 bg-lime-500/35" />
      <span className="h-2 w-2 rounded-full bg-lime-500" />
      <span className="h-px w-16 bg-lime-500/35" />
      <span className="h-3 w-3 rounded-full border border-lime-500/60" />
      <span className="h-px flex-1 bg-lime-500/35" />
    </div>
  </Panel>
);

const LearnedItems = [
  "Building Beckkon taught me that business is not separate from product.",
  "The market influences the product.",
  "The customer influences the product.",
  "The economics influence the product.",
  "And the product ultimately has to create enough value for someone to choose it.",
  "For me, business became about connecting all of these pieces.",
];

export default function BusinessDetail({ onClose, mode }) {
  const closeLabel = mode === "modal" ? "Close" : "Back to Home";

  return (
    <CaseStudyRoot mode={mode} dataAttr="data-business-detail">
      <TopBar section="Business" closeLabel={closeLabel} onClose={onClose} />

      <CaseStudyScroll dataAttr="data-business-scroll">
        <main>
          <HeroSection
            kicker="Beckkon Systems / Business Building"
            lead="Exploring markets, opportunities, partnerships, strategy and business growth."
          >
            <h1 className={cx(TYPE.display, "mt-7 md:mt-9")}>BUSINESS</h1>
          </HeroSection>

          <SectionShell>
            <Gutter className="pb-14 sm:pb-16 md:pb-20">
              <IntroGrid heading="HOW THE BUSINESS SIDE EVOLVED">
                <p>When we started Beckkon, building the product was only one part of the problem.</p>
                <p>We also had to figure out whether the problem was actually worth solving, who would pay for it, how the product should be positioned and how we could take it into the market.</p>
                <p>That became a completely different side of building the company for me.</p>
              </IntroGrid>

              <Reveal delay={0.22} className="mt-10 md:mt-12">
                <ConceptStrip items={["Market Research", "Customer Discovery", "Opportunity", "Pricing", "Unit Economics", "Partnerships", "Financial Planning", "Business Strategy", "Growth"]} />
                <MarketFrame />
              </Reveal>

              <BodyGrid className="mt-12 md:mt-16">
                <CaseStudyIndex
                  title="Business map"
                  idPrefix="business-research"
                  scrollAttr="data-business-scroll"
                  items={[
                    ["01", "Market"],
                    ["02", "Customer"],
                    ["03", "Opportunity"],
                    ["04", "Model"],
                    ["05", "Partnerships"],
                    ["06", "Financials"],
                    ["07", "Market"],
                    ["08", "Execution"],
                  ]}
                />

                <SectionColumn>
                  <CaseStudySection
                    number="01"
                    note="Business building / field notes"
                    title="UNDERSTANDING THE MARKET"
                    id="business-research-01"
                  >
                    <p>We started by trying to understand the market before deciding how big the opportunity actually was.</p>
                    <p>I spent time looking at existing solutions, competitors, customer problems, pricing models and where current products were falling short.</p>
                    <p>The objective was simple:</p>
                    <NodeCards
                      items={[
                        "WHO HAS THE PROBLEM?",
                        "HOW BIG IS THE PROBLEM?",
                        "WHAT ARE THEY USING TODAY?",
                        "AND WOULD THEY PAY FOR A BETTER SOLUTION?",
                      ]}
                    />
                    <FlowDiagram items={["PROBLEM", "MARKET", "CUSTOMER", "VALUE", "BUSINESS MODEL"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="02"
                    note="Business building / field notes"
                    title="CUSTOMER DISCOVERY"
                    id="business-research-02"
                    dark
                  >
                    <p>A product can look great internally and still not solve something people care about.</p>
                    <p>So customer discovery became an important part of the process.</p>
                    <p>We started speaking to potential users and organizations, understanding their current workflows and trying to identify what they actually needed rather than assuming what they needed.</p>
                    <p>These conversations helped us change both the product and the way we positioned it.</p>
                    <ConceptStrip dark items={["Customer Discovery", "Potential users", "Organizations", "Workflows", "Positioning"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="03"
                    note="Business building / field notes"
                    title="FINDING THE RIGHT OPPORTUNITY"
                    id="business-research-03"
                  >
                    <p>As we explored different use cases, we started looking at where our technology could create the most value.</p>
                    <p>Schools and campuses became an important starting point because they had a combination of physical infrastructure, people, devices, data and operational problems.</p>
                    <p>This helped us move from a broad technology idea toward a more focused market opportunity.</p>
                    <MarketFrame />
                    <ConceptStrip items={["Opportunity", "Schools", "Campuses", "Physical infrastructure", "People", "Devices", "Data"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="04"
                    note="Business building / field notes"
                    title="BUILDING THE BUSINESS MODEL"
                    id="business-research-04"
                    dark
                  >
                    <p>Once the problem and market started becoming clearer, we had to think about the business behind the product.</p>
                    <p>We explored:</p>
                    <FlowDiagram dark items={["PRODUCT PRICING", "HARDWARE COST", "PLATFORM SUBSCRIPTION", "DEPLOYMENT COST", "CUSTOMER VALUE", "UNIT ECONOMICS"]} />
                    <p>The challenge was finding a model where the product could be useful for the customer and sustainable for the business.</p>
                    <ConceptStrip dark items={["Pricing", "Hardware cost", "Platform subscription", "Deployment cost", "Customer value", "Unit Economics"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="05"
                    note="Business building / field notes"
                    title="PARTNERSHIPS & OUTREACH"
                    id="business-research-05"
                  >
                    <p>Building the product also meant finding the right people and organizations to work with.</p>
                    <p>I worked on business outreach, conversations with potential customers, partnerships and connecting with people who could help us validate or deploy the product.</p>
                    <p>A lot of business development was simply about starting conversations and understanding where there could be a genuine fit.</p>
                    <FlowDiagram items={["MARKET", "OUTREACH", "PARTNERSHIPS", "VALIDATION", "GROWTH"]} />
                    <ConceptStrip items={["Partnerships", "Outreach", "Potential customers", "Validation", "Growth"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="06"
                    note="Business building / field notes"
                    title="FINANCIAL THINKING"
                    id="business-research-06"
                    dark
                  >
                    <p>I also started getting deeper into the financial side of the company.</p>
                    <p>From understanding hardware costs and software expenses to thinking about pricing, deployment costs, margins and funding requirements.</p>
                    <p>This changed the way I looked at product decisions.</p>
                    <NodeRows
                      dark
                      columns="sm:grid-cols-2"
                      items={[
                        "Hardware costs",
                        "Software expenses",
                        "Pricing",
                        "Deployment costs",
                        "Margins",
                        "Funding requirements",
                      ]}
                    />
                    <p>A product cannot only be technically possible.</p>
                    <p>It also has to make business sense.</p>
                    <ConceptStrip dark items={["Financial Planning", "Pricing", "Margins", "Business Strategy"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="07"
                    note="Business building / field notes"
                    title="FROM IDEA TO MARKET"
                    id="business-research-07"
                  >
                    <p>One of the biggest things I learned was that building something and selling something are two different challenges.</p>
                    <p>The product needs to work.</p>
                    <p>But the business also needs:</p>
                    <FlowDiagram items={["A CLEAR PROBLEM", "A CLEAR CUSTOMER", "A CLEAR VALUE PROPOSITION", "A WORKABLE BUSINESS MODEL", "A WAY TO REACH THE MARKET"]} />
                    <ConceptStrip items={["Problem", "Customer", "Value proposition", "Business model", "Market"]} />
                  </CaseStudySection>

                  <CaseStudySection
                    number="08"
                    note="Business building / field notes"
                    title="LEARNING THROUGH EXECUTION"
                    id="business-research-08"
                    dark
                  >
                    <p>A lot of the business side was experimentation as well.</p>
                    <NodeCards
                      dark
                      items={[
                        "Some conversations led somewhere.",
                        "Some did not.",
                        "Some assumptions were right.",
                        "Some were completely wrong.",
                      ]}
                    />
                    <p>We kept learning from customer conversations, market research, outreach and actual responses.</p>
                    <p>That feedback continuously influenced our product and business strategy.</p>
                    <ConceptStrip dark items={["Execution", "Customer conversations", "Market research", "Outreach", "Feedback", "Business Strategy"]} />
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
                <Reveal delay={0.1} className="mt-10 grid gap-3 md:mt-12 md:grid-cols-2">
                  {LearnedItems.map((line, index) => (
                    <div
                      key={line}
                      className={cx(
                        "border border-white/15 bg-white/[0.05] p-5 md:p-6",
                        index === 0 || index === 5 ? "md:col-span-2" : "",
                      )}
                    >
                      <span className="mb-6 block font-mono text-[0.6875rem] font-bold tracking-[0.16em] text-lime-300 md:mb-8">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className={cx(TYPE.body, TEXT.body(true))}>{line}</p>
                    </div>
                  ))}
                </Reveal>
              </Gutter>
            </SectionShell>
          </DarkBand>

          <DarkBand bordered>
            <SectionShell>
              <Gutter>
                <Reveal>
                  <Kicker dark>My business approach</Kicker>
                  <h2 className={cx(TYPE.displayXL, "mt-5 max-w-[16ch]")}>
                    MY BUSINESS <span className="text-lime-300">APPROACH</span>
                  </h2>
                </Reveal>
                <Reveal delay={0.1} className="mt-10 md:mt-12">
                  <FlowDiagram dark items={["PROBLEM", "MARKET", "CUSTOMER", "VALUE", "BUSINESS MODEL", "PARTNERSHIPS", "EXECUTION", "GROWTH"]} />
                </Reveal>
                <Reveal delay={0.16} className="mt-10 border-t border-white/15 pt-8 md:mt-12 md:pt-10">
                  <p className={cx(TYPE.body, "max-w-[62ch]", TEXT.body(true))}>
                    I enjoy the process of taking an idea, understanding whether there is a real opportunity behind it, and then figuring out how to turn that opportunity into something that can actually work as a business.
                  </p>
                </Reveal>
                <BandFooter left="BUSINESS BUILDING" />
              </Gutter>
            </SectionShell>
          </DarkBand>
        </main>
      </CaseStudyScroll>
    </CaseStudyRoot>
  );
}