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
        name: "Bali Beans Plantation",
        coords: [-8.250531403778524, 115.24490582626538],
        image: "/mengenal-desa/balibeans.jpeg",
        desc: `Bali Beans Plantation di Desa Belok/Sidan, Badung, adalah atraksi wisata edukasi kopi Arabika yang dikelola sebagai usaha keluarga sejak 1985. Di kebun seluas 4 hektar ini, pengunjung dapat merasakan pengalaman "coffee journey" lengkap, mulai dari tur kebun (Rp170.000/orang) hingga sesi cupping kopi (Rp50.000/orang). Sebagai atraksi unggulan Desa Wisata Belok/Sidan, tempat ini fokus pada wisata agro-edukasi berkelanjutan sambil memberdayakan petani lokal.`,
    },
    {
        name: "Badung Agro Techno Park",
        coords: [-8.290314057083858, 115.23899712235996],
        image: "/mengenal-desa/agrotechno.jpg",
        desc: `Badung Agro Techno Park di Desa Belok/Sidan merupakan wisata edukasi pertanian modern yang dikelola Pemkab Badung. Pengunjung dapat melihat langsung teknologi hidroponik, greenhouse, dan pertanian modern lainnya. Tempat ini berfungsi sebagai pusat edukasi dan riset pertanian berkelanjutan yang ramah lingkungan.`,
    },
    {
        name: "Bali Eco Village",
        coords: [-8.267758062554906, 115.24928432421058],
        image: "/pariwisata/bali-eco-village.webp",
        desc: `Bali Eco Village di Desa Belok/Sidan, Badung, adalah destinasi ekowisata dan retreat alam yang menawarkan suasana sejuk di tengah hutan tropis. Dengan konsep "hidup di alam", tempat ini menyediakan akomodasi bambu yang ramah lingkungan, kebun organik, dan berbagai aktivitas seperti yoga, meditasi, serta trekking hutan. Dikelola oleh komunitas lokal, Bali Eco Village menjadi pilihan ideal bagi wisatawan yang mencari ketenangan dan ingin belajar tentang kehidupan berkelanjutan.`,
    },
    {
        name: "Kebun Bunga Gemitir (Marigold)",
        coords: [-8.28079376049061, 115.23873149325449],
        image: "/agrikultur/marigold.JPG",
        desc: `Kebun bunga gemitir (marigold) di Desa Belok/Sidan adalah atraksi wisata populer yang menawarkan keindahan hamparan bunga keemasan. Terletak di kebun warga di pinggir jalan, pengunjung dapat berfoto dengan membayar seikhlasnya. Selain menjadi spot foto Instagramable, wisatawan juga dapat belajar tentang bunga gemitir yang penting dalam budaya Bali dan membeli bunga segar langsung dari petani. Atraksi ini secara langsung mendukung pemberdayaan petani lokal dan agrowisata desa.`,
    },
    {
        name: "Rimbun Farm, Cabin, and Camp ",
        coords: [-8.256757935647773, 115.22769146441817],
        image: "/mengenal-desa/rimbun.jpg",
        desc: `Rimbun Farm, Cabin, and Camp di Desa Belok/Sidan adalah destinasi agrowisata yang menawarkan pengalaman menginap, berkemah, dan edukasi pertanian di pegunungan sejuk. Dengan konsep eco-living, tempat ini menyediakan kabin kayu, area kemah, dan kebun organik. Pengunjung dapat menikmati beragam aktivitas seperti belajar bercocok tanam, memetik sayur, api unggun, dan bersantai. Lokasinya yang mudah diakses menjadikannya pilihan tepat untuk wisata keluarga, healing, dan edukasi alam yang ramah anak.`,
    },
];
