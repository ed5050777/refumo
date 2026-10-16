
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-6">
              Let's discuss your investment opportunities
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="heading-md mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-8">
                  Whether you're looking to invest, divest, or explore new markets—we're here to collaborate. 
                  Contact our team today to discuss how we can help you achieve your investment goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 icon-badge !w-12 !h-12 mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                          <p className="text-gray-700">
                        Luxembourg (HQ)<br />
                        10 Rue Beaumont, L-1219 Luxembourg<br /><br />
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 icon-badge !w-12 !h-12 mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-700">+44 7488 897774</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 icon-badge !w-12 !h-12 mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:info@refumo.com" className="text-refumo-coral hover:underline">
                          info@refumo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 border border-gray-200/70 p-6 md:p-10 rounded-2xl">
                <h2 className="heading-sm mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Contact;
