
import { ReactNode } from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ValueCard = ({ title, description, icon }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="text-refumo-coral mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
