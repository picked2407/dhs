import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const contactYachtImage = "/lovable-uploads/d6f15b40-e32a-4f1c-b5aa-ee18caed2a6c.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    country: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    console.log("Form data:", formData);
    // Add form validation and next step logic here
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Half - Background Image Section */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactYachtImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <h1 className="font-display font-bold text-5xl mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="font-body text-lg text-white/90 max-w-md leading-relaxed">
            Connect with us effortlessly through our Contact Us page, where you can reach our dedicated team for inquiries, support, or collaborations.
          </p>
        </div>
      </div>

      {/* Right Half - Form Section */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-muted"></div>
              <div className="w-3 h-3 rounded-full bg-muted"></div>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h2 className="font-display font-semibold text-2xl text-foreground mb-2">
              About you
            </h2>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* First Name */}
            <div>
              <Label htmlFor="firstName" className="text-sm font-medium text-muted-foreground mb-2 block">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Last Name */}
            <div>
              <Label htmlFor="lastName" className="text-sm font-medium text-muted-foreground mb-2 block">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Work Email */}
            <div>
              <Label htmlFor="workEmail" className="text-sm font-medium text-muted-foreground mb-2 block">
                Work email
              </Label>
              <Input
                id="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={(e) => handleInputChange("workEmail", e.target.value)}
                className="w-full h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Country */}
            <div>
              <Label htmlFor="country" className="text-sm font-medium text-muted-foreground mb-2 block">
                Country
              </Label>
              <Select onValueChange={(value) => handleInputChange("country", value)}>
                <SelectTrigger className="w-full h-12 border-input bg-background rounded-luxury focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-input rounded-luxury shadow-elegant">
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="es">Spain</SelectItem>
                  <SelectItem value="it">Italy</SelectItem>
                  <SelectItem value="nl">Netherlands</SelectItem>
                  <SelectItem value="se">Sweden</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Next Button */}
            <div className="pt-6">
              <Button
                onClick={handleNext}
                className="w-full h-12 bg-foreground text-background font-semibold rounded-luxury hover:bg-foreground/90 transition-all duration-300 transform hover:scale-105"
              >
                NEXT
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background for smaller screens */}
      <div className="lg:hidden absolute inset-0 bg-gradient-luxury opacity-10 pointer-events-none"></div>
    </div>
  );
};

export default Contact;