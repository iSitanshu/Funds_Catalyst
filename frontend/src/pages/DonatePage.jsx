import { useRazorpay } from "react-razorpay";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./../components/ui/card";

// 🧠 Import all data
import { statsData, impactData } from "./../content";

export default function DonationPage() {
  useRazorpay();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_ID;
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handlePayment = async () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Are you online?");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1 }),
      });

      if (!response.ok) throw new Error("Failed to create order on the server.");
      const order = await response.json();

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Funds Catalyst",
        description: "Donation for NGO Initiative",
        order_id: order.id,
        handler: async (response) => {
          try {
            const verificationResponse = await fetch(
              `${BACKEND_URL}/api/payment/verify-payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(response),
              }
            );

            const result = await verificationResponse.json();
            if (result.success) navigate("/you_are_awesome");
            else alert("Payment verification failed. Please contact support.");
          } catch (err) {
            alert("Payment verification failed: " + err.message);
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: "user",
          email: "user@gmail.com",
          contact: "9336274936",
        },
        theme: { color: "#EAB308" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.success', () => {
        navigate("/api/donation-success");
      });
      razorpay.open();
    } catch (err) {
      alert("Error: " + err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      <div
        className="relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url("https://i.pinimg.com/originals/cf/e3/21/cfe321810ef69d0c33e54fe8188b589c.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-16 h-16 text-red-500 fill-red-500" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Change Lives,
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {" "}
                One Donation
              </span>
              <br />
              at a Time
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in supporting life-changing initiatives that provide education, healthcare,
              and dignity to underprivileged communities across India.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {statsData.map(({ icon: Icon, title, subtitle, description, color }, i) => (
              <Card
                key={i}
                className={`border-2 border-${color}-200 bg-white/95 backdrop-blur`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-6 h-6 text-${color}-600`} />
                    <CardTitle className="text-gray-900">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{subtitle}</p>
                  <p className="text-xs text-gray-500 mt-2">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* Impact Section */}
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 border-0 mb-12 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Your Donation Impact</CardTitle>
              <CardDescription className="text-blue-100">
                See how your contribution makes a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {impactData.map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold">{item.amount}</p>
                    <p className="text-sm text-blue-100">{item.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4">
            <Button
              onClick={handlePayment}
              disabled={isLoading}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-6 px-12 rounded-full text-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Processing..." : "❤️ Donate Now"}
            </Button>
            <p className="text-center text-gray-600 text-sm max-w-md">
              Every donation is tax-deductible. 80(G) approved organization. Your contribution
              directly reaches those in need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
