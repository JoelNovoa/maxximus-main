import React from "react";
import maxximu from "../../Img/maxximum.png";
import Phone from "../../Img/phone.png";
import mail from "../../Img/mail-01.png";
import marker from "../../Img/marker-pin-01.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A182E] text-white py-4 px-4 md:flex md:flex-wrap md:justify-between">
      <div className="mb-4 md:mb-0">
        <img src={maxximu} alt="Maxximum Logo" className="h-20 w-auto" />
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-start">
        <div className="mr-4 mb-4 md:mb-0">
          <div className="text-white flex items-start">
            <img src={Phone} alt="Phone" className="h-6 w-auto mr-2" />
            <a href="tel:+17142722229" className="hover:underline">
              +1(714) 272-2229
            </a>
          </div>
          <div className="text-white flex items-start">
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
        <div>
          <a href="#" className="text-white hover:underline">
            Terms of Services
          </a>
          <br />
          <a href="#" className="text-white hover:underline">
            Privacy Policy
          </a>
          <p className="mt-4 text-xs">&copy; Copyright All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



