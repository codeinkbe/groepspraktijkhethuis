import React from 'react'
import Image from 'next/image'
import ContactSection from '../components/ContactSection'
import Link from 'next/link'
import { MotionHeader, MotionSection, MotionImage } from '@/lib/Animations'

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

function Logopedie() {
  return (
    <div className="overflow-hidden bg-sky py-24 sm:py-32" id="logopedie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="left" className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange">Diensten</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
                Logopedie: Meer dan alleen praten
              </p>
              <p className="mt-6 text-lg/8 text-navy">
                Logopedie helpt je bij moeilijkheden met communicatie in de breedste zin van het woord. Wij kunnen je begeleiden bij:
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base/7 text-navy lg:max-w-none">
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Articulatie:
                  </dt>{' '}
                  <dd className="inline">Duidelijk en verstaanbaar leren spreken.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Taal:
                  </dt>{' '}
                  <dd className="inline">Hulp bij taalontwikkeling, woordenschat of zinsbouw.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Stem:
                  </dt>{' '}
                  <dd className="inline">Begeleiding bij heesheid, stemverlies of verkeerd stemgebruik.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Vloeiendheid:
                  </dt>{' '}
                  <dd className="inline">Therapie voor stotteren of broddelen.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Mondgewoonten:
                  </dt>{' '}
                  <dd className="inline">Hulp bij afwijkend slikken, duimzuigen of mondademen (vaak in samenwerking met een orthodontist).</dd>
                </div>
              </dl>
              <p className="mt-8 text-lg/8 text-navy font-medium">
              <Link href="/contact" className="underline">Neem contact op</Link>, Neem contact op voor een begeleiding op maat.
              </p>
            </div>
          </MotionSection>
          <MotionImage>
            <Image
              alt="Logopedie behandeling"
              src="/images/logopedie.jpg"
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
  return (
    <div className="overflow-hidden bg-cream py-24 sm:py-32" id="kinesitherapie">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="right" className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">Diensten</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
                Kinesitherapie: Jouw lichaam in beweging
              </p>
              <p className="mt-6 text-lg/8 text-navy">
                Kinesitherapie richt zich op het herstellen en verbeteren van je lichamelijk functioneren. Je kan bij ons terecht voor:
              </p>
              <dl className="mt-10 max-w-xl space-y-4 text-base/7 text-navy lg:max-w-none">
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Nek-, schouder- en rugklachten:
                  </dt>{' '}
                  <dd className="inline">Aanpak van pijn en stijfheid door houding, stress of overbelasting.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Sportblessures:
                  </dt>{' '}
                  <dd className="inline">Revalidatie na een verstuiking, spierscheur of andere sportgerelateerde kwetsuren.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Manuele therapie:
                  </dt>{' '}
                  <dd className="inline">Gespecialiseerde technieken om gewrichten en spieren los te maken.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Ademhalingstherapie:
                  </dt>{' '}
                  <dd className="inline">Hulp bij hyperventilatie of andere ademhalingsproblemen.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Bekkenbodemtherapie:
                  </dt>{' '}
                  <dd className="inline">Begeleiding bij klachten voor, tijdens en na de zwangerschap.</dd>
                </div>
                <div className="relative pl-0">
                  <dt className="inline font-semibold text-navy">
                    Relaxatietherapie:
                  </dt>{' '}
                  <dd className="inline">Technieken om spanning en stress te verminderen.</dd>
                </div>
              </dl>
              <p className="mt-8 text-lg/8 text-navy font-medium">
                <Link href="/contact" className="underline">Neem contact op</Link>, en we stellen een actief en persoonlijk behandelplan voor je op.
              </p>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Kinesitherapie behandeling"
              src="/images/kinesitherapie.jpg"
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
