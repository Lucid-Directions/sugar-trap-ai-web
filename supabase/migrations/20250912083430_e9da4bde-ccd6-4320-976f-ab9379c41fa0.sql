-- Grant admin role directly to sleepyarno@gmail.com
DO $$
DECLARE
    _user_id uuid;
BEGIN
    -- Find user by email in auth.users
    SELECT id INTO _user_id
    FROM auth.users
    WHERE email = 'sleepyarno@gmail.com';
    
    -- Only proceed if user exists
    IF _user_id IS NOT NULL THEN
        -- Insert admin role
        INSERT INTO public.user_roles (user_id, role)
        VALUES (_user_id, 'admin')
        ON CONFLICT (user_id, role) DO NOTHING;
    END IF;
END $$;

-- Remove the insecure grant_admin_role function
DROP FUNCTION IF EXISTS public.grant_admin_role(text);