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
          <h2 className="text-5xl font-black font-display text-foreground mb-12 sm:mb-16 leading-tight uppercase">
            CREATOR RESULTS IN THE <span className="text-primary">LAST 12 MONTHS</span>
          </h2>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          }} className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-lg sm:text-xl font-bold text-primary mb-6 uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="flex items-center justify-center gap-4">
                  {index !== 0 && <stat.icon className="w-6 h-6 text-primary" />}
                  <div className="bg-primary/10 rounded-xl px-4 py-2">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-primary">
                      {stat.value}
                    </span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default StatsSection;