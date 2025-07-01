import TestimonialsSection from "@/app/components/TestimonialsSection";
import { MotionHeader, MotionCard } from "@/lib/Animations";
import Image from "next/image";
import { Metadata } from "next";
import HeroSection from "@/app/components/HeroSection";
import ContactSection from "@/app/components/ContactSection";
import Link from "next/link";

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
    link: '/diensten#kinesitherapie'
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
    link: '/diensten#logopedie'
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
  const title = "Onze visie"
  const description = "Bij Het Huis geloven we in een warme, persoonlijke aanpak waar elke cliënt zich gezien en gehoord voelt. We streven naar duurzame groei en herstel, met aandacht voor het unieke verhaar achter elke hulpvraag. Vanuit een multidisciplinaire samenwerking begeleiden we kinderen en volwassenen op een respectvolle en betrokken manier, met ruimte voor kwetsbaarheid, vertrouwen en verandering."
  return (
    <div className="bg-cream px-6 py-24 sm:py-32 lg:px-8 flex items-center justify-center" id="visie">
      <div className="mx-auto max-w-2xl text-center">
        <MotionHeader delay={0.2} title={title} />
        <MotionHeader delay={0.4}>
          <p className="mt-8 text-lg text-pretty text-navy-light sm:text-xl/8">
            {description}
          </p>
        </MotionHeader>
      </div>
    </div>
  )
}

function ShortOverviewSection() {
  const title = "Onze praktijk"
  const description = "In onze praktijk werken we met een multidisciplinaire benadering, waarbij we samenwerken met andere professionals om de beste oplossing te bieden voor elke cliënt."
  return (
    <div className="bg-sky py-24 sm:py-32" id="praktijk">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <MotionHeader delay={0.2} title={title} />
          <MotionHeader delay={0.4}>
            <p className="mt-2 text-lg/8 text-navy-light sm:text-xl/8">
              {description}
            </p>
          </MotionHeader>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post, index) => (
            <MotionCard key={post.id} index={index}>
              <article className="flex flex-col items-start justify-between">
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
                <div className="max-w-xl flex flex-col items-start h-full justify-start">
                  <div className="group relative flex flex-col items-start justify-start">
                    <h3 className="mt-6 text-3xl font-acumin-bold text-navy group-hover:text-navy-light transition-colors">
                        <span className="absolute inset-0" />
                        {post.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-navy-light">{post.description}</p>
                  </div>
                  <Link href={post.link} className="mt-5 text-navy-light hover:text-navy transition-colors font-bold underline">
                    Meer informatie
                  </Link>
                </div>
              </article>
            </MotionCard>
          ))}
        </div>
      </div>
    </div>
  )
}

// See Testimonials section in components/TestimonialsSection.tsx === client component



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