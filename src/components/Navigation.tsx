import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

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
              src={isScrolled 
                ? "/lovable-uploads/a2e9426f-c0b6-4dd2-92d3-0fee2d2d9acf.png" 
                : "/lovable-uploads/16fa52cf-edc8-4a2a-9dd6-eaf58bf7c5d3.png"
              }
              alt="FansLink Logo" 
              className="h-12 w-auto transition-all duration-300 md:!content-[url('/lovable-uploads/a2e9426f-c0b6-4dd2-92d3-0fee2d2d9acf.png')]"
            />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <a 
              href="#earn" 
              onClick={(e) => handleSmoothScroll(e, 'earn')}
              className="font-body font-medium uppercase tracking-wider text-sm transition-colors text-foreground/80 hover:text-foreground"
            >
              Earn More
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="font-body font-medium uppercase tracking-wider text-sm transition-colors text-foreground/80 hover:text-foreground"
            >
              Services
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleSmoothScroll(e, 'team')}
              className="font-body font-medium uppercase tracking-wider text-sm transition-colors text-foreground/80 hover:text-foreground"
            >
              Our Team
            </a>
            <Button variant="default" size="sm" className="h-8 px-4 bg-primary hover:bg-primary/90" asChild>
              <a href="/apply">Apply</a>
            </Button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`transition-colors ${
                    isScrolled 
                      ? "text-foreground hover:text-foreground" 
                      : "text-white hover:text-white"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <a 
                    href="#earn" 
                    onClick={(e) => handleSmoothScroll(e, 'earn')}
                    className="font-body font-medium uppercase tracking-wider text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Earn More
                  </a>
                  <a 
                    href="#services" 
                    onClick={(e) => handleSmoothScroll(e, 'services')}
                    className="font-body font-medium uppercase tracking-wider text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                  <a 
                    href="#team" 
                    onClick={(e) => handleSmoothScroll(e, 'team')}
                    className="font-body font-medium uppercase tracking-wider text-lg text-foreground hover:text-primary transition-colors"
                  >
                    Our Team
                  </a>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 w-full"
                    asChild
                  >
                    <a href="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                      Apply Now
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;