// import Image from "next/image";
import Image from "next/image";
import type { Metadata } from "next";
import { MotionHeader, MotionCard } from "@/lib/Animations";

export const metadata: Metadata = {
  title: "Over Ons | Groepspraktijk Het Huis",
  description:
    "Maak kennis met ons team van gepassioneerde professionals bij Groepspraktijk Het Huis. Ontdek wie we zijn en wat we voor u kunnen betekenen.",
  keywords: [
    "psychologie",
    "therapie",
    "groepspraktijk",
    "het huis",
    "team",
    "professionals",
    "geestelijke gezondheid",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Over Ons | Groepspraktijk Het Huis",
    description:
      "Maak kennis met ons team van gepassioneerde professionals bij Groepspraktijk Het Huis. Ontdek wie we zijn en wat we voor u kunnen betekenen.",
    url: "https://groepspraktijkhethuis.be/over-ons",
    siteName: "Groepspraktijk Het Huis",
    images: [
      {
        url: "/profiles/group.jpg",
        width: 1200,
        height: 630,
        alt: "Het team van Groepspraktijk Het Huis",
      },
    ],
    locale: "nl_BE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

const team = [
  {
    name: "Jana Fonteyn",
    slug: "jana-fonteyn" as const,
    role: "Logopedist",
    imageUrl: "/profiles/Site-foto-Jana.jpg",
    skills: [],
    // xUrl: "#",
    // linkedinUrl: "#",
  },
  {
    name: "Leen Van Rampelberg",
    slug: "leen-van-rampelberg" as const,
    role: "Kinesitherapeut",
    imageUrl: "/profiles/Site-foto-Leen.jpg",
    skills: [],
    // xUrl: "#",
    // linkedinUrl: "#",
  },
  {
    name: "Sofie De Pauw",
    slug: "sofie-de-pauw" as const,
    role: "Kinesitherapeut",
    imageUrl: "/profiles/Site-foto-Sofie.jpg",
    skills: [],
    // xUrl: "#",
    // linkedinUrl: "#",
  },
];

function Header() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <MotionHeader delay={0.2}>
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-navy sm:text-7xl">
              Over ons
            </h1>
          </MotionHeader>
          <MotionHeader delay={0.4}>
            <p className="mt-8 text-lg font-medium text-pretty text-navy sm:text-xl/8">
              De therapeuten van Het Huis geloven dat ieder kind het beste tot
              groei komt in een veilige en ondersteunende omgeving. Wij creëren
              een plek waar kinderen en ouders zich welkom en gehoord voelen.
              Onze focus ligt niet alleen op het kind, maar ook op de omgeving
              die hen ondersteunt. Daarnaast hechten we veel waarde aan
              samenwerking met andere zorgverleners, scholen en andere betrokken
              organisaties. Door open communicatie en samenwerking zorgen we
              ervoor dat de zorg rondom het kind optimaal aansluit bij hun
              behoeften. In onze multidisciplinaire praktijk bieden we zowel
              logopedie als kinesitherapie, met bijzondere aandacht voor het
              emotionele en sociale welzijn van de kinderen.
            </p>
          </MotionHeader>
        </div>
      </div>
    </div>
  );
}

// function Header() {
//   return (
//     <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
//       <div
//         aria-hidden="true"
//         className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
//       />
//       <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
//           <MotionHeader delay={0.2}>
//             <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-navy sm:text-7xl lg:col-span-2 xl:col-auto">
//               Het huis team
//             </h1>
//           </MotionHeader>
//           <MotionHeader delay={0.4}>
//             <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
//               <p className="text-lg font-medium text-pretty text-navy sm:text-xl/8">
//                 De therapeuten van Het Huis geloven dat ieder kind het beste tot groei komt in een veilige en ondersteunende omgeving. Wij creëren een plek waar kinderen en ouders zich welkom en gehoord voelen. Onze focus ligt niet alleen op het kind, maar ook op de omgeving die hen ondersteunt. Daarnaast hechten we veel waarde aan samenwerking met andere zorgverleners, scholen en andere betrokken organisaties. Door open communicatie en samenwerking zorgen we ervoor dat de zorg rondom het kind optimaal aansluit bij hun behoeften. In onze multidisciplinaire praktijk bieden we zowel logopedie als kinesitherapie, met bijzondere aandacht voor het emotionele en sociale welzijn van de kinderen.
//               </p>
//               <div className="mt-10 flex items-center gap-x-6">
//                 <a href="#" className="text-sm/6 font-semibold text-navy">
//                   Meer over ons <span aria-hidden="true">→</span>
//                 </a>
//               </div>
//             </div>
//           </MotionHeader>
//           <MotionImage>
//             <Image
//               alt=""
//               src="/profiles/group.jpg"
//               className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 "
//               width={1000}
//               height={1000}
//             />
//           </MotionImage>
//         </div>
//       </div>
//       <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
//     </div>
//   );
// }

function Team() {
  return (
    <div className="bg-sky py-24 sm:py-32" id="team">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <MotionHeader delay={0.2}>
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
              Het huis team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Wij zijn een dynamische groep van individuen die gepassioneerd
              zijn over wat we doen en toegewijd aan het leveren van de beste
              resultaten voor onze cliënten.
            </p>
          </div>
        </MotionHeader>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person, index) => (
            <MotionCard key={index} index={index}>
              <li>
                <Image
                  alt=""
                  src={person.imageUrl}
                  className="aspect-3/2 w-full rounded-2xl object-cover"
                  width={300}
                  height={200}
                />
                <div>
                  <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{person.role}</p>
                </div>
              </li>
            </MotionCard>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <Team />
    </>
  );
}
