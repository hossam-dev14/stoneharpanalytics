"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import Image from "next/image";
import { SectionTitle } from "@/components/sectionTitle";

export default function OurMission() {
  return (
    <Container className='py-28'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="flex justify-between items-center flex-col-reverse lg:flex-row gap-6 px-8">
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex-1 flex justify-start items-center h-80">
          <Image
            width={370}
            height={340}
            src="/images/about/mission.webp"
            alt="owr-mission"
            className="object-contain max-h-[20rem] w-full"
          />
        </motion.div>
        <motion.div
          variants={fadeUpAnimationVariants}
          className="flex flex-col ">
          <SectionTitle preTitle="Our" title="mission" align="left" />

          <p className="text-white text-sm md:text-base max-w-[37rem] mb-8">
            Our mission is to provide accurate analytics that drive success and mitigate risk for our clients. By combining cutting-edge technology with unparalleled expertise in Geospatial Intelligence (GEOINT), Signals Intelligence (SIGINT), Imagery Intelligence (IMINT), Electronic Intelligence (ELINT), and Open Source Intelligence (OSINT), we offer innovative solutions that address the unique needs of our clients across industries.
          </p>
        </motion.div>
      </motion.div>
    </Container>
  );
}
