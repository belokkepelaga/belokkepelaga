import React from 'react'
// import RagamTanaman from '@/components/RagamTanaman';
import TanamanUnggulan from '@/components/TanamanUnggulan';
import TernakDashboard from '@/components/DashboardTernakSidan';
import DashboardTernakPelaga from '@/components/DashboradTernakPelaga';
import Footer from '@/components/Footer';

const Agrikultur = () => {
  return (
    <div className=" bg-[#fefcec]">
      {/* <RagamTanaman /> */}
      <TanamanUnggulan />
      <TernakDashboard />
      <DashboardTernakPelaga />
      <Footer />
    </div>
  );    
}

export default Agrikultur;
