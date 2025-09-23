'use client'
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTrackEvent } from '@/hooks/useTrackEvent';
// import type { Metadata } from 'next'

// Note: Since this is a client component, we can't export metadata directly
// The metadata should be handled by a parent server component or layout

export default function ContactPage() {
  const track = useTrackEvent();
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    email: '',
    phoneNumber: '',
    serviceType: '',
    helpRequest: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ childName: '', age: '', email: '', phoneNumber: '', serviceType: '', helpRequest: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-navy sm:text-5xl">
              Maak nu je afspraak
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Heb je een vraag of wil je je aanmelden? Vul het onderstaande formulier in en we nemen zo snel mogelijk
              contact met je op via e-mail. Berichten worden verstuurd naar{' '}
              <a href="mailto:info@groepspraktijkhethuis.be" className="text-orange">
                info@groepspraktijkhethuis.be
              </a>
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  Groepspraktijk Het Huis
                  <br />
                  Koornbloemstraat 73A
                  <br />
                  2610 Wilrijk
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:info@groepspraktijkhethuis.be" className="hover:text-gray-900">
                    info@groepspraktijkhethuis.be
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-green-800">Aanmelding succesvol verzonden! We nemen zo snel mogelijk contact met je op.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800">
                  Er is een fout opgetreden bij het versturen van je bericht. 
                  Controleer je internetverbinding en probeer het opnieuw. 
                  Als het probleem aanhoudt, neem dan direct contact op via{' '}
                  <a href="mailto:info@groepspraktijkhethuis.be" className="underline">
                    info@groepspraktijkhethuis.be
                  </a>
                </p>
              </div>
            )}
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div>
                <label htmlFor="childName" className="block text-sm/6 font-semibold text-gray-900">
                  Naam kind *
                </label>
                <div className="mt-2.5">
                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="age" className="block text-sm/6 font-semibold text-gray-900">
                  Leeftijd *
                </label>
                <div className="mt-2.5">
                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="0"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  E-mailadres *
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                  GSM nummer *
                </label>
                <div className="mt-2.5">
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="serviceType" className="block text-sm/6 font-semibold text-gray-900">
                  Type begeleiding *
                </label>
                <div className="mt-2.5">
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="logopedie">Aanmelding logopedie</option>
                    <option value="kinesitherapie">Aanmelding kinesitherapie</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="helpRequest" className="block text-sm/6 font-semibold text-gray-900">
                  Hulpvraag: waarmee kunnen we je helpen?
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="helpRequest"
                    name="helpRequest"
                    rows={4}
                    value={formData.helpRequest}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => track('Nav Click', { link: 'Verstuur bericht' })}
                className="rounded-2xl bg-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Versturen...' : 'Verstuur bericht'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}