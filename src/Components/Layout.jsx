import React from "react";
import Employes from "../Img/employees1.png";
import Phone from "../Img/megaphone1.png";
import Tech from "../Img/technology1.png";

const Layout = () => {
  return (
    <div className="justify-center border-b-2 border-y-white">
      <div className="bg-[#0A182E] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 col-span-2">
        {/* Primer elemento */}
        <div className="text-white p-6 rounded-lg shadow-md flex items-end justify-center">
          <div>
            <h2 className="text-xl font-bold mb-2 text-left">
              Our most lucrative 100% commission plan
            </h2>
          </div>
        </div>
        {/* Segundo elemento */}
        <div className="text-white w-2/4 p-4 rounded-lg shadow-md flex items-center justify-end">
          <div className="mt-8 flex flex-wrap gap-4 justify-end">
            <a href="#" className="underline text-xl font-bold mb-2 text-left">
              Learn More
            </a>
            <span> &gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
