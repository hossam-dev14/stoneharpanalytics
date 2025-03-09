import GridWihtIamgeBg from '@/components/gridWithIamgeBg';
import CardTeam from '@/components/ui/cardTeam';
import React from 'react';

const teamData = {
  title: {
    prefix: "Our",
    prefixColor: 'text-secondary',
    main: "Team",
    mainColor: "text-white",
  },
  description: "The analysts at Stone Harp Analytics bring extensive experience supporting intelligence operations and strategic planning for U.S. government entities and defense organizations.",
  capabilities: [
    {
      iconNumber: "1",
      title: "Border Security Intelligence",
      description: "Expert analysis of cross-border operations utilizing advanced monitoring systems and pattern recognition to support law enforcement agencies."
    },
    {
      iconNumber: "2",
      title: "Special Operations GEOINT",
      description: "Specialized geospatial intelligence support for operations in challenging environments, focusing on critical route analysis and tactical intelligence."
    },
    {
      iconNumber: "3",
      title: "Multi-Source Intelligence Analysis",
      description: "Integration of multiple intelligence sources including EO/SAR imagery and RF data to provide comprehensive operational intelligence in complex environments."
    },
    {
      iconNumber: "4",
      title: "Infrastructure Assessment",
      description: "Critical infrastructure and logistics analysis supporting humanitarian operations and disaster response, ensuring efficient resource deployment."
    }
  ]
};

const Team = () => {
  return (
    <div>
      <GridWihtIamgeBg
        title={teamData.title}
        description={teamData.description}
        capabilities={teamData.capabilities}
      >
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-6 pt-32 pb-4">
          {teamData.capabilities.map((capability, index) => (
            <CardTeam
              key={index}
              iconNumber={capability.iconNumber}
              title={capability.title}
              description={capability.description}
              className='mb-14'
            />
          ))}
        </div>
      </GridWihtIamgeBg>
    </div >
  )
}

export default Team;