import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useWindowSize, useMenuToggle } from "../../Controllers/NavBarController";
import maxximum from "../../Assets/Img/maxximum.png";

const NavBar = () => {
  const links = [
    { link: "", text: "Home", id: 1 },
    { link: "our-history", text: "Our History", id: 2 },
    { link: "find-home", text: "Find a Home", id: 3 },
    { link: "find-realtor", text: "Find a Realtor", id: 4 },
  ];

  const [active , setActive] = useState(0);

  const windowDimensions = useWindowSize();
  const { isMenuOpen, toggleMenu } = useMenuToggle();

  return (
    <div className="sticky top-0 z-10 bg-[#0A182E]">
      <div
        className={
          !isMenuOpen
            ? "flex relative py-10 items-center w-full px-4 justify-between bg-[#0A182E] z-1000"
            : "flex fixed flex-col h-full items-center w-full px-4 justify-around bg-[#0A182E]/[.8] z-1000"
        }
      >
        <div className="justify-items-center w-2/7 lg:ml-12 ">
          <Link to="/">
            <img
              src={maxximum}
              alt="Maxximum Logo"
              className="h-20 w-auto text-center justify-center justify-self-center"
            />
          </Link>
        </div>
        {windowDimensions.innerWidth > 1200 ? (
          <div className="w-3/7  text-center ">
            {links.map((route, index) => (
              <Link
              className={active === index ? "text-2xl text-Maxximum-Blanco font-bold lg:ml-7" : "text-xl text-white font-Poppins-semiBold lg:ml-7"}
              to={route.link}
                key={route.id}
                onClick={() => setActive(index)}
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
                  className="text-xl text-Maxximum-Blanco font-Poppins mb-4"
                  to={route.link}
                  key={route.id}
                  onClick={() => toggleMenu()}
                >
                  {route.text}
                </Link>
              ))}
            {isMenuOpen && (
              <>
                <Link
                  to="/events"
                  className="text-xl text-Maxximum-Blanco font-Poppins mb-4"
                  onClick={() => toggleMenu()}
                >
                  Events
                </Link>
                <Link
                  to="/realtor"
                  className="text-xl text-Maxximum-Blanco rounded-4xl bg-white text-black px-9 font-Poppins mb-4"
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
                  onClick={() => toggleMenu()}
                />
              ) : (
                <AiOutlineClose
                  cursor="pointer"
                  size={24}
                  color="white"
                  onClick={() => toggleMenu()}
                />
              )}
            </div>
          </>
        )}
        {windowDimensions.innerWidth > 1200 && (
          <>
            <div className="flex w-1/7 text-center">
              <Link
                to="/events"
                className={active === 4 ? "text-2xl text-Maxximum-Blanco font-bold ml-7" : "text-xl text-white font-Poppins-semiBold ml-7"}
                onClick={() => setActive(4)}

              >
                Events
              </Link>
            </div>
            <div className="flex w-1/7 text-center">
              <Link
                to="/realtor"
                className="text-black rounded-4xl bg-Maxximum-Blanco rounded-xl py-3 px-12 font-bold ml-32 "
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






