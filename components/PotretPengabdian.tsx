import AnimatedContainer from '@/components/AnimatedContainer';
import ScaleCarousel, { ScaleCarouselItem } from '@/components/carousels/ScaleCarousel';
import Image from 'next/image';

const PotretPengabdian = () => {
    return (
        <div className="mt-24">
            <h1 className="px-4 text-3xl lg:text-6xl font-semibold text-center mx-auto max-w-2xl leading-tight">
                Potret Pengabdian
            </h1>
            <p className="px-4 text-lg mt-6 text-surface-500 text-center mx-auto max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-14 ">
                <ScaleCarousel height="34rem" size="0%" scale={0.12} options={{ align: 'center', loop: true }}>
                    {galleryData.map((item, i) => (
                        <ScaleCarouselItem key={i} className="min-w-[24rem] ">
                            <AnimatedContainer delay={i * 150} className="h-full w-[23rem] relative rounded-3xl overflow-hidden">
                                <Image className="object-cover" fill sizes="auto" src={item} alt="Destination Gallery Image" />
                            </AnimatedContainer>
                        </ScaleCarouselItem>
                    ))}
                </ScaleCarousel>
            </div>
        </div>
    );
};

export default PotretPengabdian;

const galleryData = [
    '/potret-pengabdian/gua-maria-1.jpeg',
    '/potret-pengabdian/nungnung-1.jpeg',
    '/potret-pengabdian/nungnung-2.jpeg',
    '/potret-pengabdian/tukad-bangkung-2.jpeg',
    '/potret-pengabdian/upacara-1.jpeg',
    '/potret-pengabdian/gua-maria-2.jpeg',
    '/potret-pengabdian/tukad-bangkung-1.jpeg'
];
