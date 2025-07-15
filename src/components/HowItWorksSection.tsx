import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const stepVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };


  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Animated background decoration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} className="text-center mb-16">
          {/* Small heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-primary font-display font-bold text-lg uppercase tracking-wider">
              Our Process
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h2 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-foreground leading-tight">
            YOUR ROADMAP TO
            <span className="block">FINANCIAL FREEDOM</span>
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Step 1 */}
          <motion.div 
            variants={stepVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center group"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <span className="text-6xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">01</span>
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-wider">
              APPLY OR MESSAGE US NOW
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-lg leading-relaxed">
              Fill out our form or message us now to secure your space at FansLink
            </motion.p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            variants={stepVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center group"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6"
            >
              <span className="text-6xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">02</span>
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-wider">
              LAUNCH YOUR BESPOKE STRATEGY
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-lg leading-relaxed">
              We build your personal brand and custom growth plan — handling fans, marketing, content, and growth so you stay focused and stress-free.
            </motion.p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            variants={stepVariants}
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center group"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-6"
            >
              <span className="text-6xl font-display font-black text-primary/20 group-hover:text-primary/40 transition-colors duration-300">03</span>
            </motion.div>
            <motion.h3 variants={itemVariants} className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-wider">
              PERFORMANCE ANALYSIS AND GROWTH
            </motion.h3>
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-lg leading-relaxed">
              We track, test, and optimise weekly so your income grows consistently; no guessing, no stress. We know what works and make it easy for you to follow and scale.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-center mb-12"
        >
          <Button 
            variant="luxury" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto font-display font-bold uppercase tracking-wider shadow-glow hover:shadow-luxury transition-all duration-300"
          >
            APPLY NOW
          </Button>
        </motion.div>

        {/* Bottom text */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-muted-foreground font-body text-lg mr-4 inline">
            Want to join FansLink?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button 
              variant="ghost" 
              className="text-primary font-display font-bold uppercase tracking-wider text-lg p-0 h-auto hover:bg-transparent"
              asChild
            >
              <a href="/contact" className="inline-flex items-center">
                APPLY NOW
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;