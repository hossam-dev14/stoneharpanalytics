"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { fadeUpAnimationVariants, socials, staggerContainerVariants } from "@/consts";
import ContactForm from "@/components/form/ContactForm";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { icons } from "lucide-react";

export default function SendMessage() {
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
          className="flex flex-1 flex-col items-center lg:items-start mb-4 ">
          <h1 className="text-white text-3xl md:text-4xl font-extrabold text-center lg:text-left mb-4 max-w-[30rem]">
            Get in Touch with <br />
            <span className="text-secondary">
              Stone Harp Analytics
            </span>
          </h1>

          <p className="text-white text-center lg:text-left text-sm md:text-base max-w-[30rem] mb-8">
            At Stone Harp Analytics, we prioritize confidentiality and secure communication for all engagements. Please use the details below to connect with our team for consultations or urgent matters.
          </p>

          <div className="self-start">
            {/* Socials */}
            <div className="mt-5 flex flex-col gap-2">
              {
                socials.map((social, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Link key={index} href={social.url} className=" p-2 bg-secondary rounded-full opacity-100 translate-0">
                      {/* {social.icon} */}
                      <Icon name={social.icon as keyof typeof icons} color="black" size={20} />
                    </Link>
                    <span className="text-sm md:text-base text-white">{social.title}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpAnimationVariants}
          className="">
          <ContactForm />
        </motion.div>
      </motion.div>
    </Container>
  );
}
