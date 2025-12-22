import { Instagram, Dumbbell } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/elgarage.training.mdq";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-bg via-hero-bg to-hero-bg/95" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--hero-foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 section-container text-center py-20">
        {/* Dumbbell Icon */}
        <div className="mb-8 flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="p-4 rounded-full border border-hero-foreground/20">
            <Dumbbell className="w-10 h-10 text-hero-foreground" strokeWidth={1.5} />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-hero-foreground mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Juan Martín Álvarez
        </h1>
        <p className="font-display text-2xl sm:text-3xl md:text-4xl text-hero-foreground/80 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Entrenamiento
        </p>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-xl text-hero-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Entrenamiento de fuerza y bienestar para personas reales en Mar del Plata.
        </p>

        {/* CTA Button */}
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-hero group"
          >
            <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
            Escribime por Instagram y empezá a entrenar
          </a>
        </div>

        {/* Location Badge */}
        <p className="mt-12 text-hero-foreground/50 text-sm font-body opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          📍 Mar del Plata, zona Güemes
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-hero-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-hero-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
