"use client";

import { useState } from "react";
import { MailCheck, XCircle } from "lucide-react";

export default function CouponSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // TODO: call backend API to send coupon
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-3xl shadow-xl p-8 max-w-lg mx-auto my-12  transition-all duration-300 hover:scale-[1.02]">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
        Get Your Exclusive Coupon
      </h3>

      <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 border-2 border-pink-300 focus:border-pink-500 rounded-lg p-3 transition-all duration-300 focus:ring-2 focus:ring-pink-400 focus:outline-none placeholder-gray-400 text-gray-900"
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          Submit
        </button>
      </form>

      {status === "success" && (
        <div className="flex items-center gap-2 mt-4 text-green-600 text-sm font-medium justify-center animate-fadeIn">
          <MailCheck className="w-5 h-5" /> Coupon sent to your email! 🎉
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 mt-4 text-red-600 text-sm font-medium justify-center animate-fadeIn">
          <XCircle className="w-5 h-5" /> Please enter a valid email.
        </div>
      )}
    </div>
  );
}
