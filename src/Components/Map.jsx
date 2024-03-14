import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import Google from "./Google";
import Credentials from "./Credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&Key=${Credentials.mapsKey}`;

const Map = (props) => {
    return (
        <div className="space-y-4 bg-[#0A182E] h-screen">
            <div className="w-1/2 ml-8 mt-10 bg-white rounded-4xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <div className="flex items-center">
                    <span className="text-black">United States</span>
                    <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"></path>
                    </svg>
                    <input type="text" className="w-full rounded-4xl px-3 py-2 placeholder-gray-400 text-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4" placeholder="Search by Address, City, Zip..." />
                </div>
            </div>

            <div className="bg-[#0A182E] h-32 w-full">
                <h2 className="text-3xl font-bold mb-8 ml-8 mt-10 text-white">Locations</h2>
            </div>

            <div className="flex bg-[#0A182E] h-32 w-full">
                <div className="bg-[#0A182E] w-1/4 ml-8">
                    {/* Usar un elemento <section> para envolver las subdivisiones */}
                    <section>
                        <div className="bg-[#0A182E] px-4 py-2 mb-2 max-w-[300px] rounded-2xl">
                            <h3 className="text-white">Laguna Hills</h3>
                            <p className="text-gray-400">23330 Mill Creek Dr Ste 250,<br /> 
                            Laguna Hills, <br/>
                            California, 92653, USA</p>
                        </div>
                        <br/>
                        <div className="bg-[#0A182E] px-4 py-2 mb-2 max-w-[300px] rounded-2xl">
                            <h3 className="text-white">Orlando</h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet,<br/>
                            consectetur adipiscing elit, <br/>
                            sed do eiusmod tempor incididunt ut <br/>
                            labore et dolore magna aliqua.</p>
                        </div>
                        <br/>
                        <div className="bg-[#0A182E] px-4 py-2 mb-2 max-w-[300px] rounded-2xl">
                            <h3 className="text-white">Dallas</h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, <br/>
                                consectetur adipiscing elit, sed do <br/>
                                eiusmod tempor incididunt ut <br/>
                                labore et dolore magna aliqua. </p>
                        </div>
                        <br />
                        <div className="bg-[#0A182E] px-4 py-2 mb-2 max-w-[300px] rounded-2xl">
                            <h3 className="text-white">Dallas </h3>
                            <p className="text-gray-400">Lorem ipsum dolor sit amet, <br/>
                                consectetur adipiscing elit, sed do <br/>
                                eiusmod tempor incididunt ut <br/>
                                labore et dolore magna aliqua.</p>
                        </div>
                    </section>
                </div>
                    <div className="bg-[#0A182E] w-3/4">
                        <Google
                        googleMapURL={mapURL}
                        containerElement={<div style={{ height: '400%' }}/>}
                        mapElement={<div style={{ height: '100%' }}/>}
                        loadingElement={<p>Loading...</p>}
                        />
                    </div>
                </div>
        </div>
    );
}

export default Map;



