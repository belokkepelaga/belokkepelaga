import React from 'react'
import MapSection from '@/components/MapSection'
import PetaSidan from '@/components/PetaBelokSidan'
import PdfSection from '@/components/PdfSection'
import PetaPelaga from '@/components/PetaPelaga'

const Pariwisata = () => {
    return (
    <div className="bg-[#F1EBDB] ">
            {/* <MapSection /> */}
            <PetaSidan />
            <MapSection />
            <PdfSection />
            <PetaPelaga />
        </div>
    )
}

export default Pariwisata
