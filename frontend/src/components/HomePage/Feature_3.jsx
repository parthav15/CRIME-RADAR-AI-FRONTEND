import { motion } from "framer-motion";
import { 
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  MegaphoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";

const Feature_3 = () => {
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
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-cyan-400">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
                <UserGroupIcon className="h-8 w-8 relative" />
              </div>
              <span className="text-lg font-semibold tracking-wide">
                COMMUNITY POWERED SECURITY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Collective Vigilance
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                For Safer Communities
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Join thousands of active users in our security network. Share insights, 
              report incidents, and collaborate with local authorities through our 
              integrated community platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { number: "25K+", label: "Active Members" },
                { number: "4.8/5", label: "User Rating" },
                { number: "150+", label: "Cities Covered" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="p-6 bg-gray-800/30 rounded-xl border border-gray-700/30 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-all group"
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6 mr-2 text-cyan-400" />
              <span className="text-xl text-gray-100">Join Discussion</span>
              <ArrowRightIcon className="h-5 w-5 ml-2 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content - Community Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative bg-gray-800 rounded-3xl border border-gray-700/30 overflow-hidden backdrop-blur-sm">
              {/* Discussion Header */}
              <div className="p-6 border-b border-gray-700/30 bg-gray-800/50">
                <div className="flex items-center gap-3">
                  <MegaphoneIcon className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-gray-100">
                    Live Community Discussions
                  </h3>
                </div>
              </div>

              {/* Discussion Thread Preview */}
              <div className="p-6 space-y-6">
                {[
                  {
                    user: "SafetyPatrol",
                    message: "Just prevented a potential break-in using CrimeRadar's predictive alerts!",
                    time: "2h ago"
                  },
                  {
                    user: "NeighborhoodWatch",
                    message: "Coordinated with local PD through the platform - amazing response time!",
                    time: "5h ago"
                  },
                  {
                    user: "UrbanGuardian",
                    message: "New safety pattern detected in downtown area, stay vigilant!",
                    time: "7h ago"
                  }
                ].map((post, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-gray-700/10 rounded-xl hover:bg-gray-700/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 rounded-full bg-cyan-400/10 flex items-center justify-center">
                        <ShieldCheckIcon className="h-4 w-4 text-cyan-400" />
                      </div>
                      <div>
                        <div className="font-medium text-cyan-400">{post.user}</div>
                        <div className="text-xs text-gray-400">{post.time}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{post.message}</p>
                  </motion.div>
                ))}
              </div>

              {/* Active Users Footer */}
              <div className="p-4 bg-gray-800/50 border-t border-gray-700/30">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="flex -space-x-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="h-6 w-6 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center"
                      >
                        <UserGroupIcon className="h-3 w-3 text-cyan-400" />
                      </div>
                    ))}
                  </div>
                  <span>128 active users discussing now</span>
                </div>
              </div>
            </div>
          </motion.div>
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

export default Feature_3;