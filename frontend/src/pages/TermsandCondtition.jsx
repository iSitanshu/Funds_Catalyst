import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 font-sans leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>

      <section className="space-y-6 text-sm md:text-base">
        <p>
          Welcome to <strong>Funds Catalyst</strong>. By accessing or using our
          services, you agree to be bound by the following Terms and Conditions.
          Please read them carefully.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">1. Service Use</h2>
          <p>
            Our services are advisory and documentation-based. Clients must provide accurate and complete information to ensure timely and effective service delivery.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">2. Confidentiality</h2>
          <p>
            All data shared with us is treated confidentially and used solely for the purpose of the service requested. For more details, refer to our{" "}
            <a href="/api/privacy-policy" className="text-yellow-500 underline">Privacy Policy</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">3. Refund & Cancellation</h2>
          <p>
            Refunds are governed by the scope of work and stage of progress. Please refer to our{" "}
            <a href="/api/refund-policy" className="text-yellow-500 underline">Refund and Cancellation Policy</a> for complete details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">4. Legal Compliance</h2>
          <p>
            Clients are responsible for ensuring all submitted documents are legally valid and authentic. We do not accept liability for errors due to false or incomplete data provided by clients.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">5. Limitation of Liability</h2>
          <p>
            While we make every effort to deliver services efficiently, we are not liable for delays or rejections caused by third-party portals, government bodies, or unforeseeable events.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">6. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any time. Continued use of our services implies acceptance of the modified terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-700">7. Contact</h2>
          <p>
            For any questions regarding these terms, please contact us at{" "}
            <a href="mailto:info@fundscatalyst.com" className="text-yellow-500 underline">info@fundscatalyst.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
