// src/components/LoginPopup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Loader, X } from "lucide-react";
import { setAdminData } from "@/features/adminSlice";

const LoginPopup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleloginSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/admin_login`,
        userRegister
      );

      if (response.data.success) {
        const { token, existing_admin } = response.data;

        // ✅ Store in localStorage
        localStorage.setItem("admintoken", token);
        localStorage.setItem("adminInfo", JSON.stringify(existing_admin));

        // ✅ Update Redux
        dispatch(setAdminData({ token, adminInfo: existing_admin }));
        console.log(token, existing_admin)

        // ✅ Redirect
        setTimeout(() => {
          navigate("/admin"); // redirect after signup success
        }, 500);
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.error("Login error:", error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center space-y-4">
          <Loader className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-60 z-50">
      <form
        className="bg-white w-[90%] sm:w-[400px] p-6 rounded-2xl shadow-xl relative"
        onSubmit={handleloginSubmit}
      >
        {/* Title and Close */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Login</h2>
          <X className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Error */}
        {showError && (
          <p className="text-red-600 mb-2">
            Invalid email or password. Please try again.
          </p>
        )}

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-300 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-700">
          Not an admin?{" "}
          <span
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/sign-up")}
          >
            Create a new account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
