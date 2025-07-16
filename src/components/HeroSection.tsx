import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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

      {/* Desktop hero video */}
      <motion.div
        variants={slideInRight}
        className="absolute right-0 top-0 w-1/2 h-full hidden md:block"
      >
        <div className="relative h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/woman.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent via-70% to-background" />
          
          {/* Floating elements over the video */}
        </div>
      </motion.div>

      {/* Content - Left side for desktop, full width for mobile */}
      <motion.div
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="lg:w-3/5 lg:pr-12 xl:pr-16">
          
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-luxury px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8"
          >
            <span className="text-primary font-display font-bold uppercase tracking-wide text-xs sm:text-sm">
              Exclusive Talent Management
            </span>
          </motion.div>

          {/* Main Headline - Stacked design */}
          <motion.div
            variants={containerVariants}
            className="space-y-2 sm:space-y-4 mb-6 sm:mb-8"
          >
            <motion.h1
              variants={slideInLeft}
              className="text-foreground font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight"
            >
              MORE MONEY
            </motion.h1>
            <motion.h1
              variants={slideInLeft}
              className="text-foreground font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight"
            >
              MORE STRUCTURE
            </motion.h1>
            <motion.div
              variants={slideInLeft}
              className="relative"
            >
              <h1 className="bg-gradient-hero bg-clip-text text-transparent font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight">
                MORE FREEDOM
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-1 left-0 sm:w-24 lg:w-32 h-1.5 sm:h-2 bg-primary rounded-full"
              />
            </motion.div>
          </motion.div>
          
          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-muted-foreground font-body text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed mb-8 sm:mb-10 max-w-md lg:max-w-lg"
          >
            Exclusive talent management for ambitious creators ready to scale their income, reclaim their time, and build a true lifestyle.
            Join the top 1% earning 6–7 figures.
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center sm:justify-start"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-sm sm:text-base lg:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 h-auto font-display shadow-glow hover:shadow-luxury transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none"
                asChild
              >
                <a href="https://wa.me/447564839663" target="_blank" rel="noopener noreferrer">
                  <span className="hidden sm:inline">Send Us A Message</span>
                  <span className="sm:hidden">Contact Us</span>
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Mobile hero video with dark overlay */}
      <motion.div
        variants={slideInRight}
        className="md:hidden absolute inset-0 -z-10"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/woman.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay to merge with background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      </motion.div>
      
    </motion.section>
  );
};

export default HeroSection;