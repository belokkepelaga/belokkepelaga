import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const FotoPengabdianData = [
    {
        image: '/foto-pengabdian/p1.webp',
    },
    {
        image: '/foto-pengabdian/p2.webp',
    },
    {
        image: '/foto-pengabdian/p3.webp',
    },
    {
        image: '/foto-pengabdian/p4.webp',
    },
    {
        image: '/foto-pengabdian/p5.webp',
    },
    {
        image: '/foto-pengabdian/p6.webp',
    },
    {
        image: '/foto-pengabdian/p7.webp',
    },
];

type FotoPengabdianProps = {
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const FotoPengabdian: React.FC<FotoPengabdianProps> = ({ className, ...props }) => {
    return (
        <div className={cn('relative', className)} {...props}>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-24">Potret Pengabdian</h1>
            <p className="mt-6 mx-auto max-w-md text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">Kegiatan kami selama mengabdi di Desa Belok/Sidan dan Desa Pelaga</p>
            <div className={cn('w-full flex flex-nowrap gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)] mt-24 lg:mt-14')}>
                {Array(2)
                    .fill(null)
                    .map((_, i) => (
                        <div key={i} className="flex flex-nowrap items-center justify-center md:justify-start animate-infinite-scroll">
                            {FotoPengabdianData.map((item, j) => (
                                <div key={j} className="w-[12.5rem] h-[18.75rem] mx-2 rounded-[0.625rem] overflow-hidden">
                                    <Image src={item.image} alt={`Image ${j + 1}`} width={200} height={300} className="object-cover w-full h-full" />
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FotoPengabdian;
