
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-32 pb-16 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">Privacy Policy</h1>
          </div>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600 mb-1">Effective Date: {formattedDate}</p>
              <p className="text-gray-600">Last Updated: {formattedDate}</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Who We Are</h2>
                <p className="text-gray-700">
                  Refumo Investments ("Refumo", "we", "our", or "us") is a real estate investment firm operating across Europe. 
                  This Privacy Policy outlines how we collect, use, store, and protect your personal information.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We may collect and process the following data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Name, email, phone number, and company affiliation</li>
                  <li>Communication records (e.g., emails, contact form submissions)</li>
                  <li>IP address and website usage data (via cookies and analytics tools)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                <p className="text-gray-700 mb-4">
                  We use personal information for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Responding to inquiries and requests</li>
                  <li>Providing investment updates and relevant content</li>
                  <li>Complying with regulatory requirements</li>
                  <li>Improving our website and user experience</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
                <p className="text-gray-700 mb-4">
                  Our data collection is based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Consent</li>
                  <li>Legitimate interest</li>
                  <li>Compliance with legal obligations</li>
                  <li>Contractual necessity</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">5. How We Protect Your Data</h2>
                <p className="text-gray-700">
                  We implement appropriate security measures including encryption, firewalls, and access controls to safeguard your information.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Sharing of Information</h2>
                <p className="text-gray-700">
                  We do not sell your personal data. We may share your information with trusted service providers and partners for operational and legal compliance purposes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">7. International Transfers</h2>
                <p className="text-gray-700">
                  Data may be transferred to and processed in jurisdictions outside your own. Where applicable, we use appropriate safeguards such as Standard Contractual Clauses.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
                <p className="text-gray-700 mb-4">
                  You may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Access your data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent</li>
                  <li>Object to processing</li>
                  <li>File a complaint with your local data protection authority</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">9. Cookies</h2>
                <p className="text-gray-700">
                  See our <Link to="/cookies-policy" className="text-refumo-coral hover:underline">Cookies Policy</Link> for details on how we use cookies.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <p className="text-gray-700">
                  For privacy-related questions, please contact:
                  <br />
                  <a href="mailto:privacy@refumo.com" className="text-refumo-coral hover:underline">privacy@refumo.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
