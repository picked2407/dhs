import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FoundersSection = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      id="team"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-24 bg-background relative overflow-hidden scroll-mt-16"
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
        className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Founders Image */}
          <motion.div variants={slideInLeft} className="relative">
            <motion.div 
              variants={imageVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-[4/3] bg-muted rounded-luxury overflow-hidden shadow-luxury"
            >
              {/* Placeholder for founders image */}
              <img 
                src="/lovable-uploads/dc97a0aa-ad84-4048-86af-1ab47cfda590.png" 
                alt="Fin & Tom - FansLink Founders" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={slideInRight} className="space-y-8">
            <motion.div variants={itemVariants} className="uppercase tracking-[0.2em] text-primary font-display font-bold text-sm">
              Our Founders
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
              FIN & TOM
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-muted-foreground font-body text-lg leading-relaxed">
              With over 15 years of combined experience in marketing, social media, and scaling digital businesses and grown brands in finance and across the creator economy. Our expertise lies in building high-converting systems, crafting long-term strategies, and applying proven frameworks to help creators reach the top 1%. We are known for our hands-on approach and obsession with execution, we bring clarity, consistency, and serious momentum to every brand and creator we work with.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-muted-foreground font-body italic text-base">
              21 contracted staff working around the clock to process content, research virality and ensure our creators are making the most of their account!
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-start"
            >
              <Button 
                variant="luxury" 
                size="lg" 
                className="text-sm sm:text-base px-6 sm:px-8 lg:px-12 py-4 h-auto font-display uppercase tracking-wide shadow-glow hover:shadow-luxury transition-all duration-300 w-full sm:w-auto max-w-sm sm:max-w-none text-center"
              >
                <span className="hidden sm:inline">Unlock your skillset and see results now</span>
                <span className="sm:hidden">Get Started Now</span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FoundersSection;