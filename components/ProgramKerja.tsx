import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const programKerjaData = [
    {
        title: 'Desa Hijau dan Berkelanjutan',
        description: 'Mengoptimalkan Ruang Terbuka Hijau untuk mendukung inovasi pertanian dan pariwisata.'
    },
    {
        title: 'Ketahanan Berkelanjutan',
        description: 'Menjaga keseimbangan desa untuk menghadapi bencana dan pemulihan ekonomi.'
    },
    {
        title: 'Transformasi Digital untuk Desa Wisata Berkelanjutan',
        description: 'Menguatkan UMKM dan ekonomi kreatif melalui smart branding.'
    },
    {
        title: 'Smart Eco-Tourism',
        description: 'Melakukan revitalisasi infrastruktur pariwisata berkelanjutan.'
    },
    {
        title: 'HortiCreative',
        description: 'Membuat diversifikasi produk pertanian guna mendukung desa wisata berbasis agrotourism.'
    },
    {
        title: 'Peningkatan Kesejahteraan Ternak',
        description: 'Mewujudkan rencana peternakan berkelanjutan dan produktif.'
    },
    {
        title: 'Desa Sehat Mandiri',
        description: 'Melakukan pengecekan kesehatan untuk meningkatkan kesehatan masyarakat.'
    }
];

const ProgramKerja: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container flex lg:flex-row flex-col gap-18 mt-6 lg:mt-16', className)} {...props}>
            <AnimatedContainer visibleClass="!slide-in-from-top-0 slide-in-from-left-24" className="w-full lg:flex-1 h-[30rem] lg:h-[49rem] rounded-4xl overflow-hidden shadow-blue-card relative">
                <div className="absolute -z-1 inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]" />
                <Image fill sizes="auto" className="object-cover -z-2" src="/Misi.jpeg" alt="Program Kerja Image" />
            </AnimatedContainer>
            <div className="flex-1">
                <h1 className="text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0">Program Kerja Kami</h1>
                <ul className="flex flex-col gap-6 mt-10">
                    {programKerjaData.map((item, index) => (
                        <AnimatedContainer key={index} delay={index * 50}>
                            <li className="flex flex-col">
                                <h6 className="text-2xl font-medium text-surface-950 dark:text-surface-0">{item.title}</h6>
                                <p className="text-lg text-surface-500 dark:text-white/64">{item.description}</p>
                            </li>
                        </AnimatedContainer>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProgramKerja;
