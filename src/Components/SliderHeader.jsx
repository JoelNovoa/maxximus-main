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
                    <div className="relative w-full h-full">
                        <img src={image} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start sm:mx-auto md:mx-4 lg:ml-32">
                <div className="text-white max-w-xl text-center lg:text-left">
                    <h1 className="text-3xl lg:text-5xl font-extrabold overflow-hidden text-ellipsis sm:w-full">
                        Become the modern agent
                    </h1>
                    <br/>
                    <p className="mt-4 max-w-lg sm:text-sm md:text-base lg:text-lg text-white text-center lg:text-left">
                        Welcome to Maxximum Realty where we revolutionize real estate marketing with innovative strategies that attract listings and buyers. Our approach redefines the lender-realtor relationship, fostering collaboration beyond the mortgage transaction.
                    </p>
                    <div className="mt-4 lg:mt-8 flex gap-4 justify-center lg:justify-start sm:mr-0 lg:mr-4">
                        <a
                            href="#"
                            className="block rounded-full bg-white px-12 py-1 text-sm font-medium text-black shadow hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                            style={{ borderRadius: "999px" }} 
                        >
                            Learn More
                        </a>
                    </div>

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












