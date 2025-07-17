import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import footerLuxury from "@/assets/footer-luxury.jpg";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_subscriptions')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') { // unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <footer className="relative">
      {/* Main Footer with Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${footerLuxury})`
      }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-luxury"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="uppercase tracking-[0.2em] text-primary font-display font-bold text-sm mb-8">
            Join The Elite
          </div>
          
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-8">
            REACH YOUR <br />
            <span className="text-primary">FULL POTENTIAL</span>
          </h2>
          
          <p className="text-white/80 font-body text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Ready to transform your life and join the ranks of elite content creators? 
            Take the first step towards financial freedom and luxury lifestyle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
            <Button variant="luxury" size="lg" className="text-sm sm:text-base px-6 sm:px-8 lg:px-12 py-4 h-auto font-display uppercase tracking-wide w-full sm:w-auto max-w-xs sm:max-w-none" asChild>
              <a href="/apply">Apply Now →</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-sm sm:text-base px-6 sm:px-8 lg:px-12 py-4 h-auto font-display uppercase tracking-wide backdrop-blur-sm w-full sm:w-auto max-w-xs sm:max-w-none" asChild>
              <a href="https://wa.me/447564839663" target="_blank" rel="noopener noreferrer">
                <span className="hidden sm:inline">Book Discovery Call</span>
                <span className="sm:hidden">Book Call</span>
              </a>
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto px-4">
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Stay Updated
            </h3>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm flex-1"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                variant="apply" 
                className="px-4 sm:px-6 w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <div className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img src="/lovable-uploads/f2be9f1e-1cc3-481b-bf8a-9971f10f9b54.png" alt="FansLink Logo" className="h-12 w-auto" />
              </div>
              <p className="text-background/80 font-body leading-relaxed">
                Empowering content creators to reach their full potential through premium partnerships and a structure no one else has.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li><a href="/#founders" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="/#features" className="text-background/80 hover:text-background transition-colors">Services</a></li>
                <li><a href="https://wa.me/447564839663" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Apply Now CTA */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Ready to Join?</h4>
              <div className="space-y-3">
                <p className="font-body text-background/80 text-sm leading-relaxed">
                  Take the first step towards financial freedom and luxury lifestyle.
                </p>
                <Button 
                  variant="luxury" 
                  size="sm" 
                  className="w-full font-display uppercase tracking-wide"
                  asChild
                >
                  <a href="/apply">Apply Now →</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/60 font-body">© 2025 FansLink. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;