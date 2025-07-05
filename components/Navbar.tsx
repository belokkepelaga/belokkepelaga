'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '@/components/Logo';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const pathname = usePathname();
    
    return (
        <nav className={cn('flex items-center relative z-[99999] justify-between py-6 w-[calc(100%-3rem)] max-h-[75px] mx-auto border-b border-white/10 border-dashed', className)} {...props}>
            <Link href="/">
                <Logo />
            </Link>
            
            <ul className="hidden lg:flex items-center gap-3">
                {navbarData.map((section) => (
                    <li key={section.id}>
                        <Link 
                            href={section.to}
                            className={`inline-flex items-center gap-2 rounded-full py-1 pr-3 pl-3 select-none transition-all cursor-pointer text-base border border-white/0 ${
                                pathname.startsWith(section.to) 
                                    ? 'text-white bg-white/16 backdrop-blur-2xl border-white/4 shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]' 
                                    : 'text-white/72 hover:text-white hover:bg-white/8 hover:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02),0px_0px_0px_1px_rgba(18,18,23,0.02)]'
                            }`}
                        >
                            {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
            
            {/* <ul className="hidden lg:flex items-center">
                <li>
                    <Link href="/second-pages/signup" className="button-regular">Bahasa</Link>
                </li>
            </ul> */}
            
            <DropdownMenu unstyled className="lg:hidden block">
                <DropdownMenuTrigger className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-surface-0 text-surface-950">
                    <i className="pi pi-bars"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="top-[calc(100%+0.5rem)] max-h-96 overflow-auto left-auto !right-0 w-60 p-2 rounded-2xl shadow-blue-card flex flex-col bg-surface-0">
                    <div className="flex flex-col gap-2">
                        {navbarData.map((section) => (
                            <Link 
                                key={section.id} 
                                href={section.to}
                                className={`py-2 px-3 rounded-lg font-medium transition-all ${
                                    pathname.startsWith(section.to)
                                        ? 'text-surface-950 bg-surface-200'
                                        : 'text-surface-500 hover:text-surface-950 hover:bg-surface-200'
                                }`}
                            >
                                {section.title}
                            </Link>
                        ))}
                        <div className="border-t border-surface-200 my-2"></div>
                        <Link 
                            href="/second-pages/signup" 
                            className="py-2 px-3 rounded-lg font-medium text-surface-500 hover:text-surface-950 hover:bg-surface-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
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