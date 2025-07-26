import React from 'react'
import RagamTanaman from '@/components/RagamTanaman';
import TernakDashboard from '@/components/DashboardTernakSidan';
import DashboardTernakPelaga from '@/components/DashboradTernakPelaga';
import Footer from '@/components/Footer';

const Agrikultur = () => {
  return (
    <div className=" bg-white">
      <RagamTanaman />
      <TernakDashboard />
      <DashboardTernakPelaga />
      <Footer />
    </div>
  );    
}

export default Agrikultur;
