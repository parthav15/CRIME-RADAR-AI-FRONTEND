import { motion } from "framer-motion";
import { ViewfinderCircleIcon, CpuChipIcon, ChartBarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const Feature_1 = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="h-full w-full bg-grid-white/[0.03] bg-[size:40px_40px]" />
      </div>

      {/* Glowing Background Effect */}
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 text-cyan-400 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
                <ViewfinderCircleIcon className="h-8 w-8 relative" />
              </div>
              <span className="text-lg font-semibold tracking-wide">
                CRIME PREVENTION SYSTEM
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              Next-Gen Crime
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Intelligence Platform
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              CrimeRadar AI combines advanced machine learning with real-time data analysis to 
              predict, visualize, and prevent criminal activities. Our system empowers communities 
              with actionable insights and predictive analytics for enhanced public safety.
            </motion.p>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: <CpuChipIcon className="h-6 w-6" />,
                  title: "AI-Powered Predictions",
                  text: "Deep learning algorithms for crime forecasting"
                },
                {
                  icon: <ChartBarIcon className="h-6 w-6" />,
                  title: "Real-time Analytics",
                  text: "Live crime data visualization and trends"
                },
                {
                  icon: <ViewfinderCircleIcon className="h-6 w-6" />,
                  title: "Heatmap Tracking",
                  text: "Interactive crime density mapping"
                },
                {
                  icon: <ShieldCheckIcon className="h-6 w-6" />,
                  title: "Community Shield",
                  text: "Public safety collaboration platform"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="relative aspect-square bg-gray-800 rounded-3xl border border-gray-700/30 overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
              <div className="p-8 h-full flex flex-col justify-center space-y-6">
                <div className="text-cyan-400">
                  <div className="text-6xl font-bold mb-2">87%</div>
                  <div className="text-lg">Prediction Accuracy</div>
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-progress" 
                      style={{ width: '87%' }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>AI Confidence Level</span>
                    <span>v2.4.9 NeuralCore</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature_1;