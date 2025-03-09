import { LucideProps } from "lucide-react";
import { Icon } from './icons';

interface featureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: featureCardProps) => (
  <div className="flex items-center px-2">
    <div className="border-2 border-white p-2 ">
      {/* <Icon className="w-10 h-10 text-white" /> */}

      <Icon
        name={icon as keyof typeof Icon}
        color="white"
        size={50}
        className="w-12 h-12"
      />

    </div>
    <div className="ml-4 text-left">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);


export default FeatureCard;