import React from "react";

const Layout = () => {
  return (
    <div className="justify-center border-b-2 border-y-white pt-0 pb-0 bg-[#0A182E] text-white">
<div className="p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-center items-center">
  {/* Texto 1 */}
  <div className="mb-4 sm:mb-0 sm:mr-4">
    {/* Ajustamos el tamaño del texto para pantallas pequeñas */}
    <h2 className="text-xl sm:text-3xl font-bold text-center sm:text-left">
      Our most lucrative 100% commission plan
    </h2>
  </div>
  {/* Separador */}
  <div className="w-4"></div> {/* Agregamos un espacio de 4px entre los textos */}
  {/* Texto 2 */}
  <div className="mt-1 flex flex-wrap gap-4 justify-center sm:justify-end">
    {/* Ajustamos el tamaño del texto para pantallas pequeñas */}
    <a href="#" className="underline text-base sm:text-base">
      Learn More
    </a>
    <span> &gt;</span>
  </div>
</div>


    </div>
  );
};

export default Layout;






