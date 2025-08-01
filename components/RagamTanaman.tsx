'use client';

import React from 'react';

interface CardProps {
  NamaLokal: string;
  title: string;
  latinName: string;
  JenisTanaman: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({
  JenisTanaman,
  title,
  latinName,
  description,
  image,
  NamaLokal,
  imagePosition = 'right',
}) => {
  const isLeft = imagePosition === 'left';

  return (
    <div className={`flex flex-col ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-10 gap-4 md:gap-6`}>
      {/* Gambar */}
      <img
        src={image}
        alt={title}
        className="w-full max-w-xs h-60 object-cover rounded-lg shadow-md"
      />

      {/* Box teks */}
      <div className="bg-[#9ABD9873] rounded-lg shadow-md p-6 md:p-10 w-full">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
                <p><span className="font-semibold">Nama Lokal:</span> {NamaLokal}</p>
        <p><span className="font-semibold">Nama Ilmiah:</span> {latinName}</p>
        <p><span className="font-semibold">Jenis Tanaman:</span> {JenisTanaman}</p>
        <p className="text-sm text-gray-700 mb-4 text-justify">{description}</p>

      </div>
    </div>
  );
};

const tanamanData: CardProps[] = [
  {
    NamaLokal: 'Kopi arabika',
    title: 'Kopi Arabika',
    latinName: 'Coffea arabica',
    JenisTanaman: 'Tanaman tahunan',
    description: 'Desa Pelaga di Kecamatan Petang, Badung, Bali, berada pada ketinggian ±1.000 mdpl dan memiliki tanah vulkanik subur serta iklim sejuk 18–25°C. Kondisi ini sangat ideal untuk budidaya kopi arabika. Kopi menjadi komoditas unggulan desa, diolah menjadi bubuk dan sangrai manual, serta tersedia dalam berbagai metode seduh. UMKM seperti Pengopi di Banjar Kiadan telah mengembangkan produk kopi lokal yang dikenal luas. Wisata kopi seperti tur kebun dan seduh manual turut memperkuat daya tarik Pelaga sebagai desa wisata edukatif.',
    image: 'agrikultur/kopi.jpg',
    imagePosition: 'left',
  },
  {
    NamaLokal: 'Jeruk',
    title: 'Tanaman Jeruk',
    latinName: 'Citrus sinensis',
    JenisTanaman: 'Hortikultura tahunan',
    description: 'Jeruk merupakan komoditas hortikultura unggulan di Desa Pelaga berkat iklim sejuk, tanah gembur, dan drainase yang baik. Lingkungan perbukitan berkabut menjadikan jeruk lokal tumbuh subur dengan kualitas unggul. Jenis jeruk yang dibudidayakan meliputi jeruk manis dan keprok, yang diminati pasar karena cita rasanya yang konsisten. Ciri khas dari jeruk ini adalah berukuran besar, kulit mengilap, rasa manis segar, dan aroma khas. Selain dikonsumsi langsung, buah jeruk juga berpotensi diolah menjadi sirup, dodol, dan manisan sebagai produk oleh-oleh. Di sisi lain, limbah dari kulit jeruk dapat dimanfaatkan untuk lilin aromaterapi alami dan pembersih organik ramah lingkungan. Dengan nilai ekonomi tinggi dan daya tarik wisata petik buah, komoditas jeruk siap menjadi ikon buah khas desa.',
    image: 'agrikultur/jeruk.jpg',
    imagePosition: 'right',

  },
  {
    NamaLokal: 'Durian Kane',
    title: 'Durian Kane di Desa Pelaga',
    latinName: 'Durio zibethinus',
    JenisTanaman: 'Buah tahunan',
    description: 'Durian varietas Kane tumbuh di dataran tinggi Desa Pelaga dengan sistem tumpangsari bersama kopi. Berukuran lebih kecil dari durian dataran rendah, namun memiliki aroma tajam, rasa manis sedikit pahit, dan tekstur lembut yang khas. Masa panen berlangsung sekitar Desember hingga Februari dan menjadi daya tarik dalam festival durian tahunan. Durian ini tak hanya hanya dapat dikonsumsi langsung, tetapi juga dapat diolah menjadi dodol, es krim, dan jajanan khas. Selain bernilai ekonomi, durian merupakan simbol keanekaragaman hayati dan potensi wisata musiman yang bisa terus dikembangkan sebagai identitas desa.',
    image: 'agrikultur/durian.jpeg',
    imagePosition: 'left',
  },
  {
    NamaLokal: 'Alpukat',
    title: 'Tanaman Alpukat',
    latinName: 'Capsicum annuum',
    JenisTanaman: 'Buah tahunan',
    description: 'Desa Pelaga di Kecamatan Petang, Kabupaten Badung, Bali merupakan daerah dataran tinggi yang dikenal dengan suhu sejuk dan tanah subur. Kondisi ini sangat cocok untuk budidaya berbagai tanaman hortikultura, salah satunya adalah alpukat. Alpukat di Desa Pelaga dikenal dengan ukuran buah yang besar, daging tebal, dan rasa gurih yang khas. Di Desa Pelaga ini, buah alpukat umumnya dijadikan campuran roti, salad, atau makanan penutup yang digemari di pasar lokal maupun wisatawan. Buah ini memiliki daya tarik sebagai buah sehat yang tidak hanya bermanfaat bagi tubuh tetapi juga berpeluang besar dalam diversifikasi usaha desa.',
    image: 'agrikultur/alpukat.jpeg',
     imagePosition: 'right',
  },
  {
    NamaLokal: 'Asparagus',
    title: 'Asparagus Pelaga',
    latinName: 'Asparagus officinalis',
    JenisTanaman: 'Sayur tahunan',
    description: 'Desa Pelaga dikenal luas sebagai kawasan penghasil asparagus unggulan berkat kondisi lingkungan yang sangat mendukung pertumbuhannya. Tunas muda tanaman ini menjadi bagian yang dipanen karena memiliki nilai jual tinggi dan sering didistribusikan ke hotel serta restoran di destinasi wisata seperti Ubud dan Denpasar yang ramai dikunjungi turis internasional. Tanaman asparagus dikenal dengan kandungannya yang kaya akan serat, folat, vitamin K, dan antioksidan, asparagus sehingga digemari pelaku diet sehat dan vegetarian. Asparagus cocok diolah menjadi tumisan, sup, atau lalapan. Dengan harga jual yang menjanjikan serta potensi dikembangkan sebagai kegiatan wisata petik, asparagus memiliki peluang besar sebagai ikon pertanian modern dan penggerak agroekowisata berkelanjutan di Desa Pelaga.',
    image: 'agrikultur/asparagus.jpg',
    imagePosition: 'left',
  },
];

const Agrikultur: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center ">Ragam Tanaman Unggulan</h1>
      {tanamanData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Agrikultur;



