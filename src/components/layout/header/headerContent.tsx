"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import Container from "@/components/container";
import { useImageLoading } from "@/hooks";
import { cn } from "@/utils";
import {
  fadeUpAnimationVariants,
  socials,
  navLinks,
  hamburgerMenuVariants
} from "@/consts";
import { icons } from "lucide-react";
import { Icon } from '@/components/ui/icons';

export default function HeaderContent() {
  const [, handleOnLoadingComplete, loadingAnimation] = useImageLoading();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      whileInView="show"
      initial="hidden"
      viewport={{
        once: true,
      }}
      variants={fadeUpAnimationVariants}
      className='bg-primary fixed top-0 right-0 left-0 z-20'
    // bg-gradient-to-b from-primary-dark via-primary to-transparent
    >
      <Container className="flex items-center justify-between py-6 relative h-[7rem] px-8">
        <div>
          <Link href='/'>
            <Image
              className={cn(
                "h-auto",
                "duration-700 ease-in-out",
                loadingAnimation,
              )}
              onLoad={handleOnLoadingComplete}
              src="/images/logo.png"
              alt="Stone Harp Analytics"
              width={160}
              height={90}
              sizes="13vw"
            />
          </Link>
        </div>

        {/* Navbar */}
        <div className="relative ">

          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={isOpen ? "open" : "closed"}
              onClick={() => setIsOpen((pv) => !pv)}
              className="relative h-20 w-10 rounded-md z-50"
            >
              <motion.span
                variants={hamburgerMenuVariants.top}
                className="absolute h-1 w-10 bg-white rounded-md"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={hamburgerMenuVariants.middle}
                className="absolute h-1 w-10 bg-white rounded-md"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={hamburgerMenuVariants.bottom}
                className="absolute h-1 w-5 bg-white rounded-md"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>


          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 bg-primary-dark/70 backdrop-blur-md  min-w-full md:min-w-[43rem] w-1/5 h-screen text-white flex flex-col justify-center items-center p-10 z-30"
            >
              <div className="flex justify-center items-center flex-col gap-10">
                <nav className='text-center'>
                  <ul>
                    {navLinks.map((item, index) => (
                      <li className="mb-7" key={index}>
                        <Link onClick={toggleMenu} href={item.url} className='text-white/80 hover:text-white text-3xl font-bold'>{item.titel}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                {/* Socials */}
                <div className="mt-7 flex gap-6">
                  {
                    socials.map((social, index) => (
                      <Link key={index} href={social.url} target='_blank' className="text-2xl p-2 bg-secondary  rounded-full opacity-100 translate-0">
                        <Icon name={social.icon as keyof typeof icons} color="white" size={24} />
                      </Link>
                    ))
                  }
                </div>
              </div>
            </motion.div>
          )}


        </div>
      </Container>

      {/* Overlay */}
      {isOpen &&
        (<div onClick={toggleMenu}
          className="fixed inset-0 w-full h-full bg-black/50"></div>
        )
      }
    </motion.div>
  );
}
