import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GrantAdmin = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleGrantAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.rpc('grant_admin_role', {
        _email: email.trim()
      });

      if (error) {
        toast({
          title: "Error granting admin access",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      setSuccess(true);
      toast({
        title: "Admin access granted",
        description: `Admin role granted to: ${email}`,
      });
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error granting admin access",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto">
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
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold">Grant Admin Access</CardTitle>
              <CardDescription>
                Grant administrator privileges to access the waitlist dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              {success ? (
                <Alert className="mb-4">
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Admin access has been granted successfully! You can now sign in to access the admin dashboard.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleGrantAdmin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email">Email Address</Label>
                    <Input
                      id="admin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter the email address to grant admin access"
                      required
                      disabled={loading}
                    />
                    <p className="text-sm text-muted-foreground">
                      This email must have an existing account to be granted admin privileges.
                    </p>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? 'Granting Access...' : 'Grant Admin Access'}
                  </Button>
                </form>
              )}

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p><strong>Important:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Only use this for your own admin account</li>
                  <li>The email must have an existing account</li>
                  <li>You'll need to sign out and sign back in to see admin access</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GrantAdmin;