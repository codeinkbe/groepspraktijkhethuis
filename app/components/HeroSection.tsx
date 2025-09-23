'use client';

import React from 'react'
import { useRive } from '@rive-app/react-canvas';
import { FadeHeader } from '../../lib/Animations';
import { useTrackEvent } from '@/hooks/useTrackEvent';

export default function HeroSection() {
    const track = useTrackEvent();
    const { RiveComponent } = useRive({
        src: '/rive/hethuis.riv',
        autoplay: true,
    });

    return (
        <div className="bg-orange min-h-screen flex flex-col" id="hero">
            <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <RiveComponent
                        className="h-64 w-64 md:h-96 md:w-96 object-cover"
                        onLoad={() => console.log('Rive loaded successfully')}
                        onError={(error) => console.error('Rive error:', error)}
                    />
                    <FadeHeader delay={2.9} className="flex flex-col items-center justify-center">
                        <h2 className="text-2xl md:text-4xl tracking-wider font-acumin-regular text-cream px-14 md:px-0 text-center">Groepspraktijk voor kinderen</h2>
                    </FadeHeader>
                    <FadeHeader delay={2.9} className="flex items-center justify-center">
                        <a
                            href="/contact"
                            className="rounded-2xl bg-cream px-3.5 py-2.5 text-sm font-semibold text-orange shadow-xs hover:bg-sky transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
                        >
                            Afspraak maken
                        </a>
                    </FadeHeader>
                </div>
            </div>
            
            <div className="pb-8 flex flex-col items-center justify-center space-y-2">
                <a href="#visie" className="text-sm font-semibold text-cream hover:text-sky transition-colors px-3 py-2 rounded-2xl" onClick={() => track('Nav Click', { link: 'Lees meer' })}>
                    Lees meer
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-cream">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}

