import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { OnlyFansSection } from "./form-sections/OnlyFansSection";
import { ContentSection } from "./form-sections/ContentSection";
import { ContactSection } from "./form-sections/ContactSection";

const formSchema = z.object({
  // OnlyFans Background
  hasOnlyFans: z.enum(["yes", "no"], {
    required_error: "Please select if you have an OnlyFans account",
  }),
  onlyFansDuration: z.string().min(1, "Please select how long you've been on OnlyFans"),
  hasAgency: z.enum(["yes", "no"], {
    required_error: "Please select if you're working with an agency",
  }),
  monthlyEarning: z.string().min(1, "Please select your monthly earning range"),
  
  // Content & Social
  instagramHandle: z.string().min(1, "Instagram handle is required"),
  contentType: z.array(z.string()).min(1, "Please select at least one content type"),
  helpNeeded: z.array(z.string()).min(1, "Please select what you need help with"),
  
  // Contact Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  additionalNotes: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ApplyForm() {
  const [currentSection, setCurrentSection] = useState(1);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hasOnlyFans: undefined,
      onlyFansDuration: "",
      hasAgency: undefined,
      monthlyEarning: "",
      instagramHandle: "",
      contentType: [],
      helpNeeded: [],
      fullName: "",
      email: "",
      phoneNumber: "",
      additionalNotes: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 24 hours.",
      });
      form.reset();
      setCurrentSection(1);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    }
  };

  const nextSection = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    
    if (currentSection === 1) {
      fieldsToValidate = ["hasOnlyFans", "onlyFansDuration", "hasAgency", "monthlyEarning"];
    } else if (currentSection === 2) {
      fieldsToValidate = ["instagramHandle", "contentType", "helpNeeded"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    setCurrentSection(currentSection - 1);
  };

  const sections = [
    {
      title: "OnlyFans Background",
      description: "Tell us about your OnlyFans experience",
    },
    {
      title: "Content & Social",
      description: "Information about your content and social presence",
    },
    {
      title: "Contact Information",
      description: "How we can reach you",
    },
  ];

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index < sections.length - 1 ? "flex-1" : ""
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentSection > index + 1
                    ? "bg-primary text-primary-foreground"
                    : currentSection === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {index + 1}
              </div>
              {index < sections.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-4 rounded ${
                    currentSection > index + 1 ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <CardTitle>{sections[currentSection - 1].title}</CardTitle>
        <CardDescription>{sections[currentSection - 1].description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {currentSection === 1 && <OnlyFansSection control={form.control} />}
            {currentSection === 2 && <ContentSection control={form.control} />}
            {currentSection === 3 && <ContactSection control={form.control} />}

            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevSection}
                disabled={currentSection === 1}
              >
                Previous
              </Button>
              
              {currentSection < 3 ? (
                <Button type="button" onClick={nextSection}>
                  Next
                </Button>
              ) : (
                <Button type="submit">
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}