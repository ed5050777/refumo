
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
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">1. Agreement to Terms &amp; Target Audience</h2>
                <p className="text-gray-700 mb-2">
                  By accessing this website, you agree to these Terms of Service and acknowledge our Legal &amp; Regulatory Disclaimer. If you do not agree, please do not use this site.
                </p>
                <p className="text-gray-700">
                  This website and any related materials are strictly intended for and directed exclusively at institutional counterparties, professional investors (as defined under MiFID II and the UK FCA COBS rules), and commercial corporate borrowers. It is not intended for retail distribution.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">2. Use of the Website</h2>
                <p className="text-gray-700">
                  You may use this website only for lawful informational purposes and in accordance with these Terms. Misuse, unauthorized scraping, or distribution of confidential content is strictly prohibited.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">3. Institutional Regulatory &amp; Investment Disclaimer</h2>
                <p className="text-gray-700 mb-2">
                  All content provided is for informational purposes only and does not constitute financial, legal, tax, or investment advice. Nothing on this website constitutes an offer to sell, a solicitation of an offer to buy, or a recommendation to subscribe for any security, debt instrument, or financial product.
                </p>
                <p className="text-gray-700 mb-2">
                  Refumo Investments (<em>Refumo S.&agrave; r.l.</em>, 10 Rue Beaumont, L-1219 Luxembourg, and affiliated UK/European group entities) operates as a principal real estate credit, origination, and co-investment group. Refumo does not conduct regulated investment services for third parties or regulated consumer/residential mortgage lending.
                </p>
                <p className="text-gray-700">
                  All commercial real estate financing criteria are strictly limited to corporate special purpose vehicles (SPVs). Any transaction involving regulated structures or jurisdictions is executed solely in conjunction with authorised banking, securitisation, or licensed fund management partners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">4. No Reliance &amp; Independent Due Diligence</h2>
                <p className="text-gray-700">
                  No information on this site or in related correspondence may be relied upon as a basis for any lending, credit, or co-investment decision. Prospective institutional co-investors and counterparties must conduct their own independent technical, financial, and legal due diligence before entering into any transaction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">5. Forward-Looking Statements Warning</h2>
                <p className="text-gray-700">
                  Content on this website may include forward-looking statements concerning European real estate market conditions, interest rate trends, yields, and bridge loan terms. Forward-looking statements are subject to significant macroeconomic uncertainties, property market cycles, and risks. Actual outcomes may differ materially from expectations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">6. Speculative Risk of Real Estate Debt &amp; Credit</h2>
                <p className="text-gray-700">
                  Commercial real estate credit, bridge financing, and special situations debt involve substantial risks, including borrower default, property market illiquidity, interest rate volatility, construction delay, and recovery risk upon foreclosure. Past performance of the leadership team, founders, or past deals is not indicative of future results.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">7. Intellectual Property &amp; Confidentiality</h2>
                <p className="text-gray-700">
                  All content on this site—including logos, branding, text, layout, and graphics—is the proprietary property of Refumo Investments and protected by applicable copyright and intellectual property laws. No part may be copied, modified, reproduced, or distributed without prior written consent.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">8. Third-Party Links</h2>
                <p className="text-gray-700">
                  Our site may contain links to external third-party resources. Refumo assumes no responsibility or liability for their content, policies, or availability.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">9. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the fullest extent permitted by applicable law, Refumo Investments and its directors, partners, and affiliates shall not be liable for any direct, indirect, incidental, or consequential loss or damages resulting from the use of or reliance on this website.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">10. Modifications</h2>
                <p className="text-gray-700">
                  We reserve the right to amend these Terms at any time without prior notice. Continued use of the site following any changes constitutes acceptance of the amended terms.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">11. Governing Law &amp; Jurisdiction</h2>
                <p className="text-gray-700">
                  These Terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of Luxembourg and England and Wales.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-4 mt-2">12. Compliance &amp; Contact</h2>
                <p className="text-gray-700">
                  Questions regarding these Terms or regulatory disclosures may be addressed to:
                  <br />
                  <strong className="text-refumo-darkblue">Refumo Investments (Refumo S.&agrave; r.l.)</strong>
                  <br />
                  10 Rue Beaumont, L-1219 Luxembourg
                  <br />
                  Email: <a href="mailto:info@refumo.com" className="text-refumo-coral hover:underline">info@refumo.com</a>
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
