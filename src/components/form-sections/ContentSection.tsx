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
    <div className="space-y-6">
      <FormField
        control={control}
        name="instagramHandle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>What's your Instagram Handle?</FormLabel>
            <FormControl>
              <div className="relative">
                <span className="absolute left-3 top-3 text-muted-foreground">@</span>
                <Input 
                  placeholder="username" 
                  className="pl-8"
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
          <FormItem>
            <FormLabel>What type of content do you create? (Select all that apply)</FormLabel>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {contentTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
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
                  />
                  <Label htmlFor={type.id} className="text-sm font-normal">
                    {type.label}
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
          <FormItem>
            <FormLabel>What are you looking for help with? (Select all that apply)</FormLabel>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {helpOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
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
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.label}
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