import Image from "next/image";

export default function MisiDanAksi() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-20 md:px-40 py-10 md:py-20">
      {/* Gambar Kegiatan */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/Misi.jpeg"
          alt="Foto Kegiatan Masyarakat"
          width={400}
          height={200}
          className="shadow-lg object-cover rounded-4xl"
        />
      </div>

      {/* Konten Misi dan Aksi */}
      <div className="w-full md:w-1/2 md:text-left">
        <h2 className="text-[#1C5838] font-bold text-3xl mb-4 font-sans">Misi dan Aksi</h2>
        <ul className="space-y-4 text-gray-800 list-disc text-xl list-inside md:list-outside">
          <li>
            <strong>Desa Hijau dan Berkelanjutan:</strong> Optimalisasi Ruang Terbuka Hijau dan Waste Management untuk Mendukung Inovasi Pertanian dan Pariwisata
          </li>
          <li>
            <strong>Ketahanan Berkelanjutan:</strong> Menjaga Keseimbangan Desa untuk Menghadapi Bencana dan Pemulihan Ekonomi
          </li>
          <li>
            <strong>Transformasi Digital untuk Pengembangan Desa Wisata Berkelanjutan:</strong> Penguatan UMKM dan Ekonomi Kreatif Melalui Smart Branding
          </li>
          <li>
            <strong>Smart Eco-Tourism:</strong> Revitalisasi dan Inovasi Infrastruktur Pariwisata Berkelanjutan
          </li>
          <li>
            <strong>HortiCreative:</strong> Inovasi dan Diversifikasi Produk Pertanian Guna Mendukung Desa Wisata Berbasis Agrotourism
          </li>
          <li>
            <strong>Peningkatan Kesejahteraan Ternak:</strong> Fondasi Peternakan Berkelanjutan dan Produktif
          </li>
          <li>
            <strong>Desa Sehat Mandiri:</strong> Aksi Preventif dan Pengecekan Kesehatan untuk Membangun Kesehatan Masyarakat
          </li>
        </ul>
      </div>
    </div>
  );
}
