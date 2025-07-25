import React from "react";
import { FaMale, FaFemale } from "react-icons/fa";

const Demografi = () => {
  return (
  <section className=" p-10 bg-[#F1EBDB] rounded-xl text-black">
     <h1 className="text-3xl font-bold text-center mb-4 text-[#09371F]">
        Desa Belok/Sidan
      </h1>
  <h2 className="text-2xl font-bold mb-6 text-center md:text-left md:ml-20">Demografi</h2>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-screen-xl mx-auto px-4">
    <div className="bg-[#CCCCB8] p-6 rounded-xl text-center">
      <h3 className="text-lg font-bold">Jumlah KK</h3>
      <p className="text-3xl font-extralight mt-2">1631</p>
    </div>
    <div className="bg-[#CCCCB8] p-6 rounded-xl text-center">
      <h3 className="text-lg font-bold">Jumlah Penduduk</h3>
      <p className="text-3xl font-light mt-2">5742</p>
    </div>
    <div className="bg-[#CCCCB8] p-6 rounded-xl text-center">
      <h3 className="text-lg font-bold mt-2">
        Kepadatan Penduduk (per km<sup>2</sup>)
      </h3>
      <p className="text-3xl font-light mt-2">175,81</p>
    </div>
  </div>

  <div className="bg-[#CCCCB8] p-6 rounded-xl text-center max-w-screen-xl mx-auto px-4">
    <h3 className="text-lg font-bold mb-4">
      Klasifikasi Penduduk berdasarkan Gender
    </h3>
    <div className="flex justify-center gap-10 text-2xl font-light flex-wrap">
      <div className="flex items-center gap-3">
        <FaMale className="text-[#b59e5f]" size={32} />
        <span>2952</span>
      </div>
      <div className="flex items-center gap-3">
        <FaFemale className="text-[#b59e5f]" size={32} />
        <span>2790</span>
      </div>
    </div>
  </div>
</section>

  );
};

export default Demografi;
