import React from "react";

const RefundAndCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        Refund & Cancellation Policy
      </h1>

      <div className="space-y-6 text-sm md:text-base">
        <p>Funds Catalyst provides professional and customized documentation and consultancy services. This policy outlines our refund and cancellation terms.</p>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">1. Project Proposals, DPR & Documentation</h2>
          <ul className="list-disc pl-5">
            <li><strong>Full Refund:</strong> If cancelled before any work begins.</li>
            <li><strong>Partial Refund:</strong> If work is underway, based on progress.</li>
            <li><strong>No Refund:</strong> After submission to client or authority.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">2. Government Project & Tender Assistance</h2>
          <ul className="list-disc pl-5">
            <li><strong>Full Refund:</strong> Before submission starts.</li>
            <li><strong>No Refund:</strong> After tender/project is submitted or uploaded.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">3. NGO/Company Documentation</h2>
          <ul className="list-disc pl-5">
            <li><strong>Full Refund:</strong> Before verification or form filling begins.</li>
            <li><strong>No Refund:</strong> After documents are submitted to relevant authorities.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">4. RFP & Bid Processing</h2>
          <ul className="list-disc pl-5">
            <li><strong>Full Refund:</strong> Before draft preparation.</li>
            <li><strong>No Refund:</strong> After bid is submitted on any platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">5. Timeline & Deductions</h2>
          <p>Refunds (if applicable) will be processed within <strong>30 working days</strong>. Any third-party or portal fees will be deducted from the refund.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">6. Precedence of Agreements</h2>
          <p>If there’s a signed agreement with a client, its terms override this general policy in case of conflict.</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-black">7. Contact for Refunds</h2>
          <ul className="list-none pl-0">
            <li>Email: <a href="mailto:info@fundscatalyst.com" className="text-yellow-600 underline">info@fundscatalyst.com</a></li>
            <li>Phone: +91 0987654321 | +91 987543210</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RefundAndCancellation;
