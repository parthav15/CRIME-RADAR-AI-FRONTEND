import { motion } from "framer-motion";
import { 
  ViewfinderCircleIcon,
  HomeIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userString = localStorage.getItem('user');
      const userObj = JSON.parse(userString);
      setUser(userObj);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    toast.success('Logged out successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => window.location.href = '/', 2000);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-gray-900 border-b border-cyan-500/20 backdrop-blur-xl fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
              <ViewfinderCircleIcon className="h-8 w-8 text-cyan-400 relative" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CrimeRadar AI
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", icon: <HomeIcon className="h-5 w-5" />, href: "/" },
              { name: "Crime Map", icon: <MapIcon className="h-5 w-5" />, href: "/map" },
              { name: "Forum", icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />, href: "/community" },
              { name: "Feedback", icon: <MegaphoneIcon className="h-5 w-5" />, href: "/feedback" },
              { name: "Contact Us", icon: <EnvelopeIcon className="h-5 w-5" />, href: "/contact-us" },
            ].map((link) => (
              <Link key={link.name} to={link.href}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors group relative"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.name}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400"
                  />
                </motion.a>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="dropdown-toggle flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open dropdown menu</span>
                  <UserIcon className="w-6 h-6 text-white" />
                  <span className="hidden sm:block">
                    Hi, {user?.first_name || 'Sample'} {user?.last_name || 'Customer'}
                  </span>
                </button>
                <div
                  className={`dropdown-menu absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg ${
                    isMenuOpen ? '' : 'hidden'
                  }`}
                >
                  <Link
                    to="/dashboard"
                    className="dropdown-item block px-4 py-2 text-sm text-white hover:bg-gray-800"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/"
                    className="dropdown-item block px-4 py-2 text-sm text-white hover:bg-gray-800"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                to="/login-register"
                className="login-button px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
              >
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
