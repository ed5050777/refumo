
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="card-surface h-full group">
      <div className="icon-badge mb-6 transition-colors group-hover:bg-refumo-coral group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-display font-semibold text-refumo-darkblue mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
