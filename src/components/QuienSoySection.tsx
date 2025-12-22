import martinImage from "@/assets/martin-trainer.jpg";

const QuienSoySection = () => {
  return (
    <section className="section-padding bg-section-alt" id="sobre-mi">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              <img
                src={martinImage}
                alt="Martín Álvarez - Entrenador personal en Mar del Plata"
                className="w-full h-full object-cover rounded-2xl shadow-elegant-lg"
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
              Quién soy
            </h2>
            
            <div className="space-y-4 font-body text-foreground/80 leading-relaxed">
              <p>
                Soy <strong className="text-foreground">Martín</strong>, entrenador con más de 10 años de experiencia. 
                Me especializo en entrenamiento de la fuerza, alta intensidad y bienestar. 
                Trabajé muchos años en alto rendimiento y CrossFit, y actualmente continúo formándome en calistenia.
              </p>
              
              <p>
                Creo que el entrenamiento de la fuerza hace bien, que moverse mejor cambia la calidad de vida 
                y que la recuperación es parte fundamental del progreso.
              </p>
              
              <p>
                Además soy <strong className="text-foreground">masajista matriculado</strong>, lo que me permite tener 
                una mirada integral sobre el cuerpo y el movimiento.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-primary">+10</p>
                <p className="text-xs sm:text-sm text-muted-foreground">años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-primary">16-65</p>
                <p className="text-xs sm:text-sm text-muted-foreground">rango de edades</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">personalizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienSoySection;
