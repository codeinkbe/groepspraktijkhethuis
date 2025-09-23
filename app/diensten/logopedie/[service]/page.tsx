import React from 'react'
// import Image from 'next/image'
import PlausibleLink from '@/app/components/PlausibleLink'
// import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
// import ContactSection from '../../../components/ContactSection'
import { aanbod, RichTextContent } from '@/lib/data'

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

// Rich text renderer component
const RichTextRenderer: React.FC<{ content: RichTextContent[] }> = ({ content }) => {
  return (
    <div className="space-y-6">
      {content.map((item, index) => {
        switch (item.type) {
          case 'title':
            const level = item.level || 2;
            const titleClass = `font-semibold text-navy ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'} mt-8 mb-4`;
            
            if (level === 1) {
              return <h1 key={index} className={titleClass}>{item.content as string}</h1>;
            } else if (level === 2) {
              return <h2 key={index} className={titleClass}>{item.content as string}</h2>;
            } else if (level === 3) {
              return <h3 key={index} className={titleClass}>{item.content as string}</h3>;
            } else {
              return <h4 key={index} className={titleClass}>{item.content as string}</h4>;
            }
          case 'paragraph':
            return (
              <p key={index} className="text-navy leading-relaxed">
                {item.content as string}
              </p>
            );
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside space-y-2 text-navy ml-4">
                {(item.content as string[]).map((listItem, listIndex) => (
                  <li key={listIndex} className="leading-relaxed">
                    {listItem}
                  </li>
                ))}
              </ul>
            );
          case 'bold':
            return (
              <strong key={index} className="font-semibold text-navy">
                {item.content as string}
              </strong>
            );
          case 'underline':
            return (
              <u key={index} className="text-navy">
                {item.content as string}
              </u>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  const decodedService = decodeURIComponent(service);
  const logopedieData = aanbod.find(service => service.title === "Logopedie");
  const serviceItem = logopedieData?.items.find(item => item.title === decodedService);

  if (!serviceItem) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-navy mb-4">Service niet gevonden</h1>
          <PlausibleLink href="/diensten" eventProps={{ link: 'Terug naar diensten' }} className="text-orange hover:underline">
            Terug naar diensten
          </PlausibleLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
          <p className="text-base/7 font-semibold text-orange">Logopedie</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
            {serviceItem.title}
          </h1>
          <p className="mt-6 text-xl/8 text-navy">
            {serviceItem.description}
          </p>
          <div className="mt-10 max-w-2xl text-gray-600">
            {serviceItem.details && (
              <RichTextRenderer content={serviceItem.details} />
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <PlausibleLink 
                href="/contact" 
                eventProps={{ link: 'Afspraak maken' }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-orange hover:bg-orange/90 transition-colors"
              >
                Afspraak maken
              </PlausibleLink>
              <PlausibleLink 
                href="/diensten#logopedie" 
                eventProps={{ link: 'Terug naar diensten' }}
                className="inline-flex items-center px-6 py-3 border border-orange text-base font-medium rounded-2xl text-orange bg-transparent hover:bg-orange hover:text-white transition-colors"
              >
                Terug naar diensten
              </PlausibleLink>
            </div>
          </div>
        </div>
      </div>

      {/* <ContactSection /> */}
    </div>
  )
} 