import React, { useState } from 'react';
import Header1 from '../Img/banner1.png';
import Header2 from '../Img/Header2.png';
import Header3 from '../Img/Header3.png';

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
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img src={image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={`Slide ${index + 1}`} />
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-start ml-32">
                        <div className="text-white max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-5xl font-extrabold text-left">Become</h1>
                            <h1 className="text-5xl font-extrabold text-left">the modern agent</h1>
                            <br/>
                            <strong className="block font-extrabold text-white text-left"></strong>
                            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-left">Welcome to Maxximum Realty where we revolutionize real estate marketing with innovative strategies that attract listings and buyers. Our approach redefines the lender-realtor relationship, fostering collaboration beyond the mortgage transaction.</p>
                            <div className="mt-8 flex flex-wrap gap-4 lg:items-center text-center">
                                <a
                                    href="#"
                                    className="block rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-gray-200 focus:outline-none focus:bg-gray-200 sm:w-auto"
                                    style={{ borderRadius: "999px" }} 
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" style={{ position: 'absolute', bottom: '10px', right: '10px', zIndex: '30', borderRadius: '50%', padding: '10px' }} data-carousel-prev onClick={goToPrevSlide}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px'}}>
                        <svg className="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </span>
                </button>
                <button type="button" style={{ position: 'absolute', bottom: '10px', right: '60px', zIndex: '30', borderRadius: '50%', padding: '10px' }} data-carousel-next onClick={goToNextSlide}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px' }}>
                        <svg className="w-6 h-6 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                    </span>
            </button>
        </div>
    );
};

export default Sliderheader;











