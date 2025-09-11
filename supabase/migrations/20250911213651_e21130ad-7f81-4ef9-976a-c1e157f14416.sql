-- Add RLS policy to allow reading waitlist data for admin purposes
CREATE POLICY "Admins can view waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (true);