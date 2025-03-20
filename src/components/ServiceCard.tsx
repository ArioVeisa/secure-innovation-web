
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
    <div className="bg-gradient-to-b from-minetech-navy to-minetech-dark border border-minetech-cyan/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-minetech-cyan/30 hover:translate-y-[-5px] group">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-minetech-cyan/10 text-minetech-cyan group-hover:bg-minetech-cyan/20 transition-colors duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        
        <p className="text-minetech-gray mb-6">{description}</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-minetech-cyan mt-1">•</span>
              <span className="text-minetech-light">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-auto">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-minetech-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
