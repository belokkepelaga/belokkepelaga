import React from 'react';

interface MapSectionProps {
  /**
   * The main title to display above the map.
   * @default 'Desa Pelaga'
   */
  title?: string;
  /**
   * An optional subtitle to display below the main title.
   */
  subtitle?: string;
  /**
   * The URL of the Google Maps embed.
   * @default 'https://www.google.com/maps/d/embed?mid=17byg0XlF-9PAYTALyk1sh3hxb0gUmG8&ehbc=2E312F'
   */
  mapUrl?: string;
}

const MapSection: React.FC<MapSectionProps> = ({
    title = 'Desa Pelaga',
    subtitle,
    mapUrl = 'https://www.google.com/maps/d/embed?mid=17byg0XlF-9PAYTALyk1sh3hxb0gUmG8&ehbc=2E312F',
}) => {
    return (
        <section className="py-8 sm:py-16">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    {subtitle}
                    </p>
                )}
                </div>

                <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl dark:border-gray-800">
                    <div className="aspect-h-3 aspect-w-4 md:aspect-h-9 md:aspect-w-16">
                        <iframe
                        src={mapUrl}
                        className="absolute left-0 top-0 h-full w-full border-0"
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Peta Interaktif: ${title}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
