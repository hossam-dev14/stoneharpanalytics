"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/container';
import {
  fadeUpAnimationVariants,
  staggerContainerVariants
} from '@/consts';
import Button from '@/components/ui/button';
import { SectionTitle } from '@/components/sectionTitle';

export default function Partner() {
  return (
    <Container className='py-20'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants} className="flex justify-between items-center max-lg:flex-col gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-1 flex-col">
          <SectionTitle preTitle="Partner" title="With Us" align="left" />
          <p className="text-white text-sm md:text-base max-w-[37rem] mb-8">
            Whether you’re facing immediate challenges or planning for the future, Stone Harp Analytics is here to help. Our commitment to precision, professionalism, and integrity ensures that your organization receives the best intelligence support available.
          </p>

          <Button size="md" variant="secondary" className="group">
            <Link
              href="/contact"
              className="text-white group-hover:text-secondary"
            >
              Contact us today
            </Link>
          </Button>

          <p className="text-white text-sm md:text-base max-w-[37rem] my-4">
            to learn more about how we can assist you in achieving your goals.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  )
}

