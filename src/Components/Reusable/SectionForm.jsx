import React from "react";

const SectionForm = ({ img, Titulo, SubTitulo, Descripcion }) => {
  return (

<section className="relative bg-cover bg-[url(./././Assets/Img/bannerform.png)] bg-center bg-custom-large sm:bg-custom-small">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative mx-auto max-w-screen-xl lg:flex lg:h-screen lg:items-center">
      <div className="max-w-xl text-center sm:text-left text-white lg:mr-auto mt-12">
      <img src={Titulo} className="mb-20  sm:mt-52" alt="Section Image"/>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{SubTitulo}</h3>
        <p className="mt-4 max-w-lg text-sm sm:text-base md:text-lg lg:text-xl">{Descripcion}</p>
      </div>

        <div className="lg:ml-auto">
          <form className="p-8 rounded-lg max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="appearance-none border rounded-4xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="appearance-none border rounded-4xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="appearance-none border rounded-4xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="city"
                placeholder="What city do you live?"
                className="appearance-none border rounded-4xl w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="license" className="block text-white font-bold mb-2">
                Do you have an active real estate license?
              </label>
              <select
                id="license"
                className="block appearance-none w-full rounded-4xl bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
            <button className="block rounded-4xl bg-white px-32 py-3 text-sm font-medium text-black shadow focus:outline-none focus:ring sm:w-auto">
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

