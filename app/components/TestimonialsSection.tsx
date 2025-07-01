'use client';

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TestimonialType } from '@/app/page'
import { MotionHeader } from '@/lib/Animations';


export default function TestimonialsSection({testimonialsList}: {testimonialsList: TestimonialType}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex + 2 >= testimonialsList.length ? 0 : prevIndex + 2
            )
        }, 10000) // Change every 5 seconds

        return () => clearInterval(interval)
    }, [])

    const visibleTestimonials = [
        testimonialsList[currentIndex],
        testimonialsList[(currentIndex + 1) % testimonialsList.length]
    ]

    return (
        <section className="bg-cream py-24 sm:py-32" id="getuigenissen">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center justify-center">
                <MotionHeader delay={0.2} title="Wat zeggen onze cliënten" />
                <div className="mx-auto grid grid-cols-1 max-w-2xl lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <AnimatePresence mode="wait">
                        {visibleTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={`${currentIndex}-${index}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20"
                            >
                                <figure className="mt-10 flex flex-auto flex-col justify-between">
                                    <blockquote className="text-lg/8 text-gray-900">
                                        <p>{testimonial.text}</p>
                                    </blockquote>
                                    <figcaption className="mt-10 flex items-center gap-x-6">
                                        <div className="text-base">
                                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                            <div className="mt-1 text-gray-500">Cliënt</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
