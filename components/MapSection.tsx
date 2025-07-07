import React from 'react';

const MapSection: React.FC = () => {
    return (
        // A section container with a subtle background color to stand out
        <section className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Jelajahi Lokasi Kami
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                        Lihat lokasi agrikultur, pariwisata, dan titik penting lainnya di peta interaktif ini.
                    </p>
                </div>

                {/* Wrapper for the iframe to apply styling like shadows and rounded corners */}
                <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    {/* The 'aspect-w-16' and 'aspect-h-9' classes create a responsive container 
                      that maintains a 16:9 aspect ratio, a common practice for embeds.
                    */}
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=17byg0XlF-9PAYTALyk1sh3hxb0gUmG8&ehbc=2E312F"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Peta Desa Belok Sidan dan Pelaga"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
