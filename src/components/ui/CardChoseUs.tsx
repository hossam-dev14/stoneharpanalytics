import React from 'react';
import { cn } from '@/utils';

type choseUsProps = {
  className?: string;
  title?: string;
  description?: string;
  bgColor?: string;
};

const CardChoseUs = ({ title, description, bgColor = "bg-primary/40 backdrop-blur-sm", ...props }: choseUsProps) => (
  <div className={cn(`relative px-6 py-2 rounded-sm 
      ${bgColor}`,
    props.className
  )}>
    {title &&
      <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
    }
    <p className="text-white text-sm md:text-base leading-relaxed">
      {description}
    </p>
  </div>
);

export default CardChoseUs;