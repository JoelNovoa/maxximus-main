import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbBrandWindows } from "react-icons/tb";
import Footer from "../Components/Common/Fotter";

const FindHome = () => {
  const arrayCard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <section className="bg-[url(./Img/banner1.png)] h-screen bg-cover bg-no-repeat flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-8">Find a Home</h1>
          <div className="flex justify-center">
          <div className="flex justify-center">
            <form className="flex justify-center bg-[#14253E] opacity-80 rounded-4xl">
              <select className="outline-none select select-bordered w-full max-w-xs pl-4 py-10 rounded-md text-center focus:outline-none bg-[#14253E] opacity-80 rounded-s-4xl">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="outline-none select select-bordered w-full max-w-xs px-10 pl-2 rounded-md bg-[#14253E] opacity-80 text-center">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <select className="outline-none select select-bordered w-full max-w-xs px-50 pl-2 rounded-md bg-[#14253E] opacity-80 text-center">
                <option disabled selected>
                  City, Neighborhood, ZIP, Addres
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <input className="outline-none w-full max-w-xs px-10 py-2 rounded-md bg-[#14253E] opacity-80"  />
            </form>
          </div>
          <div className="flex justify-center bg-[#14253E] rounded-r-4xl">
            <button
                type="submit"
                className="px-14 py-2 rounded-md bg-[#0A182E] text-white rounded-t-4xl rounded-b-4xl"
              >
                Search
              </button>
          </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A182E] text-white h-full">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center py-20">
            Featured Properties
          </h2>
          {/* Card Component Bordered with Image, Price, Content and Details */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20">
            {arrayCard.map(() => {
              return (
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-10">
                  <img
                    className="w-full"
                    src="https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg"
                    alt="Sunset in the mountains"
                  />
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
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default FindHome;
