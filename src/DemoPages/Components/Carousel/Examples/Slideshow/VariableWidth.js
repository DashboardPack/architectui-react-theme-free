import React, { Fragment, Component } from "react";
import Slider from "react-slick";

export default class VariableWidth extends Component {
  render() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <Fragment>
        <Slider {...settings}>
          <div>
            <div className="slider-item" style={{ width: 100 }}>
              <p>100</p>
            </div>
          </div>
          <div>
            <div className="slider-item" style={{ width: 200 }}>
              <p>200</p>
            </div>
          </div>
          <div>
            <div className="slider-item" style={{ width: 75 }}>
              <p>75</p>
            </div>
          </div>
          <div>
            <div className="slider-item" style={{ width: 300 }}>
              <p>300</p>
            </div>
          </div>
          <div>
            <div className="slider-item" style={{ width: 225 }}>
              <p>225</p>
            </div>
          </div>
          <div>
            <div className="slider-item" style={{ width: 175 }}>
              <p>175</p>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
