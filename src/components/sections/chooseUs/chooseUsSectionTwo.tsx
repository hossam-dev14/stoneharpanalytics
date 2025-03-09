import React from 'react';
import ChooseUs from './chooseUs';
import GridWihtIamgeBg from '@/components/gridWithIamgeBg';
import { chooseUsData } from '@/consts/chooseUsData';
import CardChoseUs from '@/components/ui/CardChoseUs';
import ChoseUsHeader from './chooseUsHeader';
import Container from '@/components/container';
import { bgImgs } from '@/consts';

function ChooseUsSectionTwo() {
  return (
    <section>
      <ChooseUs>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("${bgImgs.img_2}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Container>
          <ChoseUsHeader title={chooseUsData.title} mainColor='text-white' prefixColor='text-secondary' />
          <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8 pt-4 px-8">
            {chooseUsData.threeCapabilities.map((capability, index) => (
              <CardChoseUs
                key={index}
                description={capability.description}
                bgColor='bg-secondary'
                className='w-full md:w-64 min-w-[14rem] max-w-xs'
              />
            ))}
          </div>
        </Container >

      </ChooseUs>
    </section>
  )
}

export default ChooseUsSectionTwo;