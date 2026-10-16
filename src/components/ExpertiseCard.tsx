
import { ReactNode } from "react";

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ExpertiseCard = ({ title, description, icon }: ExpertiseCardProps) => {
  return (
    <div className="group h-full bg-refumo-darkblue rounded-2xl p-7 md:p-8 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-refumo-coral/40 hover:shadow-[0_20px_40px_-20px_rgba(25,34,49,0.6)]">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-refumo-coral/15 text-refumo-coral mb-6">{icon}</div>
      <h3 className="text-xl font-display text-white font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default ExpertiseCard;
