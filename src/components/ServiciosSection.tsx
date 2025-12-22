import { Users, User, Globe, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com/elgarage.training.mdq";

const servicios = [
  {
    icon: Users,
    titulo: "Grupos reducidos",
    subtitulo: "En su espacio",
    descripcion: [
      "Entrenamiento en grupos pequeños",
      "Atención personalizada",
      "Corrección técnica",
      "Buen clima y motivación",
    ],
    ubicacion: "Mar del Plata, zona Güemes",
  },
  {
    icon: User,
    titulo: "Personalizado",
    subtitulo: "En su espacio",
    descripcion: [
      "Entrenamiento 100% individual",
      "Ideal para volver a entrenar",
      "Objetivos específicos",
      "Acompañamiento cercano",
    ],
    destacado: true,
  },
  {
    icon: Globe,
    titulo: "Personalizado",
    subtitulo: "A distancia",
    descripcion: [
      "Rutinas personalizadas",
      "Seguimiento y acompañamiento",
      "Recomendaciones de nutrición",
      "Contacto continuo",
    ],
    nota: "No es solo una rutina en PDF",
  },
];

const ServiciosSection = () => {
  return (
    <section className="section-padding bg-section-alt" id="servicios">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
            Servicios de entrenamiento en Mar del Plata
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Opciones flexibles para que encuentres la que mejor se adapte a vos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon;
            return (
              <article 
                key={index} 
                className={`service-card ${servicio.destacado ? 'ring-2 ring-primary/30 bg-card' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${servicio.destacado ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground">{servicio.titulo}</h3>
                    <p className="text-sm text-muted-foreground">{servicio.subtitulo}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {servicio.descripcion.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80 font-body text-sm">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {servicio.ubicacion && (
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    📍 {servicio.ubicacion}
                  </p>
                )}

                {servicio.nota && (
                  <p className="text-xs text-primary font-medium mt-4 pt-4 border-t border-border italic">
                    {servicio.nota}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            <Instagram className="w-5 h-5" />
            Consultá disponibilidad por Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
