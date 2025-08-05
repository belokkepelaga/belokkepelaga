'use client'

import { useState } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";
import { dataWisata, wilayahGeojson, Wisata } from "./dataBelokSidan";
import { leafIcon } from "./mapConfig";
import AnimatedContainer from "@/components/AnimatedContainer";

// Leaflet icon fix
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
});

const Map = ({ onMarkerClick }: { onMarkerClick: (wisata: Wisata) => void }) => (
    <MapContainer
        center={[-8.2675446, 115.2420599]}
        zoom={13}
        scrollWheelZoom={true}
        touchZoom={true}
        doubleClickZoom={true}
        className="rounded-2xl h-[400px] w-full shadow-lg border border-gray-200"
    >
        <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dataWisata.map((item) => (
        <Marker
            key={item.name}
            position={item.coords}
            icon={leafIcon}
            eventHandlers={{
            click: () => onMarkerClick(item),
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
);

const InfoPanel = ({ selected }: { selected: Wisata | null }) => (
    <div className="flex-1">
        {selected ? (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-full">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{selected.name}</h2>
            <div className="w-full mb-4">
            <Image
                src={selected.image}
                alt={selected.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-xl shadow-md"
            />
            </div>
            <p className="text-base text-gray-600 leading-relaxed text-justify">
                {selected.desc}
            </p>
        </div>
        ) : (
        <div className="h-full flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8 border-dashed border-2 border-gray-300">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg> */}
            <Image src={"/leaf-green.png"} alt="Pin Wisata" width={20} height={10} />
            <p className="text-2xl font-light text-gray-700 text-center">
                Yuk, Klik Pin Wisata!
            </p>
            <p className="text-gray-500 text-center mt-2">Pilih salah satu lokasi di peta untuk melihat detailnya.</p>
        </div>
        )}
    </div>
);

const BelokSidan = () => {
    const [selected, setSelected] = useState<Wisata | null>(null);

    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0">
            <div className="container relative py-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Desa Belok/Sidan
                        {/* <br />
                        <span className="text-pink-600">Desa Belok/Sidan</span> */}
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-8">
                    <div className="flex-1 order-1 md:order-none">
                        <Map onMarkerClick={setSelected} />
                    </div>
                    <div className="flex-1 order-2 md:order-none">
                        <InfoPanel selected={selected} />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default BelokSidan;