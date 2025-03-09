import React from 'react';
import ChooseUs from './chooseUs';
import GridWihtIamgeBg from '@/components/gridWithIamgeBg';
import { chooseUsData } from '@/consts/chooseUsData';
import CardChoseUs from '@/components/ui/CardChoseUs';
import ChoseUsHeader from './chooseUsHeader';

function ChooseUsSection() {
  return (
    <section>
      <ChooseUs>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("./images/bg/bg-1.webp")`,
            backgroundSize: 'cover',
            height: "15rem",
            zIndex: '10',
          }}
        />

        <ChoseUsHeader title={chooseUsData.title} mainColor='text-secondary' prefixColor='text-primary' />

        <GridWihtIamgeBg
          capabilities={chooseUsData.capabilities}
        >
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-28 mb-14">
            {chooseUsData.capabilities.map((capability, index) => (
              <CardChoseUs
                key={index}
                title={capability.title}
                description={capability.description}
              />
            ))}
          </div>
        </GridWihtIamgeBg>
      </ChooseUs>
    </section>
  )
}

export default ChooseUsSection;