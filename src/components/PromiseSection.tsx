import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import promiseLuxury from "@/assets/promise-luxury.jpg";

const PromiseSection = () => {
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

  const scaleVariants = {
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
      className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 blur-sm"
        style={{
          backgroundImage: `url(${promiseLuxury})`
        }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Trust Header */}
        <motion.div
          variants={itemVariants}
          className="uppercase tracking-[0.3em] text-primary font-display font-bold text-sm mb-8 opacity-90"
        >
          OUR PROMISE TO YOU
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1
          variants={containerVariants}
          className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.85] text-white mb-8"
        >
          WE'LL{' '}
          <motion.span
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="bg-gradient-to-r from-primary via-primary to-primary-glow bg-[length:200%_100%] bg-clip-text text-transparent animate-pulse"
          >
            TRIPLE
          </motion.span>{' '}
          YOUR<br />
          INCOME IN 90 DAYS<br />
          <motion.span
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            — OR WE WORK FOR FREE
          </motion.span>
        </motion.h1>
        
        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-white/70 font-body text-lg sm:text-xl leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          We've studied what works from the biggest creators in the world — and fixed what doesn't.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          variants={scaleVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-white text-black font-display font-bold text-base px-16 py-6 h-auto uppercase tracking-wider rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 border-2 border-white"
          >
            APPLY NOW
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary-glow rounded-full"
      />
    </motion.section>
  );
};

export default PromiseSection;