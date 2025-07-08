import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const MengenalDesa = () => {
    return (
        <div className="container flex flex-col gap-24 lg:gap-40 mt-24">
            {data.map((item, index) => (
                <AnimatedContainer key={index} className="flex lg:flex-row flex-col-reverse items-center gap-10 lg:gap-28 even:flex-col-reverse lg:even:flex-row-reverse">
                    <div className="flex-1">
                        {/* <span className="badge">{item.badge}</span> */}
                        <h6 className="mt-4 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</h6>
                        <p className="mt-6 text-lg lg:text-xl text-surface-500 dark:text-white/64">
                            {item.text.map((p, j) => (
                                <span key={j}>
                                    {p}
                                    {j < item.text.length - 1 && (
                                        <>
                                            <br />
                                            <br />
                                        </>
                                    )}
                                </span>
                            ))}
                        </p>
                    </div>
                    <div className="h-[25rem] w-full lg:flex-1 relative rounded-4xl shadow-blue-card overflow-hidden">
                        <Image className="object-cover" fill sizes="auto" src={item.image} alt="Vision Mission Image" />
                    </div>
                </AnimatedContainer>
            ))}
        </div>
    );
};

export default MengenalDesa;

const data = [
    {
        title: 'Mengenal Desa Belok/Sidan',
        text: [
            'Desa Belok/sidan yang merupakan salah satu Desa yang berada di Kecamatan Petang, yang terletak + 21 Km dari Ibu Kota Kecamatan. Belok/Sidan memiliki luas wilayah 3.226 Km, yang terdiri dari 6 Desa adat dan 8 Banjar Dinas.',
        ],
        image: '/hero.png'
    },
    {
        title: 'Mengenal Desa Pelaga',
        text: [
            'Desa Pelaga termasuk Wilayah Kecamatan Petang, Kabupaten Badung yang memiliki potensi sumber daya  alam  dan sumber daya manusia maupun kelembagaan yang ditunjang oleh sarana prasarana. Desa Pelaga merupakan daerah dataran tinggi dengan luas tanah  yang ada  di Desa Pelaga  adalah 3.545,204 Ha, dengan ketinggian  700– 1.100 Meter.',
        ],
        image: '/hero.png'
    }
];
