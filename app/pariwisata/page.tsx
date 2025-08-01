import React from 'react'
import dynamic from 'next/dynamic'
import MapSection from '@/components/MapSection'
import PdfSection from '@/components/PdfSection'
import Footer from '@/components/Footer';

const PetaSidan = dynamic(() => import('@/components/PetaBelokSidan'), { ssr: false })
const PetaPelaga = dynamic(() => import('@/components/PetaPelaga'), { ssr: false })

const Pariwisata = () => {
    return (
    <div className="bg-[#FEFCEC] ">
            {/* <MapSection /> */}
            <PetaSidan />
            <PetaPelaga />
            <MapSection />
            <PdfSection />
            <Footer />
        </div>
    )
}

export default Pariwisata
