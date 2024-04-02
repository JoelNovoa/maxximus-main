import React, { useState } from 'react';
import Header1 from '../../Assets/Img/read.png';
import Header2 from '../../Assets/Img/lady.png';
import Header3 from '../../Assets/Img/woman.png';
import Slide from '../../Assets/Img/slider3.png';

const Sliderheader = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [Header1, Header2, Header3];

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
            {images.map((image, index) => (
                <div key={index} className={`ease-linear ${index === currentSlide ? '' : 'hidden'}`} data-carousel-item={index === currentSlide ? 'active' : ''}>
                    <div className="relative w-full h-full">
                        <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center lg:items-center lg:text-center lg:w-full sm:mx-auto md:mx-4 ">
                <div className="text-white">
                    <h1 className="text-2xl lg:text-5xl sm:text-sm font-extrabold overflow-hidden py-12">
                    Become the Modern Agent
                    </h1>
                </div>
                </div>
                </div>
            ))}
            <button
                type="button"
                style={{ position: 'absolute', bottom: '20px', right: '10px', borderRadius: '50%', padding: '10px' }}
                data-carousel-prev
                onClick={goToPrevSlide}
            >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px'}}>
                    <svg className="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </span>
            </button>
            <button
                type="button"
                style={{ position: 'absolute', bottom: '20px', right: '60px', borderRadius: '50%', padding: '10px' }}
                data-carousel-next
                onClick={goToNextSlide}
            >
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px' }}>
                    <svg className="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </span>
            </button>
        </div>
    );
};
export default Sliderheader;












