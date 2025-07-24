import React from 'react'
import DemografiSidan from '@/components/DemografiSidan'
import GeografiSidan from '@/components/GeografiSidan'
import DemografiPelaga from '@/components/DemografiPelaga'
import ProfilSidan from '@/components/ProfilBelokSidan'
import GeografiPelaga from '@/components/GeografiPelaga'
import ProfilPelaga from '@/components/ProfilPelaga'

const InformasiDesa = () => {
  return (
    <div className="bg-[#F1EBDB]">
      <DemografiSidan />
      <GeografiSidan />
      <ProfilSidan />
      <DemografiPelaga />
      <GeografiPelaga />
      <ProfilPelaga />
    </div>
  )
}

export default InformasiDesa
