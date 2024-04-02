import React from "react";
import images from "../images/about-img.png"
const AboutUs = () => {
  return (
    <>
     <section class="about_section layout_padding2-top layout_padding-bottom ">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-7 px-0">
          <div class="img-box">
            <img src={images} alt="car logo"/>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="detail-box">
            <h2>
              About Our Cars
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default AboutUs;
