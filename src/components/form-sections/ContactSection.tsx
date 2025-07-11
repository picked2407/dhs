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

interface ContactSectionProps {
  control: Control<any>;
}

export function ContactSection({ control }: ContactSectionProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What is your Full Name?</FormLabel>
            <FormControl>
              <Input placeholder="Enter your full name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What is your Email Address?</FormLabel>
            <FormControl>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
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
          <FormItem>
            <FormLabel>What is your Phone Number?</FormLabel>
            <FormControl>
              <div className="phone-input-container">
                <PhoneInput
                  control={control}
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  defaultCountry="US"
                  className="phone-input"
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
          <FormItem>
            <FormLabel>Any other notes you'd like to share? (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us anything else you think we should know..."
                className="min-h-[100px]"
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