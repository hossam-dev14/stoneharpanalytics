"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import VideoBackground from "@/components/videoBackground";
import NumbersAnimate from "@/components/animationNumbers";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function HeroContent() {
  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className="flex flex-col items-center justify-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary -z-1"></div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUpAnimationVariants}
          className="flex flex-col justify-center items-center text-center mb-8 mt-40 max-w-[43rem] px-4"
        >
          <h1 className="text-white font-bold text-3xl md:text-4xl mb-3">
            Advanced Intelligence Solutions for Critical Decision-Making
          </h1>

          <p className="text-white text-sm md:text-base max-w-[34rem] mb-6">
            Empowering decisions with decades of expertise in geospatial, signals, and imagery intelligence. Tailored solutions for complex missions and strategic planning.
          </p>

          <Button size="md" variant="secondary" className="group">
            <Link
              href="/about"
              className="text-white group-hover:text-secondary"
            >
              Discover Our Services
            </Link>
          </Button>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          className="relative w-auto "
          variants={fadeUpAnimationVariants}
        >
          {/* // grid grid-cols-3 */}
          <div className="flex flex-col lg:flex-row divide-y-2 lg:divide-y-0 lg:divide-x-2 
           bg-primary-light/30 backdrop-blur-sm rounded-lg p-4 justify-between items-center mt-6 text-center">

            <div className="w-[14rem] md:w-[16rem] mx-4 p-2 flex flex-col justify-center items-center ">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white">Global</h1>
              <p className="text-xs md:text-sm text-gray-300">mission support</p>
            </div>

            <div className="w-[14rem] md:w-[16rem] mx-4 p-2 flex flex-col justify-center items-center ">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white flex">
                  <NumbersAnimate count_number={100} duration_number={2} />+
                </h1>
                <span className="text-3xl font-light text-white ml-3">year</span>
              </div>
              <p className="text-xs md:text-sm text-gray-300">of combined intelligence expertise</p>
            </div>

            <div className="w-[14rem] md:w-[20rem] mx-4 p-2 flex flex-col justify-center items-center ">
              <div className="flex justify-center items-center ">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white inline">Adaptive</h1>
              </div>
              <p className="text-xs md:text-sm text-gray-300">Unmatched ability to rapidly respond to evolving operational requirements</p>
            </div>
          </div>
        </motion.div>
        <VideoBackground src='/global-connection-lines.mp4' />
      </motion.div>
    </Container>
  );
}
