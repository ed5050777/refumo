
import { ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ExpertiseCard = ({ title, description, icon }: ExpertiseCardProps) => {
  return (
    <div className="bg-refumo-darkblue rounded-lg p-6 shadow-lg">
      <div className="text-refumo-coral mb-4">{icon}</div>
      <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
