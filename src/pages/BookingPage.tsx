import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const services = [
    'Diagnóstico Facial',
    'Limpieza Facial Profunda',
    'Hidratación Facial',
    'Tratamiento Antiaging',
    'Hollywood Peel',
    'Remoción de Tatuajes',
    'Bioestimulación de Colágeno',
    'Tratamiento para Acné'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
    '05:00 PM', '06:00 PM'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    // For now, we'll just show a success message
    if (window.showToast) {
      window.showToast('¡Tu cita ha sido agendada! Te contactaremos pronto para confirmar.', 'success');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
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
              Agenda tu Cita
            </h1>
            <p className="text-xl text-gray-600">
              Reserva tu tratamiento o diagnóstico facial computarizado gratuito con nuestros especialistas
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Completa tus Datos
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo <span className="text-red-500">*</span>
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
                    Correo Electrónico <span className="text-red-500">*</span>
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
                      placeholder="ejemplo@correo.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                    placeholder="+593 XX XXX XXXX"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Servicio <span className="text-red-500">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Hora <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje (opcional)
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
                    rows={4}
                    className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                    placeholder="¿Tienes alguna pregunta o necesidad específica?"
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Agendar Cita
                </Button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Te contactaremos para confirmar la disponibilidad
                </p>
              </div>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Información de Contacto
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-[#deb887] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <a href="tel:+593XXXXXXXXX" className="text-gray-600 hover:text-[#deb887] transition-colors">
                      +593 XX XXX XXXX
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-[#deb887] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:info@bioskinsalud.com" className="text-gray-600 hover:text-[#deb887] transition-colors">
                      info@bioskinsalud.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-[#deb887] mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Horario de Atención</p>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 AM - 7:00 PM<br />
                      Sábado: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                <h4 className="font-medium text-gray-900 mb-2">Diagnóstico Facial Gratis</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Agenda tu diagnóstico facial computarizado gratuito y obtén un plan de tratamiento personalizado.
                </p>
                <div className="flex items-center text-[#deb887]">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-xs font-medium">Disponibilidad limitada</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Prefieres contactarnos por WhatsApp?</h4>
                <Button 
                  href="https://wa.me/593XXXXXXXXX" 
                  className="w-full flex justify-center"
                  icon={<Phone className="h-5 w-5" />}
                >
                  Contáctanos por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BookingPage;