'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { X, Menu } from 'lucide-react'; // Gunakan icon dari lucide-react

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-[99999] border-b border-black/10 bg-white/80 backdrop-blur-md', className)} {...props}>
      <div className="container flex items-center justify-between py-4 max-h-[75px]">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-3">
          {navbarData.map((section) => (
            <li key={section.id}>
              <Link
                href={section.to}
                className={`inline-flex items-center gap-2 rounded-full py-2 px-4 select-none transition-all cursor-pointer text-base font-medium border ${
                  isLinkActive(section.to)
                    ? 'bg-black text-white border-black'
                    : 'text-black/70 border-transparent hover:bg-gray-200/80 hover:text-black'
                }`}
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Full-Screen Pop-up Menu with Red Background */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg--600 z-[999999] p-6 flex flex-col gap-4 animate-slide-in">
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button onClick={() => setMobileOpen(false)} className="text-white hover:text-black">
              <X className="w-7 h-7" />
            </button>
          </div>

          {navbarData.map((section) => (
            <Link
              key={section.id}
              href={section.to}
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-2 rounded-lg font-semibold text-lg transition-all ${
                isLinkActive(section.to)
                  ? 'text-black bg-gray-200'
                  : 'text-white hover:text-black hover:bg-gray-100'
              }`}
            >
              {section.title}
            </Link>
          ))}

          <div className="border-t border-gray-200 my-2" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// Navigation items
const navbarData = [
  { id: 'beranda', title: 'Beranda', to: '/' },
  { id: 'artikel', title: 'Artikel', to: '/artikel' },
  { id: 'pariwisata', title: 'Pariwisata', to: '/pariwisata' },
  { id: 'agrikultur', title: 'Agrikultur', to: '/agrikultur' },
  { id: 'informasi-desa', title: 'Informasi Desa', to: '/informasi-desa' }
];
