import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lifestylePenthouse from "@/assets/lifestyle-penthouse.jpg";
import lifestyleShopping from "@/assets/lifestyle-shopping.jpg";
import lifestyleTravel from "@/assets/lifestyle-travel.jpg";
import lifestyleDining from "@/assets/lifestyle-dining.jpg";

const WhyFansLinkSection = () => {
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

  const slideInLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideInRight = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
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
      {/* Animated background elements */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Left - Content */}
          <motion.div variants={slideInLeft} className="space-y-8">
            {/* Header */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="uppercase tracking-[0.3em] text-primary font-display font-bold text-sm">
                WHY FANSLINK
              </motion.div>
              
              <motion.h2 variants={itemVariants} className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-foreground">
                BETTER SYSTEMS<br />
                BETTER SUPPORT<br />
                BETTER <span className="bg-gradient-hero bg-clip-text text-transparent">RESULTS</span>
              </motion.h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={containerVariants} className="space-y-6 text-muted-foreground font-body text-lg leading-relaxed max-w-lg">
              <motion.p variants={itemVariants}>
                <span className="font-bold text-foreground">Tried the Rest? Now try what works.</span> Most agencies treat you like a number. At Fanslink, you're treated as an influencer. The typical agencies have solutions built on guesswork, not real systems. We do things differently. Our frameworks are proven, our operations airtight, and our results speak for themselves.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                We don't just manage your content, we give you the roadmap to earn more, work less, and grow faster. When you succeed, we succeed. Simple.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4"
            >
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-lg px-12 py-6 h-auto font-display font-bold uppercase tracking-wider shadow-glow hover:shadow-luxury transition-all duration-300"
              >
                APPLY NOW
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div variants={slideInRight} className="grid grid-cols-2 gap-4 h-[500px]">
            {/* Top Left */}
            <motion.div variants={imageVariants} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={lifestylePenthouse} 
                  alt="Luxury lifestyle" 
                  className="rounded-luxury w-full h-[240px] object-cover shadow-luxury"
                />
              </motion.div>
            </motion.div>
            
            {/* Top Right */}
            <motion.div variants={imageVariants} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={lifestyleShopping} 
                  alt="Luxury lifestyle" 
                  className="rounded-luxury w-full h-[240px] object-cover shadow-luxury"
                />
              </motion.div>
            </motion.div>
            
            {/* Bottom Left */}
            <motion.div variants={imageVariants} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={lifestyleTravel} 
                  alt="Luxury lifestyle" 
                  className="rounded-luxury w-full h-[240px] object-cover shadow-luxury"
                />
              </motion.div>
            </motion.div>
            
            {/* Bottom Right */}
            <motion.div variants={imageVariants} className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={lifestyleDining} 
                  alt="Luxury lifestyle" 
                  className="rounded-luxury w-full h-[240px] object-cover shadow-luxury"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyFansLinkSection;