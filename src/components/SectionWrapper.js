import React from 'react';

const SectionWrapper = ({ 
  children, 
  title, 
  subtitle, 
  className = '',
  padding = 'py-16',
  background = 'bg-surface-page'
}) => {
  return (
    <section className={`${background} ${padding} ${className}`}>
      <div className="container-max">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-trust-900 mb-4 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
