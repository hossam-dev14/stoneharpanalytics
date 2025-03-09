import React, { ReactNode } from 'react';
import Container from './container';
import { bgImgs } from '@/consts';

type Capability = {
  iconNumber?: string;
  description?: string;
};

interface GridWihtIamgeBgProps {
  title?: {
    prefix: string;
    prefixColor: string;
    main: string;
    mainColor: string;
  };
  description?: string;
  capabilities?: Capability[] | undefined;
  icon?: boolean;
  children: ReactNode;
}

const GridWihtIamgeBg = ({ children, description, capabilities }: GridWihtIamgeBgProps) => {
  return (
    <div className="relative bg-accent py-16 overflow-hidden px-8">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("${bgImgs.img_2}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Container className='mx-auto relative z-10 '>
        <div className="">
          <div className="text-center">
            {description && (
              <p className="text-white max-w-3xl mx-auto">
                {description}
              </p>)
            }
          </div>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default GridWihtIamgeBg;

