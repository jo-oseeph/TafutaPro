import React from 'react'
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-heading mb-6 text-center">
          Create an Account
        </h2>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-brand"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-brand"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="0712345678"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-brand"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-4 py-2 pr-10 focus:outline-brand"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500 hover:text-brand"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Account Type */}
          <div>
            <label className="block text-sm font-medium text-heading mb-1">
              Account Type
            </label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-brand"
              defaultValue=""
            >
              <option value="" disabled>
                Select account type
              </option>
              <option value="customer">Customer</option>
              <option value="provider">Service Provider</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand text-white py-2 rounded hover:bg-heading transition"
          >
            Register
          </button>

          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-brand hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
   
  )
}

export default Signup;