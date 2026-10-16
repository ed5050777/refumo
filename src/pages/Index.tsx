
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
      <section className="bg-refumo-darkblue text-white relative overflow-hidden pt-40 pb-24 md:pt-56 md:pb-36">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-refumo-coral/10 blur-3xl" />
        <div className="relative container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5">
              <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-gray-200">Pan-European Property Investment</p>
            </div>
            
            <h1 className="heading-lg mb-8">
              <span className="text-white">WELCOME TO </span>
              <span className="text-gradient">REFUMO</span><br />
              <span className="text-white">INVESTMENTS</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-display text-gray-200 mb-4 italic leading-relaxed max-w-2xl mx-auto">
            "Markets shift. Logic evolves. Advantage belongs to those who adapt before it's obvious."
            </p>
            
            <p className="text-sm tracking-widest uppercase text-refumo-coral mb-12">— Refumo Insights</p>
            
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
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">About Refumo</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">WELCOME TO REFUMO INVESTMENTS</h2>
            <p className="text-refumo-coral font-medium mb-8">
              Pan-European Property Investment | Value-Driven Strategy | Enduring Relationships
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Refumo is a pan-European real estate platform, based in London, Luxembourg and
              Switzerland. It is primarily active in Western Europe, especially the DACH region and
              the UK. The group invests institutional capital in debt and equity strategies with focus on
              special situation assets. With over 25 years of experience, the partners have structured
              transactions of more than €3 billion in various real estate asset classes..
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-5">
              As a privately held firm, Refumo prioritizes the fiduciary interests of our investors—their 
              success is our success. We don't just manage assets; we create opportunities that solve our 
              clients' most demanding investment challenges.
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
      <section id="services" className="section bg-refumo-lightgray scroll-mt-20 border-y border-gray-200/60">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">What We Do</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Our Services at a Glance</h2>
            <p className="text-gray-700">
              Refumo delivers end-to-end advisory solutions across asset classes—residential, commercial, 
              retail, logistics, and mixed-use. We align property strategy with capital efficiency, market 
              trends, and investor goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <ServiceCard 
              title="Investment Advisory & Capital Markets"
              description="Strategic capital structuring, investment analysis, and end-to-end transaction advisory."
              icon={<BarChart4 size={32} />}
            />
            <ServiceCard 
              title="Asset Disposition, Acquisition"
              description="Guidance across the asset life cycle—from entry to exit."
              icon={<Briefcase size={32} />}
            />
            <ServiceCard 
              title="Portfolio Optimization"
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
            <Link to="/services" className="group inline-flex items-center min-h-12 px-2 text-refumo-coral hover:text-refumo-lightcoral font-medium">
              View All Services <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="section bg-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
            <span className="eyebrow">Track Record</span>
            <h2 className="heading-md mb-6 text-refumo-darkblue">Our Expertise</h2>
            <p className="text-gray-700">
              With over €3 billion in transactions and 100+ years of combined experience, 
              we assess opportunities by merit—not limits.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <ExpertiseCard 
              title="Acquisitions"
              description="Reliable, fast, and trusted closers across Europe—backed by meticulous due diligence."
              icon={<BarChart4 size={32} />}
            />
            <ExpertiseCard 
              title="Capital Raise"
              description="Best-in-class standards with strong network and execution frameworks."
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
      <section id="contact" className="section bg-refumo-darkblue text-white scroll-mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Ready to Explore Investment Opportunities?</h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
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
