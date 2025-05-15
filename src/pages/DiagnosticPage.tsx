import React from 'react';
import { Check, ZoomIn, BarChart3, HeartPulse, ClipboardList } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const DiagnosticPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-16 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Diagnóstico Facial Computarizado
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tecnología avanzada para un análisis preciso y personalizado de tu piel
            </p>
            <Button to="/agenda-cita" size="lg">
              Agenda tu Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <Section>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conoce tu Piel en Profundidad
            </h2>
            <div className="w-20 h-1 bg-[#deb887] mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-6">
              Nuestro sistema de diagnóstico facial computarizado utiliza tecnología de vanguardia para analizar tu piel a nivel microscópico, permitiéndonos ver más allá de lo que es visible a simple vista.
            </p>
            <p className="text-gray-600 mb-8">
              El análisis completo evalúa múltiples factores que afectan la salud y apariencia de tu piel, proporcionando datos precisos para crear un plan de tratamiento totalmente personalizado.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#deb887]/20">
                  <Check className="h-4 w-4 text-[#deb887]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Análisis de Manchas y Pigmentación</h3>
                  <p className="text-sm text-gray-600">Detecta manchas visibles y subepidérmicas antes de que sean visibles.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#deb887]/20">
                  <Check className="h-4 w-4 text-[#deb887]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Evaluación de Arrugas y Líneas de Expresión</h3>
                  <p className="text-sm text-gray-600">Mide profundidad y distribución de arrugas para tratamientos preventivos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#deb887]/20">
                  <Check className="h-4 w-4 text-[#deb887]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Análisis de Poros y Textura</h3>
                  <p className="text-sm text-gray-600">Evalúa tamaño, distribución y obstrucción de poros para mejorar la textura.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#deb887]/20">
                  <Check className="h-4 w-4 text-[#deb887]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Medición de Hidratación y Elasticidad</h3>
                  <p className="text-sm text-gray-600">Evalúa niveles de hidratación y firmeza para tratamientos específicos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#deb887]/20">
                  <Check className="h-4 w-4 text-[#deb887]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Detección de Sensibilidad y Daño Solar</h3>
                  <p className="text-sm text-gray-600">Identifica áreas de sensibilidad y daño UV no visible a simple vista.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Diagnóstico facial computarizado" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Process Section */}
      <Section light>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Cómo Funciona Nuestro Diagnóstico
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Un proceso simple y no invasivo de 30 minutos que proporciona información detallada sobre tu piel
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ZoomIn className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">1. Escaneo Facial</h3>
            <p className="text-sm text-gray-600">
              Capturamos imágenes de alta resolución de tu rostro desde múltiples ángulos con nuestra cámara especializada.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">2. Análisis Computarizado</h3>
            <p className="text-sm text-gray-600">
              Nuestro software analiza más de 20 parámetros diferentes de tu piel para crear un perfil completo.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">3. Revisión de Resultados</h3>
            <p className="text-sm text-gray-600">
              Revisamos contigo los resultados detallados, identificando áreas de preocupación y necesidades específicas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartPulse className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">4. Plan Personalizado</h3>
            <p className="text-sm text-gray-600">
              Creamos un plan de tratamiento totalmente personalizado según tus necesidades y objetivos específicos.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Before/After Section */}
      <Section title="Antes y Después del Tratamiento Recomendado" centered>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex mb-6 space-x-4">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3764151/pexels-photo-3764151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Antes del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Antes</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3764168/pexels-photo-3764168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Después del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Después</p>
              </div>
            </div>
            <p className="text-center text-gray-700">Tratamiento para manchas</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex mb-6 space-x-4">
              <div>
                <img 
                  src="https://images.pexels.com/photos/5069442/pexels-photo-5069442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Antes del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Antes</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/5069431/pexels-photo-5069431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Después del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Después</p>
              </div>
            </div>
            <p className="text-center text-gray-700">Rejuvenecimiento facial</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex mb-6 space-x-4">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3997504/pexels-photo-3997504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Antes del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Antes</p>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                  alt="Después del tratamiento" 
                  className="w-40 h-48 object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-medium text-center">Después</p>
              </div>
            </div>
            <p className="text-center text-gray-700">Tratamiento para acné</p>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section light title="Preguntas Frecuentes" centered>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Es doloroso el diagnóstico facial?</h3>
              <p className="text-gray-600">
                No, el diagnóstico facial es completamente indoloro y no invasivo. Solo implica capturar imágenes con una cámara especializada sin contacto directo con la piel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Cuánto tiempo dura el diagnóstico?</h3>
              <p className="text-gray-600">
                El proceso completo dura aproximadamente 30 minutos, incluyendo el escaneo y la revisión detallada de los resultados con nuestro especialista.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Necesito preparar mi piel antes del diagnóstico?</h3>
              <p className="text-gray-600">
                Recomendamos acudir sin maquillaje para obtener resultados más precisos. Si es posible, evita exfoliaciones fuertes o tratamientos agresivos 48 horas antes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Con qué frecuencia debo hacerme un diagnóstico facial?</h3>
              <p className="text-gray-600">
                Recomendamos realizar un diagnóstico cada 3-6 meses para monitorear el progreso de los tratamientos y ajustar el plan según las necesidades cambiantes de tu piel.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para Conocer tu Piel en Profundidad?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Agenda tu diagnóstico facial computarizado gratuito hoy mismo y recibe un plan de tratamiento personalizado que transformará tu piel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/agenda-cita" size="lg">
              Agenda Tu Diagnóstico Gratis
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

export default DiagnosticPage;