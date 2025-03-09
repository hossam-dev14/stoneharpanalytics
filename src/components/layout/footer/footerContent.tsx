"use client";

import { motion } from "framer-motion";
import Container from "@/components/container";
import { currentYear, fadeUpAnimationVariants, legalLinks, navLinks, socials, staggerContainerVariants } from "@/consts";
import { cn } from "@/utils";
import Link from "next/link";
import { useImageLoading } from "@/hooks";
import Image from "next/image";
import { Icon } from "@/components/ui/icons";
import { icons } from "lucide-react";

export default function FooterContent() {
  const [, handleOnLoadingComplete, loadingAnimation] = useImageLoading();

  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants}
        className=''>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-6 mt-14">
          <motion.div
            variants={fadeUpAnimationVariants}
            className="col-span-2">
            <div className="text-sm md:text-base max-w-sm">
              <p className="text-neutral-light mb-4">
                Stone Harp Analytics delivers advanced intelligence solutions talored to empower decision-making in critical operations. With decades of expertise in GEOINT, SIGINT, IMINT, ELINT and OSINT, we provide clarity in complexity.
              </p>
              <p className="text-neutral-dark">
                sh_inquiry@taybecllc.com <br />
                (312) 788-8429 <br />
                519 W. 22nd St. Suite #100 Sioux Falls, SD 57105 <br />
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpAnimationVariants} className="flex flex-col gap-2 ">
            <h3 className="font-bold text-lg text-white">Quick Links</h3>
            <nav className='text-left'>
              <ul>
                {navLinks.map((item, index) => (
                  <li className="mb-2" key={index}>
                    <Link href={item.url} className='text-white/80 hover:text-white text-sm md:text-base'>{item.titel}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            variants={fadeUpAnimationVariants} className="flex flex-col gap-2 ">
            <h3 className="font-extrabold text-lg text-white">Legal</h3>
            <nav className='text-left'>
              <ul>
                {legalLinks.map((item, index) => (
                  <li className="mb-2" key={index}>
                    <Link href={item.url} className='text-white/80 hover:text-white text-sm md:text-base'>{item.titel}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            variants={fadeUpAnimationVariants} className="flex flex-col gap-2">
            <h3 className="font-bold text-white text-lg">Socials</h3>
            {/* Socials */}
            <div className="mt-3 flex gap-6">
              {
                socials.map((social, index) => (
                  <Link key={index} href={social.url} className="text-2xl p-2 bg-secondary rounded-full opacity-100 translate-0">
                    <Icon name={social.icon as keyof typeof icons} color="black" size={24} />
                  </Link>
                ))
              }
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <motion.div
            variants={fadeUpAnimationVariants}
            className="text-sm md:text-base text-white/90"
          >
            &copy; {`${currentYear}`}
            <Link
              target="_blank"
              href="/"
              className="text-secondary-light transition-all hover:border-b-1 ml-1"
            >
              Stone Harp Analytics
            </Link>
            . a division of TayBec LLC.
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
}
