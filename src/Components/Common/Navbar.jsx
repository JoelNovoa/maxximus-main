import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useWindowSize, useMenuToggle } from "../../Controllers/NavBarController";
import maxximum from "../../Assets/Img/maxximum.png";

const NavBar = () => {
  const links = [
    { link: "", text: "Home", id: 1 },
    { link: "our-history", text: "About Us", id: 2 },
    { link: "find-home", text: "Find a Home", id: 3 },
    { link: "events", text: "Events", id: 4 },
  ];

  const [active, setActive] = useState(0);

  const windowDimensions = useWindowSize();
  const { isMenuOpen, toggleMenu } = useMenuToggle();
  useEffect(() => {
  }, [active]); 

  return (
    <>
      <div className="sticky top-0 z-50">
        <div
          className={
            !isMenuOpen
              ? "flex relative py-10 items-center w-full px-4 justify-between bg-[#002867]/[.9] z-40 shadow-lg"
              : "flex fixed flex-col h-screen items-center w-screen px-4 justify-around bg-[#002867] z-40"
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
                    className="text-xl text-center text-Maxximum-Blanco font-Poppins mb-4"
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
                    to="/realtor"
                    className="text-xl text-Maxximum-Blanco rounded-4xl bg-white text-black px-9 font-Poppins mb-4 "
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
                  to="/realtor"
                  className="text-black rounded-4xl bg-Maxximum-Blanco rounded-xl py-3 px-12 font-bold ml-32 hover:bg-[#0A182E] hover:text-white"
                >
                  JOIN OUR TEAM
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {active === 1 ? <div className="sticky top-30 z-10 h-20 w-full bg-white flex justify-center items-center">
        <div className="flex">
          <Link
            to="/our-history"
            className="text-2xl text-[#0A182E] font-bold ml-7 "
          >
            Our History
          </Link>
        </div>
        <div className="flex">
          <Link
            to="/find-realtor"
            className="text-2xl text-[#0A182E] font-bold ml-7"
          >
            Our Team
          </Link>
        </div>
      </div> : null}
    </>

  );
};

export default NavBar;







