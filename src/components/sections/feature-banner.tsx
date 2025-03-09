import React from 'react';
import { GraduationCap, Clock, Wrench, LucideProps } from 'lucide-react';
import { Icon } from '../ui/icons';

interface featureCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: featureCardProps) => (
  <div className="flex items-center px-2">
    <div className="border-2 border-white p-2 ">
      <Icon className="w-10 h-10 text-white" />
    </div>
    <div className="ml-4 text-left">
      <h3 className="text-white text-xl font-semibold">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

const FeatureBanner = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert",
      description: "Seasoned intelligence professionals"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "24/7 operational support"
    },
    {
      icon: Wrench,
      title: "Advanced Tools",
      description: "Cutting-edge analytics platform"
    }
  ];

  return (
    <div className="relative bg-secondary-light/90 py-12">

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `url("./images/bgImage.webp")`,
          backgroundSize: 'cover',
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeatureBanner;
