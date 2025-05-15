import React from 'react';
import { Sparkles, Zap, HeartPulse, Flame, Leaf, Shield, Award, Layers } from 'lucide-react';
import Section from '../components/UI/Section';
import ServiceCard from '../components/UI/ServiceCard';
import Button from '../components/UI/Button';

const servicesData = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Diagnóstico Facial Computarizado',
    description: 'Análisis detallado con tecnología avanzada que detecta manchas, arrugas, textura, poros, y más. Incluye plan de tratamiento personalizado.',
    imageSrc: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/diagnostico-facial'
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: 'Limpieza Facial Profunda',
    description: 'Tratamiento completo que elimina impurezas, células muertas y exceso de grasa para una piel radiante, fresca y libre de obstrucciones.',
    imageSrc: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Hidratación Facial Avanzada',
    description: 'Tratamiento intensivo que repone los niveles de humedad de la piel, restaura la barrera cutánea y aporta luminosidad inmediata.',
    imageSrc: 'https://images.pexels.com/photos/3997973/pexels-photo-3997973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Tratamientos Antiaging',
    description: 'Combina radiofrecuencia bipolar y colágeno para reducir líneas de expresión, arrugas y flacidez. Estimula la producción natural de colágeno.',
    imageSrc: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Flame className="h-6 w-6" />,
    title: 'Hollywood Peel con Láser',
    description: 'Peeling con láser Nd:YAG que elimina manchas, reduce poros y mejora la textura de la piel sin tiempo de recuperación. Favorito de las celebridades.',
    imageSrc: 'https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: 'Remoción de Tatuajes',
    description: 'Eliminación segura y efectiva de tatuajes no deseados mediante tecnología láser Nd:YAG. Tratamientos personalizados según tipo y color de tinta.',
    imageSrc: 'https://images.pexels.com/photos/5069416/pexels-photo-5069416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: 'Bioestimulación de Colágeno',
    description: 'Tratamiento que estimula la producción natural de colágeno y elastina para mejorar la firmeza, elasticidad y aspecto juvenil de la piel.',
    imageSrc: 'https://images.pexels.com/photos/3997335/pexels-photo-3997335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Tratamiento para Acné',
    description: 'Combinación de terapia con láser IPL y productos especializados para eliminar bacterias, reducir inflamación y prevenir cicatrices por acné.',
    imageSrc: 'https://images.pexels.com/photos/3997324/pexels-photo-3997324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    to: '/tratamientos'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600">
              Descubre nuestra amplia gama de tratamientos faciales profesionales utilizando aparatología de alta gama para brindarte resultados visibles y duraderos.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
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
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              No Sabes Qué Tratamiento Necesitas?
            </h2>
            <p className="text-gray-600 mb-8">
              Agenda un diagnóstico facial computarizado gratuito y recibe un plan de tratamiento personalizado para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/agenda-cita">
                Agenda tu Diagnóstico Gratis
              </Button>
              <Button to="/contacto" variant="outline">
                Consulta tus Dudas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;