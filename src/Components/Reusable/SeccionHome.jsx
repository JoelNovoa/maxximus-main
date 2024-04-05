import React, { useEffect} from "react";
import styles from "../../Assets/Styles/ImageSeccion.module.css";
import Ball from "../../Assets/Img/ball.png";
import Ball2 from "../../Assets/Img/bolab.png";

const SeccionHome = ({ Titulo, Blanco, Descripcion, Buton, img, sphere1, sphere2 }) => {
  useEffect(() => {
    console.log(img);
  }, []);

  return (
    <section
      className={
        Blanco
          ? "flex flex-col items-start justify-center  bg-[#F2F2F3] bg-cover bg-center h-screen"
          : "flex flex-col items-start justify-center  bg-[#0A182E]  bg-cover bg-center h-screen"
      }
    >
      <div className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="max-w-screen-xl flex flex-col lg:flex-row lg:items-start">
      <div className=
      {Blanco ? 
      "max-w-xl pl-0 md:pl-52 text-black sm:mx-auto sm:my-6" : 
      "max-w-xl pl-0 md:pl-52 text-white sm:mx-auto sm:my-6"}>
        <h1 className="text-3xl sm:text-5xl font-extrabold">{Titulo}</h1>
        <p className="mt-4 sm:text-lg max-w-lg ">{Descripcion}</p>
        {Buton && (
          <div className="mt-8 flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="#" className="underline">
              Learn More
            </a>
            <span className="">&gt;</span>
          </div>
        )}
      </div>

      <img
      className={sphere1 ? "absolute z-10 right-80 mr-[17rem] mt-72 invisible md:visible " : "hidden" }
      src={Ball}
      alt="Property"
      />
      <img
      className={sphere2 ? "absolute z-10 right-80 mr-[12rem] mt-52 invisible md:visible " : "hidden" }
      src={Ball2}
      alt="Property"
      />
      <img
      className={sphere1 ? "absolute z-10 right-0  mt-80 invisible md:visible " : "hidden" }
      src={Ball2}
      alt="Property"
      />
      <img
      className={sphere2 ? "absolute z-10 right-0 -mr-0 mt-96 invisible md:visible " : "hidden" }
      src={Ball}
      alt="Property"
      />
        <div className="mt-8 lg:mt-0 lg:ml-52 lg:absolute inset-x-0 right-0 ">
          <img src={img} className={styles.imageShape} alt="Section Image" />
        </div>
      </div>
    </section>
  );
};

export default SeccionHome;