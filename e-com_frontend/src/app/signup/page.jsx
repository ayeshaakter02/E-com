"use client";

import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------- SIGNUP ----------
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API}/signup`,
        form
      );
      alert("OTP sent to your email");
      setStep(2);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------- VERIFY OTP ----------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API}/verify-otp`,
        {
          email: form.email,
          otp,
        }
      );
      alert("Account verified successfully 🎉");
      setStep(3);
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-extrabold text-center mb-6">
          {step === 1 && "Create Account"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Signup Complete"}
        </h2>

        {/* ---------- STEP 1 : SIGNUP ---------- */}
        {step === 1 && (
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="input"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700"
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </form>
        )}

        {/* ---------- STEP 2 : OTP ---------- */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              required
              onChange={(e) => setOtp(e.target.value)}
              className="input text-center tracking-widest"
            />

            <button
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700"
            >
              Verify OTP
            </button>
          </form>
        )}

        {/* ---------- STEP 3 : SUCCESS ---------- */}
        {step === 3 && (
          <div className="text-center">
            <p className="text-green-600 font-semibold">
              🎉 Your account has been verified!
            </p>
            <p className="mt-2 text-sm text-gray-600">
              You can now login to your account.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          height: 44px;
          padding: 0 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default SignupPage;
