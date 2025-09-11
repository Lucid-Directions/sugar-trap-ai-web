-- Add RLS policy to allow reading waitlist data for admin purposes
CREATE POLICY "Admins can view waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (true);

-- Add indexes for better performance when querying waitlist data
CREATE INDEX idx_waitlist_created_at ON public.waitlist(created_at DESC);
CREATE INDEX idx_waitlist_email ON public.waitlist(email);