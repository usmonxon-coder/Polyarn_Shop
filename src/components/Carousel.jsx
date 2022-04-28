import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../styles/Carousel.css";

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className="carousel">
          <div className="container">
            <h2>Наши партнёры</h2>
            <Slider {...settings}>
              <div className="box box1">
                <img src="/images/Group.png " alt="rasm" />
              </div>
              <div className="box box2">
                <img src="/images/Group (1).png" alt="rasm" />
              </div>
              <div className="box box3">
                <img src="/images/Group (2).png" alt="rasm" />
              </div>
              <div className="box box4">
                <img src="/images/Group (3).png" alt="rasm" />
              </div>
              <div className="box box1">
                <img src="/images/Group.png " alt="rasm" />
              </div>
              <div className="box box2">
                <img src="/images/Group (1).png" alt="rasm" />
              </div>
              <div className="box box3">
                <img src="/images/Group (2).png" alt="rasm" />
              </div>
              <div className="box box4">
                <img src="/images/Group (3).png" alt="rasm" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
