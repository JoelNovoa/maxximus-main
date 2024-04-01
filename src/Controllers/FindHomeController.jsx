// FindHomeController.js
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";

const FindHomeController = ({ arrayCard }) => {
  return (
    <div className="container mx-auto bg-[#0A182E] flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-center text-white py-20">
        Explore Our Communities
      </h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-12 py-20 sm:mx-auto">
        {arrayCard.map((item, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-10 border border-white">
            {/* Image */}
            <img
              className="w-full"
              src="https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg"
              alt="Property"
            />
            {/* Content */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">
                $1,000,000
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor
                <br />
                consectetur adipisicin.
              </p>
            </div>
            {/* Details */}
            <div className="grid grid-cols-3 py-6 px-4">
              <div className="text-black items-center grid grid-cols-2 justify-self-center">
                <FaBed className="text-black text-2xl" />
                <p className="text-md">3</p>
                Beds
              </div>
              <div className="text-black items-center grid grid-cols-2 justify-self-center">
                <FaBath className="text-black text-2xl pb-1" />
                <p className="text-md">3</p>
                Baths
              </div>
              <div className="text-black items-center grid grid-cols-2 justify-self-center">
                <TbBrandWindows className="text-black text-2xl justify-self-center" />
                <p className="text-sm">5,821sqtf</p>
                <p className="text-sm min-w-max pl-5">(on 0.62 acres)</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindHomeController;

