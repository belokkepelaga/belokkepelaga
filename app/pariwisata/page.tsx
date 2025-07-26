import React from 'react'
import MapSection from '@/components/MapSection'
import PetaSidan from '@/components/PetaBelokSidan'
import PdfSection from '@/components/PdfSection'
import PetaPelaga from '@/components/PetaPelaga'
import Footer from '@/components/Footer';

const Pariwisata = () => {
    return (
    <div className="bg-[#F1EBDB] ">
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
