import React from "react";

const Layout = () => {
  return (
    <div className="justify-center border-b-2 border-y-white pt-0 pb-0 bg-[#0A182E] text-white">
      <div className="p-6 rounded-lg shadow-md flex justify-center items-center">
        {/* Texto 1 */}
        <div className="ml-52"> {/* Agregamos margen a la derecha */}
          <h2 className="text-3xl font-bold">
            Our most lucrative 100% commission plan
          </h2>
        </div>
        {/* Separador */}
        <div className="w-4"></div> {/* Agregamos un espacio de 4px entre los textos */}
        {/* Texto 2 */}
        <div className="mt-1 flex flex-wrap gap-4 justify-end ml-52"> {/* Agregamos margen a la izquierda */}
          <a href="#" className="underline text-1xl">
            Learn More
          </a>
          <span> &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default Layout;






