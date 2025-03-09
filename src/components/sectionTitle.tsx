import { cn } from "@/utils";
import React from "react";

interface SectionTitleProps {
  title?: string;
  titleColor?: string;
  preTileColor?: string;
  preTitle?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ title, titleColor = 'text-white', preTitle, preTileColor = 'text-secondary', align, children, className }: SectionTitleProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col leading-4',
        align === "center" && 'items-center justify-center text-center',
        align === "left" && 'items-start justify-start text-left',
        className
      )}>
      {preTitle && (
        <div className={`text-2xl font-light tracking-wider ${preTileColor}`} >
          {preTitle}
        </div>
      )}

      {title && (
        <h2 className={`max-w-80 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl mb-2 ${titleColor}`}>
          {title}
        </h2>
      )}

      {children && (<div className="max-w-2xl">
        {children}
      </div>
      )}

      {/* {children && (
        <p className="max-w-2xl py-2 text-base leading-normal text-gray-200 lg:text-lg">
          {children}
        </p>
      )} */}
    </div>
  );
}
