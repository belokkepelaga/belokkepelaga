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
                Banjar Dinas Belok/Sidan
              </h3>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Banjar Dinas Penikit</li>
                <li>Banjar Dinas Sidan</li>
                <li>Banjar Dinas Selantang</li>
                <li>Banjar Dinas Belok</li>
                <li>Banjar Dinas Lawak</li>
                <li>Banjar Dinas Bon</li>
                <li>Banjar Dinas Jempanang</li>
                <li>Banjar Dinas Sekar Mukti</li>
                <li>Banjar Dinas Sidan Kawan</li>
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
