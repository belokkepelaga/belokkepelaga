'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from './Logo';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const pathname = usePathname();
    return (
        <div className={cn('sticky top-0 z-[99999] w-full bg-white', className)} {...props}>
            <nav className="flex items-center justify-between py-6 w-[calc(100%-3rem)] max-w-[1152px] mx-auto border-b border-white/10 border-dashed">
                <Link href="/">
                    <Logo />
                </Link>
                <ul className="hidden lg:flex items-center gap-3">
                    {navbarData.map((item) => (
                        <li key={item.id}>
                            <Link href={item.to} className={`inline-flex items-center gap-2 rounded-full py-1 pr-2 pl-3 select-none transition-all cursor-pointer text-black/72 hover:text-black hover:bg-black/8 hover:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02),0px_0px_0px_1px_rgba(18,18,23,0.02)] ${item.to === pathname ? '!bg-black !text-white !backdrop-blur-2xl border border-white/4 !shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]' : ''}`}>
                                <span className="text-base">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <DropdownMenu unstyled className="lg:hidden block">
                    <DropdownMenuTrigger className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-surface-0 text-surface-950">
                        <i className="pi pi-bars"></i>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="top-[calc(100%+0.5rem)] max-h-96 overflow-auto left-auto !right-0 w-60 p-2 rounded-2xl shadow-blue-card flex flex-col bg-surface-0">
                        <div className="flex flex-col ">
                            {navbarData.map((item) => (
                                <Link href={item.to} key={item.id} className="py-2 px-3 rounded-lg hover:bg-surface-200 font-medium text-surface-500 hover:text-surface-950">
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </div>
    );
};

export default Navbar;

const navbarData = [
    { id: 'beranda', title: 'Beranda', to: '/' },
    { id: 'artikel', title: 'Artikel', to: '/artikel' },
    { id: 'pariwisata', title: 'Pariwisata', to: '/pariwisata' },
    { id: 'agrikultur', title: 'Agrikultur', to: '/agrikultur' },
    { id: 'informasi-desa', title: 'Informasi Desa', to: '/informasi-desa' }
];
