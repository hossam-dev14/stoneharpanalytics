"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { useImageLoading } from "@/hooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { fromJSON } from 'postcss';

import {
  fadeUpAnimationVariants,
  sliderImages,
  staggerContainerVariants
} from '@/consts';
import Container from '../container';
import { cn } from '@/utils';

export default function Carousel() {
  const [, handleOnLoadingComplete, loadingAnimation] = useImageLoading();

  return (
    <Container>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainerVariants} >
        <motion.div
          variants={fadeUpAnimationVariants}>
          <Swiper
            effect='coverflow'
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={4}
            // slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            autoplay={{
              delay: 3000, // Auto-slide every 3 seconds
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            watchSlidesProgress={true}
            className="mt-[3rem] pb-12 h-[13rem] w-[40rem] max-w-full"
          >
            {sliderImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={570}
                  height={540}
                  onLoad={handleOnLoadingComplete}
                  className={cn(
                    "h-auto",
                    "duration-700 ease-in-out slide-image h-full",
                    loadingAnimation,
                  )}
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div >
    </Container>
  );
}
