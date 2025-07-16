import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface OnlyFansSectionProps {
  control: Control<any>;
}

export function OnlyFansSection({ control }: OnlyFansSectionProps) {
  return (
    <div className="space-y-8">
      <FormField
        control={control}
        name="hasOnlyFans"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              Do you currently have an OnlyFans account?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative">
                  <RadioGroupItem value="yes" id="onlyfans-yes" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                  <Label
                    htmlFor="onlyfans-yes"
                    className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium focus:outline-none focus-visible:outline-none ${field.value === 'yes' ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <span className="font-medium">Yes</span>
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="no" id="onlyfans-no" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                  <Label
                    htmlFor="onlyfans-no"
                    className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium focus:outline-none focus-visible:outline-none ${field.value === 'no' ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <span className="font-medium">No</span>
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="onlyFansDuration"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              How long have you been on OnlyFans?
            </FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger className="h-12 text-base border-2 rounded-xl transition-colors">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="rounded-xl border-2">
                <SelectItem value="new" className="text-base py-3">I'm new / Haven't started yet</SelectItem>
                <SelectItem value="1-3months" className="text-base py-3">1-3 months</SelectItem>
                <SelectItem value="3-6months" className="text-base py-3">3-6 months</SelectItem>
                <SelectItem value="6-12months" className="text-base py-3">6-12 months</SelectItem>
                <SelectItem value="1-2years" className="text-base py-3">1-2 years</SelectItem>
                <SelectItem value="2+years" className="text-base py-3">2+ years</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="hasAgency"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              Are you currently working with an agency?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-2 gap-4"
              >
                <div className="relative">
                  <RadioGroupItem value="yes" id="agency-yes" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                  <Label
                    htmlFor="agency-yes"
                    className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium focus:outline-none focus-visible:outline-none ${field.value === 'yes' ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <span className="font-medium">Yes</span>
                  </Label>
                </div>
                <div className="relative">
                  <RadioGroupItem value="no" id="agency-no" className="peer absolute opacity-0 w-full h-full cursor-pointer" />
                  <Label
                    htmlFor="agency-no"
                    className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 font-medium focus:outline-none focus-visible:outline-none ${field.value === 'no' ? 'border-[#9E5AF2] bg-[#9E5AF2] text-white' : 'border-border bg-transparent text-foreground'} hover:border-[#9E5AF2]/50 hover:bg-[#9E5AF2]/10`}
                  >
                    <span className="font-medium">No</span>
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="monthlyEarning"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-base font-semibold font-heading text-foreground">
              How much are you currently earning per month on OnlyFans?
            </FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger className="h-12 text-base border-2 rounded-xl transition-colors">
                  <SelectValue placeholder="Select earning range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="rounded-xl border-2">
                <SelectItem value="0" className="text-base py-3">$0 - I haven't started yet</SelectItem>
                <SelectItem value="1-500" className="text-base py-3">$1 - $500</SelectItem>
                <SelectItem value="500-1000" className="text-base py-3">$500 - $1,000</SelectItem>
                <SelectItem value="1000-2500" className="text-base py-3">$1,000 - $2,500</SelectItem>
                <SelectItem value="2500-5000" className="text-base py-3">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000-10000" className="text-base py-3">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000+" className="text-base py-3">$10,000+</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}