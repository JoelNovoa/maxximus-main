import React from 'react';
import Cards1 from "../Img/Desiree1.png";
import Cards2 from "../Img/max1.png";

const Cards = () => { 
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 text-center sm:text-4xl md:mx-auto">
    <span className="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"></svg>
        <span className="relative">Expert Team</span>
    </span>
</h2>

            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden relative">
                    <div className="flex items-center">
                        <div className="w-36 sm:w-36 flex items-center justify-center">
                            <img src={Cards2} className="h-auto w-full max-h-72 object-contain" alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(714) 272-2229</p>
                            <p className="text-base mb-1">max@maxximumrealty.com</p>
                            <p className="text-base mb-1">License ID: 01523101</p>
                            <p className="text-base mb-1">
                                <span className="text-[#0A182E]">99</span> Total Sales
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white rounded-4xl px-1 py-0">Max Sandoval-Broker</p>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden relative">
                    <div className="flex items-center">
                        <div className="w-36 sm:w-36 flex items-center justify-center">
                            <img src={Cards1} className="h-auto w-full max-h-72 object-contain" alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(714) 272-2229</p>
                            <p className="text-base mb-1">max@maxximumrealty.com</p>
                            <p className="text-base mb-1">License ID: 01523101</p>
                            <p className="text-base mb-1">
                                <span className="text-[#0A182E]">99</span> Total Sales
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white rounded-4xl px-1 py-0">Max Sandoval-Broker</p>
                    </div>
                </div>
                <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden relative">
                    <div className="flex items-center">
                        <div className="w-36 sm:w-36 flex items-center justify-center">
                            <img src={Cards2} className="h-auto w-full max-h-72 object-contain" alt="Imagen de perfil" />
                        </div>
                        <div className="w-2/3 sm:w-3/4 p-2 mt-8">
                            <p className="text-base mb-1">+1(714) 272-2229</p>
                            <p className="text-base mb-1">max@maxximumrealty.com</p>
                            <p className="text-base mb-1">License ID: 01523101</p>
                            <p className="text-base mb-1">
                                <span className="text-[#0A182E]">99</span> Total Sales
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-5 left-48 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="text-center bg-[#0A182E] text-white rounded-4xl px-1 py-0">Max Sandoval-Broker</p>
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Cards;
