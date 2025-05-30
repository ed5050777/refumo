
import { LineChart, Search, Users, Layers, Briefcase, FileCheck, BarChart, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Our Expertise</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              With over €15 billion in transactions and 100+ years of combined experience,
              we assess opportunities by merit—not limits.
            </p>
          </div>
        </div>
      </section>
      
      {/* Core Expertise */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Core Expertise Areas</h2>
            <p className="text-gray-700">
              Our comprehensive expertise enables us to deliver exceptional results across all aspects of real estate investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Acquisitions */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-refumo-darkblue flex items-center justify-center text-refumo-coral">
                  <Building size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Acquisitions</h3>
                <p className="text-gray-600 mb-4">
                  Our acquisition team has a proven track record of identifying and securing high-potential properties across Europe. We are reliable, fast, and trusted closers—backed by meticulous due diligence.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Off-market opportunity sourcing
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Competitive bid structuring
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Cross-border transaction expertise
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Due Diligence */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-refumo-darkblue flex items-center justify-center text-refumo-coral">
                  <FileCheck size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Due Diligence</h3>
                <p className="text-gray-600 mb-4">
                  We maintain best-in-class due diligence standards with strong compliance, KYC, and execution frameworks that protect our clients' interests.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Comprehensive property assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Legal and regulatory compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Financial performance verification
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Management */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-refumo-darkblue flex items-center justify-center text-refumo-coral">
                  <Users size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Management</h3>
                <p className="text-gray-600 mb-4">
                  Our client-centric property management approach is built on integrity, responsiveness, and performance, ensuring optimal returns on investment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Tenant relationship management
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Operational efficiency optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Regular performance reporting
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Value Creation */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-refumo-darkblue flex items-center justify-center text-refumo-coral">
                  <BarChart size={28} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Value Creation</h3>
                <p className="text-gray-600 mb-4">
                  From zoning changes to repositioning, we transform properties to maximize value and mitigate risk, delivering superior returns.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Strategic property repositioning
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Asset enhancement initiatives
                  </li>
                  <li className="flex items-start">
                    <span className="text-refumo-coral mr-2">•</span>
                    Adaptive reuse and redevelopment
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
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Our Track Record</h2>
            <p className="text-gray-700">
              With a proven history of successful investments across Europe, our experience speaks for itself.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">€5B+</div>
              <p className="text-gray-700">Transaction Volume</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">100+</div>
              <p className="text-gray-700">Years Combined Experience</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">15+</div>
              <p className="text-gray-700">European Countries</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-refumo-coral mb-2">200+</div>
              <p className="text-gray-700">Completed Transactions</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="heading-sm mb-6 text-center">Key Performance Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <LineChart size={20} className="text-refumo-coral mr-2" />
                  Investment Returns
                </h4>
                <p className="text-gray-600">
                  Our investments consistently outperform market benchmarks, delivering superior risk-adjusted returns to our clients.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Search size={20} className="text-refumo-coral mr-2" />
                  Market Insights
                </h4>
                <p className="text-gray-600">
                  Deep local market knowledge allows us to identify opportunities others miss and anticipate market shifts.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Layers size={20} className="text-refumo-coral mr-2" />
                  Portfolio Diversity
                </h4>
                <p className="text-gray-600">
                  We maintain diversified portfolios across asset classes and geographies to optimize returns while managing risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Ready to Leverage Our Expertise?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Partner with Refumo to access our deep industry knowledge and proven investment strategies.
          </p>
          <Link to="/contact" className="btn-primary">
            Schedule a Consultation
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Expertise;
