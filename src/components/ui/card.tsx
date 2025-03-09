import Image from 'next/image';
import React from 'react';
import { LucideProps } from "lucide-react";
import { Icon } from './icons';

interface cardProps {
  className?: string;
  cardIcon?: React.ReactNode;
  bgImage?: string;
  cardHeader?: string;
  cardHeaderText?: string;
  cardDescription?: string;
  cardWith?: string;
  cardHeight?: string;
  filter?: string;
  bgGradient?: string;
  bgColor?: string;
}

export default function Card({
  cardIcon,
  bgImage,
  cardHeader,
  cardHeaderText = "text-2xl/none",
  cardDescription,
  cardWith = "min-w-36",
  cardHeight,
  filter,
  bgGradient,
  bgColor,
  className,
}: cardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-sm  ${cardHeight} ${cardWith} ${className}`}
    >
      {/* Background Image */}
      {bgImage && (
        <Image
          width={400}
          height={200}
          src={bgImage}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover
          ${filter && filter}`}
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 group-hover:bg-transparent transition duration-500 ease w-full h-full 
       ${bgColor}`}></div>

      {/* Content */}
      <div className={`relative z-10 px-6 py-3 text-white flex flex-row items-center ${bgGradient}`}>

        {/* Icon */}
        {cardIcon && (
          <Icon
            name={cardIcon as keyof typeof Icon}
            color="white"
            size={40}
            className="min-w-8 w-8 h-16 mr-6 opacity-90"
          />
        )}

        <div className="">
          {/* Header */}
          {cardHeader && (
            <h3 className={`text-white text-3xl font-extrabold mb-1 ${cardHeaderText}`}>
              {cardHeader}
            </h3>
          )}

          {/* Description */}
          {cardDescription && (
            <p className="text-white text-sm md:text-base max-w-[25rem]">
              {cardDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};