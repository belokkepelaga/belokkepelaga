export default function PotretPengabdian() {
  return (
    <div className="relative">
      <h1 className="text-center text-4xl font-bold my-6">Potret</h1>
      <h1 className="text-center text-4xl font-bold my-6"> pengabdian</h1>
      {/* Gambar bergerak dengan animasi dan looping */}
      <div className="overflow-hidden">
        {/* Membungkus gambar dalam div untuk animasi */}
        <div className="flex animate-moveRight">
          {/* Set pertama gambar */}
          <img src="/Misi.jpeg" alt="Image 1" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 2" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 3" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 4" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 5" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 6" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 7" className="w-full max-w-xs mx-2" />
          
          {/* Set kedua gambar (untuk loop) */}
          <img src="/Misi.jpeg" alt="Image 1" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 2" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 3" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 4" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 5" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 6" className="w-full max-w-xs mx-2" />
          <img src="/Misi.jpeg" alt="Image 7" className="w-full max-w-xs mx-2" />
        </div>
      </div>
    </div>
  );
}
