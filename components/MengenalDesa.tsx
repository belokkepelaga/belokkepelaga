import AnimatedContainer from '@/components/AnimatedContainer';
import ImageCarousel from './carousels/ImageCarousel';

const MengenalDesa = () => {
    return (
        <div className="container flex flex-col gap-24 lg:gap-40 mt-24">
            {data.map((item, index) => (
                <AnimatedContainer key={index} className="flex lg:flex-row flex-col-reverse items-center gap-10 lg:gap-28 even:flex-col-reverse lg:even:flex-row-reverse">
                    <div className="flex-1">
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
                    <div className="h-[32rem] w-full lg:w-[30rem] relative overflow-visible">
                        <ImageCarousel images={item.images} showArrows />
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
            'Desa Belok/Sidan dikelilingi oleh lahan pertanian, kebun kopi dan jeruk, serta kawasan hutan yang masih asri. Aktivitas masyarakat yang beragam seperti bertani, beternak menciptakan suasana desa yang dinamis dan kaya nilai budaya.',
        ],
        images: ['/potret-pengabdian/gua-maria-1.jpeg', '/potret-pengabdian/nungnung-1.jpeg', '/potret-pengabdian/gua-maria-2.jpeg']
    },
    {
        title: 'Mengenal Desa Pelaga',
        text: [
            'Desa Pelaga terletak di dataran tinggi dengan ketinggian 700 hingga 1100 mdpl. Desa Pelaga memiliki kondisi alam yang sejuk dan lingkungan yang masih asri. Desa ini menyuguhkan suasana khas pegunungan dengan sumber daya alam yang melimpah.',
        ],
        images: ['/potret-pengabdian/upacara-1.jpeg', '/potret-pengabdian/tukad-bangkung-1.jpeg', '/potret-pengabdian/gua-maria-2.jpeg']
    }
];
