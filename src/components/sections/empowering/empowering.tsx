"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { empowering, fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import Link from "next/link";

export default function Empowering() {
  return (
    <Container className='py-20'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="flex justify-between items-center max-lg:flex-col gap-6 px-8 mt-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-1 flex-col items-start lg:items-start mb-4">
          <h2 className="text-white text-3xl font-extrabold text-center lg:text-left mb-4 max-w-[30rem] lg:max-w-[25rem]">
            Empowering Decisions with World-Class Analytical Expertise
          </h2>
          <p className="text-white text-center lg:text-left text-sm md:text-base max-w-[30rem] lg:max-w-[20rem] mb-8">
            At Stone Harp Analytics, we empower organizations to make informed, confident decisions by delivering world-class intelligence expertise tailored to their unique needs. Whether supporting critical missions or providing long-term strategic insights, we excel in simplifying complexity through precise, Timely intelligence.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Button size="md" variant="secondary" className="group">
              <Link
                href="/about"
                className="text-white group-hover:text-secondary "
              >
                Learn more about us
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeUpAnimationVariants}
          className="grid grid-cols-1 gap-2">
          {empowering.map((data, index) => {
            return (
              <Card
                key={index}
                cardHeader={data.cardHeader}
                cardDescription={data.cardDescription}
                bgImage={data.bgImage}
                cardIcon={data.iconName}
                bgGradient="bg-gradient-to-r from-primary-light via-primary-light/70 to-transparent"
                className=""
              />
            )
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
}
