import React, { Fragment, Component } from "react";
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true,
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
