import { Instagram } from "lucide-react";
import dumbellIcon from "@/assets/dumbell_1.svg";
const INSTAGRAM_URL = "https://www.instagram.com/garage.training.mdq";

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
        {/* Logo/Brand Section - Square-ish group */}
        <div 
          className="relative inline-block mb-12 opacity-0 animate-fade-up " 
          style={{ animationDelay: '0.1s' }}
        >
          {/* Container for the square group */}
          <div className="relative h-full flex flex-col items-center justify-start">
            {/* Dumbbell Icon - White */}
            <div className="flex-shrink-0">
              <img 
                src={dumbellIcon} 
                alt="Dumbbell" 
                className="h-auto w-auto object-contain mx-auto md:h-[22.5vh] h-[18vh]"
                style={{ 
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>

            {/* Small gap */}
            <div className="h-4" />

            {/* Overlapping text block with background */}
            <div className="relative md:-mt-[10.6vh] -mt-[7.2vh]"> {/* 40% overlap */}
              <div className="bg-hero-bg px-4 py-2">
                <h1 
                  className="font-display font-black whitespace-nowrap leading-tight"
                  style={{ 
                    color: '#871d2e',
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    letterSpacing: '0.15em'
                  }}
                >
                  JUAN MARTÍN
                </h1>
                <h1 
                  className="font-display font-black whitespace-nowrap leading-none"
                  style={{ 
                    color: '#871d2e',
                    fontSize: 'clamp(4rem, 8vw, 7rem)',
                    letterSpacing: '0.05em'
                  }}
                >
                  ALVAREZ
                </h1>
                <p 
                  className="text-right text-white font-body font-medium"
                  style={{ fontSize: 'clamp(0.7rem, 1.3vw, 0.95rem)' }}
                >
                  Entrenamiento
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-lg sm:text-xl text-hero-foreground/70 max-w-2xl mx-2 mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
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