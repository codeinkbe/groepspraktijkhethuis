import Image from "next/image";

export default function TeamHero() {
    return (
      <div className="relative bg-white min-h-screen">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <Image
                alt="Your Company"
                src="/logo.svg"
                width={100}
                height={100}
                className="h-11"
              />

              <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
                Het huis team
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Wij zijn een dynamische groep van individuen die gepassioneerd zijn over wat we doen en toegewijd aan het leveren van de beste resultaten voor onze cliënten.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="#team" className="text-sm/6 font-semibold text-gray-900">
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
  