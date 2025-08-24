const Footer = () => {
  return (
    <footer className="py-4 border-t border-border/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <a 
            href="https://www.fatsecret.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
          >
            Powered by fatsecret
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;