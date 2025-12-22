import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    pregunta: "¿Necesito experiencia previa?",
    respuesta: "No. El entrenamiento se adapta a cada persona y nivel. No importa si nunca entrenaste o si hace tiempo que no lo hacés.",
  },
  {
    pregunta: "¿Hay límite de edad?",
    respuesta: "Trabajo con personas desde los 16 hasta los 65 años. El entrenamiento de fuerza es beneficioso en todas las etapas de la vida.",
  },
  {
    pregunta: "¿Cómo empiezo?",
    respuesta: "Es muy simple: escribime por Instagram y coordinamos. Charlamos sobre tus objetivos y encontramos la mejor opción para vos.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background" id="preguntas">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl text-foreground text-center mb-10">
            Preguntas frecuentes
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:ring-1 data-[state=open]:ring-primary/20"
              >
                <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline py-5">
                  {faq.pregunta}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5">
                  {faq.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
