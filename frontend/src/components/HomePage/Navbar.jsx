import { motion } from "framer-motion";
import { 
  ViewfinderCircleIcon,
  HomeIcon,
  MapIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  EnvelopeIcon,
  UserIcon
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-gray-900 border-b border-cyan-500/20 backdrop-blur-xl fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", icon: <HomeIcon className="h-5 w-5" /> },
              { name: "Crime Map", icon: <MapIcon className="h-5 w-5" /> },
              { name: "Forum", icon: <ChatBubbleLeftRightIcon className="h-5 w-5" /> },
              { name: "Feedback", icon: <MegaphoneIcon className="h-5 w-5" /> },
              { name: "Contact Us", icon: <EnvelopeIcon className="h-5 w-5" /> },
            ].map((link) => (
              <motion.a
                key={link.name}
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
            ))}
          </div>

          {/* Auth Section */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <button className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
              <UserIcon className="h-5 w-5 mr-2 text-cyan-400" />
              <span className="text-gray-200">Login/Register</span>
              <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;