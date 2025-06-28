import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Ons | Groepspraktijk Het Huis',
  description: 'Maak kennis met ons team van gepassioneerde professionals bij Groepspraktijk Het Huis. Ontdek wie we zijn en wat we voor u kunnen betekenen.',
  keywords: ['psychologie', 'therapie', 'groepspraktijk', 'het huis', 'team', 'professionals', 'geestelijke gezondheid'],
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
    title: 'Over Ons | Groepspraktijk Het Huis',
    description: 'Maak kennis met ons team van gepassioneerde professionals bij Groepspraktijk Het Huis. Ontdek wie we zijn en wat we voor u kunnen betekenen.',
    url: 'https://groepspraktijkhethuis.be/over-ons',
    siteName: 'Groepspraktijk Het Huis',
    images: [
      {
        url: '/profiles/group.jpg',
        width: 1200,
        height: 630,
        alt: 'Het team van Groepspraktijk Het Huis',
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


const team = [
  {
    name: 'Lindsay Walton',
    slug: 'lindsay-walton' as const,
    role: 'Front-end Developer',
    imageUrl:
      '/profiles/profile1.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    slug: 'lindsay-walton' as const,
    role: 'Front-end Developer',
    imageUrl:
      '/profiles/profile2.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Lindsay Walton',
    slug: 'lindsay-walton' as const,
    role: 'Front-end Developer',
    imageUrl:
      '/profiles/profile3.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
]

function Header() {
  return (
    <div className="relative bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0 flex flex-col justify-center">
            <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-navy sm:mt-10 sm:text-7xl">
              Het huis team
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-navy sm:text-xl/8">
              Wij zijn een dynamische groep van individuen die gepassioneerd zijn over wat we doen en toegewijd aan het leveren van de beste resultaten voor onze cliënten.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#team" className="text-sm/6 font-semibold text-white">
                Over ons <span aria-hidden="true">→</span>
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


function Team() {
  return (
    <div className="bg-sky py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">Over ons</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Wij zijn een dynamische groep van individuen die gepassioneerd zijn over wat we doen en toegewijd aan het leveren van de beste resultaten voor onze cliënten.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person, index) => (
            <li key={index}>
              <Image alt="" src={person.imageUrl} className="aspect-3/2 w-full rounded-2xl object-cover" width={200} height={200} />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base/7 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex gap-x-6">
                <li>
                  <a href={person.xUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                      <path
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <Team />
    </>
  )
}
