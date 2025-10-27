
import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NewsLetterSection = () => {
  const [registeredMail, setRegisteredMail] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    // Enhanced email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/newsletter/add_email`,
        { email }
      );

      if (response.status === 200) {
        setRegisteredMail(true);
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      if (err.response?.status === 400 && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[400px] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1470&q=80')`,
          filter: "brightness(0.6)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-md w-full space-y-8">
        {!registeredMail ? (
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                Subscribe to Our Newsletter
              </h2>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="flex-grow border-2 border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 px-4 py-2 text-base"
                />
                <Button
                  type="button"
                  disabled={loading}
                  onClick={handleSubscribe}
                  className="bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 px-6 py-2 text-base font-medium transition-colors duration-300 disabled:opacity-70"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-lg p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto mb-4 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-800 mb-4">
              Subscription Successful!
            </p>
            <p className="text-gray-600">
              Thank you for subscribing. Check your email to confirm your
              subscription.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLetterSection;
