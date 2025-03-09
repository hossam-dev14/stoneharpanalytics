"use client";

import React from 'react';
import { motion } from "framer-motion";
import Container from "@/components/container";
import Card from "@/components/ui/card";
import { expertise, fadeUpAnimationVariants, staggerContainerVariants } from '@/consts';

export default function Expertise() {
  return (
    <Container className='py-20'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="flex justify-between items-center max-lg:flex-col gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-1 flex-col">
          <h2 className="text-white font-bold text-center lg:items-start lg:justify-start lg:text-left mb-4 text-4xl md:text-5xl">
            Areas of <span className="text-secondary font-bold">Expertise</span>
          </h2>
          <p className="text-white text-center lg:text-left text-sm md:text-base max-w-[30rem] lg:max-w-[20rem] mb-8">
            Our expertise spans critical areas of operations, enabling quick response times in challenging scenarios. From natural disasters to assessing long-term risks, these key capabilities support our mission to overcome all unique challenges.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUpAnimationVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {expertise.map((area, index) => (
            <Card
              key={index}
              cardHeader={area.title}
              cardHeaderText='text-xl/none md:text-2xl/none'
              cardDescription={area.description}
              bgImage={area.imageSrc}
              cardHeight='h-[28rem]'
              cardWith='w-40'
              bgColor='bg-secondary/50'
              filter='grayscale sepia group-hover:filter-none'
              bgGradient='bg-gradient-to-t from-primary/70 to-transparent'
              className='flex items-end'
            />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
