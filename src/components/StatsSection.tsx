import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      label: "Generated Income",
      value: "$2.4M",
    },
    {
      label: "Total amount of Subs",
      value: "850K",
    },
    {
      label: "Reach",
      value: "45.2M",
    },
  ];

  const logos = [
    "Logo 1",
    "Logo 2", 
    "Logo 3",
    "Logo 4",
    "Logo 5",
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
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-muted rounded-lg px-6 py-3 text-muted-foreground font-medium text-sm"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-primary rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-xs sm:text-sm font-medium text-primary-foreground/80 mb-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
                    {stat.value}
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