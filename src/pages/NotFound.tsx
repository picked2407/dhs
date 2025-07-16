import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import MinimalFooter from "@/components/MinimalFooter";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center max-w-2xl px-6">
          <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-6">
            OOPS! THAT PAGE CAN'T BE FOUND.
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            It looks like nothing was found at this location. Maybe try to go back to the home page?
          </p>
          <Button 
            variant="luxury" 
            size="lg" 
            className="font-display uppercase tracking-wide"
            asChild
          >
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      
      <MinimalFooter />
    </div>
  );
};

export default NotFound;
