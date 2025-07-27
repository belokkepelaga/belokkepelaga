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
  name: "Banjar Pucak Tinggan — Pura Pucak Mangu",
  coords: [-8.251951432892257, 115.1892418943125],
  image: "/mangu.jpeg",
  desc: `Pura Pucak Mangu adalah salah satu Pura Kahyangan Jagat di Bali yang terletak di Banjar Pucak Tinggan, daerah paling utara Kabupaten Badung dengan ketinggian 2096 MDPL, sehingga dijuluki sebagai “ujung keris” Badung. Meski merupakan tempat ibadah, pura ini juga menjadi destinasi wisata religi yang populer karena menyuguhkan pemandangan alam indah serta nilai sejarah dan budaya Bali Aga. Menurut Lontar Babad Mengwi, pura ini berada di kaki Gunung Mangu (kini dikenal sebagai Gunung Catur) dan menjadi tempat pertapaan Raja I Gusti Agung Putu sebelum memenangkan perang dan mendirikan Kerajaan Mengwi. Diperkirakan sudah ada sejak zaman megalitikum, Pura Pucak Mangu memiliki arsitektur unik berbentuk lingga dan menyerupai candi, berbeda dari pura Bali pada umumnya. Keunikannya juga terletak pada lokasinya di tengah hutan lebat serta adanya dua Pura Penataran Agung, yaitu Pura Ulun Danu Beratan dan Pura Penataran Agung Pucak Mangu yang dibangun oleh Raja dan putranya. Untuk mencapainya, pengunjung harus menempuh jalur trekking selama 2–3 jam melalui empat pos pendakian yang cukup aman, meski pos 3 dan 4 memiliki jalur licin dan berlumpur. Pura ini dikelola oleh masyarakat Banjar Tinggan yang juga melaksanakan upakara atau piodalan secara rutin, menjadikan Pura Pucak Mangu sebagai destinasi wisata yang memadukan nilai religi, sejarah, budaya, dan petualangan alam.








`,

},
   {
  name: " Banjar Semanik - Goa Maria Ratu Surga",
  coords: [-8.280453805396727, 115.21824275609676],
  image: "/goamaria.jpeg",
  desc: `Goa Maria Ratu Surga adalah gereja Katolik yang terletak di antara perkebunan warga di Banjar Semanik dan awalnya dibangun oleh seorang pemilik kebun kopi keturunan Tionghoa Semarang untuk keperluan pribadi, namun kini terbuka untuk umum. Dibangun oleh komunitas Katolik dari berbagai daerah serta komunitas Jala Kasih, tempat ini menjadi destinasi ziarah yang menawarkan suasana ibadah yang tenang dan menyatu dengan alam. Goa Maria Ratu Surga dikelola oleh Bu Joko, penjaga yang ramah dan juga memiliki warung kopi untuk pengunjung. Keindahan gereja ini terletak pada lokasinya yang asri dan harmoni antara agama Katolik dan budaya Bali, yang terlihat dari patung Bunda Maria yang mengenakan kain Bali serta taman mawar putih yang menghiasi sekitarnya. Tempat ini tidak hanya menjadi tujuan ziarah umat Katolik, tetapi juga menarik wisatawan yang ingin merasakan perpaduan keindahan alam dan spiritualitas.

`,
},

  {
    name: " Banjar Pelaga - Jembatan Tukad Bangkung ",
    coords: [-8.295949310491707, 115.2330730505751],
    image: "/jembatan.jpeg",
    desc: `Jembatan Tukad Bangkung merupakan jembatan tertinggi di Provinsi Bali dan 
merupakan jembatan tertinggi kedua di Asia Tenggara dengan tinggi mencapai 360 
meter. Jembatan tersebut menyambungkan antara Desa Pelaga dan Desa Belok/Sidan 
yang diresmikan oleh Presiden Susilo Bambang Yudhoyono pada tahun 2007 setelah 
direkonstruksi pada tahun 2001. Saat mengunjungi Jembatan Tukad Bangkung, 
wisatawan dapat menikmati keindahan alam yang megah serta menikmati wisata 
kuliner yang ada disekitar area jembatan. Salah satunya adalah Warung Pan Gede 
yang menjual nasi lawar samsam guling dengan harga Rp15.000 hingga Rp25.000. 
Selain itu, terdapat juga Warung Plaga Taste yang menjual makanan dan minuman 
seperti ayam bakar rempah, ayam kuah kari, capcay dan nasi goreng yang 
menggugah selera. Wisatawan pun dapat menggunakan kesempatan mengunjungi 
Jembatan Tukad Bangkung untuk melanjutkan perjalanan ke Desa Belok/Sidan yang 
memiliki banyak daya tarik wisata atau bisa melanjutkan perjalanan menuju daerah 
Kintamani untuk menikmati pemandangan Gunung Batur.  `,
  },
  {
    name: " Banjar Nungnung - Air Terjun Nungnung",
    coords: [-8.329090147578455, 115.2295409037087],
    image: "/nungnung.jpeg",
    desc: `Air Terjun Nungnung yang terletak di Banjar Nungnung merupakan destinasi alam yang populer, terutama bagi pecinta petualangan. Untuk mencapainya, wisatawan perlu melewati jalan aspal menuju loket tiket dengan biaya Rp10.000 untuk domestik dan Rp20.000 untuk mancanegara, serta parkir Rp2.000–Rp5.000. Perjalanan dilanjutkan dengan menuruni sekitar 2.000 anak tangga, ditemani pemandangan alam dan suara burung, hingga tiba di air terjun setinggi 71 meter yang mengalir deras ke kolam air jernih dan sejuk. Keindahan serta suasana hening membuat tempat ini cocok untuk berenang atau sekadar mencelupkan kaki. Air Terjun Nungnung dikelola secara kolaboratif antara Kementerian Pariwisata, Dinas Pariwisata Badung, dan Pokdarwis setempat, menunjukkan praktik community based tourism yang melibatkan masyarakat sebagai pengelola utama dengan dukungan pemerintah.`,
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
        Desa pelaga
      </h1>

    <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8">
  {/* Description: left on desktop, bottom on mobile */}
  <div className="flex-1 order-2 md:order-1">
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
    ) : (
      <div className="h-full flex items-center justify-center">
        <p className="text-2xl font-light text-gray-800 text-center mt-10">
          Yuk, Klik Pin Wisata!
        </p>
      </div>
    )}
  </div>

  {/* Map: right on desktop, top on mobile */}
  <div className="flex-1 order-1 md:order-2">
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
      <GeoJSON
        data={wilayahGeojson}
        style={{
          color: '#DEB1A8',
          fillColor: 'lightgreen',
          fillOpacity: 0.3,
          weight: 2,
        }}
      />
    </MapContainer>
  </div>
</div>

    </div>
  );
}
