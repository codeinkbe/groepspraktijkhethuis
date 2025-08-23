import React from 'react'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import Link from 'next/link'
import { MotionHeader, MotionSection, MotionImage } from '@/lib/Animations'
import { aanbod } from '@/lib/data'

function Header() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <MotionHeader delay={0.2}>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-navy sm:text-7xl">
            Ontdek hoe we jou kunnen helpen
            </h1>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-8 text-lg font-medium text-pretty text-navy sm:text-xl/8">
            Onze praktijk biedt gespecialiseerde zorg binnen logopedie en kinesitherapie. Hieronder vind je een overzicht van de klachten en problemen waarvoor je bij ons terechtkan. Staat jouw vraag er niet tussen? Neem gerust contact op, dan bekijken we samen de mogelijkheden.
            </p>
          </MotionHeader>
        </div>
      </div>
    </div>
  )
}

function SubItem(item: {title: string}) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/70 group transition-all duration-300 cursor-pointer h-30 flex flex-col justify-center">
      <h3 className="font-semibold text-navy text-lg mb-2 text-center break-words group-hover:text-orange">{item.title}</h3>
      {/* <p className="text-navy break-words">{item.description}</p> */}
    </div>
  )
}

function Logopedie() {
  const logopedieData = aanbod.find(service => service.title === "Logopedie");

  return (
    <div className="overflow-hidden bg-sky py-24 sm:py-32" id="logopedie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="left" className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange">Diensten</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
                {logopedieData?.title}: Meer dan alleen praten
              </p>
              <p className="mt-6 text-lg/8 text-navy">
                {logopedieData?.description}
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {logopedieData?.items.map((item, index) => (
                  <Link href={`/diensten/logopedie/${item.title}`} key={index}>
                    <SubItem title={item.title} />
                  </Link>
                ))}
              </div>
              {/* <p className="mt-8 text-lg/8 text-navy font-medium">
                <Link href="/contact" className="underline">Neem contact op</Link> voor een begeleiding op maat.
              </p> */}
            </div>
          </MotionSection>
          <MotionImage>
            <Image
              alt="Logopedie behandeling"
              src={logopedieData?.image || "/images/logopedie.jpg"}
              width={1000}
              height={1000}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  )
}

function Kinesitherapie() {
  const kinesitherapieData = aanbod.find(service => service.title === "Kinesitherapie");

  return (
    <div className="overflow-hidden bg-cream py-24 sm:py-32" id="kinesitherapie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="right" className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">Diensten</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
                {kinesitherapieData?.title}: jouw lichaam in beweging
              </p>
              <p className="mt-6 text-lg/8 text-navy">
                {kinesitherapieData?.description}
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {kinesitherapieData?.items.map((item, index) => (
                  <Link href={`/diensten/kinesitherapie/${item.title}`} key={index}>
                    <SubItem title={item.title} />
                  </Link>
                ))}
              </div>
              {/* <p className="mt-8 text-lg/8 text-navy font-medium">
                <Link href="/contact" className="underline">Neem contact op</Link>, en we stellen een actief en persoonlijk behandelplan voor je op.
              </p> */}
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Kinesitherapie behandeling"
              src={kinesitherapieData?.image || "/images/kinesitherapie.jpg"}
              width={1000}
              height={1000}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  )
}

export default function DienstenPage() {
  return (
    <div>
      <Header />
      <Logopedie />
      <Kinesitherapie />
      <ContactSection />
    </div>
  )
}
