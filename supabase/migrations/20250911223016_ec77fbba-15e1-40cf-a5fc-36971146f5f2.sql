-- Create user roles system for admin access control

-- Create an enum for roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE(user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Update the waitlist RLS policy to only allow admin users
DROP POLICY IF EXISTS "Only authenticated users can view waitlist entries" ON public.waitlist;

CREATE POLICY "Only admin users can view waitlist entries" 
ON public.waitlist 
FOR SELECT 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Allow admins to manage user roles
CREATE POLICY "Admins can view all user roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert user roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Function to grant admin role to a user (for initial setup)
CREATE OR REPLACE FUNCTION public.grant_admin_role(_email text)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    _user_id uuid;
BEGIN
    -- Find user by email in auth.users
    SELECT id INTO _user_id
    FROM auth.users
    WHERE email = _email;
    
    IF _user_id IS NULL THEN
        RETURN 'User not found with email: ' || _email;
    END IF;
    
    -- Insert admin role if it doesn't exist
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_user_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    
    RETURN 'Admin role granted to: ' || _email;
END;
$$;