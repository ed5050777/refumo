
import { Building, Database, LineChart, Landmark, Globe, RefreshCw, Users, Shield, Settings, BookOpen, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Comprehensive real estate investment solutions tailored to your specific needs
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Comprehensive Advisory Solutions</h2>
            <p className="text-gray-700">
              Refumo delivers end-to-end advisory solutions across asset classes—residential, commercial, 
              retail, logistics, and mixed-use. We align property strategy with capital efficiency, market 
              trends, and investor goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title="Investment Advisory & Capital Markets"
              description="Strategic capital structuring, investment analysis, and end-to-end transaction advisory."
              icon={<LineChart size={32} />}
            />
            <ServiceCard 
              title="Asset Disposition & Acquisition"
              description="Guidance across the asset life cycle—from entry to exit strategies."
              icon={<Building size={32} />}
            />
            <ServiceCard 
              title="Portfolio Optimization"
              description="Multisite lease rationalization and cost optimization strategies."
              icon={<Database size={32} />}
            />
            <ServiceCard 
              title="Capital Structure Consulting"
              description="Optimizing debt and equity structures to maximize returns and minimize risk."
              icon={<Landmark size={32} />}
            />
            <ServiceCard 
              title="Location Intelligence"
              description="Demographic modeling and smart site selection tools for optimal investments."
              icon={<Globe size={32} />}
            />
            <ServiceCard 
              title="Redevelopment & Adaptive Reuse"
              description="Unlocking value through densification and use conversion strategies."
              icon={<RefreshCw size={32} />}
            />
            <ServiceCard 
              title="Retail & Consumer Experience"
              description="Omnichannel planning and experience-driven property development."
              icon={<Users size={32} />}
            />
            <ServiceCard 
              title="Sustainability & ESG Compliance"
              description="Carbon strategy and environmental compliance for long-term value creation."
              icon={<Shield size={32} />}
            />
            <ServiceCard 
              title="Due Diligence & Risk Management"
              description="Comprehensive property evaluation and risk mitigation planning."
              icon={<Settings size={32} />}
            />
            <ServiceCard 
              title="Market Research & Analysis"
              description="Deep insights into property trends, demographic shifts, and market opportunities."
              icon={<BookOpen size={32} />}
            />
            <ServiceCard 
              title="Property and Asset Management"
              description="End-to-end management solutions for commercial and residential properties."
              icon={<Home size={32} />}
            />
          </div>
        </div>
      </section>
      
      {/* Asset Classes */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-md mb-6">Asset Classes We Serve</h2>
            <p className="text-gray-700">
              Our expertise spans across multiple property types, enabling comprehensive solutions regardless of asset class.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Residential</h3>
              <p className="text-gray-600">Multi-family, single-family, student housing, and senior living properties.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Commercial</h3>
              <p className="text-gray-600">Office buildings, corporate campuses, and coworking spaces.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Retail</h3>
              <p className="text-gray-600">Shopping centers, high street retail, and experiential retail venues.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Industrial</h3>
              <p className="text-gray-600">Warehouses, distribution centers, and manufacturing facilities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
              <p className="text-gray-600">Hotels, resorts, and service-oriented properties.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-3">Mixed-Use</h3>
              <p className="text-gray-600">Integrated developments combining multiple property types.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-refumo-darkblue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="heading-md mb-6">Ready to Discuss Your Investment Needs?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Whether you're looking to invest, divest, or explore new markets—our team is ready to help you achieve your goals.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Services;
