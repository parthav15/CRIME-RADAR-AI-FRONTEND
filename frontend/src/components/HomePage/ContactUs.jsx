import { motion } from "framer-motion";
import { 
  UserCircleIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  MapPinIcon
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="h-full w-full bg-grid-white/[0.03] bg-[size:40px_40px]" />
      </div>
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-cyan-400">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
                <MapPinIcon className="h-8 w-8 relative" />
              </div>
              <span className="text-lg font-semibold tracking-wide">
                SECURE CONNECTION ESTABLISHED
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Contact Security
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Operations Center
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              All communications are encrypted end-to-end. For urgent matters,
              include your case ID and location coordinates. Average response
              time: 2.7 minutes.
            </p>

            {/* Security Verification */}
            <div className="p-6 bg-gray-800/30 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <ShieldCheckIcon className="h-12 w-12 text-cyan-400" />
                <div>
                  <div className="text-lg font-semibold text-gray-100">
                    Connection Secured
                  </div>
                  <div className="text-sm text-cyan-400 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    TLS 1.3 Protocol Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-cyan-400 mb-2">
                  Your Identity
                </label>
                <div className="relative">
                  <UserCircleIcon className="h-5 w-5 text-cyan-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-700/30 rounded-lg backdrop-blur-sm text-gray-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-cyan-400 mb-2">
                  Secure Channel
                </label>
                <div className="relative">
                  <EnvelopeIcon className="h-5 w-5 text-cyan-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-700/30 rounded-lg backdrop-blur-sm text-gray-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                    placeholder="secure@domain.com"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-cyan-400 mb-2">
                Incident Type
              </label>
              <div className="relative">
                <select className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-700/30 rounded-lg backdrop-blur-sm text-gray-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 appearance-none transition-all">
                  <option>Select priority level</option>
                  <option>Critical Security Breach</option>
                  <option>Urgent Incident Report</option>
                  <option>General Inquiry</option>
                  <option>Feature Request</option>
                </select>
                <DocumentTextIcon className="h-5 w-5 text-cyan-400 absolute left-3 top-3" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <label className="block text-sm font-medium text-cyan-400 mb-2">
                Encrypted Message
              </label>
              <div className="relative">
                <textarea
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-700/30 rounded-lg backdrop-blur-sm text-gray-100 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all"
                  placeholder="Enter encrypted message..."
                />
                <div className="absolute left-3 top-3">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-cyan-400/50 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-4"
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 hover:bg-cyan-500/30 transition-all group"
              >
                <span className="text-xl text-gray-100 mr-2">Transmit Message</span>
                <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </button>
            </motion.div>
          </motion.form>
        </div>

        {/* Scanning Line Animation */}
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default ContactSection;