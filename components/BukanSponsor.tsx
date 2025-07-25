import { cn } from '@/lib/utils';
import React from 'react';
import DirektoratPKM from '@/components/icons/bukan-sponsor/direktorat-pkm.svg'
import DiktisaintekBerdampak from '@/components/icons/bukan-sponsor/diktisaintek-berdampak.svg'
import Sinarmas from '@/components/icons/bukan-sponsor/sinarmas.svg'
import WonderfulIndonesia from '@/components/icons/bukan-sponsor/wonderful-indonesia.svg'
import Jadesta from '@/components/icons/bukan-sponsor/jadesta.svg'
import JED from '@/components/icons/bukan-sponsor/jed.svg'
import Wisnu from '@/components/icons/bukan-sponsor/wisnu.svg'
import Pepsodent from '@/components/icons/bukan-sponsor/pepsodent.svg'
import Indofood from '@/components/icons/bukan-sponsor/indofood.svg'
import WIKA from '@/components/icons/bukan-sponsor/wika.svg'
import Medion from '@/components/icons/bukan-sponsor/medion.svg'
import TMC from '@/components/icons/bukan-sponsor/tmc.svg'
import SambalSS from '@/components/icons/bukan-sponsor/sambal-ss.svg'
import Garudafood from '@/components/icons/bukan-sponsor/garudafood.svg'

const BukanSponsorData = [
    {
        logo: DirektoratPKM,
    },
    {
        logo: DiktisaintekBerdampak,
    },
    {
        logo: Sinarmas,
    },
    {
        logo: Pepsodent,
    },
    {
        logo: Garudafood,
    },
    {
        logo: WIKA,
    },
    {
        logo: Medion,
    },
    {
        logo: TMC,
    },
    {
        logo: SambalSS,
    },
    // {
    //     logo: Jadesta,
    // },
    {
        logo: JED,
    },
    // {
    //     logo: Wisnu,
    // }
];

type BukanSponsorProps = {
    iconClass?: string;
    labelClass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const BukanSponsor: React.FC<BukanSponsorProps> = ({ className, iconClass, labelClass, ...props }) => {
    return (
        <div className={cn('w-full flex flex-nowrap gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)] ', className)} {...props}>
            {Array(2)
                .fill(null)
                .map((_, i) => (
                    <div key={i} className="flex flex-nowrap items-center justify-center md:justify-start animate-infinite-scroll">
                        {BukanSponsorData.map((item, j) => (
                            <div key={j} className="w-44 flex items-center flex-nowrap justify-center h-auto gap-4">
                                <item.logo className={cn('fill-white/56 [&_path]:fill-white/56', iconClass)} />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default BukanSponsor;
