import { motion } from "framer-motion";
import { 
  ShieldCheckIcon,
  GlobeAltIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 border-t border-cyan-500/10 overflow-hidden">
      {/* Scanning Line Effect */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute top-0 left-0 w-screen h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
                <ShieldCheckIcon className="h-8 w-8 text-cyan-400 relative" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CrimeRadar AI
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Next-generation crime prevention and community safety platform
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span>All systems secure</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-cyan-400">Quick Access</h3>
            <ul className="space-y-3">
              {['Incident Reports', 'Safety Map', 'Community Forum', 'Live Dashboard'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                    <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-cyan-400">Command Center</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">24/7 Emergency: +1 555-SAFE</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Global Operations Network</span>
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">24/7 Monitoring Active</span>
              </li>
            </ul>
          </motion.div>

          {/* Social/Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-cyan-400">Secure Channels</h3>
            <div className="flex gap-4">
              {[
                { icon: <GlobeAltIcon className="h-5 w-5" />, label: "Portal" },
                { icon: <DocumentTextIcon className="h-5 w-5" />, label: "Protocols" },
                { icon: <ShieldCheckIcon className="h-5 w-5" />, label: "Certifications" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-cyan-400/30 transition-all"
                  href="#"
                >
                  <span className="sr-only">{item.label}</span>
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-cyan-400">CrimeRadar AI</span>. 
            All security protocols active. 
            <a href="#" className="ml-2 text-cyan-400 hover:text-cyan-300">Privacy Matrix</a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;