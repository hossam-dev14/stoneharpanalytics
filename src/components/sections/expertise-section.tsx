import React from 'react';
import Image from 'next/image';
import Card from '../ui/card';

interface ExpertiseCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ExpertiseCard = ({ title, description, imageSrc }: ExpertiseCardProps) => (
  <div className="relative group overflow-hidden max-w-[12rem]">
    <div className="relative h-80 overflow-hidden">
      <Image
        width={120}
        height={230}
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover brightness-50 sepia group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      title: "Strategic Analysis",
      description: "Long-term planning and threat assessment",
      imageSrc: "/images/marek-piwnicki.jpg"
    },
    {
      title: "Mission Support",
      description: "Real-time intelligence for critical operations",
      imageSrc: "/images/marek-piwnicki.jpg"
    },
    {
      title: "Disaster Response",
      description: "Rapid deployment and resource analytics",
      imageSrc: "/images/marek-piwnicki.jpg"
    },
    {
      title: "Counter Terrorism",
      description: "Specialized intelligence for security operations",
      imageSrc: "/images/marek-piwnicki.jpg"
    }
  ];

  return (
    <div className="bg-navy-900 min-h-screen p-8 md:p-16">
      <div className="flex justify-between">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Areas of <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl">
            Our expertise spans critical areas of operations, enabling quick response times in challenging scenarios. From natural disasters to assessing long-term risks, these key capabilities support our mission to overcome all unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4 max-w-4xl">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              cardHeader={area.title}
              cardDescription={area.description}
              bgImage={area.imageSrc}
              cardHeight='h-[23rem]'
              cardWith='w-36'
              className=''
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
