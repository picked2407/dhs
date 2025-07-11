import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import footerLuxury from "@/assets/footer-luxury.jpg";
const Footer = () => {
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="luxury" size="lg" className="text-base px-12 py-4 h-auto font-display uppercase tracking-wide">
              Apply Now →
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-base px-12 py-4 h-auto font-display uppercase tracking-wide backdrop-blur-sm">
              Book Discovery Call
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto">
            <h3 className="font-display font-bold text-xl text-white mb-4">
              Stay Updated
            </h3>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm" />
              <Button variant="apply" className="px-6">
                Join
              </Button>
            </div>
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
                Empowering elite content creators to reach their full potential through premium partnerships and luxury lifestyle experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 font-body">
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Services</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Apply Now</a></li>
                <li><a href="#" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-body text-background/80">
                <li>hello@fanslink.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Los Angeles, CA</li>
              </ul>
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