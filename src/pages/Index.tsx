import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import PropuestaValor from "@/components/PropuestaValor";
import ServiciosSection from "@/components/ServiciosSection";
import SuplementosSection from "@/components/SuplementosSection";
import QuienSoySection from "@/components/QuienSoySection";
import FAQSection from "@/components/FAQSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Entrenador Personal en Mar del Plata | Juan Martín Álvarez</title>
        <meta 
          name="description" 
          content="Entrenamiento personalizado de fuerza y bienestar en Mar del Plata, zona Güemes. Grupos reducidos, entrenamiento individual y a distancia. +10 años de experiencia." 
        />
        <meta name="keywords" content="entrenador personal Mar del Plata, entrenamiento personalizado Mar del Plata, entrenamiento de fuerza, zona Güemes, gimnasio Mar del Plata" />
        <meta name="author" content="Juan Martín Álvarez" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://alvarezmartinetrenamiento.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Entrenador Personal en Mar del Plata | Juan Martín Álvarez" />
        <meta property="og:description" content="Entrenamiento personalizado de fuerza y bienestar en Mar del Plata, zona Güemes. +10 años de experiencia." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://alvarezmartinetrenamiento.com" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="AR-B" />
        <meta name="geo.placename" content="Mar del Plata" />
        <meta name="geo.position" content="-38.0023;-57.5575" />
        <meta name="ICBM" content="-38.0023, -57.5575" />
      </Helmet>

      <main>
        <HeroSection />
        <PropuestaValor />
        <ServiciosSection />
        <SuplementosSection />
        <QuienSoySection />
        <FAQSection />
        <ContactoSection />
        <Footer />
      </main>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Juan Martín Álvarez - Entrenamiento Personal",
          "description": "Entrenamiento personalizado de fuerza y bienestar en Mar del Plata, zona Güemes.",
          "url": "https://alvarezmartinetrenamiento.com",
          "telephone": "",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mar del Plata",
            "addressRegion": "Buenos Aires",
            "addressCountry": "AR",
            "streetAddress": "Zona Güemes"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -38.0023,
            "longitude": -57.5575
          },
          "areaServed": {
            "@type": "City",
            "name": "Mar del Plata"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Fr 07:00-21:00, Sa 08:00-14:00",
          "sameAs": [
            "https://instagram.com/elgarage.training.mdq"
          ]
        })}
      </script>
    </>
  );
};

export default Index;
