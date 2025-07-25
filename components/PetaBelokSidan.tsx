'use client'

import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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

interface Wisata {
  name: string;
  coords: [number, number];
  image: string;
  desc: string;
}

const dataWisata: Wisata[] = [
{
  name: "Bali Beans",
  coords: [-8.255907621640755, 115.24510950837026],
  image: "/Misi.jpeg",
  desc: `Bali Beans Plantation Desa Belok/Sidan merupakan atraksi wisata edukasi kopi yang terletak di Desa Belok/Sidan, tepatnya di Banjar Lawak, Kecamatan Petang, Badung. Bali Beans Plantation adalah usaha keluarga sejak tahun 1985 yang sekarang dikelola oleh anaknya. 

Kebun kopi di Bali Beans Plantation seluas 4 hektar ini ditanami kopi jenis Arabika. Selain itu, Bali Beans juga menjual kopi hasil produksinya ke berbagai kafe di daerah Kintamani, Karangasem, dan wilayah Bali lainnya. 

Bali Beans Plantation menawarkan pengalaman “coffee journey” yang lengkap, mulai dari pengenalan kebun kopi, proses panen biji, pengolahan manual, hingga roasting dan cupping kopi dengan cita rasa khas Arabika pegunungan. 

Wisatawan dapat mengikuti tur kebun kopi, pelatihan roasting manual, belajar teknik seduh kopi tradisional, serta menikmati kopi sambil menyaksikan pemandangan perbukitan yang asri. Biaya untuk tour kebun adalah Rp170.000/orang dan Rp50.000/orang untuk sesi cupping kopi. 

Area plantation dilengkapi dengan jalur kebun, tempat duduk outdoor, serta area edukasi yang nyaman untuk kegiatan studi lapangan dan wisata keluarga. Bali Beans Plantation menjadi salah satu atraksi unggulan Desa Wisata Belok/Sidan dalam mengangkat wisata agro-edukasi kopi berkelanjutan dan pemberdayaan petani lokal.`,
},
  {
    name: "Pura Puncak Mangu",
    coords: [-8.254372188195106, 115.1904433961847],
    image: "https://source.unsplash.com/150x150/?temple",
    desc: "Pura suci yang terletak di puncak bukit.",
  },
  {
    name: "Jembatan",
    coords: [-8.296211943338827, 115.23331414140532],
    image: "https://source.unsplash.com/150x150/?bridge",
    desc: "Jembatan indah di tengah alam.",
  },
  {
    name: "Air Terjun Nungnung",
    coords: [-8.329259865593071, 115.229476457266],
    image: "https://source.unsplash.com/150x150/?waterfall",
    desc: "Air terjun yang menyegarkan dengan panorama alam.",
  },
];

export default function App() {
  const [selected, setSelected] = useState<Wisata | null>(null);

  return (
    <div className="min-h-screen py-10 px-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-3">
        Jelajah Wisata 
      </h1>
       <h1 className="text-3xl font-bold text-center mb-10 text-pink-600 ">
        Desa Sidan 
      </h1>

     <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
  {/* Peta di atas saat mobile, kiri saat desktop */}
  <div className="flex-1 order-1 md:order-none">
    <MapContainer
      center={[-8.29, 115.22]}
      zoom={13}
      scrollWheelZoom={false}
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
          eventHandlers={{
            click: () => setSelected(item),
          }}
        />
      ))}
    </MapContainer>
  </div>

  {/* Info di bawah saat mobile, kanan saat desktop */}
  <div className="flex-1 order-2 md:order-none">
    {selected ? (
      <div className="bg-white p-5 rounded-xl shadow-md border border-[#e5e5e5]">
        <h2 className="text-lg font-semibold mb-3">{selected.name}</h2>
        <div className="flex gap-4 items-start">
          <img
            src={selected.image}
            alt={selected.name}
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <p className="text-sm text-gray-700 leading-relaxed">
            {selected.desc}
          </p>
        </div>
      </div>
    ) : (
      <p className="text-lg text-gray-800">Yuk, Klik Pin Wisata!</p>
    )}
  </div>
</div>

    </div>
  );
}
