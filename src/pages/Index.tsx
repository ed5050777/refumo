
import { ArrowRight, Shield, BarChart4, Users, ThumbsUp, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValueCard from "@/components/ValueCard";
import ServiceCard from "@/components/ServiceCard";
import ExpertiseCard from "@/components/ExpertiseCard";

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm">
              <p className="text-sm font-medium">Pan-European Property Investment</p>
            </div>
            
            <h1 className="heading-lg mb-6">
              <span className="text-white">WELCOME TO </span>
              <span className="text-gradient">REFUMO</span><br />
              <span className="text-white">INVESTMENTS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 italic">
              "The greatest danger in times of turbulence is not the turbulence – it is to act with yesterday's logic."
            </p>
            
            <p className="text-gray-300 mb-10">— Peter F. Drucker</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/expertise" className="btn-primary">
                Explore Our Expertise
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">WELCOME TO REFUMO INVESTMENTS</h2>
            <p className="text-gray-600 text-lg mb-4">
              Pan-European Property Investment | Value-Driven Strategy | Enduring Relationships
            </p>
            <p className="text-gray-700">
              Refumo Investments is a real estate investment company specializing in the acquisition 
              and management of high-growth property portfolios across Europe. With affiliated offices 
              in London, Luxembourg, Switzerland, and Gibraltar, we support a global client base seeking 
              intelligent, forward-thinking strategies.
            </p>
            <p className="text-gray-700 mt-4">
              As a privately held firm, Refumo prioritizes the fiduciary interests of our investors—their 
              success is our success. We don't just manage assets; we create opportunities that solve our 
              clients' most demanding investment challenges.
            </p>
          </div>
          
          {/* Core Values */}
          <div>
            <h3 className="heading-sm text-center mb-10">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                title="Integrity"
                description="We operate with the highest ethical standards in all our dealings, ensuring transparency and accountability."
                icon={<Shield size={36} />}
              />
              <ValueCard 
                title="Discretion"
                description="Confidentiality is the cornerstone of our client relationships, protecting sensitive information with utmost care."
                icon={<Users size={36} />}
              />
              <ValueCard 
                title="Excellence"
                description="We maintain professionalism without compromise, striving for superior results in every project we undertake."
                icon={<ThumbsUp size={36} />}
              />
              <ValueCard 
                title="Entrepreneurship"
                description="Our innovative thinking delivers creative solutions for complex investment challenges."
                icon={<BarChart4 size={36} />}
              />
              <ValueCard 
                title="Client Focus"
                description="We prioritize client interests in every decision, ensuring their goals drive our strategy."
                icon={<Briefcase size={36} />}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Our Services at a Glance</h2>
            <p className="text-gray-700">
              Refumo delivers end-to-end advisory solutions across asset classes—residential, commercial, 
              retail, logistics, and mixed-use. We align property strategy with capital efficiency, market 
              trends, and investor goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <ServiceCard 
              title="Investment Advisory & Capital Markets"
              description="Strategic capital structuring, investment analysis, and end-to-end transaction advisory."
              icon={<BarChart4 size={32} />}
            />
            <ServiceCard 
              title="Asset Disposition, Acquisition & Subleasing"
              description="Guidance across the asset life cycle—from entry to exit."
              icon={<Briefcase size={32} />}
            />
            <ServiceCard 
              title="Portfolio Optimization & Lease Advisory"
              description="Multisite lease rationalization and cost optimization."
              icon={<ThumbsUp size={32} />}
            />
            <ServiceCard 
              title="Sustainability & Energy Transition"
              description="Carbon strategy and ESG compliance for long-term value."
              icon={<Shield size={32} />}
            />
          </div>
          
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center text-refumo-coral hover:text-refumo-lightcoral font-medium">
              View All Services <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="section bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Our Expertise</h2>
            <p className="text-gray-700">
              With over €5 billion in transactions and 100+ years of combined experience, 
              we assess opportunities by merit—not limits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ExpertiseCard 
              title="Acquisitions"
              description="Reliable, fast, and trusted closers across Europe—backed by meticulous due diligence."
              icon={<BarChart4 size={32} />}
            />
            <ExpertiseCard 
              title="Due Diligence"
              description="Best-in-class standards with strong compliance, KYC, and execution frameworks."
              icon={<Shield size={32} />}
            />
            <ExpertiseCard 
              title="Management"
              description="Client-centric property management built on integrity, responsiveness, and performance."
              icon={<Users size={32} />}
            />
            <ExpertiseCard 
              title="Value Creation"
              description="From zoning changes to repositioning, we transform properties to maximize value and mitigate risk."
              icon={<ThumbsUp size={32} />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Ready to Explore Investment Opportunities?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Whether you're looking to invest, divest, or explore new markets—we're here to collaborate.
            Contact our team today to discuss how we can help you achieve your investment goals.
          </p>
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
