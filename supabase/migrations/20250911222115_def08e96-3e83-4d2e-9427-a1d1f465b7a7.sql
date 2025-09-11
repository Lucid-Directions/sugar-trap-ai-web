-- Update RLS policy to require authentication for viewing waitlist entries
DROP POLICY IF EXISTS "Admins can view waitlist entries" ON public.waitlist;

CREATE POLICY "Only authenticated users can view waitlist entries" 
ON public.waitlist 
FOR SELECT 
TO authenticated
USING (true);