'use client';

import React from 'react'
import { useRive } from '@rive-app/react-canvas';
import { FadeHeader } from '../../lib/Animations';

export default function HeroSection() {
    const { RiveComponent } = useRive({
        src: '/rive/hethuis.riv',
        autoplay: true,
    });

    return (
        <div className="bg-orange" id="hero">
            <div className="relative isolate overflow-hidden flex items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <RiveComponent
                                className="w-[700px] h-[400px] mx-auto"
                                onLoad={() => console.log('Rive loaded successfully')}
                                onError={(error) => console.error('Rive error:', error)}
                            />
                            <FadeHeader delay={1.3} className="mt-0 flex flex-col items-center justify-center gap-x-6">
                                <h2 className="text-4xl font-acumin-regular text-cream">Groepspraktijk voor kinderen</h2>
                            </FadeHeader>
                            {/* <MotionHeader delay={0.2}>
                <Image
                  src="/logoZonderSlogan.png"
                  alt="Groepspraktijk Het Huis"
                  width={1000}
                  height={1000}
                  className="w-[500px] h-auto mx-auto"
                >
                </Image>
              </MotionHeader> */}
                            <FadeHeader delay={1.3} className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-2xl bg-cream px-3.5 py-2.5 text-sm font-semibold text-orange shadow-xs hover:bg-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                                >
                                    Contacteer ons
                                </a>
                                <a href="#visie" className="text-sm/6 font-semibold text-cream hover:text-sky transition-colors">
                                    Onze visie <span aria-hidden="true">→</span>
                                </a>
                            </FadeHeader>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

