import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a2e9426f-c0b6-4dd2-92d3-0fee2d2d9acf.png" 
              alt="FansLink Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <a href="#earn" className={`font-body font-medium uppercase tracking-wider text-sm transition-colors ${
              isScrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-black/80 hover:text-black"
            }`}>
              Earn More
            </a>
            <a href="#team" className={`font-body font-medium uppercase tracking-wider text-sm transition-colors ${
              isScrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-black/80 hover:text-black"
            }`}>
              Our Team
            </a>
            <a href="#services" className={`font-body font-medium uppercase tracking-wider text-sm transition-colors ${
              isScrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-black/80 hover:text-black"
            }`}>
              Services
            </a>
            <a href="#price" className={`font-body font-medium uppercase tracking-wider text-sm transition-colors ${
              isScrolled 
                ? "text-foreground/80 hover:text-foreground" 
                : "text-black/80 hover:text-black"
            }`}>
              Price
            </a>
            <Button variant="default" size="sm" className="h-8 px-4 bg-primary hover:bg-primary/90" asChild>
              <a href="/apply">Apply</a>
            </Button>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;