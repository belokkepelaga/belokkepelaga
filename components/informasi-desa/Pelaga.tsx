'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import QuotationIcon from '@/components/icons/quatation.svg'
import CountUp from 'react-countup';
import { FaMale, FaFemale } from 'react-icons/fa';

const Pelaga = () => {
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0">
            <div className="container relative">
                <div className='mt-24 lg:mt-64 pt-10'>
                    {/* <div className="icon-box">
                        <QuotationIcon />
                    </div> */}
                    <h1 className="mt-10 text-3xl lg:text-5xl font-semibold max-w-md mx-auto text-center text-surface-950 dark:text-surface-0 leading-tight">
                        Desa Pelaga
                    </h1>
                    <p className="px-6 mt-6 max-w-xl mx-auto text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">
                        Desa Pelaga memiliki kondisi alam yang sejuk dan lingkungan yang masih asri. Desa ini menyuguhkan suasana khas pegunungan dengan sumber daya alam yang melimpah.
                    </p>
                </div>
                <div className="max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem)] mx-auto mt-16 flex flex-wrap gap-6">
                    {stats.map((item, index) => (
                        <AnimatedContainer key={item.label} delay={index * 100} className="flex flex-col items-center justify-center gap-4 rounded-3xl p-7 flex-1 shadow-stroke dark:shadow-none border-0 dark:border dark:border-white/12">
                            <span className="text-4xl font-semibold text-surface-950 dark:text-surface-0">
                                <CountUp end={item.value} decimals={item.label.includes('(per km²)') ? 2 : 0} duration={2.75} scrollSpyOnce={true} />
                            </span>
                            <span className="text-surface-500 dark:text-white/64 text-center">{item.label}</span>
                        </AnimatedContainer>
                    ))}
                    <AnimatedContainer delay={300} className="flex flex-col items-center justify-center gap-4 rounded-3xl p-7 flex-1 shadow-stroke dark:shadow-none border-0 dark:border dark:border-white/12">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                <FaMale size={24} />
                                <span className="text-4xl font-semibold text-surface-950 dark:text-surface-0">
                                    <CountUp end={3582} duration={2.75} scrollSpyOnce={true} />
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaFemale size={24} />
                                <span className="text-4xl font-semibold text-surface-950 dark:text-surface-0">
                                    <CountUp end={3371} duration={2.75} scrollSpyOnce={true} />
                                </span>
                            </div>
                        </div>
                        <span className="text-surface-500 dark:text-white/64 text-center">Penduduk Laki-Laki dan Perempuan</span>
                    </AnimatedContainer>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Pelaga;

const stats = [
    {
        label: 'Jumlah KK',
        value: 2004
    },
    {
        label: 'Jumlah Penduduk',
        value: 6899
    },
    {
        label: 'Penduduk (per km²)',
        value: 175.68
    },
];
