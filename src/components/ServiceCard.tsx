
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  bullets?: string[];
}

const ServiceCard = ({ title, description, icon, className, bullets }: ServiceCardProps) => {
  return (
    <div className={`card-surface h-full flex flex-col justify-between group ${className || ""}`}>
      <div>
        <div className="icon-badge mb-6 transition-colors group-hover:bg-refumo-coral group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-xl font-display font-semibold text-refumo-darkblue mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
      {bullets && bullets.length > 0 && (
        <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
          {bullets.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100/90 text-refumo-darkblue border border-gray-200/60"
            >
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
