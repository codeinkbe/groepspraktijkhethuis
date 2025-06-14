import Image from 'next/image'

const posts = [
    {
        id: 1,
        title: 'Physiotherapie',
        href: '#',
        description:
            'Onze physiotherapeut is gespecialiseerd in het behandelen van aandoeningen van de spieren, gewrichten en zenuwen. Hij kan je helpen met pijn, vermoeidheid, bewegingsbeperkingen en meer.',
        imageUrl:
            '/images/physiotherapie.jpg',
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

export default function ShortOverviewSection() {
    return (
        <div className="bg-gray-100 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Onze praktijk
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">
                        In onze praktijk werken we met een multidisciplinaire benadering, waarbij we samenwerken met andere professionals om de beste oplossing te bieden voor elke cliënt.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start justify-between">
                            <div className="relative w-full">
                                <Image
                                    alt=""
                                    src={post.imageUrl}
                                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"
                                    width={300}
                                    height={300}
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                            </div>
                            <div className="max-w-xl">
                                <div className="group relative">
                                    <h3 className="mt-3 text-2xl font-semibold text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    {post.author.map((author, index) => (
                                        <div key={index}>
                                            <Image alt="" src={author.imageUrl} className="size-20 rounded-full bg-gray-100 object-cover" width={40} height={40} />
                                            <div className="text-sm/6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href={author.href}>
                                                        <span className="absolute inset-0" />
                                                        {author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">{author.role}</p>
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
