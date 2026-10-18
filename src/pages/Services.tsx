import { Building2, BarChart4, Briefcase, Shield, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-refumo-coral font-semibold tracking-wider uppercase text-xs md:text-sm mb-3 block">
              Investment Strategy
            </span>
            <h1 className="heading-lg mb-6">Focus &amp; Investment Criteria</h1>
            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6">
              Bespoke real estate credit and special situations across Western Europe, focusing on the UK, Germany, and Spain.
            </p>
          </div>
        </div>
      </section>
      
      {/* Strategy & Focus Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="heading-md mb-6">Our Investment Strategy &amp; Focus</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refumo sources, underwrites, and co-invests in bespoke real estate credit across residential, commercial, 
              hospitality, and PBSA sectors in economically strong Western European markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <ServiceCard 
              className="md:col-span-2 lg:col-span-2"
              title="Real Estate Credit Origination"
              description="Comprehensive capital coverage spanning the entire capital structure—including senior whole loans, stretch-senior, bridge & acquisition facilities, mezzanine debt, subordinated capital, preferred equity, and institutional co-investment (€5m–€50m+ per transaction). We structure bespoke liquidity solutions tailored to sponsor requirements, secured against high-quality real estate collateral across Western Europe."
              icon={<Building2 size={32} />}
              bullets={["Senior Whole Loans & Stretch-Senior", "Bridge & Acquisition Facilities", "Mezzanine & Subordinated Debt", "Preferred Equity & Co-Investment"]}
            />
            <ServiceCard 
              title="Underwriting & Structuring"
              description="Deep institutional underwriting expertise engineered to unlock underlying asset and transaction value. We structure bespoke capital solutions utilizing dedicated securitisation vehicles, corporate SPVs, bond issuance programs, and tailored security packages adapted to the risk profile and commercial circumstances of each opportunity."
              icon={<BarChart4 size={32} />}
              bullets={["Value Unlocking", "Securitisation Vehicles & SPVs", "Bespoke Capital Structures"]}
            />
            <ServiceCard 
              title="Special Situations & Restructuring"
              description="Active secondary loan acquisitions, purchasing performing and non-performing debt, navigating complex debt workouts, and executing consensual recapitalisations. We inject rescue capital and turnaround liquidity into transitional, stalled, or distressed real estate portfolios across the UK and DACH region."
              icon={<Briefcase size={32} />}
              bullets={["Secondary Loan Acquisitions", "Complex Debt Workouts", "Distressed Recapitalisations"]}
            />
            <ServiceCard 
              title="Sourcing & Value Realisation"
              description="Targeted proprietary origination to identify high-conviction off-market opportunities and execute smart entry purchases. We engineer clear, disciplined realization pathways—structuring transactions from inception for seamless refinancing, asset sales, structured loan payoffs, or value-maximizing exits."
              icon={<Target size={32} />}
              bullets={["Proprietary Off-Market Sourcing", "Smart Entry Purchases", "Structured Exits & Realisation"]}
            />
            <ServiceCard 
              title="Active Oversight & Servicing"
              description="End-to-end loan lifecycle management, rigorous covenant monitoring, security and collateral trusteeship, and ongoing compliance oversight throughout the investment lifecycle to safeguard institutional capital and ensure execution certainty."
              icon={<Shield size={32} />}
              bullets={["Covenant Monitoring", "Collateral Trusteeship", "Capital Protection"]}
            />
          </div>
        </div>
      </section>
      
      {/* Target Sectors */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <h2 className="heading-md mb-6">Target Real Estate Sectors</h2>
            <p className="text-gray-700">
              Our credit underwriting and collateral evaluation focus on core European growth sectors with liquid underlying resale dynamics and resilient borrower fundamentals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">Residential &amp; BTR</h3>
              <p className="text-gray-600">Build-to-sell, build-to-rent schemes, and strategic residential developments in primary metropolitan areas.</p>
            </div>
            
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">Commercial &amp; Office</h3>
              <p className="text-gray-600">High-quality, ESG-compliant regional and gateway city office repositioning with strong tenant covenants.</p>
            </div>
            
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">PBSA &amp; Student Living</h3>
              <p className="text-gray-600">Purpose-built student accommodation in tier-1 university hubs benefiting from structural supply shortages.</p>
            </div>
            
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">Logistics &amp; Light Industrial</h3>
              <p className="text-gray-600">Urban last-mile logistics, distribution parks, and light industrial facilities across key European corridors.</p>
            </div>
            
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">Hospitality &amp; Leisure</h3>
              <p className="text-gray-600">Prime urban hotels, boutique destinations, and serviced accommodation backed by experienced operators.</p>
            </div>
            
            <div className="card-surface">
              <h3 className="text-xl font-semibold mb-3">Mixed-Use Repositioning</h3>
              <p className="text-gray-600">Multi-faceted urban assets undergoing planning enhancement, change-of-use, or ESG modernization.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Institutional &amp; Financing Enquiries</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Connect with our origination and structuring team to discuss European real estate credit facilities and partnership opportunities.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Our Team
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
