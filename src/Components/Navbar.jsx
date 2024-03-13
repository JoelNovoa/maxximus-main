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
  };

  useEffect(() => {
    window.addEventListener("resize", detecSize);
    return () => {
      window.removeEventListener("resize", detecSize);
    };
  }, []);

  return (
    <div
      className={
        !isMenuOpen
          ? "flex fixed py-10 items-center w-full px-4 justify-between bg-[#0A182E]/[.8] z-50"
          : "flex fixed flex-col h-full items-center w-full px-4 justify-around bg-[#0A182E]/[.8] z-50"
      }
    >
      <div>
        <Link to="/">
          <img src={maxximum} alt="Maxximum Logo" className="h-20 w-auto text-center justify-center justify-self-center" />
        </Link>
      </div>
      {windowDimensions.innerWidth > 768 ? (
        <div className="flex items-center">
          {links.map((route) => (
            <Link
              className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins ml-7"
              to={route.link}
              key={route.id}
            >
              {route.text}
            </Link>
          ))}
          <Link
            to="/events"
            className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins ml-7"
          >
            Events
          </Link>
          <Link to="/realtor" className="text-black bg-Maxximum-Blanco rounded-xl px-5 font-Poppins ml-7">
          Join Our Team
          </Link>

        </div>
      ) : (
        <>
          {isMenuOpen &&
            links.map((route) => (
              <Link
                className="text-xl text-Maxximum-Blanco hover:font-bold font-Poppins mb-4"
                to={route.link}
                key={route.id}
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
              <Link to="/realtor" className="text-black bg-Maxximum-Blanco rounded-xl px-5 font-Poppins ml-7">
              Join Our Team
              </Link>

            </>
          )}
        </>
      )}
      {windowDimensions.innerWidth < 768 && (
        <div>
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
      )}
    </div>
  );
};

export default NavBar;
