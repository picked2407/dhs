import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "/lovable-uploads/a8cc42a1-7313-42ba-a835-b19d2dad70ee.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={slideInRight}
        className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
      >
        <div className="relative h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent via-70% to-background" />
          
          {/* Floating elements over the image */}
        </div>
      </motion.div>

      {/* Content - Left side */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="lg:w-3/5 lg:pr-12 xl:pr-16">
          
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-luxury px-6 py-3 mb-8"
          >
            <span className="text-primary font-display font-bold uppercase tracking-wide text-sm">
              Elite Talent Management
            </span>
          </motion.div>

          {/* Main Headline - Stacked design */}
          <motion.div
            variants={containerVariants}
            className="space-y-4 mb-8"
          >
            <motion.h1
              variants={slideInLeft}
              className="text-foreground font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight"
            >
              MORE MONEY, TIME &
            </motion.h1>
            <motion.div
              variants={slideInLeft}
              className="relative"
            >
              <h1 className="bg-gradient-hero bg-clip-text text-transparent font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none tracking-tight">
                FREEDOM
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 lg:w-32 h-2 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
          
          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Elite talent management for ambitious creators wanting more money, time and freedom. Join the exclusive 0.1% earning 7-figures.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            variants={containerVariants}
            className="flex justify-start"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-base lg:text-lg px-8 lg:px-10 py-5 lg:py-6 h-auto font-display shadow-glow hover:shadow-luxury transition-all duration-300"
              >
                Send Us A Message
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Mobile hero image */}
      <motion.div
        variants={slideInRight}
        className="md:hidden absolute bottom-0 left-0 right-0 h-2/5 opacity-60"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
      </motion.div>
      
    </motion.section>
  );
};

export default HeroSection;