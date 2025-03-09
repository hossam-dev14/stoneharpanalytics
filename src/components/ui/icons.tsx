import { icons } from "lucide-react";

// Create a type for all icon names
type IconName = keyof typeof icons;

interface cardProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}
export const Icon = ({
  name,
  color,
  size,
  className = "",
}: cardProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;

};
