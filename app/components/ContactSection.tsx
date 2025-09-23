import { MotionHeader } from "@/lib/Animations";
import Link from "next/link";
import PlausibleLink from "@/app/components/PlausibleLink";
import React from "react";

export default function ContactSection() {
  return (
    <div className="bg-orange py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <MotionHeader delay={0.2}>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
              Afspraak maken? Neem contact op!
            </h2>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-6 text-lg/8 text-white">
              Je kan een afspraak maken in onze praktijk door het contactformulier in te vullen op onze website. We nemen nadien contact met jullie op om verdere afspraken te maken.
            </p>
          </MotionHeader>
        </div>

        <PlausibleLink href="/contact" eventProps={{ link: "Afspraak maken" }}>
          <button className="bg-white text-navy px-4 py-2 rounded-2xl mt-6 hover:bg-navy-light hover:text-white transition-colors cursor-pointer font-bold">
            Afspraak maken
          </button>
        </PlausibleLink>
      </div>
    </div>
  );
}
