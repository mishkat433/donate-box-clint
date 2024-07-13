"use client"

import { useCallback, useState } from "react";
import "./Gallery.css"
import ImageViewer from 'react-simple-image-viewer';

const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = [
        'https://www.w3schools.com/css/img_5terre.jpg',
        'https://b3307141.smushcdn.com/3307141/wp-content/uploads/2023/11/WF1743791_DSC04384-1024x683.jpg?lossy=2&strip=1&webp=1',
        'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
        'https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg',
        'https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true',
        'https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg',
    ];

    const openImageViewer = useCallback((index: number): void => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = (): void => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <section className="py-5 bg-color-b bg-no-repeat bg-cover ">
            <div className="">
                <div className="my-5 md:my-10">
                    <h1 className="text-center text-xl md:text2xl lg:text-4xl font-oswald text-primary-red font-bold ">Gallery</h1>
                </div>
                <div className="gallery">
                    {[...Array(7)].map((_, i) => (
                        <div
                            key={i}
                            onClick={() => openImageViewer(i % images.length)}
                            className="box"
                            id={`box${i}`}
                            style={{
                                backgroundImage: `url(${images[i % images.length]})`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            <div>
                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={true}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                        backgroundStyle={{
                            backgroundColor: "#0002a"

                        }}
                    />
                )}
            </div>


        </section>
    );
};

export default Gallery;