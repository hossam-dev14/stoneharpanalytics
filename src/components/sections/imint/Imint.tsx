"use client";

import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Container from '@/components/container';
import { fadeUpAnimationVariants, staggerContainerVariants } from '@/consts';

export default function Imint() {
  return (
    <Container className='py-28'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-between items-center flex-col lg:flex-row gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="">
          <h1 className="text-2xl md:text-4xl font-bold text-white">IMINT</h1>
          <p className="text-xl md:text-3xl text-secondary font-light">Imagery Intelligence</p>
          <p className="text-neutral mt-4 max-w-xl">
            Comprehensive visual data analysis and interpretation.
          </p>
          <p className="text-white text-sm md:text-base mt-2 max-w-xl">
            Transform raw imagery into Timely intelligence for tactical and strategic decision-making.
          </p>
          <div className="mt-4 max-w-xl ">
            <h2 className="text-xl text-white font-bold">Use Cases:</h2>
            <ul className="list-disc list-inside mt-2 text-secondary">
              <li>
                Monitoring operational zones
              </li>
              <li>
                Identifying and mitigating threats
              </li>
              <li>
                Supporting rescue and recovery operations
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex justify-start items-center h-80">
          <Image
            width={370} height={340}
            src="/images/case-studies/imint.png"
            alt="geoint"
            className="object-contain max-h-[20rem] w-full"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};


