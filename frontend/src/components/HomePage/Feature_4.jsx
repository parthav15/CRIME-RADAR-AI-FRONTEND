import { motion } from "framer-motion";
import { 
  UserCircleIcon,
  ShieldCheckIcon,
  ChatBubbleLeftEllipsisIcon,
  HandThumbUpIcon,
  StarIcon
} from "@heroicons/react/24/outline";

const Feature_4 = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="h-full w-full bg-grid-white/[0.03] bg-[size:40px_40px]" />
      </div>
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 text-cyan-400 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur opacity-30 animate-pulse" />
              <ChatBubbleLeftEllipsisIcon className="h-8 w-8 relative" />
            </div>
            <span className="text-lg font-semibold tracking-wide">
              TRUSTED FEEDBACK
            </span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            What Our Users Say
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              About CrimeRadar AI
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Det. Sarah Mitchell",
              role: "NYPD Cyber Crimes Unit",
              text: "CrimeRadar AI has revolutionized our predictive policing strategies. The accuracy of its forecasts helped us prevent 15 major incidents last quarter alone.",
              rating: 5
            },
            {
              name: "James Coleman",
              role: "Neighborhood Watch Leader",
              text: "The community integration features are phenomenal. Real-time alerts have made our neighborhood 40% safer according to recent surveys.",
              rating: 5
            },
            {
              name: "Dr. Emily Zhou",
              role: "Criminal Psychologist",
              text: "The behavioral pattern analysis is unmatched. It's become an essential tool in our urban security research projects.",
              rating: 4
            },
            {
              name: "Marcus Reynolds",
              role: "Security Firm CEO",
              text: "Integration with existing systems was seamless. Our response times improved dramatically after implementation.",
              rating: 5
            },
            {
              name: "Linda Park",
              role: "City Council Member",
              text: "The public transparency features built trust in our community while maintaining essential security protocols.",
              rating: 5
            },
            {
              name: "Alex Ramirez",
              role: "Crime Analyst",
              text: "The heatmap visualization and real-time data streaming have become indispensable to our daily operations.",
              rating: 4
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-gray-800/30 rounded-2xl backdrop-blur-sm border border-gray-700/30 hover:border-cyan-400/30 transition-all group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-cyan-400/20 group-hover:text-cyan-400/40 transition-colors">
                <ChatBubbleLeftEllipsisIcon className="h-16 w-16" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-full">
                  <UserCircleIcon className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                  <p className="text-sm text-cyan-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Animated Scanning Line */}
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

export default Feature_4;