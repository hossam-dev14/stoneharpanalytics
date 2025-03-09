"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { fadeUpAnimationVariants, staggerContainerVariants } from '@/consts';
import Container from '@/components/container';
import { SectionTitle } from '@/components/sectionTitle';


function Approach() {
  return (
    <Container className='py-28'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-between items-center flex-col-reverse lg:flex-row gap-6 px-8 mb-8">

        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex justify-start items-center h-80 z-10">
          <Image
            width={370} height={340}
            src="/images/case-studies/approach.png"
            alt="approach"
            className="object-contain max-h-[20rem] w-full"
          />
        </motion.div>

        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-col lg:pl-16 z-10">

          <SectionTitle
            preTitle="Our"
            title="Approach"
            preTileColor="text-primary"
            titleColor="text-secondary"
            align="left"
          />

          <p className="text-primary text-sm mt-2 max-w-xl">
            At Stone Harp Analytics, we believe that intelligence is not just about data—it’s about transformation. Our approach combines technical expertise, strategic thinking, and innovative technology to deliver solutions that empower decision-makers.
          </p>
          <div className="mt-4 max-w-xl ">
            <ul className="list-disc list-inside mt-2">
              <li className='text-primary  text-sm '>
                <span className='text-primary-dark  font-semibold'>Tailored Frameworks:</span> Custom analysis for mission-specific needs.
              </li>
              <li className='text-primary  text-sm '>
                <span className='text-primary-dark  font-semibold'>Real-Time Adaptability:</span> Responsive strategies that evolve with the situation.
              </li>
              <li className='text-primary text-sm '>
                <span className='text-primary-dark font-semibold'>Secure Integration:</span> Advanced tools and platforms to ensure data security and integrity.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </Container >
  )
}

export default Approach