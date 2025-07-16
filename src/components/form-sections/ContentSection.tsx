import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface ContentSectionProps {
  control: Control<any>;
}

const contentTypes = [
  { id: "photos", label: "Photos/Lingerie" },
  { id: "videos", label: "Adult Videos" },
  { id: "custom", label: "Custom Content" },
  { id: "chatting", label: "Chatting/Sexting" },
  { id: "live", label: "Live Streaming" },
  { id: "fetish", label: "Fetish Content" },
  { id: "couple", label: "Couple Content" },
  { id: "other", label: "Other" },
];

const helpOptions = [
  { id: "content-creation", label: "Content Creation" },
  { id: "marketing", label: "Marketing & Promotion" },
  { id: "social-media", label: "Social Media Growth" },
  { id: "fan-management", label: "Fan Management" },
  { id: "pricing", label: "Pricing Strategy" },
  { id: "monetization", label: "Monetization" },
  { id: "branding", label: "Personal Branding" },
  { id: "technical", label: "Technical Setup" },
];

export function ContentSection({ control }: ContentSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={control}
        name="instagramHandle"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What's your Instagram Handle?
            </FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">@</span>
                <Input 
                  placeholder="username" 
                  className="h-12 pl-8 text-base border-2 rounded-xl transition-colors"
                  {...field} 
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="contentType"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What type of content do you create? <span className="text-muted-foreground font-normal">(Select all that apply)</span>
            </FormLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contentTypes.map((type) => (
                <div key={type.id} className="relative">
                  <Checkbox
                    id={type.id}
                    checked={field.value?.includes(type.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...field.value, type.id]);
                      } else {
                        field.onChange(field.value?.filter((value: string) => value !== type.id));
                      }
                    }}
                    className="peer absolute opacity-0 w-full h-full cursor-pointer"
                  />
                  <Label
                    htmlFor={type.id}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium ${field.value?.includes(type.id) ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <div className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center transition-all duration-200 ${field.value?.includes(type.id) ? 'border-white bg-white' : 'border-current bg-transparent'}`}>
                      <svg
                        className={`w-3 h-3 text-primary transition-opacity duration-200 ${field.value?.includes(type.id) ? 'opacity-100' : 'opacity-0'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{type.label}</span>
                  </Label>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="helpNeeded"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              What are you looking for help with? <span className="text-muted-foreground font-normal">(Select all that apply)</span>
            </FormLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {helpOptions.map((option) => (
                <div key={option.id} className="relative">
                  <Checkbox
                    id={option.id}
                    checked={field.value?.includes(option.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...field.value, option.id]);
                      } else {
                        field.onChange(field.value?.filter((value: string) => value !== option.id));
                      }
                    }}
                    className="peer absolute opacity-0 w-full h-full cursor-pointer"
                  />
                  <Label
                    htmlFor={option.id}
                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium ${field.value?.includes(option.id) ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <div className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center transition-all duration-200 ${field.value?.includes(option.id) ? 'border-white bg-white' : 'border-current bg-transparent'}`}>
                      <svg
                        className={`w-3 h-3 text-primary transition-opacity duration-200 ${field.value?.includes(option.id) ? 'opacity-100' : 'opacity-0'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{option.label}</span>
                  </Label>
                </div>
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}