"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { bgImgs, fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import { SectionTitle } from "@/components/sectionTitle";

export default function Services() {
  return (
    <div className='pt-12'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="">

        <motion.div
          variants={fadeUpAnimationVariants}>
          <div className='relative'>
            <div
              className="absolute inset-0 -z-1"
              style={{
                backgroundImage: `url("${bgImgs.img_5}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "14.3rem",
                clipPath: "polygon(0 5%, 100% 5%, 120% 100%, 0% 75%)",
              }}
            />
          </div>
        </motion.div>

        <Container className='py-16 mt-16'>
          <div className="px-4 sm:px-8">
            <motion.div
              variants={fadeUpAnimationVariants}
              className="flex flex-1 flex-col">
              <SectionTitle preTitle="Our" title="Services" align="center">
                <p className="text-white text-sm md:text-base max-w-[37rem] mb-2 ">
                  Tailored Intelligence Solutions for Complex Challenges
                </p>
              </SectionTitle>
            </motion.div>
            <motion.div
              variants={fadeUpAnimationVariants}
              className="mt-20 flex justify-center items-center flex-col text-center">
              <p className="text-white text-sm md:text-base max-w-[30rem] mb-4">
                At Stone Harp Analytics, we specialize in delivering precise and Timely intelligence across multiple domains to empower organizations in their most critical decision-making processes. Whether it’s strategic planning, mission-critical support, or disaster response, our expertise ensures that you have the insights needed to achieve success.</p>
              <p className="text-secondary text-base max-w-[30rem]">
                Explore our core services and discover how we bring clarity to complexity.
              </p>
            </motion.div>
          </div>

        </Container>
      </motion.div>
    </div >
  );
}
