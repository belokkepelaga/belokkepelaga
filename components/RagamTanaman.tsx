'use client';

import React from 'react';

interface CardProps {
  title: string;
  latinName: string;
  status: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
}

const Card: React.FC<CardProps> = ({
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
        <p><span className="font-semibold">Nama Latin:</span> {latinName}</p>
        <p><span className="font-semibold">Status:</span> {status}</p>
        <p className="mt-2"><span className="font-semibold">Deskripsi:</span> {description}</p>
      </div>
    </div>
  );
};

const tanamanData: CardProps[] = [
  {
    title: 'Tanaman Kopi',
    latinName: 'Coffea arabica',
    status: 'Sumber utama kopi dunia',
    description: 'Tanaman kopi yang memiliki rasa khas dan sangat diminati di seluruh dunia.',
    image: '/Misi.jpeg',
    imagePosition: 'right',
  },
  {
    title: 'Tanaman Asparagus',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi.',
    image: '/images/asparagus.jpg',
    imagePosition: 'left',
  },
  {
    title: 'Tanaman Asparagus',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi. (deskripsi panjang)',
    image: '/images/asparagus.jpg',
    imagePosition: 'right',
  },
  {
    title: 'Tanaman Asparagus',
    latinName: 'Asparagus officinalis',
    status: 'Sayuran hijau kaya manfaat',
    description: 'Asparagus kaya akan vitamin dan mineral, tumbuh baik di dataran tinggi. (deskripsi panjang)',
    image: '/images/asparagus.jpg',
    imagePosition: 'left',
  },
  {
    title: 'Tanaman Asparagus',
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
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center mt-16">Ragam Tanaman Unggulan</h1>
      {tanamanData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Agrikultur;
