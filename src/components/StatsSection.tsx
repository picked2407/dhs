import { motion } from "framer-motion";
import { Eye, CalendarDays } from "lucide-react";
const StatsSection = () => {
  const stats = [{
    label: "Generated Income",
    value: "$3.562M",
    icon: CalendarDays
  }, {
    label: "Total amount of Subs",
    value: "116,243",
    icon: CalendarDays
  }, {
    label: "Reach",
    value: "11,372,526",
    icon: Eye
  }];
  return <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black font-display text-foreground mb-12 sm:mb-16 leading-tight">
            Creator results in the last 12 months
          </h2>
          
          {/* Stats Section */}
          <div className="bg-primary rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {stats.map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className={`text-center p-8 sm:p-8 ${index < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/20' : ''}`}>
                  <div className="text-sm sm:text-base font-bold text-white/90 mb-4 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="flex items-center justify-center gap-4 text-white">
                    {index !== 0 && <stat.icon className="w-8 h-8 sm:w-10 sm:h-10" />}
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display">
                      {stat.value}
                    </span>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default StatsSection;