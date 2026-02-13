import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Mail, Lock, ArrowLeft } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import api from '../api/axios';

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // 🔥 LOGIN FUNCTION (Cookie Based Auth)
  const loginUser = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await api.post("/users/login", {
        email,
        password,
      });

      // Backend sets accessToken & refreshToken in cookies
      // We only store user in context
      setUser(response.data.data);
      navigate('/');

    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginUser();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <button 
        onClick={() => navigate('/')}
        className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-blue-600 transition"
      >
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Target className="text-blue-600" size={48} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100">

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-bold disabled:bg-gray-400 transition"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
