import { Building, Users, Shield, BarChart, LineChart, Search, Layers } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-refumo-coral font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">
              Track Record &amp; Capability
            </span>
            <h1 className="heading-lg mb-6">Our Expertise</h1>
            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6">
              With over €3 billion in transactions and 100+ years of combined experience,
              our team brings institutional underwriting rigor and agile execution to European real estate credit.
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Expertise */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="heading-md mb-6">Core Capability Areas</h2>
            <p className="text-gray-700">
              Our comprehensive expertise enables us to source, structure, and actively manage real estate credit across Europe's primary real estate markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Acquisition & Bridge Finance */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="icon-badge">
                  <Building size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Acquisition &amp; Bridge Finance</h3>
                <p className="text-gray-600 mb-4">
                  Fast, reliable execution for property acquisitions, bridge-to-sale, and development finance across London, Germany, and Spain—backed by rigorous technical and legal due diligence.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Off-market origination and direct sponsor underwriting
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Bespoke bridge and whole-loan facilities (€5m–€50m)
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Rapid closing capabilities on verified real estate collateral
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Institutional Co-Investment & JVs */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="icon-badge">
                  <Users size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Institutional Co-Investment &amp; JVs</h3>
                <p className="text-gray-600 mb-4">
                  Structuring whole-loan and B-note partnerships alongside institutional banks, alternative lenders, and family offices with tailored intercreditor and security frameworks.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    B-note, stretch-senior, and mezzanine syndication
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Enforceable intercreditor and security trustee structures
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Direct principal alignment through co-investment
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Collateral & Covenant Management */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="icon-badge">
                  <Shield size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Collateral &amp; Covenant Management</h3>
                <p className="text-gray-600 mb-4">
                  Dedicated portfolio oversight focused on transparent cash flows, realistic business plans, and liquid real estate collateral with credible resale markets.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Continuous LTV, LTC, and ICR covenant surveillance
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Security agent and collateral trusteeship management
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Independent technical cost and construction monitoring
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Repositioning & Value Creation */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="icon-badge">
                  <BarChart size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Repositioning &amp; Value Creation</h3>
                <p className="text-gray-600 mb-4">
                  Supporting experienced, well-capitalised sponsors through planning, change-of-use, ESG refurbishment, and lease-up to maximise asset value and mitigate downside risk.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Strategic repositioning and ESG modernisations
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Planning enhancement and adaptive reuse structuring
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Clear refinance or disposal exit milestones
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Track Record */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="heading-md mb-6">Our Track Record</h2>
            <p className="text-gray-700">
              A proven history of structuring and executing real estate transactions across key European jurisdictions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="card-surface text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">€3B+</div>
              <p className="text-gray-700">Transactions Executed by Our Team</p>
            </div>
            
            <div className="card-surface text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">&gt;€1B</div>
              <p className="text-gray-700">Real Estate Credit Underwritten</p>
            </div>
            
            <div className="card-surface text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">100+</div>
              <p className="text-gray-700">Years Combined Experience (10+ Together)</p>
            </div>
            
            <div className="card-surface text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">15+</div>
              <p className="text-gray-700">European Markets Covered</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="heading-sm mb-6 text-center">Institutional Standards &amp; Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <LineChart size={20} className="text-refumo-coral mr-2" />
                  Credit Discipline
                </h4>
                <p className="text-gray-600">
                  Disciplined underwriting prioritizing downside capital preservation, enforceable collateral packages, and independent RICS valuations.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Search size={20} className="text-refumo-coral mr-2" />
                  Market Structuring
                </h4>
                <p className="text-gray-600">
                  Deep local market intelligence across the UK, Germany, and Spain to tailor senior and stretch debt to specific project dynamics.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Layers size={20} className="text-refumo-coral mr-2" />
                  Alignment &amp; Transparency
                </h4>
                <p className="text-gray-600">
                  Co-investing alongside institutional partners with continuous covenant tracking and transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Institutional &amp; Financing Enquiries</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Connect with our origination and structuring team in London and Luxembourg to discuss real estate credit facilities and partnership opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Connect With Our Team
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Expertise;
