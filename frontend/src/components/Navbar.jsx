import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Target, User } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import api from "../api/axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Docs", href: "/docs" },
    { name: "Contact", href: "/contact" },
    { name: "Github", href: "/Github" },
  ];

  const handleLogout = async () => {
    try {
      await api.post("/users/logout");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-white shadow-md transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <Target className="text-blue-600" />
            <span className="font-bold text-xl text-gray-800 font-serif">
              PROMOS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">

            {/* Navigation Links */}
            <div className="flex space-x-6 border-r pr-6 border-gray-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Auth Section */}
            <div className="relative flex items-center space-x-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 hover:text-blue-600 transition"
                  >
                    <User className="w-6 h-6 text-gray-700" />
                    <span className="text-sm font-semibold text-gray-700">
                      {user.name}
                    </span>
                  </button>

                  {showProfileMenu && (
                    <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg py-2 z-50">
                      <button
                        onClick={() => {
                          navigate("/profile");
                          setShowProfileMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        Edit Profile
                      </button>

                      <button
                        onClick={() => {
                          handleLogout();
                          setShowProfileMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 text-sm"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/login")}
                    className="text-gray-700 hover:text-blue-600 text-sm font-medium"
                  >
                    Log in
                  </button>

                  <button
                    onClick={() => navigate("/signup")}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-5 space-y-4">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-600 hover:text-blue-600 font-medium text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <hr className="border-gray-100" />

          {user ? (
            <>
              <div className="text-center font-semibold">
                Welcome, {user.name}
              </div>
              <button
                onClick={() => {
                  navigate("/profile");
                  setIsOpen(false);
                }}
                className="w-full border py-2 rounded-md font-medium"
              >
                Edit Profile
              </button>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full bg-red-500 text-white py-2 rounded-md font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="w-full py-2 border rounded-md font-medium"
              >
                Log in
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                  setIsOpen(false);
                }}
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
