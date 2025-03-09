"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import Image from "next/image";
import { SectionTitle } from "@/components/sectionTitle";

export default function AboutUs() {
  return (
    <Container className='py-28 mt-20'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="flex justify-between items-center max-lg:flex-col gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-1 flex-col">
          <SectionTitle preTitle="About" title="Stone Harp Analytics" align="left" />
          <p className="text-white text-sm md:text-base max-w-xl mb-2">
            Empowering Decisions with Unmatched Intelligence expertise</p>
          <p className="text-white text-sm md:text-base max-w-xl mb-8">
            At Stone Harp Analytics, we are committed to delivering world-class intelligence solutions that empower organizations to make critical decisions with confidence and precision. With decades of collective experience in intelligence analysis, we specialize in providing tailored, scalable, and adaptive solutions for complex challenges in rapidly evolving environments. Whether supporting mission-critical operations or long-term strategic goals, our expertise ensures clarity in complexity.
          </p>
        </motion.div>
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex justify-end items-center">
          <Image
            width={370}
            height={340}
            src="/images/about/about.png"
            alt="about"
            className="object-contain max-h-[25rem] w-full"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}
