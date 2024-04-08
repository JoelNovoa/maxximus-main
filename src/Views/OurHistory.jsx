import React from "react";
import Header from "../Components/Reusable/Header";
import SectionOur from "../Components/Reusable/SectionOur";
import SectionOur2 from "../Components/Reusable/SectionOur2";
import Section from "../Components/Reusable/Section";
import Confident from "../Assets/Img/leadership.png";
import Footer from "../Components/Common/Fotter";
import SectionHome from "../Components/Reusable/SeccionHome"
import OurHT from "../Assets/Img/Titles/OurHistoryTB.png"
import Mission from "../Assets/Img/Titles/MissionT.png"
import Vision from "../Assets/Img/Titles/VisionT.png"
import LeaderShip from "../Assets/Img/Titles/LeadershipT.png"

const OurHistory = () => {
    return (
        <>
            <Header img={"bg-[url(./Assets/Img/banner-4.png)]"}
                Descripcion={"At Maxximum Realty, we're pioneers in the real estate industry, harnessing the power of AI and the latest technologies to revolutionize the agent experience."}
                Buton={false}
            />
            <SectionOur
                BG={true}
                Titulo={OurHT}
                Descripcion={
                    "The story is not to be just a Real Estate company, but the authority of real time data and news source when it comes to home search, home finance, home styles, new communities, family, events, community news, and great interactive tools for everyone. Creating a culture of caring and providing the audience valuable information to help them derive to a better decision to home buying. The home buying experience does not need to be dreadful or stressful. Its a happy moment, a happy event."
                }
                SubDescripcion={
                    "Each real estate transaction has a true and real story behind it. We want to make thats experience become a part of the brand story itself. Having the opportunity to connects and co-create stories with our clients in new, meaningful ways that inspire participations and engagement."
                }
            />
            <SectionOur2
                Titulo={Mission}
                Descripcion={
                    "Maxximum Realty redefines the real estate experience by transcending tradition. Our mission is to integrate unique stories into our brand narrative, fostering connections and creating meaningful experiences with our clients. More than a real estate agency, we inspire engagement in the happy moments of home buying. As a full-service digital real estate agency, we exclusively provide powerful, digital, and impactful marketing services to our members, propelling customer satisfaction and retention into a new era. At Maxximum Realty, we do it all for the modern agent."
                }
                SubTitulo={Vision}
                SubDescripcion={"Empowering the Modern Agent."}
            />
            <SectionHome
                azul={true}
                Blanco={false}
                Titulo={LeaderShip}
                Descripcion={'"Change is here and rather than being afraid of it, it should be embraced"  Technology is constantly shutting and improving. We are always on top of the latest tools.'}
                img={Confident}
                Buton={false}
                sphere1={false}
                sphere2={true}
            sphere3={true}
           />
           <Footer />
        </>);
    }
    export default OurHistory;