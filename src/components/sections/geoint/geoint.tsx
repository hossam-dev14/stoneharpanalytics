"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { fadeUpAnimationVariants, staggerContainerVariants } from '@/consts';
import Container from '@/components/container';

function Geoint() {
  return (
    <Container className='py-28'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-between items-center flex-col lg:flex-row gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className=" mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white">GEOINT</h1>
          <p className="text-xl md:text-3xl text-secondary font-light">Geospatial Intelligence</p>
          <p className="text-neutral mt-4 max-w-xl ">
            Advanced satellite imagery and mapping analysis for strategic insights.
          </p>
          <p className="text-white text-sm md:text-base mt-2 max-w-xl">
            Leverage cutting-edge geospatial data and tools to gain a comprehensive understanding of terrain, infrastructure, and critical areas of interest.
          </p>
          <div className="mt-4 max-w-xl ">
            <h2 className="text-xl text-white font-bold">Use Cases:</h2>
            <ul className="list-disc list-inside mt-2 text-secondary">
              <li>Strategic military operations planning</li>
              <li>Urban infrastructure analysis</li>
              <li>Natural disaster impact assessments</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex justify-start items-center h-80">
          <Image
            width={370} height={340}
            src="/images/case-studies/geoint.jpg"
            alt="geoint"
            className="object-contain max-h-[20rem] w-full"
          />
        </motion.div>
      </motion.div>
    </Container >
  )
}

export default Geoint;