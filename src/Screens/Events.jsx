import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Common/Header";
import Personas from "../Img/personas.png";
import Footer from "../Components/Common/Fotter";
import Carousel2 from "../Components/Common/Courosel2";
import Header2 from "../Components/Common/Header2";
import LogIn from "../Components/LogIn";
import CreateAccount from "../Components/CreateAccount";
import Sliderheader from "../Components/SliderHeader";

const Events = () => {
  return (
    <>
      <Header
        img={"bg-[url(./Img/personas.png)]"}
        Titulo={"Events"}
        Descripcion={
          "At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience."
        }
        Buton={false}
      />
      {/* Línea blanca en el eje x a la izquierda */}
      <Carousel2 />
      <Header2 />
      <Footer />
    </>
  );
};
export default Events;
