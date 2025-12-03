import React, { Fragment, Component } from "react";
import Slider from "react-slick";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
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
        </Slider>
      </Fragment>
    );
  }
}

export default SimpleSlider;
