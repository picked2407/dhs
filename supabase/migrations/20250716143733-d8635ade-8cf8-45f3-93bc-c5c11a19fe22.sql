-- Update RLS policy to allow anonymous users to read applications for admin purposes
DROP POLICY IF EXISTS "Authenticated users can view all applications" ON public.applications;

CREATE POLICY "Anyone can view applications" 
ON public.applications 
FOR SELECT 
USING (true);