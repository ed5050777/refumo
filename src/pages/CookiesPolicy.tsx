
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
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
            <h1 className="heading-lg mb-4">Cookies Policy</h1>
          </div>
        </div>
      </section>
      
      {/* Cookies Policy Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600">Effective Date: {formattedDate}</p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-700">
                  Cookies are small text files placed on your device to collect standard internet log information and visitor behavior. 
                  They help us improve your experience on our website.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Enable core site functionality</li>
                  <li>Analyze traffic and user behavior via Google Analytics</li>
                  <li>Customize content and marketing</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
                  <li><strong>Functionality Cookies:</strong> Remember preferences and settings</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">4. Managing Cookies</h2>
                <p className="text-gray-700">
                  You can control or delete cookies through your browser settings. Disabling cookies may limit your experience on our website.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
                <p className="text-gray-700">
                  We may allow trusted partners (e.g., analytics tools) to place cookies on our site to enhance performance and insights.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">6. Updates</h2>
                <p className="text-gray-700">
                  This Cookies Policy may be updated periodically. Please check back for changes.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
                <p className="text-gray-700">
                  For any questions about our use of cookies, contact:
                  <br />
                  <a href="mailto:cookies@refumo.com" className="text-refumo-coral hover:underline">cookies@refumo.com</a>
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

export default CookiesPolicy;
