import { timeAgo } from "@/lib/utils";
import {
  FaTint,
  FaBolt,
  FaUtensils,
  FaShieldAlt,
  FaBed,
  FaCalendarAlt,
} from "react-icons/fa";

export function HostelHighlights({
  water_supply,
  electricity,
  kitchen,
  security,
  furnishing,
  listed,
}: {
  water_supply: string;
  electricity: string;
  kitchen: string;
  security: string;
  furnishing: string;
  listed: string;
}) {
  return (
    <div className="p-4 ring-1 ring-charcoal/20 rounded-xl">
      <span className="font-medium text-[18px]">Hostel Highlights</span>
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-4 mt-4">
        <Highlights icon={FaTint} label="Water Supply" content={water_supply} />
        <Highlights icon={FaBolt} label="Electricity" content={electricity} />
        {/* Shared/Private are the only options for the kitchen  */}
        <Highlights icon={FaUtensils} label="Kitchen" content={kitchen} />
        <Highlights icon={FaShieldAlt} label="Security" content={security} />
        <Highlights icon={FaBed} label="Furnishing" content={furnishing} />
        <Highlights
          icon={FaCalendarAlt}
          label="Listed"
          content={timeAgo(listed)}
        />
      </div>
    </div>
  );
}

function Highlights({
  icon: Icon,
  label,
  content,
}: {
  icon: React.ElementType;
  label: string;
  content: string | number;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between">
      <div className="flex items-center space-x-2">
        <Icon className="text-charcoal/70" />
        <span>{label}</span>
      </div>
      <span className="font-medium lg:col-span-2">{content}</span>
    </div>
  );
}
