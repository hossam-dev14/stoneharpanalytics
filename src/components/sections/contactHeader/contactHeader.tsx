"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { bgImgs, fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";



export default function ContactHeader() {
  return (
    <div className='pt-12'>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className=''>
        <motion.div
          className='relative'
          variants={fadeUpAnimationVariants}
        >
          <div
            className="absolute inset-0 -z-1"
            style={{
              backgroundImage: `url("${bgImgs.img_7}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "12rem",
            }}
          />
        </motion.div>

        <Container className='py-16 mt-20'>
          <div className="px-4 sm:px-8">
            <motion.div
              variants={fadeUpAnimationVariants}
              className="flex flex-1 flex-col justify-center items-center">
              <h1 className="text-2xl md:text-4xl font-bold text-white">Contact Us</h1>
              <p className="text-xl md:text-3xl text-center text-primary font-light">Let’s Work Together to Empower Your Mission</p>
            </motion.div>
            <motion.div
              variants={fadeUpAnimationVariants}
              className="mt-24 flex justify-center items-center flex-col text-center">
              <p className="text-white text-sm md:text-base max-w-[30rem] mb-4">
                We’re here to provide tailored intelligence solutions and answer any questions you may have about our services. Whether you’re looking to discuss a project, explore a partnership, or request a consultation, our team is ready to assist you.</p>
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
