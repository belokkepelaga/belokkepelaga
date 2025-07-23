import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock data for the news articles. In a real application, this would come from a CMS or database.
const beritaData = [
    {
        id: '1',
        title: 'Panen Raya Kopi Arabika di Desa Pelaga, Petani Rasakan Peningkatan Hasil',
        date: '05 Juli 2025',
        // imageUrl: 'https://placehold.co/600x400/1A2E39/FFFFFF?text=Panen+Kopi',
        excerpt: 'Musim panen kopi tahun ini membawa berkah bagi para petani di Desa Pelaga. Dengan metode perawatan baru, hasil panen meningkat hingga 20%...',
        slug: '/berita/panen-raya-kopi-pelaga',
    },
    {
        id: '2',
        title: 'Festival Budaya Belok Sidan Menarik Ratusan Wisatawan Lokal dan Mancanegara',
        date: '28 Juni 2025',
        imageUrl: 'https://placehold.co/600x400/3A506B/FFFFFF?text=Festival+Budaya',
        excerpt: 'Acara tahunan Festival Budaya Desa Belok Sidan kembali digelar dengan meriah, menampilkan tarian tradisional, musik, dan kuliner khas daerah...',
        slug: '/berita/festival-budaya-belok-sidan',
    },
    {
        id: '3',
        title: 'Inisiatif Pertanian Organik Baru Diluncurkan untuk Petani Sayur',
        date: '15 Juni 2025',
        imageUrl: 'https://placehold.co/600x400/6B8E23/FFFFFF?text=Sayur+Organik',
        excerpt: 'Sebuah program baru yang berfokus pada pertanian organik telah diperkenalkan, memberikan pelatihan dan bibit gratis kepada petani sayur di sekitar wilayah...',
        slug: '/berita/inisiatif-pertanian-organik',
    },
    {
        id: '4',
        title: 'Pembangunan Akses Jalan Baru Menuju Air Terjun Nungnung Selesai',
        date: '02 Juni 2025',
        imageUrl: '../public/Misi.jpeg',
        excerpt: 'Pemerintah daerah telah menyelesaikan proyek pembangunan jalan yang mempermudah akses wisatawan menuju salah satu destinasi wisata andalan...',
        slug: '/berita/akses-jalan-air-terjun-nungnung',
    },
    {
        id: '5',
        title: 'Lokakarya Digital Marketing untuk UMKM Desa',
        date: '25 Mei 2025',
        imageUrl: 'https://placehold.co/600x400/5B5F97/FFFFFF?text=UMKM+Digital',
        excerpt: 'Untuk mendukung pertumbuhan ekonomi lokal, sebuah lokakarya mengenai pemasaran digital diadakan bagi para pelaku UMKM di Balai Desa...',
        slug: '/berita/lokakarya-digital-marketing',
    },
    {
        id: '6',
        title: 'Sistem Irigasi Subak Raih Penghargaan Warisan Dunia',
        date: '18 Mei 2025',
        imageUrl: 'https://placehold.co/600x400/2E8B57/FFFFFF?text=Irigasi+Subak',
        excerpt: 'Sistem irigasi tradisional Bali, Subak, yang telah menopang pertanian di wilayah ini selama berabad-abad, secara resmi menerima pengakuan...',
        slug: '/berita/sistem-irigasi-subak-penghargaan',
    },
];

const Berita: React.FC = () => {
    return (
        // Use a dark background for a modern feel that complements the navbar
        <div className="bg-white text-black min-h-screen">
            <main className="container mx-auto px-4">
                {/* This top padding is CRUCIAL. It pushes the content down so it
                  doesn't get hidden underneath your fixed navbar.
                  The value (pt-28) should be enough to clear your navbar's height (75px) + padding.
                */}
                <div className="pt-28 pb-16">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Berita & Artikel Terbaru</h1>
                        <p className="text-lg text-gray-400 mt-2">
                            Ikuti perkembangan dan cerita terkini dari desa kami.
                        </p>
                    </div>

                    {/* Responsive Grid for News Articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {beritaData.map((article) => (
                            <Link href={article.slug} key={article.id}>
                                <div className="group bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 h-full flex flex-col">
                                    <div className="relative w-full h-48">
                                        {/* <Image
                                            src={article.imageUrl}
                                            alt={article.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        /> */}
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-sm text-cyan-400 mb-2">{article.date}</p>
                                        <h2 className="text-xl font-semibold mb-3 flex-grow">{article.title}</h2>
                                        <p className="text-gray-400 text-sm mb-4">{article.excerpt}</p>
                                        <div className="mt-auto">
                                            <span className="font-semibold text-cyan-300 group-hover:text-white transition-colors">
                                                Baca Selengkapnya &rarr;
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Berita;
