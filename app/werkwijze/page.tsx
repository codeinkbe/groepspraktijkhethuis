import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import ContactSection from "../components/ContactSection";
import {
  MotionHeader,
  MotionSection,
  MotionImage,
  MotionFeature,
} from "@/lib/Animations";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: "Werkwijze van Groepspraktijk Het Huis",
};

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
              We vinden het belangrijk dat je precies weet wat je kan verwachten
              als je bij ons een traject start. Van aanmelding tot tarieven,
              hier vind je alle praktische informatie op een rijtje.
            </p>
          </MotionHeader>
        </div>
      </div>
    </div>
  );
}

function Aanmelden() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32 bg-sky" id="hoe-aanmelden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection
            direction="left"
            className="lg:ml-auto lg:pt-4 lg:pl-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">
                Werkwijze
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Hoe aanmelden
              </p>
              <div className="mt-6 text-lg/8 text-gray-600 space-y-6">
                <p>
                  Het aanmelden voor logopedische of kinesitherapeutische
                  begeleiding verloopt steeds via het aanmeldformulier op onze
                  website. We ontvangen jullie graag voor een intakegesprek met
                  de ouder(s) van het kind. Tijdens dit gesprek brengen we de
                  zorgvragen in kaart en overlopen we enkele praktische zaken,
                  zoals het verloop van het onderzoek en de mogelijkheden tot
                  terugbetaling.
                </p>
                <p>
                  Daarna plannen we een geschikt moment voor het onderzoek in.
                  De duur hiervan hangt af van de aard van de moeilijkheden die
                  je kind ondervindt en de onderzoeken die reeds zijn afgenomen.
                  Het onderzoek is essentieel om als therapeut een duidelijk
                  beeld te krijgen van de vaardigheden van het kind en vormt
                  tevens de basis voor een eventuele terugbetaling. Afhankelijk
                  van de problematiek en uw mutualiteit kan een (gedeeltelijke)
                  terugbetaling voorzien worden.
                </p>
                <p>
                  Tot slot leggen we een afspraak vast om de
                  onderzoeksresultaten en de terugbetalingsmogelijkheden te
                  bespreken. Op dat moment bekijken we ook of opstarten van
                  therapie al dan niet aangewezen is.
                </p>
              </div>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Product screenshot"
              src="/images/werkwijze.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 object-cover h-full"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  );
}

function Wachten() {
  return (
    <div className="overflow-hidden bg-cream py-24 sm:py-32" id="wachttijd">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection
            direction="right"
            className="lg:ml-auto lg:pt-4 lg:pl-4 lg:order-first"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">
                Werkwijze
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Wachttijd 
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Op dit moment is er geen wachtlijst. Na jullie aanmelding via de
                website nemen we snel contact op om te bespreken hoe we jullie
                het best kunnen ondersteunen.
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
  );
}

function Tarieven() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white" id="tarieven">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <MotionSection
            direction="left"
            className="lg:ml-auto lg:pt-4 lg:pl-4"
          >
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-orange">
                Werkwijze
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Tarieven
              </p>
              <div className="mt-6 text-lg/8 text-gray-600 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">Logopedie</h3>
                  <p className="text-sm text-gray-500 mb-4">Alle logopedisten zijn geconventioneerd.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Onderzoek (per 30 minuten):</span>
                      <span className="font-semibold">44,18 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Therapie in de praktijk (per 30 minuten):</span>
                      <span className="font-semibold">37,35 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Therapie op school (per 30 minuten):</span>
                      <span className="font-semibold">40,35 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Terugbetaling via RIZIV:</span>
                      <span className="font-semibold">31,85 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Terugbetaling via aanvullende verzekering:</span>
                      <span className="font-semibold">Na te vragen bij uw mutualiteit</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4">Kinesitherapie Sofie</h3>
                  <p className="text-sm text-gray-500 mb-4">Alle kinesitherapeuten zijn gedeconventioneerd.</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Onderzoek:</span>
                      <span className="font-semibold">???</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Therapie in de praktijk (per 30min):</span>
                      <span className="font-semibold">37 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Therapie op school (per 30min):</span>
                      <span className="font-semibold">41 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Terugbetaling in de praktijk (per 30min):</span>
                      <span className="font-semibold">18,41 euro</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Terugbetaling op school (per 30min):</span>
                      <span className="font-semibold">20,73 euro</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </MotionSection>
          <MotionImage className="flex items-start justify-end lg:order-first">
            <Image
              alt="Tarieven"
              src="/images/aanmelden.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 object-cover h-full"
            />
          </MotionImage>
        </div>
      </div>
    </div>
  );
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
      <Tarieven />
      {/* <Annulatiebeleid /> */}
      <ContactSection />
      {/* <Faq /> */}
    </>
  );
}
