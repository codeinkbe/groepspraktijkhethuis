import React from 'react'
import Image from 'next/image'
import type { Metadata } from 'next'
import ContactSection from '../components/ContactSection'
import { MotionHeader, MotionSection, MotionImage, MotionFeature } from '@/lib/Animations'

export const metadata: Metadata = {
  title: 'Werkwijze',
  description: 'Werkwijze van Groepspraktijk Het Huis',
}

// const stappen = [
//   { id: 1 as const, name: 'Aanmelden', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.' },
//   { id: 2 as const, name: 'Wachten', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.' },
//   { id: 3 as const, name: 'Afspraak', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.' },
// ]

function Header() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <MotionHeader delay={0.2}>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-navy sm:text-7xl">
              Transparant en duidelijk, zo werken wij
            </h1>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-8 text-lg font-medium text-pretty text-navy sm:text-xl/8">
              We vinden het belangrijk dat je precies weet wat je kan verwachten als je bij ons een traject start. Van aanmelding tot tarieven, hier vind je alle praktische informatie op een rijtje.
            </p>
          </MotionHeader>
        </div>
      </div>
    </div>
  )
}

function Aanmelden() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32 bg-sky" id="hoe-aanmelden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="left" className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange">Werkwijze</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Hoe meld je je aan?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Een afspraak maken is eenvoudig. Volg deze stappen:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <MotionFeature index={0} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Neem contact op:
                  </dt>{' '}
                  <dd className="inline">Bel ons of stuur een e-mail via het contactformulier met je naam, geboortedatum en een korte beschrijving van je vraag of klacht.</dd>
                </MotionFeature>
                <MotionFeature index={1} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Intakegesprek:
                  </dt>{' '}
                  <dd className="inline">We plannen een eerste afspraak in. Tijdens dit gesprek luisteren we naar je verhaal, voeren we een eerste onderzoek uit en bespreken we de mogelijkheden.</dd>
                </MotionFeature>
                <MotionFeature index={2} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Behandelplan:
                  </dt>{' '}
                  <dd className="inline">Op basis van de intake stellen we een persoonlijk behandelplan op met duidelijke doelen.</dd>
                </MotionFeature>
                <MotionFeature index={3} className="relative">
                  <dt className="inline font-semibold text-gray-900">
                    Start van de therapie:
                  </dt>{' '}
                  <dd className="inline">We gaan samen aan de slag!</dd>
                </MotionFeature>
              </dl>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Product screenshot"
              src="/images/werkwijze.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 object-cover max-h-92"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  )
}

function Wachten() {
  return (
    <div className="overflow-hidden bg-cream py-24 sm:py-32" id="wachttijd">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="right" className="lg:ml-auto lg:pt-4 lg:pl-4 lg:order-first">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">Werkwijze</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wachtlijst informatie
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                We streven ernaar om iedereen zo snel mogelijk te helpen. Afhankelijk van de drukte en de flexibiliteit in je agenda, kan het zijn dat er een korte wachttijd is. Na je aanmelding geven we je een indicatie van de wachttijd en nemen we contact op zodra er een plek vrijkomt.
              </p>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-last">
            <Image
              alt="Product screenshot"
              src="/images/wachten.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 object-cover max-h-92"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  )
}

function Afspraak() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="afspraak">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection direction="left" className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">Werkwijze</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Tarieven en terugbetaling
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Wij hanteren de officiële tarieven die door het RIZIV zijn vastgelegd. Of je recht hebt op een volledige of gedeeltelijke terugbetaling hangt af van je ziekenfonds en de aard van je klacht. Voor logopedie is vaak een voorschrift van een arts vereist. We informeren je hierover uitgebreid tijdens het intakegesprek en helpen je met de nodige documenten voor je mutualiteit.
              </p>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Product screenshot"
              src="/images/afspraak.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 object-cover max-h-92"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  )
}

// function Annulatiebeleid() {
//   return (
//     <div className="overflow-hidden bg-sky py-24 sm:py-32" id="annulatiebeleid">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
//           <MotionSection direction="right" className="lg:ml-auto lg:pt-4 lg:pl-4 lg:order-first">
//             <div className="lg:max-w-lg">
//               <h2 className="text-base/7 font-semibold text-orange">Werkwijze</h2>
//               <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
//                 Annulatiebeleid
//               </p>
//               <p className="mt-6 text-lg/8 text-gray-600">
//                 Kan je niet aanwezig zijn op een geplande afspraak? Verwittig ons dan telefonisch of per e-mail, ten laatste 24 uur op voorhand. Zo kunnen we iemand anders helpen. Voor afspraken die niet of te laat worden geannuleerd, kan een vergoeding worden aangerekend. We rekenen op je begrip.
//               </p>
//             </div>
//           </MotionSection>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function WerkwijzePage() {
  return (
    <>
      <Header />
      <Aanmelden />
      <Wachten />
      <Afspraak />
      {/* <Annulatiebeleid /> */}
      <ContactSection />
      {/* <Faq /> */}
    </>
  )
}
