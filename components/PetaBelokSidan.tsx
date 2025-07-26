'use client'

import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customPin from '@/public/Location.png';
import { GeoJSON } from 'react-leaflet';
import { FeatureCollection } from 'geojson';
import "./App.css";

// Icon fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const customIcon = new L.Icon({
  iconUrl: customPin.src || '/Location.jpg',
  iconSize: [30, 40], // ubah sesuai ukuran pin yang diinginkan
  iconAnchor: [15, 40], // titik dasar icon (bawah tengah)
  popupAnchor: [0, -40],
});


const wilayahGeojson: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Kecamatan Petang" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [115.200, -8.260],
          [115.220, -8.270],
          [115.210, -8.280],
          [115.190, -8.275],
          [115.200, -8.260]
        ]]
      }
    }
  ]
};


interface Wisata {
  name: string;
  coords: [number, number];
  image: string;
  desc: string;
}

const dataWisata: Wisata[] = [
{
  name: "Bali Beans Plantation",
  coords: [-8.255907621640755, 115.24510950837026],
  image: "/balibeans.jpeg",
  desc: `Bali Beans Plantation Desa Belok/Sidan merupakan atraksi wisata edukasi kopi yang terletak di Desa Belok/Sidan, tepatnya di Banjar Lawak, Kecamatan Petang, Badung. Bali Beans Plantation adalah usaha keluarga sejak tahun 1985 yang sekarang dikelola oleh anaknya. 

Kebun kopi di Bali Beans Plantation seluas 4 hektar ini ditanami kopi jenis Arabika. Selain itu, Bali Beans juga menjual kopi hasil produksinya ke berbagai kafe di daerah Kintamani, Karangasem, dan wilayah Bali lainnya. 

Bali Beans Plantation menawarkan pengalaman “coffee journey” yang lengkap, mulai dari pengenalan kebun kopi, proses panen biji, pengolahan manual, hingga roasting dan cupping kopi dengan cita rasa khas Arabika pegunungan. 

Wisatawan dapat mengikuti tur kebun kopi, pelatihan roasting manual, belajar teknik seduh kopi tradisional, serta menikmati kopi sambil menyaksikan pemandangan perbukitan yang asri. Biaya untuk tour kebun adalah Rp170.000/orang dan Rp50.000/orang untuk sesi cupping kopi. 

Area plantation dilengkapi dengan jalur kebun, tempat duduk outdoor, serta area edukasi yang nyaman untuk kegiatan studi lapangan dan wisata keluarga. Bali Beans Plantation menjadi salah satu atraksi unggulan Desa Wisata Belok/Sidan dalam mengangkat wisata agro-edukasi kopi berkelanjutan dan pemberdayaan petani lokal.`,
},
   {
  name: "Badung Agro Techno Park",
  coords: [-8.254372188195106, 115.1904433961847],
  image: "/agrotechno.jpg",
  desc: `Badung Agro Techno Park adalah destinasi wisata edukasi di Desa Belok/Sidan, 
Kecamatan Petang, Kabupaten Badung, yang menggabungkan pertanian modern dengan teknologi terkini. 
Dikelola oleh Pemkab Badung, dibangun sejak 2018 dan mulai beroperasi pada 2023 karena terhalang Covid-19. 
Tempat ini bertujuan memperkenalkan dan mengedukasi masyarakat tentang teknologi pertanian ramah lingkungan 
dan berkelanjutan, serta berfungsi sebagai pusat penelitian dan pengembangan pertanian.

Pengunjung dapat menikmati berbagai fasilitas: kafe, lahan pertanian modern dengan teknologi seperti irigasi otomatis,
hidroponik, dan vertikultur, serta greenhouse untuk tanaman sayur dan buah yang menggunakan metode organik dan teknologi modern.
Tersedia pula spot swafoto. Komitmen keberlanjutan mencakup penggunaan energi terbarukan, pengelolaan air efisien,
dan pengurangan limbah—menjadikannya contoh nyata upaya konservasi lingkungan.`,
},

  {
    name: "Bali Eco Villa",
    coords: [-8.296211943338827, 115.23331414140532],
    image: "/balieco.jpg",
    desc: `Bali Eco Village terletak di Desa Belok/Sidan, Kecamatan Petang, Badung, menjadi 
atraksi wisata berbasis ekowisata dan retreat alam di kawasan pegunungan dengan udara 
sejuk dan pemandangan hutan tropis. Atraksi ini dikelola oleh komunitas Bali Eco 
Village bersama Pokdarwis, mengusung konsep living in nature dengan akomodasi 
bambu ramah lingkungan, kebun organik, serta ruang terbuka hijau. Wisatawan dapat 
melakukan berbagai aktivitas seperti yoga retreat, meditasi, trekking hutan, workshop 
pertanian organik, serta menikmati kuliner sehat dari hasil kebun sekitar. Bali Eco Village 
dilengkapi oleh aula bambu untuk kegiatan kelas yoga, tempat api unggun, serta area 
kebun dengan konsep permakultur. Bali Eco Village menjadi pilihan bagi wisatawan yang 
ingin merasakan ketenangan, belajar kehidupan berkelanjutan, dan menikmati keindahan 
alam Desa Belok/Sidan dalam suasana damai dan asri. `,
  },
  {
    name: "Kebun Bunga Gemitir (Marigold) ",
    coords: [-8.329259865593071, 115.229476457266],
    image: "/marigold.jpg",
    desc: `Kebun bunga gemitir yang ada di Desa Belok/Sidan menjadi daya tarik wisatawan karena 
keindahan yang menjadi salah satu atraksi wisata favorit dengan keindahan hamparan 
bunga marigold berwarna kuning keemasan yang memanjakan mata. Bunga marigold 
atau yang dikenal dengan bunga gemitir, memiliki nilai penting dalam budaya dan agama 
Hindu Bali. bunga ini sering digunakan dalam berbagai upacara keagamaan, termasuk 
pemujaan dan sesaji, dimana bunga dicampur dengan beras dan dupa. Atraksi wisata ini 
berada di pinggir jalan, tepatnya di kebun milik warga. Atraksi Wisata ini cukup 
membayar seikhlasnya saja untuk berfoto. Wisatawan dapat berjalan di antara 
petak-petak bunga, berfoto dengan latar hamparan marigold, serta belajar mengenai 
perawatan dan manfaat bunga marigold bagi pertanian organik. Pengunjung juga dapat 
membeli bunga potong langsung dari petani sebagai oleh-oleh. Kebun Bunga Marigold 
tidak hanya menjadi destinasi foto Instagramable tetapi juga mendukung pemberdayaan 
petani lokal serta pengembangan wisata berbasis pertanian yang berkelanjutan di Desa 
Wisata Belok/Sidan. `,
  }, 
  {
 name: "Rimbun Farm, Cabin, and Camp ",
    coords: [-8.329259865593071, 115.229476457266],
    image: "/rimbun.jpg",
    desc: `Rimbun Farm, Cabin, and Camp adalah atraksi wisata alam yang terletak di Desa 
Belok/Sidan, Kecamatan Petang, menawarkan pengalaman berkemah, menginap, dan 
edukasi pertanian dalam suasana pegunungan yang sejuk dan asri. Atraksi ini dikelola 
secara mandiri oleh pemilik lokal dengan konsep eco-living dan agrowisata, mengajak 
pengunjung untuk lebih dekat dengan alam dan kegiatan pertanian organik. Rimbun Farm 
dilengkapi dengan kebun sayur, greenhouse, spot api unggun, dan area glamping dengan 
kabin kayu yang nyaman. Wisatawan dapat menikmati berkemah di alam terbuka, belajar 
bercocok tanam, memetik sayur, menikmati sunrise, serta relaksasi di hammock sambil 
menikmati udara segar. Lokasinya mudah diakses dengan denah jalur yang sudah 
dilengkapi papan petunjuk di sepanjang jalan menuju area camping. Rimbun Farm 
menjadi pilihan tepat untuk wisata keluarga, healing, maupun edukasi pertanian di Desa 
Wisata Belok/Sidan dengan suasana alam yang damai dan ramah anak.`,
  }, 
  
];

