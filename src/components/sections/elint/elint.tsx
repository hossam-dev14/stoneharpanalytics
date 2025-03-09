"use client";

import React from 'react'
import { motion } from "framer-motion";
import Container from '@/components/container';
import { fadeUpAnimationVariants, staggerContainerVariants } from '@/consts';
import Image from 'next/image';

function Elint() {
  return (
    <Container className='py-28'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants} className="flex justify-between items-center flex-col-reverse lg:flex-row gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex justify-start items-center h-80">
          <Image
            width={370} height={340}
            src="/images/case-studies/elint.png"
            alt="elint"
            className="object-contain max-h-[20rem] w-full"
          />
        </motion.div>
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-col lg:pl-16">
          <h1 className="text-2xl md:text-4xl font-bold text-white">ELINT</h1>
          <p className="text-xl md:text-3xl text-secondary font-light">Electronic Intelligence</p>
          <p className="text-neutral mt-4 max-w-xl">
            Critical communications intelligence through advanced RF monitoring.
          </p>
          <p className="text-white text-sm md:text-base mt-2 max-w-xl">
            Detect and analyze electronic signals to identify threats, secure operations, and drive informed decision-making.
          </p>
          <div className="mt-4">
            <h2 className="text-xl text-white font-bold">Use Cases:</h2>
            <ul className="list-disc list-inside mt-2 text-secondary">
              <li>
                Identifying radar and missile systems
              </li>
              <li>
                Monitoring adversarial technology advancements
              </li>
              <li>
                Strengthening defensive capabilities
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </Container>
  )
}

export default Elint;