import React from 'react'
import RagamTanaman from '@/components/RagamTanaman';
import TernakDashboard from '@/components/DashboardTernakSidan';
import DashboardTernakPelaga from '@/components/DashboradTernakPelaga';
import DashboardTernakPelaga2 from '@/components/DashboardTernakPelaga2';

const Agrikultur = () => {
  return (
    <div className=" bg-[#F1EBDB]">
      <RagamTanaman />
      <TernakDashboard />
      <DashboardTernakPelaga />
      {/* <DashboardTernakPelaga2 /> */}
    </div>
  );    
}

export default Agrikultur;
