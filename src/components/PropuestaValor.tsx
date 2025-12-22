import { CheckCircle } from "lucide-react";

const beneficios = [
  "No necesitás experiencia previa",
  "Entrenamiento adaptado a cada persona",
  "Fuerza, bienestar y recuperación",
];

const PropuestaValor = () => {
  return (
    <section className="section-padding bg-background" id="propuesta">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">
            Entrenamiento con propósito
          </h2>
          
          <p className="font-body text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            Ayudo a personas de todas las edades a moverse mejor, ganar fuerza y mejorar su calidad de vida 
            a través del entrenamiento, la constancia y el acompañamiento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {beneficios.map((beneficio, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-foreground/80"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-sm sm:text-base">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropuestaValor;
