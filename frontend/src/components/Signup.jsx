import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { AuthContext } from '../context/AuthContext'; 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

 const signupUser = async () => {
  try {
    setLoading(true);
    setError('');

    const response = await api.post("/users/register", {
      name,
      email,
      password,
    });

    // Backend sets access & refresh tokens in cookies
    // We just store user in context
    setUser(response.data.user);

    navigate('/');

  } catch (error) {
    console.error("Signup error:", error);
    setError(error.response?.data?.message || "Signup failed");
  } finally {
    setLoading(false);
  }
};


  const handleRegister = async (e) => {
    e.preventDefault();
    await registerUser();
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
          Create an account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-5" onSubmit={handleRegister}>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg"
                  placeholder="Minimum 8 characters"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-bold"
            >
              Create Account
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
