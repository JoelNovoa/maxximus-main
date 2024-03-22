import React, { useEffect} from "react";

const SeccionHome = ({ Titulo, Blanco, Descripcion, Buton, img }) => {
  useEffect(() => {
    console.log(img);
  }, []);

  return (
    <section
      className={
        Blanco
          ? "flex flex-col items-center justify-center relative bg-white bg-cover bg-center h-screen"
          : "flex flex-col items-center justify-center relative bg-[#0A182E]  bg-cover bg-center h-screen"
      }
    >
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:items-start">
      <div className={Blanco ? "max-w-xl text-center sm:text-left text-black sm:mx-auto sm:my-6" : "max-w-xl text-center sm:text-left text-white sm:mx-auto sm:my-6"}>
  <h1 className="text-3xl sm:text-5xl font-extrabold">{Titulo}</h1>
  <p className="mt-4 max-w-lg sm:text-base">{Descripcion}</p>
  {Buton && (
    <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
      <a href="#" className="underline">
        Learn More
      </a>
      <span className="">&gt;</span>
    </div>
  )}
</div>


        <div className="mt-8 lg:mt-0 lg:ml-auto">
          <img src={img} className="w-full lg:w-auto lg:max-w-4xl ml-auto" alt="Section Image" />
        </div>
      </div>
    </section>
  );
};

export default SeccionHome;