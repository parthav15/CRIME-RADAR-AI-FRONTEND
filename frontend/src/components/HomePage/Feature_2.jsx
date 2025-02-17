import { motion } from "framer-motion";
import { 
  LockClosedIcon,
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";

const Feature_2 = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="h-full w-full bg-grid-white/[0.03] bg-[size:40px_40px]" />
      </div>
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-3 text-cyan-400 mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
              <ShieldCheckIcon className="h-8 w-8 relative" />
            </div>
            <span className="text-lg font-semibold tracking-wide">
              TRUSTED BY AUTHORITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            Why Law Enforcement
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Chooses CrimeRadar AI
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <LockClosedIcon className="h-8 w-8" />,
              title: "Military-Grade Security",
              stat: "99.9%",
              desc: "Data encryption & secure protocols",
              delay: 0.2
            },
            {
              icon: <CpuChipIcon className="h-8 w-8" />,
              title: "AI Prediction Accuracy",
              stat: "94%",
              desc: "Machine learning crime forecasting",
              delay: 0.4
            },
            {
              icon: <GlobeAltIcon className="h-8 w-8" />,
              title: "Global Coverage",
              stat: "150+",
              desc: "Cities monitored worldwide",
              delay: 0.6
            },
            {
              icon: <ChartBarIcon className="h-8 w-8" />,
              title: "Real-Time Updates",
              stat: "24/7",
              desc: "Crime data monitoring",
              delay: 0.8
            },
            {
              icon: <UserGroupIcon className="h-8 w-8" />,
              title: "Community Trust",
              stat: "4.9/5",
              desc: "User satisfaction rating",
              delay: 1.0
            },
            {
              icon: <ShieldCheckIcon className="h-8 w-8" />,
              title: "Prevention Rate",
              stat: "68%",
              desc: "Crime reduction in pilot cities",
              delay: 1.2
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: item.delay }}
              className="p-8 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-cyan-500/10 rounded-2xl text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mb-2">
                  {item.stat}
                </h3>
                <h4 className="text-xl font-semibold text-gray-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Animated Scanning Effect */}
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

export default Feature_2;