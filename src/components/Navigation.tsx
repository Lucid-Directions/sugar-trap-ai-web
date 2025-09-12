import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import OrbitingSugarCube from './OrbitingSugarCube';
import { useAuth } from '@/hooks/useAuth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Science', href: '/science' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Waitlist', href: '/waitlist' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 pt-2 sm:pt-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl sm:text-2xl lg:text-3xl font-bold">
                <span className="text-foreground">Sugar</span>
                <span className="text-muted-foreground">Trap</span>
              </span>
              <div className="w-10 h-10 sm:w-10 sm:h-10 lg:w-12 lg:h-12 relative">
                <OrbitingSugarCube />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <span className="text-xs sm:text-sm lg:text-base font-bold">AI</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/#') ? (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="story-link text-foreground hover:text-primary transition-colors font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {item.label}
                </motion.a>
              ) : (
                <Link key={item.label} to={item.href}>
                  <motion.span
                    className="story-link text-foreground hover:text-primary transition-colors font-medium"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              )
            ))}
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <Link to="/waitlist-admin">
                  <motion.div 
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <User className="w-4 h-4" />
                    <span className="text-muted-foreground hover:text-primary transition-colors">{user.email}</span>
                  </motion.div>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={signOut}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 space-y-4">
                {navItems.map((item, index) => (
                  item.href.startsWith('/#') ? (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </motion.a>
                  ) : (
                    <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)}>
                      <motion.span
                        className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  )
                ))}
                <div className="border-t pt-4 mt-4 space-y-2">
                  {user ? (
                    <div className="space-y-3">
                      <Link to="/waitlist-admin" onClick={() => setIsOpen(false)}>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors px-2 py-1 rounded cursor-pointer">
                          <User className="w-4 h-4" />
                          <span className="truncate">{user.email}</span>
                        </div>
                      </Link>
                      <Button
                        variant="outline" 
                        className="w-full flex items-center gap-2"
                        onClick={() => {
                          setIsOpen(false);
                          signOut();
                        }}
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/auth" onClick={() => setIsOpen(false)}>Sign In</Link>
                      </Button>
                      <Button className="w-full" asChild>
                        <Link to="/waitlist" onClick={() => setIsOpen(false)}>Join Waitlist</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;