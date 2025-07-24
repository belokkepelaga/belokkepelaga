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
    name: "Goa",
    coords: [-8.280931184444741, 115.21809758003151],
    image: "/Misi.jpeg",
    desc : "Goa alam yang eksotis di Desa Pelaga. Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga. Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga.Goa alam yang eksotis di Desa Pelaga."
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
      <h1 className="text-3xl font-bold text-center mb-10 text-pink-600">
        Desa Pelaga
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
        {/* Kiri: Info atau Deskripsi */}
        <div className="flex-1">
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

        {/* Kanan: Peta */}
        <div className="flex-1">
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
      </div>
    </div>
  );
}
