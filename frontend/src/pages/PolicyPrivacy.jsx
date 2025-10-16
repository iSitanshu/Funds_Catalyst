import React from "react";

const PolicyPrivacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm md:text-base">
        <p>
          At <strong>Funds Catalyst</strong>, we value the privacy and confidentiality of our clients and their organizational data. This Privacy Policy explains how we collect, use, and protect your information.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">1. Scope</h2>
          <p>This applies to all services, including government project sanctioning, tender assistance, DPR preparation, and compliance support.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">2. Data We Collect</h2>
          <ul className="list-disc pl-5">
            <li>Organization and contact information</li>
            <li>Authorized representative details</li>
            <li>Legal documents (PAN, Aadhaar, registration certificates, bank details, etc.)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">3. Purpose of Collection</h2>
          <p>Data is collected strictly to fulfill our services: project documentation, government submissions, RFPs, and NGO/company registrations.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">4. Sharing & Security</h2>
          <p>Information is shared only with relevant government authorities or partners, and never sold or used for marketing. Data is stored securely with restricted access and encryption.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">5. Retention</h2>
          <p>Data is retained only as long as necessary for service or legal purposes, after which it is securely deleted or archived.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">6. Client Rights</h2>
          <p>Clients may request access, correction, or deletion of their data. Contact us at <a href="mailto:info@fundscatalyst.com" className="text-yellow-500 underline">info@fundscatalyst.com</a>.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">7. External Links</h2>
          <p>Our site may contain third-party links. We are not responsible for their privacy practices.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">8. Updates</h2>
          <p>We may update this policy as needed. Latest version will always be available on our website.</p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPrivacy;

