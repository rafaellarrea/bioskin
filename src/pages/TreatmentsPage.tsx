import React, { useState } from 'react';
import { Sparkles, Zap, HeartPulse, Flame, Leaf, Shield, Award, Layers, ChevronDown } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import BeforeAfterSlider from '../components/UI/BeforeAfterSlider';

interface Treatment {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
  procedure: string[];
  duration: string;
  results: string;
  imageSrc: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const TreatmentsPage: React.FC = () => {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);

  const toggleTreatment = (id: string) => {
    if (expandedTreatment === id) {
      setExpandedTreatment(null);
    } else {
      setExpandedTreatment(id);
    }
  };

  const treatments: Treatment[] = [
    {
      id: 'facial-cleansing',
      title: 'Limpieza Facial Profunda',
      icon: <HeartPulse className="h-6 w-6" />,
      description: 'Tratamiento completo que elimina impurezas, células muertas y exceso de grasa para una piel radiante, fresca y libre de obstrucciones.',
      benefits: [
        'Elimina puntos negros y células muertas',
        'Reduce la congestión de los poros',
        'Previene el acné y las imperfecciones',
        'Mejora la textura y luminosidad de la piel',
        'Prepara la piel para otros tratamientos'
      ],
      procedure: [
        'Análisis inicial de la piel',
        'Limpieza con productos específicos para tu tipo de piel',
        'Vaporización para abrir los poros',
        'Extracción profesional de impurezas',
        'Mascarilla calmante y nutritiva',
        'Hidratación final'
      ],
      duration: '60-90 minutos',
      results: 'Inmediatos, con una piel visiblemente más limpia, luminosa y suave. Para resultados óptimos, se recomienda realizar cada 4-6 semanas.',
      imageSrc: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      beforeAfter: {
        before: 'https://images.pexels.com/photos/3764151/pexels-photo-3764151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        after: 'https://images.pexels.com/photos/3764168/pexels-photo-3764168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
      }
    },
    {
      id: 'facial-hydration',
      title: 'Hidratación Facial Avanzada',
      icon: <Shield className="h-6 w-6" />,
      description: 'Tratamiento intensivo que repone los niveles de humedad de la piel, restaura la barrera cutánea y aporta luminosidad inmediata.',
      benefits: [
        'Repone los niveles de hidratación profunda',
        'Fortalece la barrera cutánea',
        'Reduce la sensación de tirantez',
        'Previene la aparición de líneas finas',
        'Aporta luminosidad instantánea'
      ],
      procedure: [
        'Limpieza suave de la piel',
        'Exfoliación enzimática para eliminar células muertas',
        'Aplicación de sueros de ácido hialurónico',
        'Mascarilla hidratante intensiva',
        'Tecnología de ultrasonido para potenciar la absorción',
        'Sellado con crema hidratante y protección solar'
      ],
      duration: '50-60 minutos',
      results: 'Inmediatos y acumulativos. La piel luce más jugosa, luminosa y elástica tras el primer tratamiento. Para resultados óptimos, se recomienda un ciclo de 4-6 sesiones.',
      imageSrc: 'https://images.pexels.com/photos/3997973/pexels-photo-3997973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 'antiaging',
      title: 'Tratamientos Antiaging',
      icon: <Zap className="h-6 w-6" />,
      description: 'Combina radiofrecuencia bipolar y colágeno para reducir líneas de expresión, arrugas y flacidez. Estimula la producción natural de colágeno.',
      benefits: [
        'Reduce líneas de expresión y arrugas',
        'Mejora la firmeza y elasticidad',
        'Redefine el contorno facial',
        'Estimula la producción natural de colágeno',
        'Efecto lifting sin cirugía'
      ],
      procedure: [
        'Limpieza profunda de la piel',
        'Aplicación de sérum con factores de crecimiento',
        'Tratamiento con radiofrecuencia bipolar',
        'Masaje con tecnología de vacuoterapia',
        'Mascarilla reafirmante',
        'Aplicación de protección solar específica'
      ],
      duration: '75-90 minutos',
      results: 'Visibles desde la primera sesión, con mejoras significativas tras un ciclo de 6-8 sesiones. Resultados óptimos con mantenimiento mensual.',
      imageSrc: 'https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      beforeAfter: {
        before: 'https://images.pexels.com/photos/5069442/pexels-photo-5069442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        after: 'https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
      }
    },
    {
      id: 'hollywood-peel',
      title: 'Hollywood Peel con Láser',
      icon: <Flame className="h-6 w-6" />,
      description: 'Peeling con láser Nd:YAG que elimina manchas, reduce poros y mejora la textura de la piel sin tiempo de recuperación. Favorito de las celebridades.',
      benefits: [
        'Reduce manchas y mejora el tono de la piel',
        'Minimiza el tamaño de los poros',
        'Atenúa cicatrices superficiales de acné',
        'Sin tiempo de recuperación (tratamiento "lunch-time")',
        'Efecto iluminador inmediato'
      ],
      procedure: [
        'Limpieza de la piel',
        'Aplicación de carbón líquido',
        'Tratamiento con láser Nd:YAG',
        'Limpieza de residuos',
        'Aplicación de productos calmantes',
        'Protección solar de alto espectro'
      ],
      duration: '30-45 minutos',
      results: 'Inmediatos, con una piel más luminosa y radiante. Para resultados óptimos en manchas y textura, se recomienda un ciclo de 3-5 sesiones.',
      imageSrc: 'https://images.pexels.com/photos/5069606/pexels-photo-5069606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 'tattoo-removal',
      title: 'Remoción de Tatuajes',
      icon: <Layers className="h-6 w-6" />,
      description: 'Eliminación segura y efectiva de tatuajes no deseados mediante tecnología láser Nd:YAG. Tratamientos personalizados según tipo y color de tinta.',
      benefits: [
        'Elimina tatuajes de forma progresiva',
        'Tecnología segura con mínimos efectos secundarios',
        'Efectivo en diferentes colores de tinta',
        'Personalizado según profundidad y antigüedad del tatuaje',
        'Resultados naturales sin cicatrices significativas'
      ],
      procedure: [
        'Consulta y evaluación del tatuaje',
        'Aplicación de anestesia tópica',
        'Tratamiento con láser Nd:YAG de diferentes longitudes de onda',
        'Aplicación de productos calmantes',
        'Instrucciones detalladas para cuidados posteriores'
      ],
      duration: '15-45 minutos (según tamaño del tatuaje)',
      results: 'Progresivos, con aclaramiento visible después de cada sesión. La cantidad de sesiones varía según color, profundidad y edad del tatuaje (generalmente 6-12 sesiones).',
      imageSrc: 'https://images.pexels.com/photos/5069416/pexels-photo-5069416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 'collagen-biostimulation',
      title: 'Bioestimulación de Colágeno',
      icon: <Leaf className="h-6 w-6" />,
      description: 'Tratamiento que estimula la producción natural de colágeno y elastina para mejorar la firmeza, elasticidad y aspecto juvenil de la piel.',
      benefits: [
        'Estimula la producción natural de colágeno',
        'Mejora la elasticidad y firmeza de la piel',
        'Reduce la apariencia de líneas finas',
        'Hidrata profundamente desde el interior',
        'Resultados naturales y progresivos'
      ],
      procedure: [
        'Limpieza profunda de la piel',
        'Aplicación de anestesia tópica (si es necesario)',
        'Microinyecciones de sustancias bioestimulantes',
        'Masaje para distribución uniforme del producto',
        'Aplicación de mascarilla calmante',
        'Recomendaciones para cuidados posteriores'
      ],
      duration: '45-60 minutos',
      results: 'Progresivos, con mejoras visibles en la calidad de la piel a partir de 2-3 semanas. Resultados óptimos con un ciclo de 3-4 sesiones espaciadas mensualmente.',
      imageSrc: 'https://images.pexels.com/photos/3997335/pexels-photo-3997335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    },
    {
      id: 'acne-treatment',
      title: 'Tratamiento para Acné',
      icon: <Award className="h-6 w-6" />,
      description: 'Combinación de terapia con láser IPL y productos especializados para eliminar bacterias, reducir inflamación y prevenir cicatrices por acné.',
      benefits: [
        'Reduce la inflamación y el enrojecimiento',
        'Elimina las bacterias causantes del acné',
        'Regula la producción de sebo',
        'Previene la formación de cicatrices',
        'Mejora la textura general de la piel'
      ],
      procedure: [
        'Limpieza profunda con productos específicos para pieles acneicas',
        'Extracción profesional de comedones (si es necesario)',
        'Aplicación de productos antimicrobianos',
        'Tratamiento con luz pulsada IPL',
        'Mascarilla calmante y reguladora',
        'Plan personalizado de cuidado en casa'
      ],
      duration: '60-75 minutos',
      results: 'Mejora visible desde la primera sesión, con reducción significativa de lesiones inflamatorias. Resultados óptimos con 4-6 sesiones según la severidad.',
      imageSrc: 'https://images.pexels.com/photos/3997324/pexels-photo-3997324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      beforeAfter: {
        before: 'https://images.pexels.com/photos/3997504/pexels-photo-3997504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
        after: 'https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
      }
    },
    {
      id: 'facial-diagnostic',
      title: 'Diagnóstico Facial Computarizado',
      icon: <Sparkles className="h-6 w-6" />,
      description: 'Análisis detallado con tecnología avanzada que detecta manchas, arrugas, textura, poros, y más. Incluye plan de tratamiento personalizado.',
      benefits: [
        'Evaluación precisa de las condiciones de la piel',
        'Detección de problemas no visibles a simple vista',
        'Plan de tratamiento personalizado basado en datos objetivos',
        'Seguimiento de la evolución y efectividad de los tratamientos',
        'Recomendaciones específicas para cuidado en casa'
      ],
      procedure: [
        'Limpieza suave de la piel',
        'Captura de imágenes multiespectrales con equipo especializado',
        'Análisis computarizado de diferentes parámetros',
        'Revisión detallada de resultados con especialista',
        'Diseño de plan personalizado de tratamientos'
      ],
      duration: '30 minutos',
      results: 'Información detallada inmediata sobre el estado actual de tu piel y recomendaciones específicas para mejorarla.',
      imageSrc: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Nuestros Tratamientos
            </h1>
            <p className="text-xl text-gray-600">
              Tratamientos faciales avanzados personalizados para tus necesidades específicas
            </p>
          </div>
        </div>
      </div>
      
      {/* Treatments Section */}
      <Section>
        <div className="space-y-8">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <div className="h-full">
                    <img 
                      src={treatment.imageSrc} 
                      alt={treatment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 text-[#deb887]">
                      {treatment.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">{treatment.title}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button to="/agenda-cita" size="sm">
                      Agenda este Tratamiento
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toggleTreatment(treatment.id)}
                    >
                      {expandedTreatment === treatment.id ? 'Ver menos' : 'Ver más detalles'}
                      <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${expandedTreatment === treatment.id ? 'rotate-180' : ''}`} />
                    </Button>
                  </div>
                  
                  {expandedTreatment === treatment.id && (
                    <div className="mt-6 pt-6 border-t border-gray-100 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Beneficios</h3>
                          <ul className="text-gray-600 space-y-2">
                            {treatment.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start">
                                <div className="mt-1 mr-2 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full bg-[#deb887]/20">
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#deb887]"></div>
                                </div>
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-medium text-gray-900 mb-3">Procedimiento</h3>
                          <ol className="text-gray-600 space-y-2 list-decimal list-inside">
                            {treatment.procedure.map((step, index) => (
                              <li key={index} className="text-sm">{step}</li>
                            ))}
                          </ol>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="font-medium text-gray-900 mb-2">Resultados esperados</h3>
                        <p className="text-gray-600 text-sm">{treatment.results}</p>
                      </div>
                      
                      {treatment.beforeAfter && (
                        <div className="mt-6">
                          <h3 className="font-medium text-gray-900 mb-3">Antes y Después</h3>
                          <BeforeAfterSlider 
                            beforeImage={treatment.beforeAfter.before}
                            afterImage={treatment.beforeAfter.after}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Personalized Plan Section */}
      <Section light title="Plan Personalizado" centered>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No sabes qué tratamiento necesitas?</h3>
                <p className="text-gray-600 mb-6">
                  Nuestro diagnóstico facial computarizado te ayuda a identificar exactamente lo que tu piel necesita, para crear un plan de tratamiento totalmente personalizado.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#deb887]/20">
                      <Check className="h-3 w-3 text-[#deb887]" />
                    </div>
                    <span className="text-gray-600">Análisis detallado de tu tipo de piel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#deb887]/20">
                      <Check className="h-3 w-3 text-[#deb887]" />
                    </div>
                    <span className="text-gray-600">Identificación de problemas específicos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#deb887]/20">
                      <Check className="h-3 w-3 text-[#deb887]" />
                    </div>
                    <span className="text-gray-600">Recomendación de tratamientos adecuados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[#deb887]/20">
                      <Check className="h-3 w-3 text-[#deb887]" />
                    </div>
                    <span className="text-gray-600">Plan personalizado para resultados óptimos</span>
                  </li>
                </ul>
                <Button to="/diagnostico-facial">
                  Conoce más sobre el Diagnóstico
                </Button>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Diagnóstico facial computarizado" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Packages Section */}
      <Section title="Paquetes Especiales" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="px-2 py-1 bg-[#deb887]/20 text-[#deb887] text-xs font-medium rounded-full w-fit mb-4">
              Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paquete Luminosidad</h3>
            <p className="text-gray-600 text-sm mb-4">
              Ideal para pieles apagadas y con falta de luminosidad.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Diagnóstico facial computarizado
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Limpieza facial profunda
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Hollywood Peel
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Hidratación facial avanzada
              </li>
            </ul>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-gray-900">$200</span>
              <span className="text-sm text-gray-500 ml-2 line-through">$280</span>
            </div>
            <Button to="/agenda-cita" className="w-full">
              Agendar Paquete
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md relative">
            <div className="absolute -top-3 -right-3 bg-[#deb887] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
              MEJOR VALOR
            </div>
            <div className="px-2 py-1 bg-[#deb887]/20 text-[#deb887] text-xs font-medium rounded-full w-fit mb-4">
              Más vendido
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paquete Rejuvenecimiento</h3>
            <p className="text-gray-600 text-sm mb-4">
              Perfecto para combatir signos de envejecimiento y mejorar la firmeza.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Diagnóstico facial computarizado
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Limpieza facial profunda
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Tratamiento antiaging (3 sesiones)
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Bioestimulación de colágeno
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Hidratación facial avanzada
              </li>
            </ul>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-gray-900">$350</span>
              <span className="text-sm text-gray-500 ml-2 line-through">$500</span>
            </div>
            <Button to="/agenda-cita" className="w-full">
              Agendar Paquete
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <div className="px-2 py-1 bg-[#deb887]/20 text-[#deb887] text-xs font-medium rounded-full w-fit mb-4">
              Especializado
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Paquete Anti-Acné</h3>
            <p className="text-gray-600 text-sm mb-4">
              Diseñado para pieles con acné activo y marcas post-acné.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Diagnóstico facial computarizado
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Tratamiento para acné (4 sesiones)
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Peeling específico para acné
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <Check className="h-4 w-4 text-[#deb887] mr-2" />
                Kit de productos para uso en casa
              </li>
            </ul>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-gray-900">$250</span>
              <span className="text-sm text-gray-500 ml-2 line-through">$360</span>
            </div>
            <Button to="/agenda-cita" className="w-full">
              Agendar Paquete
            </Button>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para transformar tu piel?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Agenda tu diagnóstico facial computarizado gratuito hoy mismo y recibe un plan personalizado para lograr la piel que siempre has deseado.
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
              Pregunta por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const Clock: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

const Check: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
};

export default TreatmentsPage;