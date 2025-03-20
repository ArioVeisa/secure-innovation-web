
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-all duration-500 hover:border-minetech-cyan/30 hover-lift group h-full flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br from-minetech-cyan/20 to-minetech-navy/80 backdrop-blur-sm z-10 relative">
              <Icon size={24} className="text-minetech-cyan group-hover:animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-minetech-cyan/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        </div>
        
        <p className="text-minetech-gray mb-8 text-base">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/item">
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-minetech-cyan/10 text-minetech-cyan mt-0.5 transition-colors group-hover/item:bg-minetech-cyan/20">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="currentColor" />
                </svg>
              </span>
              <span className="text-minetech-light/90 group-hover/item:text-white transition-colors">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-minetech-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>

      {/* Add interactive light effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-minetech-cyan/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-minetech-cyan/5 rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
