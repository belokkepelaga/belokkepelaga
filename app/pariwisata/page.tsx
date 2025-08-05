import React from 'react'
import dynamic from 'next/dynamic'
const MapSection = dynamic(() => import('@/components/MapSection'), { ssr: false })
const PdfSection = dynamic(() => import('@/components/PdfSection'), { ssr: false })
import Footer from '@/components/Footer';

const BelokSidan = dynamic(() => import('@/components/pariwisata/BelokSidan'), { ssr: false });

const PetaSidan = dynamic(() => import('@/components/PetaBelokSidan'), { ssr: false })
const PetaPelaga = dynamic(() => import('@/components/PetaPelaga'), { ssr: false })

const Pariwisata = () => {
    return (
        <div>
            {/* <MapSection /> */}
            <BelokSidan />
            {/* <PetaSidan /> */}
            {/* <PetaPelaga /> */}
            <MapSection />
            <PdfSection />
            <Footer />
        </div>
    )
}

export default Pariwisata
