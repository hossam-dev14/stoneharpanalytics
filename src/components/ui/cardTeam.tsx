import React from 'react';
import { cn } from '@/utils';

type teamProps = {
  className?: string;
  iconNumber?: string;
  title: string;
  description?: string;
};

const CardTeam = ({ iconNumber, title, description, ...props }: teamProps) => (
  <div className={cn(`relative px-3 py-4 rounded-sm bg-primary/40 backdrop-blur-sm`, props.className)}
  >
    {iconNumber && (
      <div className="absolute -top-10 -left-0 rounded-sm text-2xl w-10 h-10 bg-secondary text-white flex items-center justify-center font-extrabold">
        {iconNumber}
      </div>
    )}
    <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
    <p className="text-blue-100/80 text-sm md:text-base leading-relaxed">
      {description}
    </p>
  </div>
);

export default CardTeam;