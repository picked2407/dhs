import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-number-input/react-hook-form-input";
import "react-phone-number-input/style.css";

interface ContactSectionProps {
  control: Control<any>;
}

export function ContactSection({ control }: ContactSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What is your Full Name?
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter your full name" 
                className="h-12 text-base border-2 rounded-xl hover:border-primary/50 focus:border-primary transition-colors"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What is your Email Address?
            </FormLabel>
            <FormControl>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="h-12 text-base border-2 rounded-xl hover:border-primary/50 focus:border-primary transition-colors"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What is your Phone Number?
            </FormLabel>
            <FormControl>
              <div className="phone-input-enhanced">
                <PhoneInput
                  control={control}
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  defaultCountry="US"
                  international
                  countryCallingCodeEditable={false}
                  className="phone-input-field"
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="additionalNotes"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              Any other notes you'd like to share? <span className="text-muted-foreground font-normal">(Optional)</span>
            </FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us anything else you think we should know..."
                className="min-h-[120px] text-base border-2 rounded-xl hover:border-primary/50 focus:border-primary transition-colors resize-none"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}