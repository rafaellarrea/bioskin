import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, User, Send } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    // For now, we'll just show a success message
    if (window.showToast) {
      window.showToast('¡Mensaje enviado! Te responderemos pronto.', 'success');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para responder tus preguntas y ayudarte con todo lo que necesites
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#deb887]/20 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Llámanos</h3>
            <p className="text-gray-600 mb-4">
              Habla directamente con nuestros especialistas
            </p>
            <a 
              href="tel:+593XXXXXXXXX"
              className="text-[#deb887] font-medium hover:underline"
            >
              +593 XX XXX XXXX
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#deb887]/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Escríbenos</h3>
            <p className="text-gray-600 mb-4">
              Envíanos tus dudas o consultas por email
            </p>
            <a 
              href="mailto:info@bioskinsalud.com"
              className="text-[#deb887] font-medium hover:underline"
            >
              info@bioskinsalud.com
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-[#deb887]/20 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-[#deb887]" />
            </div>
            <h3 className="font-medium text-gray-900 mb-2">Visítanos</h3>
            <p className="text-gray-600 mb-4">
              Ven a nuestro centro de estética en Cuenca
            </p>
            <p className="text-[#deb887] font-medium">
              Av. Principal 123, Cuenca, Ecuador
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
              </div>
              
              <div>
                <Button 
                  type="submit"
                  icon={<Send className="h-4 w-4" />}
                >
                  Enviar Mensaje
                </Button>
              </div>
            </form>
          </div>
          
          {/* Map and Hours */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Encuéntranos
            </h2>
            
            {/* Map placeholder - In a real implementation, this would be an actual map */}
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for map - In a real implementation, replace with actual map */}
                <MapPin className="h-12 w-12 text-gray-400" />
                <span className="absolute text-sm text-gray-600 mt-16">Mapa interactivo</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-[#deb887]" />
                Horario de Atención
              </h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 mb-4">
                  ¿Prefieres agendar una cita?
                </h3>
                <Button 
                  to="/agenda-cita"
                  className="w-full justify-center"
                >
                  Agenda tu Cita
                </Button>
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
              <h3 className="font-medium text-gray-900 mb-2">¿Ofrecen consultas virtuales?</h3>
              <p className="text-gray-600">
                Sí, ofrecemos consultas virtuales iniciales para responder tus preguntas y orientarte sobre los posibles tratamientos. Sin embargo, para un diagnóstico preciso, recomendamos una visita presencial.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Cómo puedo cancelar o reprogramar mi cita?</h3>
              <p className="text-gray-600">
                Puedes cancelar o reprogramar tu cita llamándonos directamente o enviándonos un mensaje por WhatsApp con al menos 24 horas de anticipación.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Aceptan todas las formas de pago?</h3>
              <p className="text-gray-600">
                Aceptamos efectivo, tarjetas de crédito/débito, transferencias bancarias y pagos móviles. También ofrecemos planes de financiamiento para tratamientos más extensos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Tienen estacionamiento disponible?</h3>
              <p className="text-gray-600">
                Sí, contamos con estacionamiento gratuito para nuestros clientes en las instalaciones del centro.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para Transformar tu Piel?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            No esperes más para comenzar tu camino hacia una piel más saludable y radiante. Contáctanos hoy mismo.
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
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;