import React from 'react';
import { ArrowRight, Sparkles, Zap, ShieldCheck, HeartPulse, Award, Clock } from 'lucide-react';
import Button from '../components/UI/Button';
import Section from '../components/UI/Section';
import ServiceCard from '../components/UI/ServiceCard';
import TestimonialCard from '../components/UI/TestimonialCard';
import BeforeAfterSlider from '../components/UI/BeforeAfterSlider';

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 right-0 w-64 h-64 bg-[#deb887]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-24 left-8 w-40 h-40 bg-[#deb887]/5 rounded-full filter blur-2xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero content */}
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Revela tu belleza natural con tecnología avanzada
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              En <span className="text-[#deb887] font-medium">BIO SKIN</span>, combinamos aparatología de última generación con tratamientos personalizados para brindarte resultados visibles y duraderos para tu piel.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button to="/agenda-cita" size="lg" icon={<Clock size={18} />}>
                Agenda tu Diagnóstico
              </Button>
              <Button to="/servicios" variant="outline" size="lg">
                Conoce Nuestros Tratamientos
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 text-[#deb887] mr-2" />
                <span className="text-sm text-gray-700">Equipos Certificados</span>
              </div>
              <div className="flex items-center">
                <HeartPulse className="h-5 w-5 text-[#deb887] mr-2" />
                <span className="text-sm text-gray-700">Profesionales Especializados</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-[#deb887] mr-2" />
                <span className="text-sm text-gray-700">+1000 Pacientes Satisfechos</span>
              </div>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Tratamiento facial con tecnología avanzada" 
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-md p-4 flex items-center">
                <div className="bg-[#deb887]/20 rounded-full p-2 mr-3">
                  <Sparkles className="h-6 w-6 text-[#deb887]" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Diagnóstico Facial</p>
                  <p className="text-sm font-semibold">Computarizado y Personalizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Diagnóstico Facial Computarizado',
      description: 'Análisis detallado de tu piel con tecnología avanzada para crear un plan de tratamiento personalizado.',
      to: '/diagnostico-facial',
      imageSrc: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: 'Limpieza Facial Profunda',
      description: 'Elimina impurezas, puntos negros y células muertas con un tratamiento completo de limpieza.',
      to: '/tratamientos',
      imageSrc: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Tratamientos Antiaging',
      description: 'Reduce líneas de expresión y arrugas con tecnología de radiofrecuencia bipolar y colágeno.',
      to: '/tratamientos',
      imageSrc: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
  ];

  return (
    <Section 
      title="Nuestros Servicios Destacados" 
      subtitle="Tratamientos faciales avanzados con tecnología de última generación para resultados visibles y duraderos."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            to={service.to}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button to="/servicios" variant="outline" icon={<ArrowRight size={16} />}>
          Ver Todos los Servicios
        </Button>
      </div>
    </Section>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <Section light>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tecnología y Experiencia al Servicio de Tu Belleza
          </h2>
          <div className="w-20 h-1 bg-[#deb887] mb-6 rounded-full"></div>
          <p className="text-gray-600 mb-6">
            En <strong>BIO SKIN SALUD Y ESTÉTICA</strong>, nos dedicamos a brindar tratamientos faciales personalizados de alta calidad utilizando tecnología avanzada y productos premium.
          </p>
          <p className="text-gray-600 mb-6">
            Nuestro centro en Cuenca, Ecuador, está equipado con aparatología de última generación, incluyendo IPL, láser Nd:YAG, radiofrecuencia bipolar y mesoterapia, para ofrecerte los mejores resultados.
          </p>
          <p className="text-gray-600 mb-6">
            Lo que nos diferencia es nuestro enfoque personalizado. Comenzamos con un <strong>diagnóstico facial computarizado</strong> que nos permite identificar exactamente lo que tu piel necesita y diseñar un plan a tu medida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button to="/diagnostico-facial">
              Conoce Nuestro Diagnóstico
            </Button>
            <Button to="/contacto" variant="outline">
              Contáctanos
            </Button>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Tratamiento facial profesional" 
              className="rounded-lg shadow-md h-64 object-cover w-full"
            />
            <img 
              src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Equipo de diagnóstico facial" 
              className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
            />
            <img 
              src="https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Tratamiento de hidratación facial" 
              className="rounded-lg shadow-md h-64 object-cover w-full"
            />
            <img 
              src="https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Consultorio de estética profesional" 
              className="rounded-lg shadow-md h-64 object-cover w-full mt-8"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ResultsSection: React.FC = () => {
  return (
    <Section 
      title="Resultados Reales" 
      subtitle="Nuestros tratamientos ofrecen resultados visibles. Mira la transformación de nuestros pacientes."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <BeforeAfterSlider 
            beforeImage="https://images.pexels.com/photos/3764151/pexels-photo-3764151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            afterImage="https://images.pexels.com/photos/3764168/pexels-photo-3764168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
          />
          <p className="text-center mt-4 font-medium text-gray-800">Tratamiento Antimanchas</p>
        </div>
        <div>
          <BeforeAfterSlider 
            beforeImage="https://images.pexels.com/photos/5069442/pexels-photo-5069442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            afterImage="https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
          />
          <p className="text-center mt-4 font-medium text-gray-800">Rejuvenecimiento Facial</p>
        </div>
        <div>
          <BeforeAfterSlider 
            beforeImage="https://images.pexels.com/photos/3997504/pexels-photo-3997504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            afterImage="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
          />
          <p className="text-center mt-4 font-medium text-gray-800">Tratamiento Antiacné</p>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button to="/resultados">
          Ver Más Resultados
        </Button>
      </div>
    </Section>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Carolina Mendez",
      text: "Después de varios meses luchando contra manchas en mi piel, BIO SKIN transformó mi rostro. El diagnóstico computarizado detectó problemas que no sabía que tenía. Ahora mi piel está radiante.",
      rating: 5,
      treatment: "Tratamiento Antimanchas"
    },
    {
      name: "Miguel Torres",
      text: "Nunca pensé que la tecnología láser podría eliminar mi tatuaje con tan pocos tratamientos. El personal es extremadamente profesional y el ambiente muy acogedor. ¡Estoy impresionado!",
      rating: 5,
      treatment: "Remoción de Tatuajes"
    },
    {
      name: "Daniela Vélez",
      text: "Mi experiencia con el tratamiento antiaging ha sido increíble. En solo 3 sesiones, las líneas de expresión en mi frente se redujeron notablemente. Me encanta el enfoque personalizado.",
      rating: 5,
      treatment: "Tratamiento Antiaging"
    }
  ];

  return (
    <Section 
      title="Lo Que Dicen Nuestros Pacientes" 
      subtitle="Historias reales de transformación y satisfacción con nuestros tratamientos."
      light
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard 
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            rating={testimonial.rating}
            treatment={testimonial.treatment}
          />
        ))}
      </div>
    </Section>
  );
};

const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Comienza Tu Transformación Hoy
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Da el primer paso hacia una piel más saludable y radiante. Agenda tu diagnóstico facial computarizado gratuito y descubre el tratamiento perfecto para ti.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/agenda-cita" size="lg">
            Agenda Tu Cita
          </Button>
          <Button 
            href="https://wa.me/593XXXXXXXXX" 
            variant="outline" 
            size="lg"
          >
            Contáctanos por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedServicesSection />
      <AboutUsSection />
      <ResultsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;