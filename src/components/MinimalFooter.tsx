import { Button } from "@/components/ui/button";
const MinimalFooter = () => {
  return <footer className="py-12" style={{
    backgroundColor: '#171717'
  }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/d9139574-5537-4841-b473-94ae79ad7d8e.png" alt="Fanslink Logo" className="w-10 h-10" />
              
            </div>
            <p className="font-body text-white/80 text-sm leading-relaxed">
              Empowering content creators to reach their full potential through premium partnerships and a structure no one else has.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 font-body text-white/80">
              <li><a href="/#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="/#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="/apply" className="hover:text-accent transition-colors">Apply Now</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Ready to Join */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4 text-white">Ready to Join?</h4>
            <div className="space-y-3">
              <p className="font-body text-white/80 text-sm leading-relaxed">
                Take the first step towards financial freedom and luxury lifestyle.
              </p>
              <Button variant="luxury" size="sm" className="w-full font-display uppercase tracking-wide" asChild>
                <a href="/apply">Apply Now →</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="font-body text-white/60 text-sm">
              © 2025 FansLink. All rights reserved.
            </p>
            <div className="flex space-x-4 font-body text-white/60 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default MinimalFooter;