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
              src="/Misi.jpeg"
              alt="Peta Belok/Sidan"
              className="object-contain"
              style={{ width: "500px", height: "450px" }}
            />
          </div>

          {/* Daftar Banjar dan Desa */}
          <div className="text-left">
            <div className="mb-6">
              <h3 className="text-green-900 font-semibold text-lg mb-2">
                Batas Wilayah
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Batas Utara: Desa Catur, Kabupaten Bangli dan Desa Tambakan, Kabupaten Buleleng</li>
                <li>Batas Selatan: Desa Petang</li>
                <li>Batas Timur: Desa Mangani, Kabupaten Bangli</li>
                <li>Batas Barat: Desa Pelaga</li>
              </ol>
            </div>

            <div>
              <h3 className="text-green-900 font-semibold text-lg mb-2">
                Desa Adat Belok/Sidan
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Desa Adat Belok</li>
                <li>Desa Adat Awak</li>
                <li>Desa Adat Bon</li>
                <li>Desa Adat Jempanang</li>
                <li>Desa Adat Sekarmukti</li>
                <li>Desa Adat Sidan</li>
              </ol>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Geografis;
