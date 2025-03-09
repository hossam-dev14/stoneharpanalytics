import { SectionTitle } from '@/components/sectionTitle';
import { bgImgs } from '@/consts';
import React from 'react'

function OurVision() {
  return (
    <div className="relative h-96 -top-20"
      style={{ clipPath: "polygon(0px 19%, 100% 10%, 100% 90%, 0% 80%)" }}
    >
      <div
        className="absolute inset-0 -z-1"
        style={{
          backgroundImage: `url("${bgImgs.img_6}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

        }}
      />

      <div className="flex flex-col justify-center items-center h-full pb-10 px-8 pt-10" >
        <SectionTitle preTitle="Our" title="Vision" titleColor="text-primary" align="center" />

        <div className="text-center">

          <p className="text-primary text-sm md:text-base max-w-2xl mx-auto">
            At Stone Harp Analytics, we believe that intelligence is not just about data—it’s about transformation. Our approach combines technical expertise, strategic thinking, and innovative technology to deliver solutions that empower decision-makers.
          </p>
        </div>
      </div>

    </div>
  )
}

export default OurVision;