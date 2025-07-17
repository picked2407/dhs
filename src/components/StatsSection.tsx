import { motion } from "framer-motion";
import { PenTool, Eye, DollarSign } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      label: "Generated Income",
      value: "$13.66M",
      icon: DollarSign,
    },
    {
      label: "Total amount of Subs",
      value: "146.2M",
      icon: Eye,
    },
    {
      label: "Reach",
      value: "23,723",
      icon: PenTool,
    },
  ];

  const logos = [
    "pliability",
    "CRAYO", 
    "Musicfy",
    "Cal AI",
    "feather",
    "zabihan",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-2xl p-8 sm:p-12"
        >
          {/* Logo Section */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="text-muted-foreground font-medium text-sm sm:text-base px-3 py-2"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-black rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`text-center p-6 sm:p-8 ${
                    index < stats.length - 1 ? 'border-r border-white/20' : ''
                  }`}
                >
                  <div className="text-xs sm:text-sm font-medium text-white/80 mb-3 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center gap-3 text-white">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display">
                      {stat.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;