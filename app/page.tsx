import TestimonialsSection from "@/app/components/TestimonialsSection";
import { MotionHeader } from "@/lib/Animations";
import Image from "next/image";
import { Metadata } from "next";
import HeroSection from "@/app/components/HeroSection";

//todo: Metadata correct aanvullen:
export const metadata: Metadata = {
  title: 'Groepspraktijk Het Huis | Multidisciplinaire Praktijk',
  description: 'Multidisciplinaire praktijk voor kinderen en volwassenen, gespecialiseerd in logopedie, kinesitherapie en persoonlijke begeleiding op maat.',
  keywords: ['logopedie', 'kinesitherapie', 'multidisciplinair', 'groepspraktijk', 'het huis', 'therapie', 'begeleiding'],
  authors: [{ name: 'Groepspraktijk Het Huis' }],
  creator: 'Groepspraktijk Het Huis',
  publisher: 'Groepspraktijk Het Huis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://groepspraktijkhethuis.be',
    title: 'Groepspraktijk Het Huis | Multidisciplinaire Praktijk',
    description: 'Multidisciplinaire praktijk voor kinderen en volwassenen, gespecialiseerd in logopedie, kinesitherapie en persoonlijke begeleiding op maat.',
    siteName: 'Groepspraktijk Het Huis',
    images: [
      {
        url: '/heroimage.jpg',
        width: 1920,
        height: 1080,
        alt: 'Groepspraktijk Het Huis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groepspraktijk Het Huis | Multidisciplinaire Praktijk',
    description: 'Multidisciplinaire praktijk voor kinderen en volwassenen, gespecialiseerd in logopedie, kinesitherapie en persoonlijke begeleiding op maat.',
    images: ['/heroimage.jpg'],
  },
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google-site-verification-code', // You'll need to add your actual verification code
  },
}

// CONTENT
// ------------------------------------------------------------

const posts = [
  {
    id: 1,
    title: 'kinesitherapie',
    href: '#',
    description:
      'Onze physiotherapeut is gespecialiseerd in het behandelen van aandoeningen van de spieren, gewrichten en zenuwen. Hij kan je helpen met pijn, vermoeidheid, bewegingsbeperkingen en meer.',
    imageUrl:
      '/images/kinesitherapie.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: [
      {
        name: 'Voornaam Achternaam',
        role: 'Physiotherapeut',
        href: '#',
        imageUrl:
          '/profiles/profile1.jpg',
      }
    ],
  },
  {
    id: 2,
    title: 'Logopedie',
    href: '#',
    description:
      'Onze logopedist is gespecialiseerd in het behandelen van aandoeningen van de spraak, taal en spraakverstaan. Hij kan je helpen met spraakproblemen, taalbeperkingen en meer.',
    imageUrl:
      '/images/logopedie.jpg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: [
      {
        name: 'Voornaam Achternaam',
        role: 'Logopedist',
        href: '#',
        imageUrl:
          '/profiles/profile2.jpg',
      },
      {
        name: 'Voornaam Achternaam',
        role: 'Logopedist 2',
        href: '#',
        imageUrl:
          '/profiles/profile3.jpg',
      }
    ],
  }
]

const testimonials = [
  {
    name: "Jolien",
    text: "Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht.",
  },
  {
    name: "Jasper",
    text: "Dankzij deze praktijk heb ik mijn zelfvertrouwen terug gekregen. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht.",
  },
  {
    name: "Joris",
    text: "Ik heb bij Het Huis geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht.",
  },
  {
    name: "Natalie",
    text: "Het is een geweldige praktijk met een geweldige team. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht. Ik heb geleerd dat ik meer kan dan ik dacht.",
  },
]

export type TestimonialType = typeof testimonials

// COMPONENTS
// ------------------------------------------------------------


function VisieSection() {
  return (
    <div className="bg-cream px-6 py-24 sm:py-32 lg:px-8" id="visie">
      <div className="mx-auto max-w-2xl text-center">
        <MotionHeader delay={0.2}>
          <h2 className="text-5xl font-semibold tracking-tight text-navy sm:text-7xl">Onze visie</h2>
        </MotionHeader>
        <MotionHeader delay={0.4}>
          <p className="mt-8 text-lg font-medium text-pretty text-navy-light sm:text-xl/8">
            Bij Het Huis geloven we in een warme, persoonlijke aanpak waar elke cliënt zich gezien en gehoord voelt. We streven naar duurzame groei en herstel, met aandacht voor het unieke verhaal achter elke hulpvraag. Vanuit een multidisciplinaire samenwerking begeleiden we kinderen en volwassenen op een respectvolle en betrokken manier, met ruimte voor kwetsbaarheid, vertrouwen en verandering.
          </p>
        </MotionHeader>
      </div>
    </div>
  )
}

function ShortOverviewSection() {
  return (
    <div className="bg-sky py-24 sm:py-32" id="short-overview">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionHeader delay={0.2}>
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-cream sm:text-5xl">
              Onze praktijk
            </h2>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-2 text-lg/8 text-cream">
              In onze praktijk werken we met een multidisciplinaire benadering, waarbij we samenwerken met andere professionals om de beste oplossing te bieden voor elke cliënt.
            </p>
          </MotionHeader>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  alt=""
                  src={post.imageUrl}
                  className="aspect-video w-full rounded-md bg-cream object-cover sm:aspect-2/1 lg:aspect-3/2"
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-navy/10 ring-inset" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-semibold text-cream group-hover:text-navy-light transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-cream">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.author.map((author, index) => (
                    <div key={index}>
                      <Image alt="" src={author.imageUrl} className="size-20 rounded-full bg-cream object-cover" width={40} height={40} />
                      <div className="text-sm/6">
                        <p className="font-semibold text-cream">
                          <a href={author.href}>
                            <span className="absolute inset-0" />
                            {author.name}
                          </a>
                        </p>
                        <p className="text-cream">{author.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

// See Testimonials section in components/TestimonialsSection.tsx === client component

function ContactSection() {
  return (
    <div className="bg-orange py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <MotionHeader delay={0.2}>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Afspraak maken? Neem contact op!</h2>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-6 text-lg/8 text-white">
              We zijn altijd bereikbaar voor vragen en opmerkingen. Neem contact op met ons via het contactformulier of telefoon.
            </p>
          </MotionHeader>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <h3 className="border-l border-orange pl-6 font-semibold text-white">Los Angeles</h3>
            <address className="border-l border-white pt-2 pl-6 text-white not-italic">
              <p>4556 Brendan Ferry</p>
              <p>Los Angeles, CA 90210</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-orange pl-6 font-semibold text-white">New York</h3>
            <address className="border-l border-white pt-2 pl-6 text-white not-italic">
              <p>886 Walter Street</p>
              <p>New York, NY 12345</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-orange pl-6 font-semibold text-white">Toronto</h3>
            <address className="border-l border-white pt-2 pl-6 text-white not-italic">
              <p>7363 Cynthia Pass</p>
              <p>Toronto, ON N3Y 4H8</p>
            </address>
          </div>
          <div>
            <h3 className="border-l border-orange pl-6 font-semibold text-white">London</h3>
            <address className="border-l border-white pt-2 pl-6 text-white not-italic">
              <p>114 Cobble Lane</p>
              <p>London N1 2EF</p>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisieSection />
      <ShortOverviewSection />
      <TestimonialsSection testimonialsList={testimonials} />
      <ContactSection />
    </>
  );
}