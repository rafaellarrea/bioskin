import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  centered?: boolean;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
  id,
  centered = false,
  light = false,
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 ${light ? 'bg-gray-50' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-3xl">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-[#deb887] mt-4 mb-8 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;