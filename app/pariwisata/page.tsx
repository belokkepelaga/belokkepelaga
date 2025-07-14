import React from 'react'
import MapSection from '@/components/MapSection'
import PdfSection from '@/components/PdfSection'
import PetaPelaga from '@/components/PetaPelaga'
import PetaSidan from '@/components/PetaSidan'

const Pariwisata = () => {
    return (
        <div className='mt-10'>
            <MapSection />
            <PdfSection />
            <PetaPelaga />
            <PetaSidan />
        </div>
    )
}

export default Pariwisata
