import {
  FaTint,
  FaBolt,
  FaUtensils,
  FaShieldAlt,
  FaBed,
  FaCalendarAlt,
} from "react-icons/fa";

export function HostelHighlights() {
  return (
    <div className="p-4 ring-1 ring-charcoal/20 rounded-xl">
      <span className="font-medium text-[18px]">Hostel Highlights</span>
      <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-4 mt-4">
        <Highlights
          icon={FaTint}
          label="Water Supply"
          //   content="Regular borehole water"
          content="Borehole"
        />
        <Highlights icon={FaBolt} label="Electricity" content="Prepaid Meter" />
        {/* Shared/Private are the only options for the kitchen  */}
        <Highlights icon={FaUtensils} label="Kitchen" content="Private" />
        <Highlights
          icon={FaShieldAlt}
          label="Security"
          content="Fenced & Secured"
        />
        <Highlights icon={FaBed} label="Furnishing" content="Unfurnished" />
        <Highlights icon={FaCalendarAlt} label="Listed" content="3 Days Ago" />
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
