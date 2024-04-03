import React from "react";
import Credentials from "./Credentials";
import maps from "../../Assets/Img/Screenshot.png";
import RectanguleCard  from "../../Assets/Img/RectanguleCard.png";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

const Map = (props) => {
    return (
        <div className="space-y-4 bg-[#002867] min-h-screen flex flex-col">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white text-center sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                    <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"></svg>
                    <span className="relative">Join the Family</span>
                </span>
            </h2>
            </div>
            <div class="flex flex-wrap justify-center mx-auto w-full max-w-4xl mt-8 space-y-8">
            <div class="flex flex-col flex-grow overflow-hidden bg-[#FFFFFF] rounded-4xl shadow-lg mt-8 mx-4 max-w-sm">
			<div class="flex flex-col items-center p-10 bg-[#0A182E]">
            <img
                  className="h-32 w-32"
                  src={RectanguleCard}
                  alt="Property"
                />
				<div class="flex items-center">
				</div>
			</div>
			<div class="p-10">
				<ul>
                <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E] font-bold">Traditional Real Estate Company
                    <br/>80 / 20</span>
                </li>
					<li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Sliding Commission Split
                    </span>
					</li>
					<li class="flex items-center justify-center mt-12">
                    <span class="text-center text-[#0A182E]">Focus on brand rather than  the professional
                    </span>
					</li>
                    <li class="flex items-center justify-center">
                    <span class="text-center text-[#0A182E]">Less support
                    </span>
					</li>
				</ul>
			</div>
		</div>	
        <div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-8 mx-4">
			<div class="flex flex-col items-center p-10 bg-gray-200">
				<span class="font-semibold">Jedi Knight</span>
				<div class="flex items-center">
					<span class="text-3xl">$</span>
					<span class="text-6xl font-bold">50</span>
					<span class="text-2xl text-gray-500">/mo</span>
				</div>
			</div>
			<div class="p-10">
				<ul>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2 italic">Padawan +</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">Solo missions</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">Utility belt</span>
					</li>
				</ul>
			</div>
			<div class="flex px-10 pb-10 justfy-center">
				<button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Join now</button>
			</div>
		</div>
        <div class="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-8 mx-4">
			<div class="flex flex-col items-center p-10 bg-gray-200">
				<span class="font-semibold">Jedi Master</span>
				<div class="flex items-center">
					<span class="text-3xl">$</span>
					<span class="text-5xl font-bold">99</span>
					<span class="text-2xl text-gray-500">/mo</span>
				</div>
			</div>
			<div class="p-10">
				<ul>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2 italic">Jedi Knight +</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">Sit on council</span>
					</li>
					<li class="flex items-center">
						<svg class="w-5 h-5 text-green-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
						</svg>
						<span class="ml-2">Stock options</span>
					</li>
				</ul>
			</div>
			<div class="flex px-10 pb-10 justfy-center">
				<button class="flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg">Join now</button>
			</div>
		</div>
	</div>
        </div>
    );
}

export default Map;





