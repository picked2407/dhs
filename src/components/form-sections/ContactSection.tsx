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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactSectionProps {
  control: Control<any>;
}

const countryOptions = [
  { code: 'US', label: 'United States' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'CA', label: 'Canada' },
  { code: 'AU', label: 'Australia' },
  { code: 'DE', label: 'Germany' },
  { code: 'FR', label: 'France' },
  { code: 'ES', label: 'Spain' },
  { code: 'IT', label: 'Italy' },
  { code: 'NL', label: 'Netherlands' },
  { code: 'SE', label: 'Sweden' },
  { code: 'IN', label: 'India' },
  { code: 'BR', label: 'Brazil' },
  { code: 'ZA', label: 'South Africa' },
  { code: 'SG', label: 'Singapore' },
  { code: 'AE', label: 'UAE' },
  { code: 'JP', label: 'Japan' },
  { code: 'CN', label: 'China' },
  { code: 'RU', label: 'Russia' },
  { code: 'MX', label: 'Mexico' },
  { code: 'OTHER', label: 'Other' },
];

export function ContactSection({ control }: ContactSectionProps) {
  const [selectedCountry, setSelectedCountry] = useState('US');
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
                className="h-12 text-base border-2 rounded-xl transition-colors"
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
                className="h-12 text-base border-2 rounded-xl transition-colors"
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
              <div className="flex flex-col gap-2">
                <Select onValueChange={setSelectedCountry} value={selectedCountry}>
                  <SelectTrigger className="h-12 text-base border-2 rounded-xl transition-colors">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-2">
                    {countryOptions.map((country) => (
                      <SelectItem key={country.code} value={country.code} className="text-base py-3">
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <PhoneInput
                  {...field}
                  international
                  country={selectedCountry}
                  className="custom-phone-input"
                  placeholder="Enter your phone number"
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
                className="min-h-[120px] text-base border-2 rounded-xl transition-colors resize-none"
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