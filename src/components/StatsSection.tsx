import { motion } from "framer-motion";
import { PenTool, CalendarDays, DollarSign } from "lucide-react";

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
      icon: CalendarDays,
    },
    {
      label: "Reach",
      value: "23,723",
      icon: PenTool,
    },
  ];


  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-foreground mb-8 sm:mb-12">
            Creator results in the last 12 months
          </h2>
          
          {/* Stats Section */}
          <div className="bg-primary rounded-xl overflow-hidden shadow-lg">
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