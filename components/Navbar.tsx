'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '@/components/Logo';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const pathname = usePathname();

    const isLinkActive = (href: string) => {
        // If the link is for the homepage, check for an exact match.
        if (href === '/') {
            return pathname === href;
        }
        // For all other links, use startsWith to handle nested pages.
        return pathname.startsWith(href);
    };
    
    return (
        <nav className={cn('fixed top-0 left-0 right-0 z-[99999] border-b border-black/10 bg-white/80 backdrop-blur-md', className)} {...props}>
            <div className="container flex items-center justify-between py-4 max-h-[75px]">
                <Link href="/">
                    <Logo />
                </Link>
                
                <ul className="hidden lg:flex items-center gap-3">
                    {navbarData.map((section) => (
                        <li key={section.id}>
                            <Link 
                                href={section.to}
                                className={`inline-flex items-center gap-2 rounded-full py-2 px-4 select-none transition-all cursor-pointer text-base font-medium border ${
                                    isLinkActive(section.to)
                                        ? 'bg-black text-white border-black' // Active state
                                        : 'text-black/70 border-transparent hover:bg-gray-200/80 hover:text-black' // Inactive state with hover
                                }`}
                            >
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                <DropdownMenu>
                    <DropdownMenuTrigger className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
                        <i className="pi pi-bars"></i>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="lg:hidden mt-2 mr-4 w-60 p-2 rounded-2xl shadow-lg bg-white/90 backdrop-blur-lg border border-gray-200/80">
                        <div className="flex flex-col gap-1">
                            {navbarData.map((section) => (
                                <Link 
                                    key={section.id} 
                                    href={section.to}
                                    className={`py-2 px-3 rounded-lg font-medium transition-all ${
                                        isLinkActive(section.to)
                                            ? 'text-black bg-gray-200'
                                            : 'text-gray-600 hover:text-black hover:bg-gray-100'
                                    }`}
                                >
                                    {section.title}
                                </Link>
                            ))}
                            <div className="border-t border-gray-200 my-1"></div>
                            <Link 
                                href="/second-pages/signup" 
                                className="py-2 px-3 rounded-lg font-medium text-gray-600 hover:text-black hover:bg-gray-100"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export default Navbar;

const navbarData = [
    {
        id: 'beranda',
        title: 'Beranda',
        to: '/'
    },
    {
        id: 'berita',
        title: 'Berita',
        to: '/berita'
    },
    {
        id: 'pariwisata',
        title: 'Pariwisata',
        to: '/pariwisata'
    },
    {
        id: 'agrikultur',
        title: 'Agrikultur',
        to: '/agrikultur'
    },
    {
        id: 'informasi-desa',
        title: 'Informasi Desa',
        to: '/informasi-desa'
    }
];
