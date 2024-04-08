import React from "react";
import SectionForm from "../Components/Reusable/SectionForm";
import Cards from "../Components/Reusable/Cards";
import Footer from "../Components/Common/Fotter";
import Map from "../Components/Common/Map";
import SectionForm2 from "../Components/Reusable/SectionForm2";
import BecomeT from "../Assets/Img/Titles/BecomeT.png";

const FindRealtor = () => {
  return (
    <div className="bg-[#002867]">
      <SectionForm2
      Titulo={BecomeT}
      SubTitulo={"Grow Your Business With Maxximun"}
      Descripcion={"At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."}
      />
      <Map/>
      <Cards />
      <Footer />
    </div>
  );
};
export default FindRealtor;
