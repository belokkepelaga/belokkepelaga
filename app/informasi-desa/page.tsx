import React from 'react'
import BelokSidan from '@/components/informasi-desa/BelokSidan'
import GeografisBelokSidan from '@/components/informasi-desa/GeografisBelokSidan'
import AsalUsulBelokSidan from '@/components/informasi-desa/AsalUsulBelokSidan'
import Pelaga from '@/components/informasi-desa/Pelaga'
import GeografisPelaga from '@/components/informasi-desa/GeografisPelaga'
import AsalUsulPelaga from '@/components/informasi-desa/AsalUsulPelaga'
import Footer from '@/components/Footer'

const InformasiDesa = () => {
    return (
        <div className='bg-[#FEFCEC]'>
            <BelokSidan />
            <GeografisBelokSidan />
            <AsalUsulBelokSidan />
            <Pelaga />
            <GeografisPelaga />
            <AsalUsulPelaga />
            <Footer className="mt-24 lg:mt-64" />
        </div>
    )
}

export default InformasiDesa
