
import AnimatedContainer from '@/components/AnimatedContainer';
import ScaleCarousel, { ScaleCarouselItem } from '@/components/carousels/ScaleCarousel';
import Image from 'next/image';

interface ImageCarouselProps {
    images: string[];
    showArrows?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, showArrows }) => {
    if (!images || images.length === 0) {
        return null;
    }

    if (images.length === 1) {
        return (
            <div className="h-full w-full relative rounded-3xl overflow-hidden">
                <Image className="object-cover" fill sizes="auto" src={images[0]} alt="Display Image" />
            </div>
        );
    }

    return (
        <ScaleCarousel showArrows={showArrows} height="100%" size="60%" scale={0.12} options={{ align: 'center', loop: true }}>
            {images.map((src, i) => (
                <ScaleCarouselItem key={i} className="h-full">
                    <AnimatedContainer delay={i * 150} className="relative rounded-3xl overflow-hidden h-full w-full">
                        <Image className="object-cover" fill sizes="auto" src={src} alt={`Carousel Image ${i + 1}`} />
                    </AnimatedContainer>
                </ScaleCarouselItem>
            ))}
        </ScaleCarousel>
    );
};

export default ImageCarousel;
