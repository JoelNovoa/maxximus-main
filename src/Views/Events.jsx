import React, { useEffect, useRef, useState } from "react";
import Header from "../Components/Reusable/Header";
import Personas from "../Assets/Img/personas.png";
import Footer from "../Components/Common/Fotter";
import Carousel2 from "../Components/Reusable/Courosel2";
import Header2 from "../Components/Reusable/Header2";
import LogIn from "../Components/Common/LogIn";
import CreateAccount from "../Components/Common/CreateAccount";
import Sliderheader from "../Components/Reusable/SliderHeader";
import ImageUtils from "../Controllers/ImageUtils";

const Events = () => {
  return (
    <>
      <Header
        img={"bg-[url(./Assets/Img/personas.png)]"}
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
