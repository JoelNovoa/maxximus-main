import React from "react";

const SectionForm = ({ Titulo, SubTitulo, Descripcion }) => {
  return (
    <section className="relative bg-[#0A182E] bg-cover bg-center bg-[url(././Img/banner3-1.png)]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl lg:flex lg:h-screen lg:items-center">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-white lg:mr-auto"> {/* Cambiado lg:mr-auto */}
          <h1 className="text-3xl font-extrabold sm:text-5xl">{Titulo}</h1>
          <h3 className="text-2xl  sm:text-2xl">{SubTitulo}</h3>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">{Descripcion}</p>
        </div>
        <div className="lg:ml-auto"> {/* Añadido lg:ml-auto */}
          <form className="p-8 rounded-lg max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="appearance-none border-radius rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="license" className="block text-white font-bold mb-2">
                Do you have an active real estate license?
              </label>
              <select
                id="license"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow focus:outline-none focus:rin sm:w-auto">
                Join Us Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionForm;
