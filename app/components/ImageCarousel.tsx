'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const images = [
  '/img/carousel_1.webp',
  '/img/carousel_2.webp',
  '/img/carousel_3.webp',
  '/img/carousel_4.webp',
  '/img/carousel_5.webp',
  '/img/carousel_6.webp',
  '/img/carousel_7.webp',
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export default function ImageCarousel() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const navigate = useCallback(
    (newDirection: number) => {
      setCurrent(([prev]) => {
        const next = (prev + newDirection + images.length) % images.length;
        return [next, newDirection];
      });
    },
    [],
  );

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-[3/2] w-full">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={images[current]}
                  alt={`Foto ${current + 1} van Groepspraktijk Het Huis`}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                  priority={current === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => navigate(-1)}
            aria-label="Vorige foto"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ChevronLeftIcon className="h-5 w-5 text-navy" />
          </button>
          <button
            onClick={() => navigate(1)}
            aria-label="Volgende foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
          >
            <ChevronRightIcon className="h-5 w-5 text-navy" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
              aria-label={`Ga naar foto ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-8 bg-orange'
                  : 'w-2.5 bg-navy/20 hover:bg-navy/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
