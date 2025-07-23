import React from "react";

const Geografis = () => {
  return (
    <section className="mt-10 p-10 bg-white rounded-xl text-black">
      {/* Judul tetap kiri */}
      <h2 className="text-2xl font-bold mb-6 ml-20">Geografi</h2>

      {/* Konten di tengah */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row md:gap-2 gap-2 items-start justify-center text-center flex-wrap">
          
          {/* Gambar */}
          <div className="flex justify-center">
            <img
              src="/Misi.jpeg"
              alt="Peta Belok/Sidan"
              className="object-contain"
              style={{ width: "500px", height: "500px" }}
            />
          </div>

          {/* Daftar Banjar dan Desa */}
          <div className="text-left">
            <div className="mb-6">
              <h3 className="text-green-900 font-semibold text-lg mb-2">
                Banjar Dinas Pelaga
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Dusun/Banjar Dinas Pelaga </li>
                <li>Dusun/Banjar Dinas Kiadan</li>
                <li>Dusun/Banjar Dinas Nungnung</li>
                <li>Dusun/Banjar Dinas Tinggan</li>
                <li>Dusun/Banjar Dinas Bukian</li>
                <li>Dusun/Banjar Dinas Semanik</li>
                <li>Dusun/Banjar Dinas Tiyingan</li>
                <li>Dusun/Banjar Dinas Auman</li>
                <li>Dusun/Banjar Dinas Bukit Munduk Tiying</li>
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
