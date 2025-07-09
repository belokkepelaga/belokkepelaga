import Image from 'next/image';

const MisiAksi = () => {
    return (
        <div className="container flex lg:flex-row flex-col items-center gap-18">
            <div className="max-w-[26rem] lg:max-w-none lg:flex-1 w-full h-[51rem] relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-blue-card dark:shadow-black-card">
                <Image fill sizes="auto" className="object-cover -z-2" src="/tim-kkn-penerjunan.png" alt="Tim KKN-PPM UGM Belok ke Pelaga 2025" />
                <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
            </div>
            <div className="lg:flex-1">
                <h1 className="text-5xl font-semibold text-surface-950 dark:text-surface-0 leading-tight mt-3.5">Misi dan Aksi</h1>
                <div className="mt-10 flex flex-col gap-8">
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Desa Hijau dan Berkelanjutan</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Optimalisasi Ruang Terbuka Hijau dan Waste Management untuk Mendukung Inovasi Pertanian dan Pariwisata</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Ketahanan Berkelanjutan</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Menjaga Keseimbangan Desa untuk Menghadapi Bencana dan Pemulihan Ekonomi</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Transformasi Digital untuk Pengembangan Desa Wisata Berkelanjutan</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Penguatan UMKM dan Ekonomi Kreatif Melalui Smart Branding</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Smart Eco-Tourism</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Revitalisasi dan Inovasi Infrastruktur Pariwisata Berkelanjutan</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">HortiCreative</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Inovasi dan Diversifikasi Produk Pertanian Guna Mendukung Desa Wisata Berbasis Agrotourism</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Peningkatkan Kesejahteraan Ternak</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Fondasi Peternakan Berkelanjutan dan Produktif</p>
                    </div>
                    <div>
                        <h5 className="text-2xl font-medium leading-tight text-surface-950 dark:text-surface-0">Desa Sehat Mandiri</h5>
                        <p className="mt-4 text-lg text-surface-500 dark:text-white/64">Aksi Preventif dan Pengecekan Kesehatan untuk Membangun Kesehatan Masyarakat</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisiAksi;
