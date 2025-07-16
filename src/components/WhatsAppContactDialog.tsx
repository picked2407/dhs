import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageSquare, Phone } from "lucide-react";

interface WhatsAppContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WhatsAppContactDialog({ open, onOpenChange }: WhatsAppContactDialogProps) {
  const whatsappLink = "https://wa.me/447564839663";

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-w-[95vw] w-full mx-4 p-0 overflow-hidden rounded-none border-2 border-foreground">
        <div className="bg-background p-4 sm:p-6 md:p-8 text-center">
          <DialogHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            
            <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-foreground font-display">
              Application Submitted!
            </DialogTitle>
            
            <DialogDescription className="text-sm sm:text-base text-muted-foreground font-body px-2">
              Thank you for your application. We'll review it and get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 border-2 border-primary/20 rounded-none">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary mr-2" />
              <h3 className="text-base sm:text-lg font-semibold text-foreground font-display">
                Contact Us Now
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 font-body px-2">
              For immediate assistance or questions about your application, contact us directly on WhatsApp.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-none transition-all duration-300 font-display text-sm sm:text-base"
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contact on WhatsApp
            </Button>
          </div>

          <div className="mt-4 sm:mt-6">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="rounded-none border-2 font-display text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}