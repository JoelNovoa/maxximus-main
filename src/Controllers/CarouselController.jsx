// CarouselController.js
import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Corousel1 from "../Assets/Img/Corousel1.png ";
import Corousel2 from "../../Assets/Img/Corousel2.png";
import Corousel3 from "../../Assets/Img/Corousel3.png";

const CarouselController = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={3}
      visibleSlides={2}
      step={1}
      infinite={true}
    >
      {/* Slider component */}
      <Slider>
        {/* Slide components */}
        <Slide index={0}>
          {/* Slide content */}
        </Slide>
        {/* Other slides */}
      </Slider>
      {/* ButtonBack and ButtonNext components */}
      <ButtonBack
        role="button"
        aria-label="slide backward"
        className="absolute z-20 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer p-6"
        id="prev"
        style={{ backgroundColor: "white", borderRadius: "50%" }}
      >
        {/* Back button content */}
      </ButtonBack>
      {/* Other buttons */}
    </CarouselProvider>
  );
};

export default CarouselController;
