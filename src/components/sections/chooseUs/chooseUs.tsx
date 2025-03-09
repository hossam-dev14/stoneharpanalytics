"use client";

import React, { ReactNode } from 'react';
import { motion } from "framer-motion";
import {
  fadeUpAnimationVariants,
  staggerContainerVariants
} from '@/consts';

export default function ChoseUs({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainerVariants}
      className='py-20 relative'>
      <motion.div
        variants={fadeUpAnimationVariants}>
        {children}
      </motion.div>
    </motion.div>
  )
}
