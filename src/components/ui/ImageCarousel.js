"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CarouselImage = () => {
  const [active, setActive] = useState(0);

  const moveLeft = () => {
    setActive((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setActive((prev) => (prev + 1) % items.length);
  };

  const generateItems = () => {
    return items.map((item, index) => {
      let level = ((index - active + items.length) % items.length) - 2;
      return <CarouselItem key={index} id={item} level={level} />;
    });
  };

  return (
    <div className="relative mx-auto flex h-48 w-full max-w-3xl items-center justify-center">
      <button
        onClick={moveLeft}
        className="absolute left-2 rounded-full bg-white p-2 shadow-lg"
      >
        {/* <FaChevronLeft className="text-xl text-teal-600" /> */}
        Left
      </button>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        {generateItems()}
      </div>
      <button
        onClick={moveRight}
        className="absolute right-2 rounded-full bg-white p-2 shadow-lg"
      >
        {/* <FaChevronRight className="text-xl text-teal-600" /> */}
        Right
      </button>
    </div>
  );
};

const CarouselItem = ({ id, level }) => {
  const levels = [
    { size: "w-24 h-32 text-lg bg-teal-600", position: "left-12" },
    { size: "w-28 h-36 text-xl bg-blue-500", position: "left-24" },
    { size: "w-32 h-40 text-2xl bg-cyan-400", position: "left-36" },
    { size: "w-28 h-36 text-xl bg-blue-500", position: "right-24" },
    { size: "w-24 h-32 text-lg bg-teal-600", position: "right-12" },
  ];

  const itemLevel = Math.max(-2, Math.min(level + 2, 4));
  const { size, position } = levels[itemLevel];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute flex items-center justify-center rounded-md font-bold text-white ${size} ${position}`}
    >
      {id}
    </motion.div>
  );
};

export default CarouselImage;
