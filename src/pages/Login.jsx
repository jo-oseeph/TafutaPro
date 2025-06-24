import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulated login logic (replace with real authentication)
    if (identifier === 'admin@tafuta.com') {
      navigate('/admin/dashboard');
    } else if (identifier.startsWith('07')) {
      navigate('/provider/dashboard'); // Simulated phone = provider
    } else if (identifier.includes('@')) {
      navigate('/customer/dashboard'); // Simulated email = customer
    } else {
      setError('Invalid credentials or role not recognized.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Login to TafutaPro</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Email or Phone Number</label>
            <input
              type="text"
              placeholder="Enter email or phone"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-blue-600 hover:underline focus:outline-none"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="text-blue-600"
              />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Login
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
