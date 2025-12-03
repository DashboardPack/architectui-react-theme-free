import React, { Fragment, Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
          <div>
            <div className="slider-item">9</div>
          </div>
          <div>
            <div className="slider-item">10</div>
          </div>
          <div>
            <div className="slider-item">11</div>
          </div>
          <div>
            <div className="slider-item">12</div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
