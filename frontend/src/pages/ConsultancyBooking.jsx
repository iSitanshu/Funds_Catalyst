import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Phone, Mail } from "lucide-react";

const ConsultancyBooking = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const validate = () => {
    let temp = {};
    temp.fullName = form.fullName ? "" : "Full name is required.";
    temp.email = /\S+@\S+\.\S+/.test(form.email)
      ? ""
      : "A valid email address is required.";
    temp.phone = /^[6-9]\d{9}$/.test(form.phone)
      ? ""
      : "A valid 10-digit mobile number is required.";
    temp.organization = form.organization
      ? ""
      : "Organization name is required.";
    temp.organizationType = form.organizationType
      ? ""
      : "Please select your organization type.";
    temp.requirement = form.requirement
      ? ""
      : "Please specify your requirement.";
    temp.message = form.message ? "" : "Please leave us a message.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/consultancy/book_consultant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg("✅ Consultancy booking created successfully!");
        setForm({
          fullName: "",
          email: "",
          phone: "",
          organization: "",
          organizationType: "",
          requirement: "",
          message: "",
        });
      } else {
        setResponseMsg(
          data?.message || "❌ Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("❌ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[420px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://osekoouma.com/wp-content/uploads/2017/01/comm.jpg')",
        }}
      >
        <div className="absolute inset-0" />
        <div className="relative z-10 text-center px-4 md:px-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book a Consultancy Session
          </h1>
          <p className="text-md md:text-lg max-w-3xl mx-auto font-light">
            Empower your organization with expert consultancy. From NGO support
            to Government tenders, our team is ready to guide you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 py-8">
        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
            Let’s Connect
          </h2>
          <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
            Fill in the details below and our expert team will get in touch to
            understand your needs and provide tailored solutions.
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="you@company.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="9876543210"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Organization */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                name="organization"
                value={form.organization}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Acme Corp"
              />
              {errors.organization && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.organization}
                </p>
              )}
            </div>

            {/* Organisation Type */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Org Type
              </label>
              <select
                name="organizationType"
                value={form.organizationType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option value="">-- Select Type --</option>
                <option value="NGO Consultancy">NGO Consultancy</option>
                <option value="Government Tender Support">
                  Government Tender Support
                </option>
                <option value="Project Management">Project Management</option>
                <option value="CRF Funding">CRF Funding</option>
                <option value="Other">Other</option>
              </select>
              {errors.organizationType && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.organizationType}
                </p>
              )}
            </div>

            {/* Requirement */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Requirement
              </label>
              <input
                type="text"
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="e.g. CSR Strategy"
              />
              {errors.requirement && (
                <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Describe your project or consultancy needs..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Terms and Submit */}
            <div className="flex items-start gap-2 text-gray-600 text-sm">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" required className="mt-1" />
                <span>
                  By continuing, I agree to the&nbsp;
                  <a
                    href="/api/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-300"
                  >
                    terms of use & privacy policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <div className="md:col-span-2 flex flex-col items-center mt-4">
              <Button
                type="submit"
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded transition duration-300 text-sm"
              >
                {loading ? "Submitting..." : "Book Now"}
              </Button>

              {responseMsg && (
                <p
                  className={`mt-3 text-sm ${
                    responseMsg.startsWith("✅")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {responseMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-yellow-500 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            Need Immediate Assistance?
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg mb-4">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <a
                href="mailto:consultancy@yourexpert.com"
                className="underline hover:text-gray-100"
              >
                consultancy@yourexpert.com
              </a>
            </div>
          </div>

          <p className="text-sm opacity-90">
            Our experts are available Monday to Friday, 10 AM – 6 PM IST.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConsultancyBooking;
