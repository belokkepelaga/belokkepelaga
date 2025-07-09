import React from 'react';

const PdfSection: React.FC = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-8 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Lihat Booklet Kami
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                        Booklet Pariwisata
                    </p>
                </div>

                <div className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="/booklet/dummy-booklet.pdf"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            title="Booklet Pariwisata"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PdfSection;
