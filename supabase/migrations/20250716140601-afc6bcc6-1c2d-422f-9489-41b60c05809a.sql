-- Create applications table to store form submissions
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- OnlyFans Background
  has_only_fans TEXT NOT NULL,
  only_fans_duration TEXT NOT NULL,
  has_agency TEXT NOT NULL,
  monthly_earning TEXT NOT NULL,
  
  -- Content & Social
  instagram_handle TEXT NOT NULL,
  content_type TEXT[] NOT NULL,
  help_needed TEXT[] NOT NULL,
  
  -- Contact Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  additional_notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (for future authentication if needed)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert applications (for public form)
CREATE POLICY "Anyone can submit applications" 
ON public.applications 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Create a policy that allows authenticated users to view all applications (for admin)
CREATE POLICY "Authenticated users can view all applications" 
ON public.applications 
FOR SELECT 
TO authenticated
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON public.applications
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_applications_created_at ON public.applications(created_at DESC);
CREATE INDEX idx_applications_email ON public.applications(email);