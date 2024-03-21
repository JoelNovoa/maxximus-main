import React from "react";
import DynamicButton from "../Components/Buttons";
import Header from "../Components/Common/Header";
import Section from "../Components/Common/Section";
import Fotter from "../Components/Common/Fotter";
import Mask from "../Img/MaskGroup.png";
import Layout from "../Components/Layout";
import Footer from "../Components/Common/Fotter";
import Carousel from "../Components/Carousel";
import Banner from "../Img/banner-8.png";
import SectionForm from "../Components/Common/SectionForm";
import Sliderheader from "../Components/SliderHeader";

const Home = () => {
  return (
    <div className="text-Maxximun-Blanco">
      <Sliderheader/>
    
      <Section 
      Blanco={false}
      Titulo={"OUR HISTORY"}
       Descripcion={"At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience"}
       img={Mask} 
       Buton={true}
       />  
       <Layout />
       <Carousel />
       <Section 
       Blanco={true}
       Titulo={"TECHNOLOGY"}
       Descripcion={"Recent years have seen a pivotal shift for salespeople with the surge in online and social media interaction, driven by technology. Embracing this change is positive but demands acquiring new methods and skills. At Maxximum Realty, we excel in adapting to innovative tools and business approaches, ensuring effective execution for success, much like Real Estate Agents in their field."}
        img={Banner}
        Buton={true}
        />
      <SectionForm
        
        Titulo={"Become the modern agent with us"}
        SubTitulo={"Grow Your Business With Maxximun"}
        Descripcion={"At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."}
      />
       <Fotter/>             
    </div>
  );
}
export default Home;