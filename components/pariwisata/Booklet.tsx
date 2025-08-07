
"use client";
import React, { forwardRef, useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';
import AnimatedContainer from '../AnimatedContainer';

const PageComponent = forwardRef(({ pageNumber, imageUrl, className, width, height }: any, ref: any) => (
    <div ref={ref} className={`page ${className}`}>
        {pageNumber === 1 ? (
            <Image src="/booklet/booklet-pelaga_page-0001.jpg" alt="Book Cover" fill style={{ objectFit: 'cover' }} />
        ) : (
            <Image key={imageUrl} src={imageUrl} alt={`Page ${pageNumber}`} width={width} height={height} style={{ width: '100%', height: '100%' }} unoptimized={true} />
        )}
    </div>
));

const Booklet = ({ imageUrls }: { imageUrls: string[] }) => {
    const [bookWidth, setBookWidth] = useState(800);
    const [bookHeight, setBookHeight] = useState(1120);
    const flipBookRef = useRef(null);

    useEffect(() => {
        const updateBookDimensions = () => {
            if (flipBookRef.current) {
                const parent = flipBookRef.current as HTMLElement;
                const parentWidth = parent.offsetWidth;
                const parentHeight = parent.offsetHeight;

                const aspectRatio = 1 / 1.4;
                let newWidth = parentWidth;
                let newHeight = parentWidth / aspectRatio;

                if (newHeight > parentHeight) {
                    newHeight = parentHeight;
                    newWidth = parentHeight * aspectRatio;
                }

                setBookWidth(newWidth);
                setBookHeight(newHeight);
            }
        };

        updateBookDimensions();
        window.addEventListener('resize', updateBookDimensions);

        return () => {
            window.removeEventListener('resize', updateBookDimensions);
        };
    }, []);

    return (
        <AnimatedContainer visibleClass='!slide-in-from-top-0'>
            <div className="container relative py-10 px-4 sm:px-6 lg:px-8">
                <div className='text-center mb-12'>
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        Booklet Pariwisata 
                        <br />
                        Desa Pelaga
                    </h1>
                </div>
                <div ref={flipBookRef} className="flipbook-wrapper shadow-2xl">
                    <HTMLFlipBook
                            width={1241}
                            height={874}
                            size="stretch"
                            minWidth={300}
                            maxWidth={1241}
                            minHeight={200}
                            maxHeight={874}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={true}
                            usePortrait={true}
                            className="album-web flip-book"
                        >
                        <PageComponent pageNumber={1} imageUrl="/booklet/booklet-pelaga_page-0001.jpg" className="page-cover-top" data-density="hard" width={1241} height={874} />
                        {imageUrls.slice(1, imageUrls.length - 1).map((url, index) => (
                            <PageComponent key={`page_${index + 2}`} pageNumber={index + 2} imageUrl={url} className="" width={1241} height={874} />
                        ))}
                        <PageComponent pageNumber={imageUrls.length} imageUrl={imageUrls[imageUrls.length - 1]} className="page-cover-bottom" data-density="hard" width={1241} height={874} />
                    </HTMLFlipBook>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default Booklet;
