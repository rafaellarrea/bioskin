import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
  imageSrc?: string;
  treatment: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  rating,
  imageSrc,
  treatment,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-4">
        {/* Rating stars */}
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-0.5`} 
            />
          ))}
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      
      <div className="flex items-center">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#deb887]/20 text-[#deb887] flex items-center justify-center mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{treatment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;