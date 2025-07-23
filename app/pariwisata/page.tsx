import React from 'react'
import MapSection from '@/components/MapSection'
import PetaSidan from '@/components/PetaBelokSidan'
import PdfSection from '@/components/PdfSection'
import PetaPelaga from '@/components/PetaPelaga'

const Pariwisata = () => {
    return (
        <div className='mt-10'>
            {/* <MapSection /> */}
            <PetaSidan />
            <MapSection />
            <PdfSection />
            <PetaPelaga />
        </div>
    )
}

export default Pariwisata
