import React from 'react'
import DemografiSidan from '@/components/DemografiSidan'
import GeografiSidan from '@/components/GeografiSidan' // Ubah kapitalnya
import DemografiPelaga from '@/components/DemografiPelaga'
import ProfilSidan from '@/components/ProfilBelokSidan'
const InformasiDesa = () => {
  return (
    <div>
      <DemografiSidan />
      <GeografiSidan /> {/* Gunakan dengan huruf besar */}
      <ProfilSidan />
      <DemografiPelaga />
      
    </div>
  )
}

export default InformasiDesa
