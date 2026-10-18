import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, AlertCircle, Building2, Scale } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-refumo-darkblue text-white relative pt-36 pb-20 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-refumo-coral mb-4">
              Compliance &amp; Governance
            </span>
            <h1 className="heading-lg mb-6">Legal &amp; Regulatory Disclaimer</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Refumo Investments — Principal Real Estate Credit &amp; Co-Investment
            </p>
          </div>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed">
            
            {/* Key Highlight Banner */}
            <div className="bg-refumo-lightgray border-l-4 border-refumo-coral p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-refumo-coral flex-shrink-0 mt-1" size={24} />
                <div className="text-sm md:text-base">
                  <strong className="text-refumo-darkblue block mb-1">
                    Exclusively for Institutional Counterparties &amp; Professional Investors
                  </strong>
                  This website and any related materials are strictly directed at professional clients and eligible counterparties as defined under the EU Markets in Financial Instruments Directive (MiFID II 2014/65/EU) and the UK Financial Conduct Authority (FCA) Conduct of Business Sourcebook (COBS), as well as corporate commercial borrowers.
                </div>
              </div>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3 flex items-center gap-2">
                <Scale size={22} className="text-refumo-coral" />
                1. Nature of the Platform &amp; Corporate Identity
              </h2>
              <p className="mb-3">
                This website is operated by Refumo Investments (<em>Refumo S.&agrave; r.l.</em>, registered office: 10 Rue Beaumont, L-1219 Luxembourg, together with its affiliated European investment and financing vehicles, collectively "Refumo"). Refumo is a privately held principal real estate credit, origination, and co-investment group.
              </p>
              <p>
                Refumo is not an authorized financial adviser, retail deposit-taker, or retail investment manager. The firm does not conduct regulated investment management services for retail clients or third-party retail collective investment schemes, nor does it conduct regulated consumer or residential mortgage lending.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3 flex items-center gap-2">
                <AlertCircle size={22} className="text-refumo-coral" />
                2. No Offer, Solicitation, or Investment Advice
              </h2>
              <p className="mb-3">
                Nothing contained on this website constitutes investment advice, financial promotion, tax advice, or legal advice. The content does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation to purchase or subscribe for any security, debt instrument, fund unit, or collective investment undertaking in any jurisdiction.
              </p>
              <p>
                No information on this website shall be relied upon in connection with any investment, lending, or co-investment decision. Any financing or co-investment opportunity is subject exclusively to definitive, negotiated legal documentation, formal credit committee approval, and independent professional due diligence.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3 flex items-center gap-2">
                <Building2 size={22} className="text-refumo-coral" />
                3. Commercial Real Estate Lending &amp; SPV Criteria
              </h2>
              <p className="mb-3">
                All real estate credit origination, whole-loan structures, mezzanine facilities, and bridge financing terms described are strictly limited to corporate Special Purpose Vehicles (SPVs) and commercial property holding entities. Refumo does not provide consumer credit or residential owner-occupier mortgage facilities regulated under the UK Consumer Credit Act or FCA Mortgage Conduct of Business (MCOB) rules.
              </p>
              <p>
                Where any financing or capital arrangement touches regulated investment structures, fund vehicles, or cross-border securitization frameworks, such arrangements are executed solely in collaboration with appropriately licensed and regulated institutional banking, depository, and fund management institutions.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3">
                4. Forward-Looking Statements &amp; Risk Warning
              </h2>
              <p className="mb-3">
                Materials on this website may include forward-looking statements regarding commercial real estate markets, yields, interest rates, and loan structures. Such statements are subject to inherent risks, market uncertainties, macroeconomic shifts, and regulatory changes. Actual outcomes and market valuations may differ materially from forward-looking estimates.
              </p>
              <p className="mb-3">
                Real estate credit, private debt, and property investments involve significant risks, including illiquidity, borrower default risk, changes in interest rates, construction delays, planning risks, and property market value fluctuations. Capital invested in private debt structures is at risk, and investors or partners may not recover their initial capital.
              </p>
              <p>
                <strong>Past Performance:</strong> Past performance, transaction track records, or historical metrics of the leadership team, founders, or prior affiliated ventures are provided for contextual background only and are not a guarantee or indicator of future results.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3">
                5. Confidentiality &amp; Proprietary Rights
              </h2>
              <p>
                All materials, intellectual property, logos, trademarks, and structure descriptions appearing on this website are the property of Refumo Investments and protected by copyright and intellectual property laws. Unauthorized reproduction, dissemination, or distribution of this material without prior written consent from Refumo is strictly prohibited.
              </p>
            </div>

            {/* Section 6 */}
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-refumo-darkblue mb-3">
                6. Compliance &amp; Regulatory Inquiries
              </h2>
              <p>
                For questions regarding this regulatory disclaimer, corporate governance, or our financing criteria, please contact our compliance desk at:
              </p>
              <div className="mt-3 text-sm text-gray-600 space-y-1">
                <p><strong>Refumo S.&agrave; r.l.</strong></p>
                <p>10 Rue Beaumont, L-1219 Luxembourg</p>
                <p>Email: <a href="mailto:info@refumo.com" className="text-refumo-coral hover:underline">info@refumo.com</a></p>
                <p>Telephone: +44 7488 897774</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Disclaimer;
