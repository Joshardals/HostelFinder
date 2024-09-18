import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

export function Features({
  room,
  bath,
  square_feet,
}: {
  room: number;
  bath: number;
  square_feet: number;
}) {
  return (
    <ul className="flex space-x-4 items-center">
      <PropertyFeature icon={FaBed} label="Room" value={room} />
      <PropertyFeature icon={FaBath} label="Bath" value={bath} />
      <PropertyFeature
        icon={FaRulerCombined}
        label="sqft"
        value={square_feet}
      />
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
