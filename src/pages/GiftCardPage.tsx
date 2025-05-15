import React, { useState } from 'react';
import { Gift, CreditCard, Mail, User, DollarSign } from 'lucide-react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';

const GiftCardPage: React.FC = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    amount: '',
    message: ''
  });

  const [selectedDesign, setSelectedDesign] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    // For now, we'll just show a success message
    if (window.showToast) {
      window.showToast('¡Gift Card comprada con éxito! Se ha enviado un correo con los detalles.', 'success');
    }
    
    // Reset form
    setFormData({
      recipientName: '',
      recipientEmail: '',
      senderName: '',
      senderEmail: '',
      amount: '',
      message: ''
    });
  };

  const giftCardDesigns = [
    {
      id: 1,
      name: "Elegante Dorado",
      bgColor: "bg-gradient-to-r from-[#deb887]/80 to-[#deb887]/30",
      textColor: "text-white"
    },
    {
      id: 2,
      name: "Clásico Blanco",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      id: 3,
      name: "Minimalista Negro",
      bgColor: "bg-gray-900",
      textColor: "text-[#deb887]"
    }
  ];

  const amounts = [50, 75, 100, 150, 200];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-12 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Gift Cards
            </h1>
            <p className="text-xl text-gray-600">
              Regala belleza y bienestar a tus seres queridos con nuestras tarjetas de regalo
            </p>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Regalo Personalizado</h3>
            <p className="text-gray-600">
              Una experiencia de cuidado facial profesional es un regalo único y memorable que será muy apreciado.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
            <p className="text-gray-600">
              La persona que recibe la gift card puede canjearla por cualquiera de nuestros servicios disponibles.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-16 h-16 bg-[#deb887]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-[#deb887]" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Entrega Digital</h3>
            <p className="text-gray-600">
              Envía la gift card directamente al email de la persona que la recibirá o a tu propio correo para entregarla personalmente.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Card Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Personaliza tu Gift Card
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">1. Elige un diseño</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {giftCardDesigns.map((design) => (
                    <div 
                      key={design.id}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                        selectedDesign === design.id ? 'border-[#deb887] shadow-md scale-105' : 'border-transparent'
                      }`}
                      onClick={() => setSelectedDesign(design.id)}
                    >
                      <div className={`aspect-[3/2] ${design.bgColor} rounded-lg flex items-center justify-center p-4`}>
                        <div className={`text-center ${design.textColor}`}>
                          <Gift className="h-8 w-8 mx-auto mb-2" />
                          <div className="text-xs">BIO SKIN</div>
                          <div className="text-xs">Gift Card</div>
                        </div>
                      </div>
                      <div className="text-xs text-center mt-1">{design.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">2. Monto</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`py-2 px-4 rounded-md border transition-colors ${
                        formData.amount === amount.toString() 
                          ? 'bg-[#deb887] text-white border-[#deb887]' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#deb887]'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, amount: amount.toString() }))}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="mt-3">
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                    O ingresa un monto personalizado:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="customAmount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      min="20"
                      max="500"
                      className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                      placeholder="Monto personalizado"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">3. Información del destinatario</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del destinatario <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="recipientName"
                        name="recipientName"
                        value={formData.recipientName}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                        placeholder="Nombre completo"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email del destinatario <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="recipientEmail"
                        name="recipientEmail"
                        value={formData.recipientEmail}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-4">4. Tu información</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 mb-1">
                      Tu nombre <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="senderName"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Tu email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="senderEmail"
                        name="senderEmail"
                        value={formData.senderEmail}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                        placeholder="tuemail@ejemplo.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje personal (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#deb887]/50 focus:border-[#deb887]"
                  placeholder="Escribe un mensaje personal para el destinatario..."
                ></textarea>
              </div>
              
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Comprar Gift Card
                </Button>
              </div>
            </form>
          </div>
          
          {/* Gift Card Preview */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vista Previa
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              {/* Gift Card Design */}
              <div 
                className={`${
                  giftCardDesigns.find(d => d.id === selectedDesign)?.bgColor || 'bg-[#deb887]'
                } rounded-lg p-6 mb-6 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-16 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-12 translate-y-10"></div>
                
                <div className={`${
                  giftCardDesigns.find(d => d.id === selectedDesign)?.textColor || 'text-white'
                }`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-bold text-2xl mb-1">BIO SKIN</h3>
                      <p className="text-sm opacity-80">SALUD Y ESTÉTICA</p>
                    </div>
                    <Gift className="h-8 w-8" />
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-sm opacity-80 mb-1">VALOR</p>
                    <p className="text-3xl font-bold">${formData.amount || '0'}</p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm opacity-80 mb-1">PARA</p>
                      <p className="font-medium">{formData.recipientName || 'Nombre del destinatario'}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-80 mb-1">DE</p>
                      <p className="font-medium">{formData.senderName || 'Tu nombre'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Message Preview */}
              {formData.message && (
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-1">Mensaje personal:</p>
                  <p className="text-gray-600 italic">"{formData.message}"</p>
                </div>
              )}
              
              {/* Instructions */}
              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h4 className="font-medium text-gray-900 mb-2">Cómo funciona:</h4>
                <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                  <li>Una vez realizada la compra, se enviará la gift card al email proporcionado.</li>
                  <li>El destinatario recibirá un código único para usar en nuestro centro.</li>
                  <li>La gift card es válida por 1 año desde la fecha de compra.</li>
                  <li>Puede ser utilizada para cualquier servicio de nuestro catálogo.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Popular Services Section */}
      <Section light title="Servicios Populares para Regalar" centered>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Diagnóstico Facial Computarizado" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-gray-900 mb-2">Diagnóstico Facial Computarizado</h3>
            <p className="text-gray-600 text-sm mb-4">
              Un análisis completo de la piel con tecnología avanzada y un plan de tratamiento personalizado.
            </p>
            <p className="text-[#deb887] font-medium">$50</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Limpieza Facial Profunda" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-gray-900 mb-2">Limpieza Facial Profunda</h3>
            <p className="text-gray-600 text-sm mb-4">
              Elimina impurezas, puntos negros y células muertas para una piel radiante y fresca.
            </p>
            <p className="text-[#deb887] font-medium">$75</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Tratamiento Antiaging" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-gray-900 mb-2">Tratamiento Antiaging</h3>
            <p className="text-gray-600 text-sm mb-4">
              Reduce líneas de expresión y mejora la firmeza de la piel con radiofrecuencia bipolar.
            </p>
            <p className="text-[#deb887] font-medium">$150</p>
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <Section title="Preguntas Frecuentes" centered>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Cuánto tiempo es válida la gift card?</h3>
              <p className="text-gray-600">
                Todas nuestras gift cards tienen una validez de 1 año a partir de la fecha de compra.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Puedo usar la gift card para cualquier servicio?</h3>
              <p className="text-gray-600">
                Sí, la gift card puede ser utilizada para cualquier servicio disponible en nuestro centro estético.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Cómo recibe la gift card el destinatario?</h3>
              <p className="text-gray-600">
                La gift card se envía por correo electrónico a la dirección que proporciones. También puedes imprimirla y entregarla personalmente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-medium text-gray-900 mb-2">¿Puedo cancelar o solicitar un reembolso de la gift card?</h3>
              <p className="text-gray-600">
                Las gift cards no son reembolsables, pero pueden ser transferidas a otra persona si lo deseas.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#deb887]/5 via-[#deb887]/20 to-[#deb887]/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas Ayuda para Elegir?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Si no estás seguro qué gift card regalar o tienes preguntas adicionales, nuestro equipo está listo para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="https://wa.me/593XXXXXXXXX" 
              size="lg"
            >
              Contáctanos por WhatsApp
            </Button>
            <Button to="/contacto" variant="outline" size="lg">
              Más Información
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardPage;