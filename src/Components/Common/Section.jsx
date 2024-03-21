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
          : "flex flex-col  justify-center relative bg-[#0A182E] bg-cover bg-center h-screen"
      }
    >
       {/* Línea blanca en el eje x a la izquierda */}
       <div className="w-px bg-white absolute top-0 left-10" style={{ height: secondLineTop }}></div>
       
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:items-start">

        <div
          className={
            Blanco
              ? "max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-black sm:mx-10 sm:my-6"
              : "max-w-xl text-left ltr:sm:text-left rtl:sm:text-right text-white sm:mx-10 sm:my-6 pl-10"
          }
        >
          <h1 className="text-3xl font-extrabold sm:text-5xl">{Titulo}</h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed">{Descripcion}</p>
          {Buton && (
            <div className="mt-8 flex flex-wrap gap-4 justify-start">
              <a href="#" className="underline">
                Learn More
              </a>
              <span className=""> &gt;</span>
            </div>
          )}
        </div>

        <div className="mt-8 lg:mt-0 lg:ml-auto">
          <img src={img} className="w-full lg:w-auto lg:max-w-4xl ml-auto" alt="Section Image" />
        </div>
      </div>
      {/* Segunda línea blanca debajo de las secciones */}
      <div ref={secondLineRef} className="w-full h-px bg-white mt-28"></div>
    </section>
  );
};

export default Section;









