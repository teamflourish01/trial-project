import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im from '../images/aston-martin-2118857_1280.jpg';
import im2 from '../images/auto-1868726_1280.jpg';
import im3 from '../images/car-498244_1280.jpg';
import '../Style/slides.css';

const Slidess = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay added here
    autoplaySpeed: 2000, // Adjust autoplay speed as needed (in milliseconds)
  };

  return (
    <>
      <div className="co">      <Slider {...settings}>
        <div style={{ border: "1px solid black" }}>
          <img src={im} alt="" className='im2' />
        </div>
        <div style={{ border: "1px solid black" }}>
          <img src={im2} alt="" className='im2' />
        </div>
        <div style={{ border: "1px solid black" }}>
          <img src={im3} alt="" className='im2' />
        </div>
      </Slider>
      </div>

    </>
  );
};

export default Slidess;
