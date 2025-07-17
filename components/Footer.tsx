import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import CirclePattern from './CirclePattern';

type FooterProps = {
    image?: string;
    transparent?: boolean;
    noContainer?: boolean;
};

const Footer: React.FC<React.HTMLAttributes<HTMLElement> & FooterProps> = ({ className, image, transparent = false, noContainer, children, ...props }) => {
    return (
        <AnimatedContainer>
            <footer className="w-full max-w-full" {...props}>
                <div className={cn('w-full px-5 pt-2 lg:pt-4 pb-4 overflow-hidden relative', image || transparent ? 'shadow-none' : 'bg-main-gradient-to-left shadow-black-card', className)}>
                    {children}
                    {image && !transparent ? (
                        <>
                            <div className="absolute z-1 inset-0 bg-footer-overlay-horizontal" />
                            <Image className="object-cover -z-2" fill sizes="auto" src={image} alt="Footer Image" />
                        </>
                    ) : !transparent ? (
                        <CirclePattern className="absolute -bottom-12 opacity-50 translate-y-1/2 w-[50rem] lg:w-[80rem] -translate-x-1/2 left-1/2" />
                    ) : null}
                    <div className="max-w-[80rem] mx-auto flex lg:flex-row flex-col">
                        <div className="flex-1 flex flex-col justify-between gap-4 py-4 lg:px-0 px-4">
                            <div className="flex items-center gap-6">
                                <Link href="https://ugm.ac.id/" target="_blank">
                                    <Image width={64} height={64} src="/logo/footer/lambang-ugm.svg" alt="Lambang UGM" />
                                </Link>
                                <Link href="https://kkn.ugm.ac.id/" target="_blank">
                                    <Image width={64} height={64} src="/logo/footer/logo-kkn.svg" alt="Logo KKN" />
                                </Link>
                                <Link href="https://instagram.com/belokkepelaga" target="_blank">
                                    <Image width={64} height={64} src="/logo/footer/logo-tim.svg" alt="Logo Tim" />
                                </Link>
                            </div>
                            <div className="hidden lg:flex items-center gap-2">
                                {socials.map((item, index) => (
                                    <Link key={index} href={item.link} className="h-8 px-4 flex items-center justify-center rounded-full backdrop-blur-sm text-surface-0 border border-white/12 bg-white/4 hover:bg-white/12 transition-all">
                                        <i className={`${item.icon} text-sm`}></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-wrap items-start justify-between gap-x-28 gap-y-7">
                            {footerNavsData.map((data, index) => (
                                <div key={index} className="p-2 flex flex-col gap-2">
                                    <div className="flex flex-col gap-2">
                                        {data.items.map((item, j) => (
                                            <Link key={j} href={item.to} className="px-3 py-2 w-fit text-white/72 hover:text-white hover:bg-white/10 rounded-full transition-all">
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:hidden flex items-center justify-center gap-2 mt-20">
                        {socials.map((item, index) => (
                            <Link key={index} href={item.link} className="h-8 px-4 flex items-center justify-center rounded-full backdrop-blur-sm text-surface-0 border border-white/12 bg-white/4 hover:bg-white/12 transition-all">
                                <i className={`${item.icon} text-sm`}></i>
                            </Link>
                        ))}
                    </div>
                    <div className="w-full lg:w-[calc(100%-5rem)] mt-8 lg:mt-16 pt-4 flex items-center justify-center text-surface-0 border-t border-dashed border-white/10">© KKN-PPM UGM Belok ke Pelaga {new Date().getFullYear()}</div>
                </div>
            </footer>
        </AnimatedContainer>
    );
};

export default Footer;

const socials = [
    {
        icon: 'pi pi-instagram',
        link: 'https://instagram.com/belokkepelaga'
    },
    {
        icon: 'pi pi-tiktok',
        link: 'https://www.tiktok.com/@belokkepelaga?_t=ZS-8xjdAbk7ixF&_r=1'
    },
    {
        icon: 'pi pi-envelope',
        link: 'mailto:belokkepelaga@gmail.com '
    }
];

const footerNavsData = [
    {
        items: [
            {
                label: 'Beranda',
                to: '/'
            },
            {
                label: 'Artikel',
                to: '/artikel'
            },
            {
                label: 'Pariwisata',
                to: '/pariwisata'
            },
            {
                label: 'Agrikultur',
                to: '/agrikultur'
            },
            {
                label: 'Informasi Desa',
                to: '/informasi-desa'
            }
        ]
    }
];
