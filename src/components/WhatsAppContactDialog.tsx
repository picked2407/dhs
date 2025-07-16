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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-none border-2 border-foreground">
        <div className="bg-background p-8 text-center">
          <DialogHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-none flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            
            <DialogTitle className="text-2xl font-bold text-foreground font-display">
              Application Submitted!
            </DialogTitle>
            
            <DialogDescription className="text-base text-muted-foreground font-body">
              Thank you for your application. We'll review it and get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 p-6 bg-primary/5 border-2 border-primary/20 rounded-none">
            <div className="flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-lg font-semibold text-foreground font-display">
                Contact Us Now
              </h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 font-body">
              For immediate assistance or questions about your application, contact us directly on WhatsApp.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-none transition-all duration-300 font-display"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact on WhatsApp
            </Button>
          </div>

          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              className="rounded-none border-2 font-display"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}