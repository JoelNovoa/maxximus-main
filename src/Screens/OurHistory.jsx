import React from "react";
import Header from "../Components/Common/Header";
import SectionOur from "../Components/Common/SectionOur";
import SectionOur2 from "../Components/Common/SectionOur2";
import Section from "../Components/Common/Section";
import Confident from "../Img/confident.png";
import Footer from "../Components/Common/Fotter";
import SectionHome from "../Components/SeccionHome"

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
            "The story is not to be just a Real Estate company, but the authority of real time data and news source when it comes to home search, home finance, home styles, new communities, family, events, community news, and great interactive tools for everyone. Creating a culture of caring and providing the audience valuable information to help them derive to a better decision to home buying. The home buying experience does not need to be dreadful or stressful. Its a happy moment, a happy event."
            }
            SubDescripcion={
            "Each real estate transaction has a true and real story behind it. We want to make thats experience become a part of the brand story itself. Having the opportunity to connects and co-create stories with our clients in new, meaningful ways that inspire participations and engagement."
            }
        />
        <SectionOur2
            Titulo={"MISSION"}
            Descripcion={
            "Maxximum Realty redefines the real estate experience by transcending tradition. Our mission is to integrate unique stories into our brand narrative, fostering connections and creating meaningful experiences with our clients. More than a real estate agency, we inspire engagement in the happy moments of home buying. As a full-service digital real estate agency, we exclusively provide powerful, digital, and impactful marketing services to our members, propelling customer satisfaction and retention into a new era. At Maxximum Realty, we do it all for the modern agent."
            }
            SubTitulo={"VISION"}
            SubDescripcion={"Empowering the Modern Agent."}
        />
        <SectionHome
                    Blanco={true}
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