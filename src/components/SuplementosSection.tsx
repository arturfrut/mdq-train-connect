import { Instagram, Pill } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/garage.training.mdq";

const SuplementosSection = () => {
  return (
    <section className="section-padding bg-background" id="suplementos">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-muted mb-6">
            <Pill className="w-6 h-6 text-primary" />
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-4">
            Suplementación deportiva
          </h2>
          
          <p className="font-body text-muted-foreground mb-6">
            Venta y asesoramiento de suplementos para complementar tu entrenamiento.
          </p>
          
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-outline text-sm"
          >
            <Instagram className="w-4 h-4" />
            Consultá por Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuplementosSection;
