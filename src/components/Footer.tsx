const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hero py-8 border-t border-hero-foreground/10">
      <div className="section-container">
        <div className="text-center">
          <p className="font-display text-hero-foreground/60 text-sm">
            Juan Martín Álvarez · Entrenador Personal
          </p>
          <p className="font-body text-hero-foreground/40 text-xs mt-2">
            © {currentYear} · Mar del Plata, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
