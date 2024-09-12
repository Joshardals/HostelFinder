import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

export function Features() {
  return (
    <ul className="flex space-x-4 items-center">
      <PropertyFeature icon={FaBed} label="Room" value={1} />
      <PropertyFeature icon={FaBath} label="Bath" value={1} />
      <PropertyFeature icon={FaRulerCombined} label="sqft" value="21,000" />
    </ul>
  );
}

function PropertyFeature({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <li className="flex items-center space-x-2">
      <Icon className="text-charcoal/70" />
      <p className="text-charcoal">
        {value} {label}
      </p>
    </li>
  );
}
