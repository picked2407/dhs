import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import promiseLuxury from "@/assets/promise-luxury.jpg";

const PromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 80,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const scaleVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
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
      id="price" 
      ref={ref} 
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"} 
      variants={containerVariants} 
      className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden scroll-mt-16 py-16 md:py-0"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm" style={{
        backgroundImage: `url(${promiseLuxury})`
      }}>
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div variants={containerVariants} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Trust Header */}
        <motion.div variants={itemVariants} className="uppercase tracking-[0.3em] text-primary font-display font-bold text-sm mb-8 opacity-90">
          OUR PROMISE TO YOU
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 variants={containerVariants} className="font-display font-black text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.85] text-white mb-6 sm:mb-8">
          WE'LL{' '}
          <motion.span 
            initial={{
              backgroundPosition: "0% 50%"
            }} 
            animate={{
              backgroundPosition: "100% 50%"
            }} 
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }} 
            className="bg-gradient-to-r from-primary via-primary to-primary-glow bg-[length:200%_100%] bg-clip-text text-transparent animate-pulse"
          >
            FIX
          </motion.span>{' '}
          YOUR SYSTEMS<br />
          IN 90 DAYS<br />
          <motion.span variants={itemVariants} className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            OR WE'LL WORK FOR FREE
          </motion.span>
        </motion.h1>
        
        {/* Subtext */}
        <motion.p variants={itemVariants} className="text-white/70 font-body text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Follow our proven structure and start getting the results you see from the world's top creators.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div 
          variants={scaleVariants} 
          whileHover={{
            scale: 1.05
          }} 
          whileTap={{
            scale: 0.95
          }} 
          className="px-4"
        >
          <Button className="bg-white text-black hover:text-primary font-display font-bold text-sm sm:text-base px-8 sm:px-12 lg:px-16 py-4 sm:py-6 h-auto uppercase tracking-wider shadow-2xl transition-all duration-300 border-2 border-white w-full sm:w-auto max-w-xs sm:max-w-none mx-auto" asChild>
            <a href="/apply">APPLY NOW</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default PromiseSection;