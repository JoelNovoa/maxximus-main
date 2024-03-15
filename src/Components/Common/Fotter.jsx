import React from "react";
import maxximu from "../../Img/maxximum.png";
import Phone from "../../Img/phone.png";
import mail from "../../Img/mail-01.png";
import marker from "../../Img/marker-pin-01.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#0A182E]">
      <footer className="w-full text-gray-700 bg-[#0A182E] body-font">
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 mx-auto md:mx-0 md:text-left">
            <img src={maxximu} alt="Maxximum Logo" className="h-20 w-auto mx-auto" />
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"></h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2 text-left">
              <div className="mr-4 mb-8 md:mb-0">
                <div className="text-white flex items-start mb-4">
                  <img src={Phone} alt="Phone" className="h-6 w-auto mr-2" />
                  <a href="tel:+17142722229" className="hover:underline">
                    +1(714) 272-2229
                  </a>
                </div>
                <div className="text-white flex items-start mb-8">
                  <img src={mail} alt="Mail" className="h-6 w-auto mr-2" />
                  <a href="mailto:max@maxximumrealty.com" className="hover:underline">
                    max@maxximumrealty.com
                  </a>
                </div>
                <div className="text-white flex items-start">
                  <img src={marker} alt="Marker" className="h-6 w-auto mr-2" />
                  <a href="mailto:max@maxximumrealty.com" className="hover:underline">
                    23330 Mill Creek Dr Ste 250, Laguna Hills, California,
                    <br />
                    92653, USA
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-900"></a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2 mt-8">
              <div className="flex justify-between mb-4">
                <a href="#" className="text-white hover:underline">
                  Terms of Services
                </a>
                <a href="#" className="text-white hover:underline">
                  Privacy Policy
                </a>
              </div>
              <p className="mt-4 text-xs text-white text-center">&copy; Copyright All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;







