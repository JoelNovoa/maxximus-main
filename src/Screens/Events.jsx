import React from "react";
import Header from "../Components/Common/Header";
import Personas from "../Img/personas.png";
import Footer from "../Components/Common/Fotter";
import Carousel2 from "../Components/Common/Courosel2";
import Header2 from "../Components/Common/Header2";

const Events = () => {
    return (
        <>
        <Header img={"bg-[url(./Img/personas.png)]"}
        Titulo={"Events"}
        Descripcion={"At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience."}
        Buton={false}
        />  
        <Carousel2/> 
        <Header2/>
        <Footer/>
        </>
    );
}
export default Events;