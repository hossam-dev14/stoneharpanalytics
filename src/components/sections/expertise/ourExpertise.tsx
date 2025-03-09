"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils";
import { icons } from "lucide-react";
import React from 'react';
import Container from "@/components/container";
import Card from "@/components/ui/card";
import {
  // owrExpertise, 
  fadeUpAnimationVariants, staggerContainerVariants
} from '@/consts';
import { SectionTitle } from "@/components/sectionTitle";
import { owrExpertiseData } from "@/consts";

interface OurExpertiseProps {
  className?: string;
}

export default function OurExpertise({
  className,
}: OurExpertiseProps) {

  return (
    <Container className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants} className="flex justify-between items-center max-lg:flex-col gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-1 flex-col">
          <SectionTitle preTitle="Our" title="Expertiese" align="left" />
          <p className="text-white text-sm md:text-base max-w-[37rem] mb-8">
            Stone Harp Analytics excels in delivering critical intelligence across the following key domains:
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-col md:flex-row flex-wrap  justify-end items-center gap-4 max-w-[35rem]">
          {owrExpertiseData.map(({ title, description, imageSrc }, index) => {
            return (
              <div className="p-6 w-64 h-64 min-h-64" key={index}
                style={{
                  backgroundImage: `url("${imageSrc}")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}>
                <div className="mt-16">
                  <h2 className="text-3xl text-white font-bold mb-2">{title}</h2>
                  <p className="text-base text-white font-light">{description}</p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
