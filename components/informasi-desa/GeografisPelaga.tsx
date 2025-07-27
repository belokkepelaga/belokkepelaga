import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const GeografisPelaga = () => {
    return (
        <div className="container mt-40 flex items-center lg:flex-row flex-col-reverse gap-6">
            <div className="flex-1 flex flex-col w-full gap-8">
                <h6 className="mt-4 text-3xl lg:text-3xl font-semibold text-surface-950 dark:text-surface-0">Geografis</h6>
                {DataPelaga.map((item, index) => (
                    <AnimatedContainer
                        key={index}
                        delay={index * 200}
                        visibleClass="!slide-in-from-top-0 slide-in-from-left-24"
                        className="p-4 lg:p-8 rounded-3xl lg:rounded-4xl flex items-start gap-6"
                    >
                        <div>
                            <div className="mt-1 text-2xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</div>
                            <p className="mt-4 flex flex-col gap-1 text-lg text-surface-600 dark:text-white/64">
                                {item.content.map((c, j) => (
                                    <span key={j}>{c}</span>
                                ))}
                            </p>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
            <AnimatedContainer visibleClass="!slide-in-from-top-0 slide-in-from-right-24" className="w-full lg:flex-1 relative h-[38rem] rounded-3xl lg:rounded-4xl overflow-hidden">
                <Image fill sizes="auto" className="object-contain " src="/informasi-desa/peta-pelaga.jpeg" alt="Peta Pelaga" />
            </AnimatedContainer>
        </div>
    );
};

export default GeografisPelaga;

const DataPelaga = [
    {
        title: 'Batas Wilayah',
        content: ['1. Batas Utara: Pucak Mangu', '2. Batas Selatan: Desa Sulangai', '3. Batas Timur: Sungai Bangkung', '4. Batas Barat: Pangkung Cengkedek']
    },
    {
        title: 'Desa Adat Pelaga',
        content: ['1. Desa Adat Kiadab', '2. Desa Adat Semanik', '3. Desa Adat Tiyingan', '4. Desa Adat Auman', '5. Desa Adat Tinggan', '6. Desa Adat Pelaga', '7. Desa Adat Nunung', '8. Desa Adat Bukian']
    }
];
