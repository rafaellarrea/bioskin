import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  to,
  imageSrc,
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-[#deb887]/30">
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="mr-3 text-[#deb887]">
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <Link 
          to={to}
          className="inline-flex items-center text-sm font-medium text-[#deb887] transition-all duration-300 group-hover:translate-x-1"
        >
          Conoce más <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;