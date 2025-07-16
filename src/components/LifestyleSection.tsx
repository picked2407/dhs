import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import luxuryYachtBranded from "@/assets/luxury-yacht-branded.jpg";
import beachLifestyleBranded from "@/assets/beach-lifestyle-branded.jpg";
import privateJetBranded from "@/assets/private-jet-branded.jpg";
import luxuryCarBranded from "@/assets/luxury-car-branded.jpg";

const LifestyleSection = () => {
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
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
      className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10 opacity-50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]"
        >
          
          {/* Left - Image Grid */}
          <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-2 sm:gap-4 h-[300px] sm:h-[400px] lg:h-[500px]">
              {/* Top Left - Yacht */}
              <motion.div variants={imageVariants} className="relative group">
                <div className="absolute inset-0 bg-gradient-hero rounded-luxury blur opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                <img 
                  src={luxuryYachtBranded} 
                  alt="Luxury yacht lifestyle with branded swimwear" 
                  className="relative rounded-luxury w-full h-[140px] sm:h-[180px] lg:h-[240px] object-cover shadow-luxury hover:scale-105 transition-transform duration-500 z-10"
                />
              </motion.div>
              
              {/* Top Right - Beach */}
              <motion.div variants={imageVariants} className="relative group mt-4 sm:mt-6 lg:mt-8">
                <div className="absolute inset-0 bg-gradient-hero rounded-luxury blur opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                <img 
                  src={beachLifestyleBranded} 
                  alt="Beach lifestyle with branded beachwear" 
                  className="relative rounded-luxury w-full h-[140px] sm:h-[180px] lg:h-[240px] object-cover shadow-luxury hover:scale-105 transition-transform duration-500 z-10"
                />
              </motion.div>
              
              {/* Bottom Left - Private Jet */}
              <motion.div variants={imageVariants} className="relative group -mt-2 sm:-mt-4">
                <div className="absolute inset-0 bg-gradient-hero rounded-luxury blur opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                <img 
                  src={privateJetBranded} 
                  alt="Private jet lifestyle with branded fashion" 
                  className="relative rounded-luxury w-full h-[140px] sm:h-[180px] lg:h-[240px] object-cover shadow-luxury hover:scale-105 transition-transform duration-500 z-10"
                />
              </motion.div>
              
              {/* Bottom Right - Luxury Car */}
              <motion.div variants={imageVariants} className="relative group mt-2 sm:mt-4">
                <div className="absolute inset-0 bg-gradient-hero rounded-luxury blur opacity-20 group-hover:opacity-30 transition-opacity z-0"></div>
                <img 
                  src={luxuryCarBranded} 
                  alt="Luxury car lifestyle with branded clothing" 
                  className="relative rounded-luxury w-full h-[140px] sm:h-[180px] lg:h-[240px] object-cover shadow-luxury hover:scale-105 transition-transform duration-500 z-10"
                />
              </motion.div>
            </div>
            
            {/* Floating decorative elements */}
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
            ></motion.div>
            <motion.div 
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
            ></motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={containerVariants} className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <div className="uppercase tracking-[0.3em] text-primary font-display font-bold text-sm">
                Earn More • Work Less
              </div>
              
              <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-foreground">
                DESIGNED FOR{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  CONSISTENCY
                </span>
                <br />
                POWERED BY OUR SYSTEMS
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 text-muted-foreground font-body text-base sm:text-lg leading-relaxed">
              <p className="font-semibold text-foreground text-lg sm:text-xl">
                You see it every day on social media; traveling the world, connecting with successful people, 
                dining at the best restaurants, and driving luxury cars.
              </p>
              
              <p className="text-base sm:text-lg">
                With consistent systems and a team behind you, your account runs even when you're not watching. 
                No burnout. No guesswork. Just systems that scale.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4 flex justify-center lg:justify-start"
            >
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 h-auto font-display font-bold uppercase tracking-wider shadow-glow hover:shadow-luxury transition-all duration-300 w-full sm:w-auto max-w-xs sm:max-w-none lg:max-w-fit"
              >
                JOIN TOP 0.1%
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LifestyleSection;