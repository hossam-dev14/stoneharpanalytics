import React, { ReactNode } from 'react';
import GridWihtIamgeBg from '@/components/gridWithIamgeBg';
import CardChoseUs from '@/components/ui/CardChoseUs';
import { chooseUsData } from '@/consts/chooseUsData';


interface chooseUsDataProps {
  title: {
    prefix: string;
    main: string;
  },
  prefixColor: string;
  mainColor: string
  children?: ReactNode;
}


export default function ChoseUsHeader({ children, title, prefixColor, mainColor }: chooseUsDataProps) {
  return (
    <div className='mx-auto relative z-10 px-8'>
      <div className="text-center mb-6">
        <h2 className="font-extralight ">
          <span className={`text-3xl md:text-4xl ${prefixColor}`}>{title.prefix}</span>
          <br />
          <span className={`text-3xl md:text-4xl text-secondary font-bold ${mainColor}`}>
            {title.main}
          </span>
        </h2>
      </div>
      {children}
    </div>
  )
}
