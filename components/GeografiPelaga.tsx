import React from "react";

const Geografis = () => {
  return (
    <section className=" p-10 bg-[#F1EBDB] rounded-xl text-black">
      {/* Judul tetap kiri */}
  <h2 className="text-2xl font-bold text-center md:text-left md:ml-20">Geografis</h2>

      {/* Konten di tengah */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:gap-2 gap-2 items-start justify-center text-center flex-wrap">
          
          {/* Gambar */}
          <div className="flex justify-center">
            <img
              src="/banjardipelaga.png"
              alt="Peta Belok/Sidan"
              className="object-contain"
              style={{ width: "500px", height: "400px" }}
            />
          </div>

          {/* Daftar Banjar dan Desa */}
          <div className="text-left">
            <div className="mb-6">
              <h3 className="text-green-900 font-semibold text-lg mb-2">
                Batas Wilayah
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Batas Utara: Pucak Mangu </li>
                <li>Batas Selatan: Sulangai</li>
                <li>Batas Timur: Sungai Bangkung</li>
                <li>Batas Barat: Pangkung Cengkedek</li>
              </ol>
            </div>

            <div>
              <h3 className="text-green-900 font-semibold text-lg mb-2">
                Desa Adat Pelaga
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Desa Adat Kiadan</li>
                <li>Desa Adat Semanik</li>
                <li>Desa Adat Tiyingan</li>
                <li>Desa Adat Auman</li>
                <li>Desa Adat Tinggan</li>
                <li>Desa Adat Pelaga </li>
                <li>Desa Adat Nunung</li>
                <li>Desa Adat Bukian</li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Geografis;
