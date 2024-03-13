import react from "react";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Corousel1 from "../Img/Corousel1.png";
import Corousel2 from "../Img/Corousel2.png";
import Corousel3 from "../Img/Corousel3.png";
import Corousel4 from "../Img/Corouse4.png";   

const Carousel = () => {
    return (
        <div className=" bg-[#0A182E]">
        <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={4} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={Corousel2} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute inset-0 flex flex-col justify-center items-center p-6">
                                                <h1 className="lg:text-xl leading-4 text-white">Real State 24</h1>
                                                <h3 className="text-white">Event for real estate</h3>
                                                <h1 className="lg:text-xl leading-4 text-white">2024</h1>
                                                <a
                                                    href="#"
                                                    className="mt-4 block w-full max-w-xs rounded-xl bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto text-center"
                                                >
                                                    More Info
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel3} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* Carousel for tablet and medium size devices */}
            <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                    <Slider>
                            <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={Corousel2} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute inset-0 flex flex-col justify-center items-center p-6">
                                                <h1 className="lg:text-xl leading-4 text-white">Real State 24</h1>
                                                <h3 className="text-white">Event for real estate</h3>
                                                <h1 className="lg:text-xl leading-4 text-white">2024</h1>
                                                <a
                                                    href="#"
                                                    className="mt-4 block w-full max-w-xs rounded-xl bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto text-center"
                                                >
                                                    More Info
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel3} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>

            {/* Carousel for mobile and Small size Devices */}
            <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                            <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="black chair and white table" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={Corousel2} alt="sitting area" className="object-cover object-center w-full" />
                                            <div className="bg-gray-800 bg-opacity-30 absolute inset-0 flex flex-col justify-center items-center p-6">
                                                <h1 className="lg:text-xl leading-4 text-white">Real State 24</h1>
                                                <h3 className="text-white">Event for real estate</h3>
                                                <h1 className="lg:text-xl leading-4 text-white">2024</h1>
                                                <a
                                                    href="#"
                                                    className="mt-4 block w-full max-w-xs rounded-xl bg-white px-12 py-3 text-sm font-medium text-black shadow sm:w-auto text-center"
                                                >
                                                    More Info
                                                </a>
                                            </div>
                                        </div>
                                    </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel3} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                        <img src={Corousel1} alt="sitting area" className="object-cover object-center w-full" />
                                        <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                            <div className="flex h-full items-end pb-6">
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                        <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    </div>

    );
}
export default Carousel;