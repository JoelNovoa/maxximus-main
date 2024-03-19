import React, { useEffect } from "react";

const Section = ({ Titulo, Blanco, Descripcion, Buton, img }) => {
  useEffect(() => {
    console.log(img);
  }, []);

  return (
      <section
        className={
          Blanco
            ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center h-screen"
            : "flex flex-col items-center justify-center relative bg-[#0A182E] bg-cover bg-center h-screen"
        }
      >
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:items-start">
          <div
            className={
              Blanco
                ? "max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-black sm:mx-10 sm:my-6"
                : "max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-white sm:mx-10 sm:my-6"
            }
          >
            <h1 className="text-3xl font-extrabold sm:text-5xl">{Titulo}</h1>
            <p className="mt-4 max-w-lg sm:text-xl/relaxed">{Descripcion}</p>
            {Buton && (
              <div className="mt-8 flex flex-wrap gap-4 justify-start">
                <a href="#" className="underline text-white">
                  Learn More
                </a>
              </div>
            )}
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-auto mr-0">
            <img src={img} className="max-w-full lg:max-w-4xl" alt="Section Image" />
          </div>
        </div>
      </section>
  );
};

export default Section;


