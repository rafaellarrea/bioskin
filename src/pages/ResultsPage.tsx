import React from 'react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import BeforeAfterSlider from '../components/UI/BeforeAfterSlider';
import TestimonialCard from '../components/UI/TestimonialCard';

const ResultsPage: React.FC = () => {
  const beforeAfterResults = [
    {
      id: 1,
      treatment: 'Tratamiento Antimanchas',
      description: 'Tratamiento específico para eliminar manchas y mejorar el tono uniforme de la piel.',
      beforeImage: '"C:\Users\Gamer\Documents\BIO SKIN\BIOTECH\WEBSITE\bioskin-ready-for-vercel\public\images\manchas\despigmentante_antes.png"',
      afterImage: '"C:\Users\Gamer\Documents\BIO SKIN\BIOTECH\WEBSITE\bioskin-ready-for-vercel\public\images\manchas\despigmentante_despues.png"',
      sessions: '3 sesiones'
    },
    {
      id: 2,
      treatment: 'Rejuvenecimiento Facial',
      description: 'Tratamiento antiaging con radiofrecuencia bipolar para reducir arrugas y líneas de expresión.',
      beforeImage: 'https://images.pexels.com/photos/5069442/pexels-photo-5069442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      afterImage: 'https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      sessions: '6 sesiones'
    },
    {
      id: 3,
      treatment: 'Tratamiento para Acné',
      description: 'Tratamiento especializado con láser IPL para reducir inflamación y prevenir cicatrices por acné.',
      beforeImage: 'https://images.pexels.com/photos/3997504/pexels-photo-3997504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      afterImage: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      sessions: '4 sesiones'
    },
    {
      id: 4,
      treatment: 'Hidratación Profunda',
      description: 'Tratamiento intensivo de hidratación para recuperar la luminosidad y elasticidad de la piel.',
      beforeImage: 'https://images.pexels.com/photos/3997973/pexels-photo-3997973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      afterImage: 'https://images.pexels.com/photos/3997328/pexels-photo-3997328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      sessions: '1 sesión'
    },
    {
      id: 5,
      treatment: 'Remoción de Tatuaje',
      description: 'Eliminación de tatuaje con láser Nd:YAG, tecnología segura y efectiva para todos los colores.',
      beforeImage: 'https://images.pexels.com/photos/5069416/pexels-photo-5069416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      afterImage: 'https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      sessions: '8 sesiones'
    },
    {
      id: 6,
      treatment: 'Hollywood Peel',
      description: 'Peeling con láser y carbón líquido para unificar tono, reducir poros y rejuvenecer la piel.',
      beforeImage: 'https://images.pexels.com/photos/3997335/pexels-photo-3997335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      afterImage: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      sessions: '2 sesiones'
    }
  ];

  const testimonials = [
    {
      name: "Carolina Mendez",
      text: "Después de varios meses luchando contra manchas en mi piel, BIO SKIN transformó mi rostro. El diagnóstico computarizado detectó problemas que no sabía que tenía. Ahora mi piel está radiante y uniforme.",
      rating: 5,
      treatment: "Tratamiento Antimanchas"
    },
    {
      name: "Miguel Torres",
      text: "Nunca pensé que la tecnología láser podría eliminar mi tatuaje con tan pocos tratamientos. El personal es extremadamente profesional y el ambiente muy acogedor. ¡Estoy impresionado con los resultados!",
      rating: 5,
      treatment: "Remoción de Tatuajes"
    },
    {
      name: "Daniela Vélez",
      text: "Mi experiencia con el tratamiento antiaging ha sido increíble. En solo 3 sesiones, las líneas de expresión en mi frente se redujeron notablemente. Me encanta el enfoque personalizado.",
      rating: 5,
      treatment: "Tratamiento Antiaging"
    },
    {
      name: "Roberto Palacios",
      text: "Después de años luchando contra el acné, por fin encontré una solución efectiva. Los resultados han sido sorprendentes y mi autoestima ha mejorado significativamente. Recomiendo BIO SKIN a todos.",
      rating: 5,
      treatment: "Tratamiento para Acné"
    },
    {
      name: "Ana María Castro",
      text: "La hidratación profunda dejó mi piel increíblemente suave y luminosa. El personal es muy profesional y atento. Definitivamente regresaré para más tratamientos.",
      rating: 5,
      treatment: "Hidratación Facial Avanzada"
    },
    {
      name: "Luis Paredes",
      text: "Excelente servicio y resultados inmediatos con el Hollywood Peel. Mi piel se ve mucho más joven y radiante. Aprecio mucho la honestidad y profesionalismo del equipo de BIO SKIN.",
      rating: 5,
      treatment: "Hollywood Peel"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Resultados Reales
            </h1>
            <p className="text-xl text-gray-600">
              Descubre las transformaciones logradas con nuestros tratamientos faciales avanzados
            </p>
          </div>
        </div>
      </div>
      
      {/* Before/After Section */}
      <Section title="Transformaciones Reales" subtitle="Resultados visibles de nuestros tratamientos faciales personalizados" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <BeforeAfterSlider 
                beforeImage={result.beforeImage}
                afterImage={result.afterImage}
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{result.treatment}</h3>
                <p className="text-gray-600 text-sm mb-2">{result.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-[#deb887] bg-[#deb887]/10 px-2 py-1 rounded-full">
                    {result.sessions}
                  </span>
                  <Button to="/tratamientos" variant="outline" size="sm">
                    Ver Tratamiento
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <Section light title="Lo Que Dicen Nuestros Pacientes" subtitle="Experiencias reales de personas que han transformado su piel con nuestros tratamientos" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      
      {/* Process Section */}
      <Section title="Nuestro Proceso para Resultados Exitosos" centered>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#deb887]/20 z-0"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Diagnóstico Personalizado</h3>
                  <p className="text-gray-600">
                    Analizamos tu piel con tecnología computarizada para identificar necesidades específicas y crear un plan personalizado.
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#deb887] text-white font-bold text-xl shadow-md">
                  1
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Plan de Tratamiento</h3>
                  <p className="text-gray-600">
                    Diseñamos un programa a medida combinando los tratamientos más efectivos para tus objetivos específicos.
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#deb887] text-white font-bold text-xl shadow-md">
                  2
                </div>
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Tecnología Avanzada</h3>
                  <p className="text-gray-600">
                    Utilizamos aparatología de alta gama como IPL, láser Nd:YAG y radiofrecuencia bipolar para resultados superiores.
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#deb887] text-white font-bold text-xl shadow-md">
                  3
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Seguimiento Personalizado</h3>
                  <p className="text-gray-600">
                    Monitoreamos tu progreso continuamente, adaptando el tratamiento según la respuesta de tu piel.
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#deb887] text-white font-bold text-xl shadow-md">
                  4
                </div>
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Resultados Duraderos</h3>
                  <p className="text-gray-600">
                    Proporcionamos recomendaciones de cuidado en casa para mantener y potenciar los resultados a largo plazo.
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#deb887] text-white font-bold text-xl shadow-md">
                  5
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section light title="Preguntas Frecuentes" centered>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Cuánto tiempo se tarda en ver resultados?</h3>
              <p className="text-gray-600">
                Depende del tratamiento específico y tu condición inicial. Algunos tratamientos como la hidratación facial o el Hollywood Peel ofrecen resultados inmediatos, mientras que otros como los tratamientos antiaging o para acné requieren varias sesiones para mostrar resultados óptimos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Los resultados son permanentes?</h3>
              <p className="text-gray-600">
                Los resultados pueden ser duraderos, pero la piel continúa su proceso natural de envejecimiento. Recomendamos tratamientos de mantenimiento periódicos y seguir un régimen de cuidado en casa para maximizar y prolongar los resultados.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Los tratamientos son dolorosos?</h3>
              <p className="text-gray-600">
                La mayoría de nuestros tratamientos son indoloros o causan solo molestias mínimas. Para procedimientos más intensivos como la remoción de tatuajes, utilizamos anestesia tópica para garantizar tu comodidad durante el tratamiento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Existe tiempo de recuperación?</h3>
              <p className="text-gray-600">
                La mayoría de nuestros tratamientos no requieren tiempo de recuperación, por lo que puedes reincorporarte inmediatamente a tus actividades diarias. Algunos tratamientos más intensivos pueden causar enrojecimiento temporal o sensibilidad que generalmente desaparece en 24-48 horas.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comienza Tu Transformación Hoy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Agenda tu diagnóstico facial computarizado gratuito y descubre cómo podemos ayudarte a lograr la piel que siempre has deseado.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/agenda-cita" size="lg">
              Agenda Tu Diagnóstico Gratis
            </Button>
            <Button to="/tratamientos" variant="outline" size="lg">
              Explora Nuestros Tratamientos
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsPage;