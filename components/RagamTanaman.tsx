'use client';

import React from 'react';

interface CardProps {
  Pendahuluan: string;
  title: string;
  latinName: string;
  status: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({
  Pendahuluan,
  title,
  latinName,
  status,
  description,
  image,
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
<p className="text-sm text-gray-700 mb-4 text-justify">{Pendahuluan}</p>
                <p><span className="font-semibold">Nama Latin:</span> {latinName}</p>
        <p><span className="font-semibold">Nama Ilmiah:</span> {latinName}</p>
        <p><span className="font-semibold">Status:</span> {status}</p>
        <p className="mt-2"><span className="font-semibold">Deskripsi:</span> {description}</p>
      </div>
    </div>
  );
};

const tanamanData: CardProps[] = [
  {
    Pendahuluan: 'Desa Pelaga yang terletak di dataran tinggi, Kecamatan Petang, Kabupaten Badung, Bali, memiliki kondisi agroklimat yang sangat cocok untuk budidaya kopi arabika. Ketinggian wilayah ±1.100 mdpl, suhu udara yang sejuk berkisar antara 18–25°C, serta curah hujan yang merata sepanjang tahun memberikan lingkungan yang ideal bagi tanaman kopi untuk tumbuh dengan optimal. Karakteristik tanah vulkanik yang subur juga menjadi faktor pendukung penting. Tidak heran jika masyarakat Pelaga telah menjadikan kopi sebagai komoditas pertanian andalan, baik sebagai sumber penghidupan maupun bagian dari sistem agroforestri yang berkelanjutan. Tradisi menanam dan mengolah kopi telah diwariskan lintas generasi dan kini mulai dikembangkan dalam bentuk produk specialty coffee dengan cita rasa khas yang fruity, mild acidity, dan body yang seimbang.',
    title: 'Kopi Pelagas',
    latinName: 'Coffea arabica',
    status: 'Sumber utama kopi dunia',
    description: 'Tanaman kopi yang memiliki rasa khas dan sangat diminati di seluruh dunia.',
    image: '/Misi.jpeg',
    imagePosition: 'right',
  },
  {
    title: 'Tanaman Asparagus',
    Pendahuluan: 'Asparagus adalah sayuran yang kaya akan nutrisi dan sering digunakan dalam masakan.',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi.',
    image: '/images/asparagus.jpg',
    imagePosition: 'left',
  },
  {
    title: 'Tanaman Asparagus',
    Pendahuluan: 'Asparagus adalah sayuran yang kaya akan nutrisi dan sering digunakan dalam masakan.',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi. (deskripsi panjang)',
    image: '/images/asparagus.jpg',
    imagePosition: 'right',
  },
  {
    title: 'Tanaman Asparagus',
    Pendahuluan: 'Asparagus adalah sayuran yang kaya akan nutrisi dan sering digunakan dalam masakan.',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi. (deskripsi panjang)',
    image: '/images/asparagus.jpg',
    imagePosition: 'left',
  },
  {
    title: 'Tanaman Asparagus',
    Pendahuluan: 'Asparagus adalah sayuran yang kaya akan nutrisi dan sering digunakan dalam masakan.',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi. (deskripsi panjang)',
    image: '/images/asparagus.jpg',
    imagePosition: 'right',
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



