
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
            <h1 className="heading-lg mb-4">Terms of Service</h1>
          </div>
        </div>
      </section>
      
      {/* Terms of Service Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600">Effective Date: {formattedDate}</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700">
                  By accessing this website, you agree to these Terms of Service. If you do not agree, please do not use the site.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">2. Use of the Website</h2>
                <p className="text-gray-700">
                  You may use this website only for lawful purposes and in accordance with these Terms. Misuse or unauthorized use is strictly prohibited.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Investment Disclaimer</h2>
                <p className="text-gray-700">
                  All content provided is for informational purposes only and does not constitute financial, legal, or investment advice. 
                  Refumo Investments does not guarantee the accuracy or completeness of the content.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content on this site—including logos, text, graphics, and software—is the property of Refumo Investments and protected by copyright laws. 
                  No part may be copied or used without written permission.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">5. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our site may contain links to third-party websites. We are not responsible for their content, terms, or privacy policies.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700">
                  Refumo Investments shall not be liable for any direct or indirect damages arising from your use of this website.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-gray-700">
                  We reserve the right to update or change these Terms at any time. Continued use of the site constitutes acceptance of those changes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by the laws of England and Wales.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
                <p className="text-gray-700">
                  Questions about these Terms may be directed to:
                  <br />
                  <a href="mailto:legal@refumo.com" className="text-refumo-coral hover:underline">legal@refumo.com</a>
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

export default TermsOfService;
