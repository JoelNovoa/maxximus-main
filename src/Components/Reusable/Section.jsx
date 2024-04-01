import React, { useEffect, useRef, useState } from "react";

const Section = ({ Titulo, Blanco, Descripcion, Buton, img }) => {
  const [secondLineTop, setSecondLineTop] = useState(0);
  const secondLineRef = useRef(null);

  useEffect(() => {
    const topPosition = secondLineRef.current.offsetTop;
    setSecondLineTop(topPosition);
  }, []);

  return (
    <section
      className={
        Blanco
          ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center h-screen"
          : "flex flex-col justify-center relative bg-[#0A182E] bg-cover bg-center h-screen"
      }
    >
      {/* Línea blanca en el eje x a la izquierda */}
      <div
  className={`w-px bg-white absolute top-0 left-10 hidden sm:hidden md:hidden lg:block xl:block`}
  style={{ height: secondLineTop }}
></div>



      <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start max-h-screen overflow-y-auto">
      <div
          className={
            Blanco
              ? "max-w-xl text-center sm:text-left rtl:sm:text-right text-black sm:mx-auto sm:my-6 lg:mx-auto"
              : "max-w-xl text-center sm:text-left rtl:sm:text-right text-white sm:mx-auto sm:my-6 pl-4 lg:mx-auto"
          }
        >
          <h1 className="text-3xl font-extrabold sm:text-5xl">{Titulo}</h1>
          <p className="max-w-lg sm:text-xl/relaxed">{Descripcion}</p>
          {Buton && (
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:mr-96 sm:justify-center sm:mt-4">
              <a href="#" className="underline">
                Learn More
              </a>
              <span className=""> &gt;</span>
            </div>
          )}
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-auto">
          <img
            src={img}
            className="w-full lg:w-auto lg:max-w-4xl object-cover  ml-auto"
            alt="Section Image"
          />
        </div>
      </div>

      {/* Segunda línea blanca debajo de las secciones */}
      <div ref={secondLineRef} className="w-full h-px bg-white mt-28 hidden sm:block"></div>

      {Titulo === "OUR HISTORY" ? (
        <div className="py-24 justify-center border-b-2 border-y-white">
          <h1 className="text-2xl sm:text-4xl font-bold text-center text-white">
            HERE IS WHAT WE OFFER YOU?
          </h1>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Section;










