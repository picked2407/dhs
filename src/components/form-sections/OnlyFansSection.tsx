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
    <div className="space-y-6">
      <FormField
        control={control}
        name="hasOnlyFans"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Do you currently have an OnlyFans account?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="onlyfans-yes" />
                  <Label htmlFor="onlyfans-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="onlyfans-no" />
                  <Label htmlFor="onlyfans-no">No</Label>
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
          <FormItem>
            <FormLabel>How long have you been on OnlyFans?</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="new">I'm new / Haven't started yet</SelectItem>
                <SelectItem value="1-3months">1-3 months</SelectItem>
                <SelectItem value="3-6months">3-6 months</SelectItem>
                <SelectItem value="6-12months">6-12 months</SelectItem>
                <SelectItem value="1-2years">1-2 years</SelectItem>
                <SelectItem value="2+years">2+ years</SelectItem>
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
          <FormItem>
            <FormLabel>Are you currently working with an agency?</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="agency-yes" />
                  <Label htmlFor="agency-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="agency-no" />
                  <Label htmlFor="agency-no">No</Label>
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
          <FormItem>
            <FormLabel>How much are you currently earning per month on OnlyFans?</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select earning range" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="0">$0 - I haven't started yet</SelectItem>
                <SelectItem value="1-500">$1 - $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000+">$10,000+</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}