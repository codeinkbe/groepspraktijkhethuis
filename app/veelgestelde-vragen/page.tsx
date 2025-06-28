import Image from 'next/image'
import type { Metadata } from 'next'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Veelgestelde vragen | Groepspraktijk Het Huis',
    description: 'Veelgestelde vragen over Groepspraktijk Het Huis',
    keywords: ['veelgestelde vragen', 'groepspraktijk', 'het huis', 'team', 'professionals', 'geestelijke gezondheid'],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Veelgestelde vragen | Groepspraktijk Het Huis',
        description: 'Veelgestelde vragen over Groepspraktijk Het Huis',
        url: 'https://groepspraktijkhethuis.be/veelgestelde-vragen',
        siteName: 'Groepspraktijk Het Huis',
        images: [
            {
                url: '/profiles/group.jpg',
                width: 1200,
                height: 630,
                alt: 'Veelgestelde vragen over Groepspraktijk Het Huis',
            },
        ],
        locale: 'nl_BE',
        type: 'website',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
        other: {
            rel: 'apple-touch-icon-precomposed',
            url: '/apple-touch-icon-precomposed.png',
        },
    },
}


const faqs = [
  {
    question: "Wat moet ik doen wanneer ik iets te laat ben?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Hoe zit het met terugbetalingen bij een afspraak?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Ik heb een afspraak, maar ik kan niet komen. Wat moet ik doen?",
    answer:
      "Wanneer je een afspraak maakt, krijg je een e-mail met de details van de afspraak. Als je niet kunt komen, moet je contact opnemen met ons om de afspraak te annuleren.",
  }
  // More questions...
]

function Header() {
    return (
        <div className="relative bg-cream min-h-screen">
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
                <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
                    <div className="mx-auto max-w-lg lg:mx-0 flex flex-col justify-center">
                        <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-navy sm:mt-10 sm:text-7xl">
                            Specifieke vraag?
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-navy sm:text-xl/8">
                            Heb je een vraag dat je niet meteen kunt terugvinden op onze website? Geen zorgen, misschien vind je ze tussen onze veelgestelde vragen. Indien niet, neem dan gerust contact op dan helpen we je graag verder.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a href="#team" className="text-sm/6 font-semibold text-white">
                                Veelgestelde vragen <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                    <Image
                        alt=""
                        src="/profiles/group.jpg"
                        className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </div>
    )
}



function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Veelgestelde vragen
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure key={index} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusIcon aria-hidden="true" className="size-4 group-data-open:hidden" />
                      <MinusIcon aria-hidden="true" className="size-4 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}



export default function VeelgesteldeVragen() {
    return (
        <>
            <Header />
            <Faq />
        </>
    )
}
