import React from "react";
import Header from "../Components/Common/Header";
import SectionOur from "../Components/Common/SectionOur";
import SectionOur2 from "../Components/Common/SectionOur2";
import Section from "../Components/Common/Section";
import Confident from "../Img/confident.png";
import Footer from "../Components/Common/Fotter";

const OurHistory = () => {
    return (
        <div className="text-Maxximun-Blanco">
        <Header img={"bg-[url(./Img/banner-4.png)]"} 
        Titulo={"Our Story"}
        Descripcion={"At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience."}
        Buton={false}
        />
        <SectionOur
            BG={true}
            Titulo={"OUR HISTORY"}
            Descripcion={
            "At MaxximumThe story is not to be just a Real Estate company, but the authority of real time data and news source when it comes to home search, home finance, home styles, new communities, family, events, community news, and great interactive tools for everyone. Creating a culture of caring and providing the audience valuable information to help them derive to a better decision to home buying. The home buying experience does not need to be dreadful or stressful. Its a happy moment, a happy event. Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience"
            }
            SubDescripcion={
            "ReEach real estate transaction has a true and real story behind it. We want to make thats experience become a part of the brand story itself. Having the opportunity to connects and co-create stories with our clients in new, meaningful ways that inspire participations and engagement.cent years have seen a pivotal shift for salespeople with the surge in online and social media interaction, driven by technology. Embracing this change is positive but demands acquiring new methods and skills. At Maxximum Realty, we excel in adapting to innovative tools and business approaches, ensuring effective execution for success, much like Real Estate Agents in their field."
            }
        />
        <SectionOur2
            Titulo={"Become the modern agent with us"}
            Descripcion={
            "At Maxximum Realty, we understand that a great agent makes all the difference. Join us to leverage tailored strategies for the digital age, unlocking more leads, boosting sales, and earning higher commissions. Experience the future of real estate with Maxximum Realty—we're here to help you thrive."
            }
            SubTitulo={"VISION"}
            SubDescripcion={"Empowering the Modern Agent."}
        />
        <Section
            Blanco={false}
            Titulo={"CONFIDENTLY LEAD THE WAY"}
            Descripcion={
            "Maxximum Realty is a forward-thinking real estate company that empowers agents to lead the way in the industry. We provide the tools, technology, and support to help agents grow their business and succeed in the digital age. Our agents are confident, knowledgeable, and ready to lead the way in the real estate industry."}
            img={Confident}
            Buton={false}
        />
        <Footer />
        </div>
    );
    }
    export default OurHistory;