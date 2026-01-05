import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Turnstile } from '@marsidev/react-turnstile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // CAPTCHA states and refs
  const [loginCaptchaToken, setLoginCaptchaToken] = useState<string | null>(null);
  const [signupCaptchaToken, setSignupCaptchaToken] = useState<string | null>(null);
  const loginCaptchaRef = useRef<any>(null);
  const signupCaptchaRef = useRef<any>(null);

  // Turnstile site keys
  const PROD_TURNSTILE_SITE_KEY = "0x4AAAAAAB0yj55l4US_4WM7";
  const TEST_TURNSTILE_SITE_KEY = "1x00000000000000000000AA";

  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
  const isLovablePreview = hostname.includes('lovable.app') && hostname.startsWith('id-preview--');
  const publishedAuthUrl = "https://sugar-trap-ai-web.lovable.app/auth";

  // Force test mode only when explicitly requested via ?turnstile=test
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const forceTest = searchParams.get('turnstile') === 'test';

  // IMPORTANT: Supabase CAPTCHA verification must use the site key that matches the secret configured in Supabase.
  // Default to PROD; use TEST only when forceTest is enabled.
  const TURNSTILE_SITE_KEY = forceTest ? TEST_TURNSTILE_SITE_KEY : PROD_TURNSTILE_SITE_KEY;

  if (forceTest) {
    console.warn('[Turnstile] Test mode enabled via ?turnstile=test. Hostname:', hostname || 'unknown');
  }

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!loginCaptchaToken) {
      setError('Please complete the CAPTCHA verification.');
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
        options: {
          captchaToken: loginCaptchaToken
        }
      });

      if (error) {
        const msg = error.message || '';

        if (msg.toLowerCase().includes('captcha')) {
          setError(
            'Captcha verification failed. If you are in the Lovable preview, open the published login page (it uses the correct Turnstile configuration) or ensure your Turnstile site key matches the secret configured in Supabase.'
          );
        } else if (msg === 'Invalid login credentials') {
          setError('Invalid email or password. Please check your credentials.');
        } else {
          setError(msg);
        }
        return;
      }

      toast({
        title: "Login successful",
        description: "Welcome back!",
      });

      navigate('/');
    } catch (err: any) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      // Reset captcha
      if (loginCaptchaRef.current) {
        loginCaptchaRef.current.reset();
        setLoginCaptchaToken(null);
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!signupCaptchaToken) {
      setError('Please complete the CAPTCHA verification.');
      setIsLoading(false);
      return;
    }

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          emailRedirectTo: redirectUrl,
          captchaToken: signupCaptchaToken
        }
      });

      if (error) {
        const msg = error.message || '';

        if (msg.toLowerCase().includes('captcha')) {
          setError(
            'Captcha verification failed. If you are in the Lovable preview, open the published login page (it uses the correct Turnstile configuration) or ensure your Turnstile site key matches the secret configured in Supabase.'
          );
        } else if (msg === 'User already registered') {
          setError('An account with this email already exists. Please sign in instead.');
        } else {
          setError(msg);
        }
        return;
      }

      toast({
        title: "Account created successfully",
        description: "Please check your email to confirm your account.",
      });

      // Switch to login tab after successful signup
      setActiveTab('login');
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
      // Reset captcha
      if (signupCaptchaRef.current) {
        signupCaptchaRef.current.reset();
        setSignupCaptchaToken(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">
              <span className="text-foreground">Sugar</span>
              <span className="text-muted-foreground">Trap</span>
              <span className="text-primary"> AI</span>
            </CardTitle>
            <CardDescription>
              Sign in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Security Verification</Label>
                    <Turnstile
                      ref={loginCaptchaRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={(token) => setLoginCaptchaToken(token)}
                      onExpire={() => setLoginCaptchaToken(null)}
                      onError={() => setLoginCaptchaToken(null)}
                    />
                    {isLovablePreview && !forceTest && (
                      <p className="text-xs text-muted-foreground">
                        If sign-in keeps failing with a captcha error in preview, use the published login page{' '}
                        <a
                          className="underline underline-offset-4 hover:text-foreground"
                          href={publishedAuthUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                        .
                      </p>
                    )}
                    {forceTest && (
                      <p className="text-xs text-muted-foreground">
                        Test captcha mode is enabled (turn it off by removing <span className="font-mono">?turnstile=test</span>).
                      </p>
                    )}
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading || !loginCaptchaToken}>
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password"
                        required
                        minLength={6}
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Security Verification</Label>
                    <Turnstile
                      ref={signupCaptchaRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={(token) => setSignupCaptchaToken(token)}
                      onExpire={() => setSignupCaptchaToken(null)}
                      onError={() => setSignupCaptchaToken(null)}
                    />
                    {isLovablePreview && !forceTest && (
                      <p className="text-xs text-muted-foreground">
                        If sign-up/sign-in fails with a captcha error in preview, use the published login page{' '}
                        <a
                          className="underline underline-offset-4 hover:text-foreground"
                          href={publishedAuthUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          here
                        </a>
                        .
                      </p>
                    )}
                    {forceTest && (
                      <p className="text-xs text-muted-foreground">
                        Test captcha mode is enabled (turn it off by removing <span className="font-mono">?turnstile=test</span>).
                      </p>
                    )}
                  </div>

                  {error && (
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading || !signupCaptchaToken}>
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;