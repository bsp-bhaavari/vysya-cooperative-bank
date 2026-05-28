import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Sidebar = ({ items, title }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card p-6 sticky top-24 transition-all duration-300 hover:shadow-elevated">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-trust-600 via-gold-500 to-trust-600" />
        <h3 className="relative z-10 text-lg font-semibold text-trust-900 mb-1 pb-3 border-b-2 border-trust-200">
          {title}
        </h3>
        <nav className="relative z-10 space-y-1 pt-4">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center justify-between px-4 py-2.5 rounded-lg border-l-[3px] transition-all duration-200 text-sm ${
                isActive(item.path)
                  ? 'bg-trust-900 text-white font-medium border-trust-500'
                  : 'text-gray-700 border-transparent hover:bg-trust-50 hover:text-trust-800 hover:border-trust-300'
              }`}
            >
              <span className="flex items-center space-x-3">
                {item.icon && (
                  <item.icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-trust-200' : 'text-trust-500 group-hover:text-trust-700'
                  }`} />
                )}
                <span>{item.name}</span>
              </span>
              <ChevronRight className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                isActive(item.path) ? 'rotate-90 text-trust-200' : 'text-gray-400 group-hover:text-trust-600 group-hover:translate-x-0.5'
              }`} />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
