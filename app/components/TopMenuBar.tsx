'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const navigation = [
    {
        name: 'Home', href: '/#hero', submenu: [
            { name: 'Visie', href: '/#visie' },
            { name: 'Praktijk', href: '/#praktijk' },
            // { name: 'Getuigenissen', href: '/#getuigenissen' },
        ]
    },
    {
        name: 'Aanbod', href: '/diensten', submenu: [
            { name: 'Logopedie', href: '/diensten#logopedie' },
            { name: 'Kinesitherapie', href: '/diensten#kinesitherapie' },
        ]
    },
    {
        name: 'Over ons', href: '/over-ons', submenu: []
    },
    {
        name: 'Werkwijze', href: '/werkwijze', submenu: [
            { name: 'Hoe aanmelden', href: '/werkwijze#hoe-aanmelden' },
            { name: 'Wachttijd', href: '/werkwijze#wachttijd' },
            { name: 'Tarieven', href: '/werkwijze#afspraak' },
            { name: 'Annulatiebeleid', href: '/werkwijze#annulatiebeleid' },
        ]
    },
    // { name: 'Veelgestelde vragen', href: '/veelgestelde-vragen', submenu: [] },
]

export default function TopMenuBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (pathname === '/') {
                if (scrollPosition > 100) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                setIsScrolled(true);
            }
        };

        // Set initial state based on current page
        if (pathname !== '/') {
            setIsScrolled(true);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav aria-label="Global" className={`flex items-center justify-between lg:px-8 ${isScrolled ? 'bg-white/70 backdrop-blur-sm shadow-xs' : ''} transition-all duration-300 h-24`}>
                <div className={`flex lg:flex-1`}>
                    <Link href="/" className={`-m-1.5 p-1.5 ${isScrolled ? 'block' : 'hidden'}`}>
                        <span className="sr-only">Groepspraktijk Het Huis</span>
                        <Image
                            alt=""
                            src="/logoZonderSlogan.png"
                            width={100}
                            height={100}
                            className="h-24 w-auto"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-6 transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative group">
                            <Link
                                href={item.href}
                                className={`flex items-center gap-1 text-sm/6 font-semibold  transition-colors ${isScrolled ? 'text-navy hover:text-orange' : 'text-white hover:text-orange-900'}`}
                                onMouseEnter={() => setOpenSubmenu(item.name)}
                                onMouseLeave={() => setOpenSubmenu(null)}
                            >
                                {item.name}
                                {item.submenu && item.submenu.length > 0 && (
                                    <ChevronDownIcon className="size-4 transition-transform group-hover:rotate-180" />
                                )}
                            </Link>
                            {item.submenu && item.submenu.length > 0 && (
                                <div
                                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-200 ${openSubmenu === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                    onMouseEnter={() => setOpenSubmenu(item.name)}
                                    onMouseLeave={() => setOpenSubmenu(null)}
                                >
                                    <div className="py-2">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-4 py-2 text-sm text-navy hover:text-white hover:bg-orange transition-colors"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a 
                        href="/contact" 
                        className={`rounded-2xl bg-orange px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-light transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible ${isScrolled ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                    >
                        Afspraak maken
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-navy p-6 sm:max-w-sm sm:ring-1 sm:ring-cream/20">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Groepspraktijk Het Huis</span>
                            <Image
                                alt=""
                                src="/hetHuisWitLogo.png"
                                width={32}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-cream"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/25">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-cream hover:bg-navy-light transition-colors"
                                            onClick={closeMobileMenu}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.submenu && item.submenu.length > 0 && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block rounded-lg px-3 py-2 text-sm text-cream-light hover:text-orange hover:bg-navy-light transition-colors"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/contact"
                                    className="-mx-3 block rounded-2xl px-3 py-2.5 text-base/7 font-semibold text-cream hover:bg-navy-light transition-colors"
                                    onClick={closeMobileMenu}
                                >
                                    Afspraak maken
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
