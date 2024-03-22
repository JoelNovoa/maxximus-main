import React from "react";
import Credentials from "./Credentials";
import maps from "../Img/Screenshot.png";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

const Map = (props) => {
    return (
        <div className="space-y-4 bg-[#0A182E] min-h-screen flex flex-col">
            <div className="flex items-center justify-center lg:justify-start lg:ml-12">
            <div className="mx-auto lg:ml-0 lg:mr-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mt-10">
            <div class='max-w-md mx-auto'>
            <div class="flex rounded-4xl bg-white px-2 w-full max-w-[600px]">
                    <input
                    type="text"
                    class="w-full bg-white flex bg-transparent rounded-4xl pl-2 text-black outline-0"
                    placeholder="Search by Address, City, Zip..."
                    />
                    <button type="submit" class="relative p-2 rounded-4xl bg-white rounded-full">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            </svg>
            </button>
      </div>
            </div>
            </div>
            </div>
           <div className="bg-[#0A182E] mt-10 py-4 h-32 w-full">
                <h2 className="text-3xl font-bold text-white text-center lg:ml-12 lg:text-left">Locations</h2>
            </div>

            <div className="flex-grow flex flex-wrap justify-center">
                <div className="bg-[#0A182E] w-full lg:w-1/2 xl:w-1/3 px-8 py-4">
                <section className="flex flex-col items-center lg:items-start">
                <div className="bg-[#0A182E] px-4 py-2 mb-4 max-w-[300px] rounded-2xl">
                    <h3 className="text-white">Laguna Hills</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut <br/>
                    labore et dolore magna aliqua.</p>
                </div>
                <div className="bg-[#0A182E] px-4 py-2 mb-4 max-w-[300px] rounded-2xl">
                    <h3 className="text-white">Orlando</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet,<br/>
                    consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut <br/>
                    labore et dolore magna aliqua.</p>
                </div>
                <div className="bg-[#0A182E] px-4 py-2 mb-4 max-w-[300px] rounded-2xl">
                    <h3 className="text-white">Dallas</h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit, sed do <br/>
                        eiusmod tempor incididunt ut <br/>
                        labore et dolore magna aliqua. </p>
                </div>
                <div className="bg-[#0A182E] px-4 py-2 mb-4 max-w-[300px] rounded-2xl">
                    <h3 className="text-white">Dallas </h3>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet, <br/>
                        consectetur adipiscing elit, sed do <br/>
                        eiusmod tempor incididunt ut <br/>
                        labore et dolore magna aliqua.</p>
                </div>
                </section>

                </div>
                <div className="bg-[#0A182E] w-full lg:w-1/2 xl:w-2/3 px-8 py-4 mx-auto">
  <div className="relative w-full h-96">
    <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
</div>

            </div>
        </div>
    );
}

export default Map;





