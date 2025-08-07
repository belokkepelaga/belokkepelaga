import React from 'react'
import dynamic from 'next/dynamic'
const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: false })
const Booklet = dynamic(() => import('@/components/pariwisata/Booklet'), { ssr: false })
import Footer from '@/components/Footer';

const BelokSidan = dynamic(() => import('@/components/pariwisata/BelokSidan'), { ssr: false });

const PetaSidan = dynamic(() => import('@/components/PetaBelokSidan'), { ssr: false })
const PetaPelaga = dynamic(() => import('@/components/PetaPelaga'), { ssr: false })

const Pariwisata = () => {
    const imageUrls = Array.from({ length: 24 }, (_, i) => `/booklet/booklet-pelaga_page-${String(i + 1).padStart(4, '0')}.jpg`);

    return (
        <div>
            <BelokSidan />
            {/* <PetaSidan /> */}
            {/* <PetaPelaga /> */}
            <MapSection />
            <Booklet imageUrls={imageUrls} />
            <Footer />
        </div>
    )
}

export default Pariwisata
