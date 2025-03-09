"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface numberProps {
  count_number: number;
  duration_number?: number;
}

export default function NumbersAnimate({ count_number = 100, duration_number = 5 }: numberProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))

  useEffect(() => {
    const controls = animate(count, count_number, { duration: duration_number })
    return () => controls.stop()
  }, [count, count_number, duration_number]);

  return <motion.pre className='text-3xl md:text-4xl text-white font-bbTorsosPro font-extrabold'>{rounded}</motion.pre>
}