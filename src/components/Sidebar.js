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
      <div className="relative overflow-hidden rounded-xl border-2 border-primary-400/70 bg-gradient-to-b from-surface-page via-white to-primary-50/50 shadow-premium p-6 sticky top-24 transition-shadow duration-300 hover:shadow-premium ring-1 ring-trust-200/40">
        <div className="pointer-events-none absolute inset-0 opacity-[0.2] pattern-dots" aria-hidden />
        <h3 className="relative z-10 text-lg font-semibold text-primary-900 mb-1 pb-3 border-b-2 border-primary-400/60">
          {title}
        </h3>
        <nav className="relative z-10 space-y-1.5 pt-4">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group flex items-center justify-between px-4 py-3 rounded-lg border-l-[3px] transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white font-medium border-trust-500 shadow-md shadow-primary-900/15'
                  : 'text-primary-900/90 border-transparent bg-white/70 hover:bg-primary-100/80 hover:text-primary-950 hover:border-primary-400/70'
              }`}
            >
              <span className="flex items-center space-x-3">
                {item.icon && (
                  <item.icon className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-trust-200' : 'text-trust-600 group-hover:text-primary-700'
                  }`} />
                )}
                <span>{item.name}</span>
              </span>
              <ChevronRight className={`w-4 h-4 transition-transform duration-200 shrink-0 ${
                isActive(item.path) ? 'rotate-90 text-trust-200' : 'text-primary-400 group-hover:text-trust-600 group-hover:translate-x-0.5'
              }`} />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
