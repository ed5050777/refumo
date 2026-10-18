import { ArrowRight, Shield, BarChart4, Users, ThumbsUp, Briefcase, Handshake, Building2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import ServiceCard from "@/components/ServiceCard";
import ExpertiseCard from "@/components/ExpertiseCard";
import TransactionCard from "@/components/TransactionCard";

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative overflow-hidden pt-40 pb-24 md:pt-56 md:pb-36">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-refumo-coral/10 blur-3xl" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5">
              <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-refumo-coral">
                LUXEMBOURG — ALTERNATIVE CAPITAL GROUP FOR REAL ESTATE
              </p>
            </div>
            
            <h1 className="heading-lg mb-8">
              <span className="text-white">WELCOME TO </span>
              <span className="text-gradient">REFUMO</span><br />
              <span className="text-white">INVESTMENTS</span>
            </h1>

            <p className="text-lg md:text-xl font-sans text-gray-200 mb-6 leading-relaxed max-w-3xl mx-auto">
              We source, structure, and invest in real estate credit and special situations across Western Europe, focusing on the UK, Germany, and Spain.
            </p>
            
            <p className="text-base md:text-xl font-display text-gray-300 mb-4 italic leading-relaxed max-w-2xl mx-auto">
              "Markets shift. Logic evolves. Advantage belongs to those who adapt before it's obvious."
            </p>
            
            <p className="text-sm tracking-widest uppercase text-refumo-coral mb-12">— Refumo Insights</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#focus-criteria" className="btn-primary">
                Focus &amp; Investment Criteria
              </a>
              <Link to="/contact" className="btn-outline">
                Institutional Enquiries
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">About Refumo</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">WELCOME TO REFUMO INVESTMENTS</h2>
            <p className="text-refumo-coral font-medium mb-8">
              Alternative Capital Group for Real Estate | Real Estate Credit &amp; Special Situations
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refumo is a Luxembourg-based alternative capital group and real estate credit platform. The group is active across Western Europe—principally deploying capital into the UK, Germany, and Spain via Luxembourg investment and financing vehicles. The group sources, underwrites, and invests institutional capital in senior debt, whole-loan bridge facilities, and special situations. With over €3 billion in executed transactions and 100+ years of combined leadership experience, the partners deliver speed, certainty of execution, and robust risk-adjusted structures.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-5">
              As a privately held principal investment and origination group, Refumo aligns directly with its institutional co-investment partners. We originate opportunities, underwrite physical real estate collateral, and structure bespoke bridge and stretch-senior capital—actively monitoring loans, covenants, and exit plans throughout the transaction lifecycle.
            </p>
          </div>
          
          {/* Core Values */}
          <div>
            <h3 className="heading-md text-center text-refumo-darkblue mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <ValueCard 
                title="Integrity"
                description="We operate with the highest ethical standards in all our dealings, ensuring transparency and accountability."
                icon={<Shield size={36} />}
              />
              <ValueCard 
                title="Discretion"
                description="Confidentiality is the cornerstone of our institutional relationships, protecting sensitive transaction data with utmost care."
                icon={<Users size={36} />}
              />
              <ValueCard 
                title="Excellence"
                description="We maintain professionalism without compromise, striving for superior underwriting precision and execution speed."
                icon={<ThumbsUp size={36} />}
              />
              <ValueCard 
                title="Entrepreneurship"
                description="Our agile, principal-led mindset delivers creative structuring solutions for complex real estate credit situations."
                icon={<BarChart4 size={36} />}
              />
              <ValueCard 
                title="Partner Alignment"
                description="We invest alongside our institutional partners where we can understand, price, and manage risk, ensuring meaningful sponsor equity and alignment in every transaction."
                icon={<Handshake size={36} />}
              />
              <ValueCard 
                title="Execution Certainty"
                description="Rigorous upfront credit analysis and direct partner involvement ensure reliable, decisive closing for borrowers and co-investors."
                icon={<Briefcase size={36} />}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Focus On & Investment Criteria Section */}
      <section id="focus-criteria" className="section bg-refumo-lightgray scroll-mt-20 border-y border-gray-200/60">
        <span id="services" className="scroll-mt-20 block" aria-hidden="true" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">Investment Focus</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Our Investment Strategy &amp; Focus</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refumo sources, underwrites, and co-invests in bespoke real estate credit across residential, commercial, hospitality, and PBSA sectors in economically strong Western European markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <ServiceCard 
              title="Real Estate Credit Origination"
              description="Bespoke senior, whole-loan, stretch-senior, and B-note bridge financing (€5m–€50m per transaction) backed by enforceable real estate collateral and conservative leverage."
              icon={<Building2 size={32} />}
            />
            <ServiceCard 
              title="Underwriting & Structuring"
              description="12–36 month target terms with up to 75% LTV / 90% LTC. Robust legal structures, first- or second-ranking charges, share pledges, and clear refinance or sale exits."
              icon={<BarChart4 size={32} />}
            />
            <ServiceCard 
              title="Special Situations & Restructuring"
              description="Principal turnarounds, complex debt workouts, senior debt acquisitions, and recapitalisations of transitional or distressed real estate portfolios across the UK and DACH region."
              icon={<Briefcase size={32} />}
            />
            <ServiceCard 
              title="Active Oversight & Servicing"
              description="End-to-end covenant monitoring, security and collateral trusteeship, and active repayment or enforcement management throughout the investment lifecycle."
              icon={<Shield size={32} />}
            />
          </div>
          
          <div className="text-center">
            <Link to="/services" className="group inline-flex items-center min-h-12 px-2 text-refumo-coral hover:text-refumo-lightcoral font-medium">
              View Detailed Investment Criteria &amp; Asset Classes <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise & Key Metrics Section */}
      <section id="expertise" className="section bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* 3-Metric Highlight Row */}
          <div className="max-w-4xl mx-auto mb-16 bg-refumo-darkblue text-white rounded-2xl p-8 md:p-10 shadow-xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="pt-4 md:pt-0">
                <div className="text-4xl md:text-5xl font-extrabold text-refumo-coral mb-2">€3bn+</div>
                <p className="text-sm md:text-base text-gray-200 font-medium">Transactions Executed by Our Team</p>
              </div>
              <div className="pt-6 md:pt-0 md:px-4">
                <div className="text-4xl md:text-5xl font-extrabold text-refumo-coral mb-2">&gt;€1bn</div>
                <p className="text-sm md:text-base text-gray-200 font-medium">Real Estate Credit Underwritten</p>
              </div>
              <div className="pt-6 md:pt-0 md:pl-4">
                <div className="text-4xl md:text-5xl font-extrabold text-refumo-coral mb-2">100+ Years</div>
                <p className="text-sm md:text-base text-gray-200 font-medium">Combined Team Experience<br /><span className="text-xs text-gray-400 font-normal">(10+ Years Working Together)</span></p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">Institutional Track Record</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Our Expertise</h2>
            <p className="text-gray-700 text-lg">
              With over €3 billion in transactions and 100+ years of combined experience, 
              we assess opportunities by merit—not limits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ExpertiseCard 
              title="Acquisition & Bridge Finance"
              description="Fast, reliable execution for property acquisitions, bridge-to-sale, and development finance across the UK, Germany, and Spain—backed by rigorous technical and legal due diligence."
              icon={<Building2 size={32} />}
            />
            <ExpertiseCard 
              title="Institutional Co-Investment & JVs"
              description="Structuring whole-loan and B-note partnerships alongside institutional banks, alternative lenders, and family offices with tailored intercreditor and security frameworks."
              icon={<Handshake size={32} />}
            />
            <ExpertiseCard 
              title="Collateral & Covenant Management"
              description="Dedicated portfolio oversight focused on transparent cash flows, realistic business plans, and liquid real estate collateral with credible resale markets."
              icon={<Shield size={32} />}
            />
            <ExpertiseCard 
              title="Repositioning & Value Creation"
              description="Supporting experienced, well-capitalised sponsors through planning, change-of-use, ESG refurbishment, and lease-up to maximise asset value and mitigate downside risk."
              icon={<ThumbsUp size={32} />}
            />
          </div>
        </div>
      </section>

      {/* Selected Transactions Section */}
      <section id="transactions" className="section bg-refumo-lightgray scroll-mt-20 border-t border-gray-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">Institutional Track Record</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Selected Transactions</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A representative selection of real estate credit facilities, whole-loan bridge financings, senior debt acquisitions, and special situations structured, sourced, and led by our team and executed via dedicated securitisation vehicles across Western Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <TransactionCard 
              title="Bridge to Sell Financing"
              amount="€31m"
              location="Berlin, Germany"
              category="Senior Bridge"
              description="Our team structured and arranged a €31m senior financing facility, executed through a dedicated securitisation vehicle, to support the orderly sale of a high-value asset with a GDV of €150m. The facility was arranged over an 18-month term, providing liquidity and balance-sheet flexibility during the disposal phase."
              tags={["GDV: €150m", "18-Month Term", "Securitisation Vehicle"]}
            />

            <TransactionCard 
              title="Bond Issuance"
              amount="€50m"
              location="London, UK"
              category="Institutional Debt"
              description="Our team structured and led the €50m bond financing facility, executed through an institutional securitisation vehicle, for the acquisition of residential units in a newly built, income-generating asset purchased at a discount to market value, featuring strong ESG credentials and full regulatory compliance."
              tags={["Discount to Market", "ESG Credentials", "Securitisation Vehicle"]}
            />

            <TransactionCard 
              title="Special Situation Acquisition"
              amount="€70m"
              location="Berlin, Germany"
              category="Special Situations"
              description="Our team sourced and structured the financing package for a prime sponsor on the takeover of a special situation mixed-use redevelopment. Executed via a dedicated securitisation vehicle, our team led the structuring, debt workout, and security framework through to completion."
              tags={["Mixed-Use", "Redevelopment Takeover", "Securitisation Vehicle"]}
            />

            <TransactionCard 
              title="Senior Refinancing"
              amount="€11m"
              location="Düsseldorf, Germany"
              category="Structured Credit"
              description="Our team sourced, structured, and led a two-tranche refinancing facility, executed through a securitisation vehicle alongside an institutional co-lender, to refinance a €30m industrial site in Düsseldorf. The structure delivered tailored covenants and capital flexibility tied to asset value."
              tags={["Asset Value: €30m", "Two-Tranche Facility", "Institutional Co-Lending"]}
            />

            <TransactionCard 
              title="Special Situation Financing"
              amount="£80m"
              location="Nationwide, UK"
              category="Senior Debt Acquisition"
              description="Our team sourced, structured, and led the acquisition of senior debt secured against a nationwide UK ground rent portfolio with a par value of £200m. Executed through a securitisation vehicle backed by institutional capital, the multi-phase transaction was engineered to support portfolio growth and restructuring."
              tags={["Par Value: £200m", "Nationwide Portfolio", "Securitisation Vehicle"]}
            />

            <TransactionCard 
              title="Student Housing Financing"
              amount="€24m+"
              location="Berlin, Germany"
              category="Modular Residential"
              description="Our team structured and arranged the financing facility for a 311-unit modular residential development in Berlin-Spandau. The asset benefits from full planning consent, KfW 55 energy standards, projected annual rent of approx. €2.6m, and forward purchase visibility."
              tags={["311 Modular Units", "KfW 55 Standard", "Forward Purchase"]}
            />

            <TransactionCard 
              title="Industrial Bridge Financing"
              amount="€12m"
              location="Valencia, Spain"
              category="Industrial Bridge"
              description="Our team structured and arranged the bridge financing for the acquisition of a strategic self-use industrial facility in Valencia. Secured against approx. 50,000 sqm of built area on a 100,000 sqm site (building value approx. €18m), the facility supports specialised manufacturing, logistics, and warehousing operations."
              tags={["Building Value: €18m", "100,000 sqm Site", "Strategic Facility"]}
            />

            {/* Institutional Co-Investment & Origination Card */}
            <div className="bg-gradient-to-br from-refumo-darkblue via-refumo-darkblue to-slate-900 rounded-2xl p-6 lg:p-7 shadow-sm text-white flex flex-col justify-between border border-refumo-coral/30 hover:border-refumo-coral transition-all duration-300 md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/10 text-refumo-coral border border-white/15">
                    Direct Origination &amp; Syndication
                  </span>
                  <span className="inline-flex items-center text-xs font-medium text-gray-300">
                    UK · Germany · Spain
                  </span>
                </div>
                <div className="mb-3">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    €5m – €50m+
                  </div>
                  <h3 className="text-base font-bold text-refumo-coral mt-1">
                    Financing Inquiries &amp; Co-Investment Partnerships
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Refumo provides rapid indicative terms, underwriting expertise, and flexible capital structures across senior loans, stretch-senior, whole loans, and special situations. We structure facilities executed through dedicated securitisation vehicles alongside banks, institutional debt funds, and family offices.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 size={16} className="text-refumo-coral flex-shrink-0" />
                  <span>Execution certainty with rapid initial credit decisions</span>
                </div>
                <Link
                  to="/contact"
                  className="btn-primary w-full sm:w-auto text-center !py-2.5 !px-5 text-sm whitespace-nowrap"
                >
                  Discuss an Opportunity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Partners Section (Matching Presentation Slide 9) */}
      <section id="leadership" className="section bg-white scroll-mt-20 border-t border-gray-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">Senior Leadership</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Leadership &amp; Partners</h2>
            <p className="text-gray-700 text-lg">
              A seasoned team with complementary track records in European real estate investment banking, debt underwriting, credit structuring, and institutional finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Bakary Sylla */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/team/bakary-sylla.png" 
                    alt="Bakary Sylla" 
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-refumo-darkblue mb-1">Bakary Sylla</h3>
                <p className="text-refumo-coral font-medium text-sm mb-4">Managing Partner</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bakary manages the group&apos;s financial operations, compliance, and structuring activities, leading institutional-grade reporting and governance across Refumo and affiliated securitisation vehicles. He previously held senior roles in fund administration, compliance, and client relations at ATDOMCO, Praxis, Citi, Citco, and ABN AMRO. With over 25 years’ experience, his career spans finance, legal frameworks, and entrepreneurial ventures.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 font-medium">
                <CheckCircle2 size={16} className="text-refumo-coral mr-1.5" />
                Senior Leadership Partner
              </div>
            </div>

            {/* Georg Bucher */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/team/georg-bucher.png" 
                    alt="Georg Bucher" 
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-refumo-darkblue mb-1">Georg Bucher</h3>
                <p className="text-refumo-coral font-medium text-sm mb-4">Investment &amp; Structuring</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  15 years in real estate investment banking at UBS, Deutsche Bank, and Berenberg with over €15bn of transactions. Former executive board director of an LSE-listed property company overseeing a 16-acre, €1.7bn portfolio.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 font-medium">
                <CheckCircle2 size={16} className="text-refumo-coral mr-1.5" />
                Senior Leadership Partner
              </div>
            </div>

            {/* Igor Antos */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/team/igor-antos.png" 
                    alt="Igor Antos" 
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-refumo-darkblue mb-1">Igor Antos</h3>
                <p className="text-refumo-coral font-medium text-sm mb-4">Credit &amp; Underwriting</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over €1bn of real estate credit transactions underwritten, primarily in Germany and the UK. Extensive experience across residential and commercial assets, institutional capital partnerships exceeding €2bn, and oversight of 50+ portfolio companies.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 font-medium">
                <CheckCircle2 size={16} className="text-refumo-coral mr-1.5" />
                Senior Leadership Partner
              </div>
            </div>

            {/* Alon Shamir */}
            <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-200/70 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
                  <img 
                    src="/team/alon-shamir.png" 
                    alt="Alon Shamir" 
                    className="w-full h-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-refumo-darkblue mb-1">Alon Shamir</h3>
                <p className="text-refumo-coral font-medium text-sm mb-4">Finance &amp; Operations</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CPA with more than 20 years of experience across European public and private real estate markets. Specialist in financial management, M&amp;A, investment operations, and operational strategy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-500 font-medium">
                <CheckCircle2 size={16} className="text-refumo-coral mr-1.5" />
                Senior Leadership Partner
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="section bg-refumo-darkblue text-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Institutional &amp; Financing Enquiries</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Connect with our origination and structuring team to discuss real estate credit facilities, whole-loan structures, and co-investment opportunities across the UK and Western Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Connect With Our Team
            </Link>
            <Link to="/disclaimer" className="btn-outline">
              Regulatory Information
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
