import React, { Fragment, Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
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
      <Fragment>
        <Slider {...settings}>
          <div>
            <div className="slider-item">1</div>
          </div>
          <div>
            <div className="slider-item">2</div>
          </div>
          <div>
            <div className="slider-item">3</div>
          </div>
          <div>
            <div className="slider-item">4</div>
          </div>
          <div>
            <div className="slider-item">5</div>
          </div>
          <div>
            <div className="slider-item">6</div>
          </div>
          <div>
            <div className="slider-item">7</div>
          </div>
          <div>
            <div className="slider-item">8</div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
