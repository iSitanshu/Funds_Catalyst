import React, { useState } from "react";
import { Loader, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setuserData } from "@/features/user/userSlice"; // ✅ Import Redux action

const LoginPopup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  // ✅ Fix: include event param (e)
  const handleChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };

  // ✅ Handle Login Submit
  const handleloginSubmit = async (e) => {
    e.preventDefault();
    setShowError(false);
    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        userRegister
      );

      if (response.data.success) {
        const { token, existing_user } = response.data;

        // ✅ Save in localStorage
        localStorage.setItem("usertoken", token);
        localStorage.setItem("userInfo", JSON.stringify(existing_user));

        // ✅ Update Redux store
        dispatch(setuserData({ token, userInfo: existing_user }));

        // ✅ Redirect to homepage
        navigate("/");
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

  // ✅ Loading state UI
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="flex flex-col items-center space-y-4 bg-white px-8 py-6 rounded-xl shadow-lg">
          <Loader className="w-8 h-8 animate-spin text-blue-500" />
          <p className="text-gray-600 font-medium">Logging in...</p>
        </div>
      </div>
    );
  }

  // ✅ Main login form
  return (
    <div className="fixed inset-0 flex flex-col gap-6 items-center justify-center bg-black bg-opacity-60 z-50">
      <form
        className="bg-white w-[90%] sm:w-[400px] p-6 rounded-2xl shadow-xl relative"
        onSubmit={handleloginSubmit}
      >
        {/* Title + Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          <X className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Error Message */}
        {showError && (
          <p className="text-red-600 mb-2 text-sm">
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
            value={userRegister.email}
            onChange={handleChange}
            className="border border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
            value={userRegister.password}
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

        {/* Switch to Signup */}
        <p className="mt-4 text-sm text-center text-gray-700">
          Don’t have an account?{" "}
          <span
            className="text-yellow-600 font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/sign-up")}
          >
            Create one
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;
