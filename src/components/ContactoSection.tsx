import { Instagram, MapPin } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/elgarage.training.mdq";
const INSTAGRAM_HANDLE = "@elgarage.training.mdq";

const ContactoSection = () => {
  return (
    <section className="section-padding bg-hero" id="contacto">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-hero-foreground mb-4">
            ¿Listo para empezar?
          </h2>
          
          <p className="font-body text-hero-foreground/70 mb-8 text-lg">
            Escribime por Instagram y empezamos a trabajar juntos.
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-hero mb-8 group"
          >
            <Instagram className="w-6 h-6 transition-transform group-hover:scale-110" />
            Escribime por Instagram
          </a>

          <p className="text-hero-foreground/50 font-body text-sm mb-6">
            {INSTAGRAM_HANDLE}
          </p>

          <div className="flex items-center justify-center gap-2 text-hero-foreground/40 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Mar del Plata, Argentina · Zona Güemes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
