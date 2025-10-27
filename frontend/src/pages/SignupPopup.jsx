import React, { useState } from "react";
import axios from "axios";
import { Loader, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignupPopup = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  // ✅ Handle signup submit
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    setShowError(false);
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`,
        userDetail
      );

      if (response.data.success) {
        // ✅ Signup successful → redirect to login
        navigate("/sign-in");
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Signup error:", error);

      // If user already exists or validation fails
      if (error.response && error.response.status === 400) {
        setShowError(true);
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Loading Screen
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col items-center space-y-4 bg-white px-8 py-6 rounded-xl shadow-lg">
          <Loader className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-gray-600 font-medium">Creating your account...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-60 z-50">
      <form
        onSubmit={handleSubmitSignup}
        className="bg-white w-[90%] sm:w-[400px] p-6 rounded-2xl shadow-xl relative"
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Sign up</h2>
          <X className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Error Message */}
        {showError && (
          <p className="text-red-600 text-sm mb-3">
            Account already exists or invalid details. Try logging in.
          </p>
        )}

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            required
            value={userDetail.username}
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={userDetail.email}
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={userDetail.password}
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-300 text-gray-900 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Sign up
        </button>

        {/* Switch Auth Mode */}
        <p className="mt-4 text-sm text-center text-gray-700">
          Already have an account?{" "}
          <span
            className="text-yellow-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/sign-in")}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupPopup;
