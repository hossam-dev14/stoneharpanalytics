"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/container";
import { fadeUpAnimationVariants, staggerContainerVariants } from "@/consts";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="items-center justify-center">
      <Container className="mt-20 min-h-72 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainerVariants} className="flex flex-col items-center justify-center text-white">
          <div className="mb-12 text-center">
            <motion.h1
              className="mt-4 text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            // variants={fadeUpAnimationVariants}
            >
              404
            </motion.h1>

            <motion.p
              className="mt-2 text-xl text-neutral"
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ delay: 0.3, duration: 0.5 }}
              variants={fadeUpAnimationVariants}
            >
              Oops! Page not found.
            </motion.p>
          </div>

          {/* Go Back Button */}
          <motion.div
            // initial={{ opacity: 0, y: 10 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ delay: 0.6, duration: 0.5 }}
            variants={fadeUpAnimationVariants}
          >
            <div className="w-full flex justify-center lg:justify-start">
              <Button size="md" variant="secondary" className="group">
                <Link
                  href="/"
                  className="text-white group-hover:text-secondary"
                >
                  Go Back Home
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </main>
  );
}
