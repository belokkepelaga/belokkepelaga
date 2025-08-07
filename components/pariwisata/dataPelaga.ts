
import { FeatureCollection } from 'geojson';

export const wilayahGeojson: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
        type: "Feature",
        properties: { name: "Kecamatan Petang" },
        geometry: {
            type: "Polygon",
            coordinates: [[
            // [115.200, -8.260],
            // [115.220, -8.270],
            // [115.210, -8.280],
            // [115.190, -8.275],
            // [115.200, -8.260]
            ]]
        }
        }
    ]
};

export interface Wisata {
    name: string;
    coords: [number, number];
    image: string;
    desc: string;
}

export const dataWisata: Wisata[] = [
    {
        name: "Banjar Pucak Tinggan — Pura Pucak Mangu",
        coords: [-8.251951432892257, 115.1892418943125],
        image: "/mangu.jpeg",
        desc: `Pura Pucak Mangu di Badung Utara (2096 MDPL) adalah pura suci sekaligus tujuan wisata petualangan. Dengan arsitektur unik mirip candi dan nilai sejarah Kerajaan Mengwi, pura ini hanya bisa dicapai dengan trekking selama 2–3 jam. Destinasi ini menawarkan perpaduan pengalaman religi, sejarah, dan keindahan alam puncak gunung.`,
    },
    {
        name: "Banjar Semanik - Goa Maria Ratu Surga",
        coords: [-8.280453805396727, 115.21824275609676],
        image: "/goamaria.jpeg",
        desc: `Goa Maria Ratu Surga di Banjar Semanik adalah destinasi ziarah Katolik yang unik karena memadukan unsur budaya Bali. Keindahannya terlihat pada patung Bunda Maria yang mengenakan kain Bali, berlokasi di tengah perkebunan yang asri. Tempat ini menawarkan suasana ibadah yang tenang dan menyatu dengan alam bagi peziarah dan wisatawan.`,
    },
    {
        name: "Banjar Pelaga - Jembatan Tukad Bangkung",
        coords: [-8.295949310491707, 115.2330730505751],
        image: "/jembatan.jpeg",
        desc: `Jembatan Tukad Bangkung, jembatan tertinggi di Bali, menawarkan pemandangan alam yang spektakuler dan beragam pilihan kuliner lokal di sekitarnya. Jembatan ini juga merupakan jalur penghubung strategis menuju destinasi wisata populer seperti kawasan Belok/Sidan dan Kintamani.`,
    },
    {
        name: "Banjar Nungnung - Air Terjun Nungnung",
        coords: [-8.329090147578455, 115.2295409037087],
        image: "/nungnung.jpeg",
        desc: `Air Terjun Nungnung adalah destinasi petualangan yang menantang, di mana pengunjung harus menuruni ratusan anak tangga. Perjuangan tersebut terbayar oleh keindahan air terjun setinggi 71 meter dengan kolam jernihnya yang sejuk. Tempat wisata ini merupakan contoh pariwisata yang dikelola oleh komunitas lokal.`,
    }
];
