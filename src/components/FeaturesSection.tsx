import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, TrendingUp, BarChart3, Users, Diamond, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  const features = [
    {
      icon: Calendar,
      title: "Viral Content, Ready For You Weekly",
      description: "We tell you exactly what to post to grow fast and get paid"
    },
    {
      icon: MessageCircle,
      title: "24/7 UK Chat Team",
      description: "Our expert UK native chat team engages your fans around the clock, so you earn while you sleep."
    },
    {
      icon: TrendingUp,
      title: "Go Viral Organically",
      description: "We grow your socials with content that fans crave, no bots, no gimmicks."
    },
    {
      icon: BarChart3,
      title: "Strategy Built for 6 & 7 Figures",
      description: "Work directly with experts who've scaled top creators, and know exactly how to get you there."
    },
    {
      icon: Users,
      title: "Your Own Growth Team",
      description: "From content to strategy to chat systems our full team is behind you 24/7 to drive success."
    },
    {
      icon: Diamond,
      title: "Access our Exclusive perks",
      description: "learn from our experience and have access to our accounting and banking systems"
    }
  ];

  const benefits = [
    {
      title: "Burnout Stops Growth",
      description: "Without proper systems, burnout is guaranteed. We handle the hard work so you can stay focused and consistent."
    },
    {
      title: "You Set the Boundaries",
      description: "You don't need to post explicit content to succeed. We respect your limits and build your brand around them."
    },
    {
      title: "No underground schemes. Just Proven Strategy.",
      description: "Quick hacks don't last. We use strategies that actually work and keep working long-term."
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div variants={containerVariants} className="text-center mb-20">
          <motion.div
            variants={itemVariants}
            className="uppercase tracking-[0.2em] text-purple-soft font-body font-medium text-sm mb-8"
          >
            Our Complete Solution
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-foreground mb-8 relative px-4"
          >
            <span className="text-primary block xs:inline">EVERYTHING</span>{' '}
            <span className="text-foreground block xs:inline">YOU NEED</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-soft/20 to-primary/20 blur-3xl -z-10 opacity-30"></div>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto"
          >
            You get a full team behind you — content strategy, 24/7 fan engagement, viral social growth, even long-term wealth planning.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
          {/* Features Grid - 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:shadow-purple-soft/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-purple-soft/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-soft/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-purple-soft" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Floating Benefits Box */}
          <div className="lg:col-span-1">
            <motion.div
              variants={itemVariants}
              className="bg-foreground/95 backdrop-blur-sm rounded-2xl p-8 space-y-6 shadow-2xl sticky top-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base mb-2 text-white leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-white/70 font-body text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <Button 
            className="bg-gradient-to-r from-purple-soft to-primary text-white font-display font-bold text-base px-12 py-6 h-auto uppercase tracking-wider rounded-2xl shadow-2xl shadow-purple-soft/30 hover:shadow-purple-soft/50 hover:scale-105 transition-all duration-300"
          >
            APPLY NOW
          </Button>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-soft/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl"
      />
    </motion.section>
  );
};

export default FeaturesSection;