export default function App() {
const [selected, setSelected] = useState<Wisata | null>(null);
  return (
    <div className=" py-10 px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-3">
        Jelajah Wisata 
      </h1>
       <h1 className="text-3xl font-bold text-center mb-10 text-pink-600 ">
        Desa Belok/Sidan
      </h1>

     <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
  {/* Peta di atas saat mobile, kiri saat desktop */}
  <div className="flex-1 order-1 md:order-none">
    <MapContainer
        center={[-8.29, 115.22]}
        zoom={13}
        scrollWheelZoom={true}
        touchZoom={true}
        doubleClickZoom={true}
        className="rounded-md h-[400px] w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dataWisata.map((item, index) => (
        <Marker
            key={index}
            position={item.coords}
            icon={customIcon}
            eventHandlers={{
              click: () => setSelected(item),
            }}
          />
      ))}
<GeoJSON data={wilayahGeojson} style={{
  color: '#DEB1A8',
  fillColor: 'lightgreen',
  fillOpacity: 0.3,
  weight: 2,
}} />


    </MapContainer>
  </div>

  {/* Info di bawah saat mobile, kanan saat desktop */}
  <div className="flex-1 order-2 md:order-none">
{selected ? (
  <div className="bg-white p-5 rounded-xl shadow-md border border-[#e5e5e5]">
    <h2 className="text-lg text-center font-semibold mb-3">{selected.name}</h2>
    <div className="w-full flex justify-center mb-4">
      <img
        src={selected.image}
        alt={selected.name}
        className="w-[350px] h-[150px] object-cover rounded-lg shadow"
       />
    </div>
    <p className="text-sm text-gray-700 leading-relaxed text-justify">
      {selected.desc}
    </p>
  </div>
) : (<div className="h-full flex items-center justify-center">
  <p className="text-2xl font-light text-gray-800 text-center mt-10">
    Yuk, Klik Pin Wisata!
  </p>
</div>

)}

  </div>
</div>

    </div>
  );
}
