import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const TanamanUnggulan = () => {
    return (
        <div className="container">
            <div>
                {/* <div className="relative h-[35rem] rounded-4xl shadow-blue-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover" src="/agrikultur/marigold-hero.jpg" alt="Gambar Tanaman Unggulan" />
                </div> */}
                <h1 className="pt-12 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0">Ragam Tanaman Unggulan</h1>
            </div>
            <div className="flex flex-col gap-24 lg:gap-36 mt-18">
                {tanamanUnggulanData.map((item, index) => (
                    <AnimatedContainer key={index} className="flex items-center lg:flex-row flex-col even:flex-col lg:even:flex-row-reverse gap-10">
                        <div className="lg:flex-1 w-full h-[35rem] rounded-4xl shadow-blue-card overflow-hidden relative">
                            <Image fill sizes="auto" className="object-cover" src={item.image} alt="Gambar Tanaman Unggulan" />
                        </div>
                        <div className="w-full lg:flex-1 flex flex-col justify-between gap-4 lg:min-h-[31rem] h-full">
                            <div className="flex flex-col gap-4">
                                <h5 className="text-3xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</h5>
                                <span className="text-xl font-medium text-surface-500 dark:text-white/64 italic">{item.subtitle}</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl text-surface-950 dark:text-surface-0">
                                <span className='text-justify'>{item.description}</span>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default TanamanUnggulan;

const tanamanUnggulanData = [
    {
        title: 'Kopi Arabika',
        subtitle: 'Coffea arabica',
        description: 'Desa Pelaga di Kecamatan Petang, Badung, Bali, berada pada ketinggian ±1.000 mdpl dan memiliki tanah vulkanik subur serta iklim sejuk 18–25°C. Kondisi ini sangat ideal untuk budidaya kopi arabika. Kopi menjadi komoditas unggulan desa, diolah menjadi bubuk dan sangrai manual, serta tersedia dalam berbagai metode seduh. UMKM seperti Pengopi di Banjar Kiadan telah mengembangkan produk kopi lokal yang dikenal luas. Wisata kopi seperti tur kebun dan seduh manual turut memperkuat daya tarik Pelaga sebagai desa wisata edukatif.',
        image: '/agrikultur/kopi.jpg'
    },
    {
        title: 'Jeruk Manis',
        subtitle: 'Citrus sinensis',
        description: 'Jeruk merupakan komoditas hortikultura unggulan di Desa Pelaga berkat iklim sejuk, tanah gembur, dan drainase yang baik. Lingkungan perbukitan berkabut menjadikan jeruk lokal tumbuh subur dengan kualitas unggul. Jenis jeruk yang dibudidayakan meliputi jeruk manis dan keprok, yang diminati pasar karena cita rasanya yang konsisten. Ciri khas dari jeruk ini adalah berukuran besar, kulit mengilap, rasa manis segar, dan aroma khas. Selain dikonsumsi langsung, buah jeruk juga berpotensi diolah menjadi sirup, dodol, dan manisan sebagai produk oleh-oleh. Di sisi lain, limbah dari kulit jeruk dapat dimanfaatkan untuk lilin aromaterapi alami dan pembersih organik ramah lingkungan. Dengan nilai ekonomi tinggi dan daya tarik wisata petik buah, komoditas jeruk siap menjadi ikon buah khas desa.',
        image: '/agrikultur/jeruk.jpg'
    },
    {
        title: 'Bunga Gemitir (Marigold)',
        subtitle: 'Tagetes erecta',
        description: 'Bunga Gemitir, atau yang dikenal sebagai Marigold, merupakan komoditas hortikultura yang penting di Desa Pelaga dan Desa Belok Sidan, Kecamatan Petang, Kabupaten Badung, Bali. Dengan iklim tropis dan tanah yang subur, daerah ini sangat cocok untuk budidaya bunga ini. Bunga Gemitir memiliki warna oranye cerah dan bentuk yang menawan, dengan kelopak yang padat dan berukuran besar, yang membuatnya populer untuk digunakan dalam upacara keagamaan Hindu sebagai penghias sesaji, seperti Canang. Selain itu, kebun bunga ini juga menjadi destinasi wisata yang menarik, di mana pengunjung dapat menikmati keindahan hamparan bunga sambil berfoto. Dengan produksi yang tinggi, mencapai 0,9-1 kg per pohon, dan panen yang berkala setiap 3 hari, bunga ini menjadi sumber penghasilan utama bagi masyarakat setempat.',
        image: '/agrikultur/marigold.JPG'
    },
    {
        title: 'Durian Kane',
        subtitle: 'Durio zibethinus',
        description: 'Durian varietas Kane tumbuh di dataran tinggi Desa Pelaga dengan sistem tumpangsari bersama kopi. Berukuran lebih kecil dari durian dataran rendah, namun memiliki aroma tajam, rasa manis sedikit pahit, dan tekstur lembut yang khas. Masa panen berlangsung sekitar Desember hingga Februari dan menjadi daya tarik dalam festival durian tahunan. Durian ini tak hanya hanya dapat dikonsumsi langsung, tetapi juga dapat diolah menjadi dodol, es krim, dan jajanan khas. Selain bernilai ekonomi, durian merupakan simbol keanekaragaman hayati dan potensi wisata musiman yang bisa terus dikembangkan sebagai identitas desa.',
        image: '/agrikultur/durian.jpeg'
    },
    {
        title: 'Alpukat',
        subtitle: 'Persea americana',
        description: 'Alpukat merupakan komoditas hortikultura unggulan di Desa Pelaga dengan kualitas yang unggul. Tanah subur dan iklim sejuk membuat alpukat tumbuh subur dengan rasa manis dan aroma khas. Jenis alpukat yang dibudidayakan meliputi alpukat manis dan keprok, yang diminati pasar karena cita rasanya yang konsisten. Ciri khas dari alpukat ini adalah berukuran besar, kulit mengilap, rasa manis segar, dan aroma khas. Selain dikonsumsi langsung, alpukat juga berpotensi diolah menjadi sirup, dodol, dan manisan sebagai produk oleh-oleh. Di sisi lain, limbah dari kulit alpukat dapat dimanfaatkan untuk lilin aromaterapi alami dan pembersih organik ramah lingkungan. Dengan nilai ekonomi tinggi dan daya tarik wisata petik buah, komoditas alpukat siap menjadi ikon buah khas desa.',
        image: '/agrikultur/alpukat.jpeg'
    },
    {
        title: 'Asparagus',
        subtitle: 'Asparagus officinalis',
        description: 'Asparagus merupakan komoditas hortikultura unggulan di Desa Pelaga dengan kualitas yang unggul. Tanah subur dan iklim sejuk membuat asparagus tumbuh subur dengan rasa manis dan aroma khas. Jenis asparagus yang dibudidayakan meliputi asparagus manis dan keprok, yang diminati pasar karena cita rasanya yang konsisten. Ciri khas dari asparagus ini adalah berukuran besar, kulit mengilap, rasa manis segar, dan aroma khas. Selain dikonsumsi langsung, asparagus juga berpotensi diolah menjadi sirup, dodol, dan manisan sebagai produk oleh-oleh. Di sisi lain, limbah dari kulit asparagus dapat dimanfaatkan untuk lilin aromaterapi alami dan pembersih organik ramah lingkungan. Dengan nilai ekonomi tinggi dan daya tarik wisata petik buah, komoditas asparagus siap menjadi ikon buah khas desa.',
        image: '/agrikultur/asparagus.jpg'
    }
];
