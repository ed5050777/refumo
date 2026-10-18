import React from "react";
import { MapPin } from "lucide-react";

export interface TransactionProps {
  title: string;
  amount: string;
  location: string;
  category: string;
  description: string;
  tags?: string[];
}

const TransactionCard: React.FC<TransactionProps> = ({
  title,
  amount,
  location,
  category,
  description,
  tags = [],
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-7 shadow-sm border border-gray-200/80 flex flex-col justify-between hover:shadow-md hover:border-refumo-coral/40 transition-all duration-300 group">
      <div>
        {/* Category & Location Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-refumo-darkblue/5 text-refumo-darkblue border border-refumo-darkblue/10">
            {category}
          </span>
          <span className="inline-flex items-center text-xs font-medium text-gray-500">
            <MapPin size={13} className="mr-1 text-refumo-coral flex-shrink-0" />
            <span className="truncate">{location}</span>
          </span>
        </div>

        {/* Amount & Title */}
        <div className="mb-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-refumo-darkblue tracking-tight group-hover:text-refumo-coral transition-colors">
            {amount}
          </div>
          <h3 className="text-base font-bold text-gray-900 mt-1">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Key Metric Tags */}
      {tags.length > 0 && (
        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 border border-gray-200/70"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
