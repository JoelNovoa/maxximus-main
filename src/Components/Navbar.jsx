import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import maxximum from "../Img/maxximum.png";

const NavBar = () => {
  const links = [
    { link: "", text: "Home", id: 1 },
    { link: "our-history", text: "Our History", id: 2 },
    { link: "find-home", text: "Find a Home", id: 3 },
    { link: "find-realtor", text: "Find a Realtor", id: 4 },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detecSize = () => {
    setWindowDimensions({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
    // Cierra el menú al cambiar de tamaño de pantalla
    setIsMenuOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", detecSize);
    return () => {
      window.removeEventListener("resize", detecSize);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 bg-[#0A182E]">
      <div
        className={
          !isMenuOpen
            ? "flex relative py-10 items-center w-full px-4 justify-between bg-[#0A182E] z-10"
            : "flex fixed flex-col h-full items-center w-full px-4 justify-around bg-[#0A182E]/[.8] z-10"
        }
      >
        <div className="justify-items-center ml-8 w-2/7">
          <Link to="/">
            <img
              src={maxximum}
              alt="Maxximum Logo"
              className="h-20 w-auto text-center justify-center justify-self-center"
            />
          </Link>
        </div>
        {windowDimensions.innerWidth > 768 ? (
          <div className="w-3/7  text-center ">
            {links.map((route) => (
              <Link
                className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins ml-7"
                to={route.link}
                key={route.id}
              >
                {route.text}
              </Link>
            ))}
          </div>
        ) : (
          <>
            {isMenuOpen &&
              links.map((route) => (
                <Link
                  className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins mb-4"
                  to={route.link}
                  key={route.id}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.text}
                </Link>
              ))}
            {isMenuOpen && (
              <>
                <Link
                  to="/events"
                  className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins mb-4"
                >
                  Events
                </Link>
                <Link
                  to="/realtor"
                  className="text-xl text-Maxximum-Blanco rounded-4xl bg-white text-black px-9 hover:font-bold font-Poppins mb-4"
                >
                  Join Our Team
                </Link>
              </>
            )}
            <div className=" mr-4">
              {!isMenuOpen ? (
                <AiOutlineMenu
                  cursor="pointer"
                  size={24}
                  color="white"
                  onClick={() => setIsMenuOpen(true)}
                />
              ) : (
                <AiOutlineClose
                  cursor="pointer"
                  size={24}
                  color="white"
                  onClick={() => setIsMenuOpen(false)}
                />
              )}
            </div>
          </>
        )}
        {windowDimensions.innerWidth > 768 && (
          <>
            <div className="flex w-1/7 text-center">
              <Link
                to="/events"
                className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins ml-32"
              >
                Events
              </Link>
            </div>
            <div className="flex w-1/7 text-center">
              <Link
                to="/realtor"
                className="text-black rounded-4xl bg-Maxximum-Blanco rounded-xl px-5 font-Poppins ml-32"
              >
                Join Our Team
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;



