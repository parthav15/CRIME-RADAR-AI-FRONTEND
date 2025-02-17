import { motion } from "framer-motion";
import { ArrowRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import videoSource from '../../assets/crime_video.mp4'

const HeroSection = () => {  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              Crime Radar AI
            </h1>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-3xl text-gray-300 max-w-3xl mx-auto"
          >
            Real-time Crime Tracking & Predictive Analytics System
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-cyan-500/20 border border-cyan-400/30 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-all group"
            >
              <GlobeAltIcon className="h-6 w-6 mr-2 text-cyan-400" />
              <span className="text-xl text-gray-100">Explore Crime Map</span>
              <div className="ml-3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-4 bg-gray-800/20 border border-gray-700/30 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-all group"
            >
              <span className="text-xl text-gray-100">View Analytics</span>
              <ArrowRightIcon className="h-5 w-5 ml-2 text-cyan-400 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scanning Line Effect */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"
        />
      </div>
    </section>
  );
};

export default HeroSection;