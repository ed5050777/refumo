
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-refumo-coral/30">
      <div className="text-refumo-coral mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
