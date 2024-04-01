import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";
import Footer from "../Components/Common/Fotter";
import Vector from "../Assets/Img/Vector.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import FindHomeController from "../Controllers/FindHomeController";



const FindHome = () => {
  const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
    <div className="bg-[#0A182E]">
<section className="bg-[url(./Assets/Img/banner1.png)] h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center bg-[#0A182E]">
  <div className="text-center text-white mb-8">
    <h1 className="text-4xl font-bold">Find a Home</h1>
  </div>
  <div className="w-full text-white">
    <form className="flex flex-col sm:flex-row items-center justify-center">
      <select className="outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none bg-[#14253E] opacity-65  mb-4 sm:mb-0 sm:rounded-s-4xl">
        <option disabled selected>
          Type of house
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <select className="outline-none select select-bordered w-5/6 max-w-sm pl-4 py-4 sm:py-8 rounded-md text-center focus:outline-none bg-[#14253E] opacity-65 mb-4 sm:mb-0">
      <option disabled selected>
        Range
      </option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>


      <div className="w-full max-w-lg flex flex-col sm:flex-row items-center">
      <input type="search" name="search" placeholder="City, Neighborhood, ZIP, Address" className="bg-[#14253E] opacity-65 w-5/6 sm:w-full pl-4 py-4 sm:py-8 sm:rounded-r-4xl focus:outline-none mb-4 sm:mb-0 rounded-full"/>  
         <button type="submit" className="w-5/6 sm:w-auto px-16 py-4 sm:py-8 rounded-l-none sm:rounded-l-4xl rounded-4xl sm:rounded-4xl bg-[#0A182E] text-white">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </section>
          <FindHomeController arrayCard={arrayCard} />

          </div>
      <Footer />
    </>
  );
};
export default FindHome;
